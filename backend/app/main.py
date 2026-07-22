import io
import uuid
import pandas as pd
from fastapi import FastAPI, Depends, HTTPException, status, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional

from app.db.database import engine, Base, get_db
from app.models import models
from app.schemas import schemas
from app.core import security

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Mahesh Trust & NGO API",
    description="Backend API powering Mahesh Trust & NGO website and Admin Panel",
    version="1.0.0"
)

# CORS Middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seed Initial Data
def seed_initial_data():
    db = next(get_db())
    # Seed Admin User
    admin = db.query(models.User).filter(models.User.email == "admin@maheshtrust.org").first()
    if not admin:
        new_admin = models.User(
            email="admin@maheshtrust.org",
            full_name="Mahesh Shanmugam",
            hashed_password=security.get_password_hash("admin123"),
            role="superadmin"
        )
        db.add(new_admin)

    # Seed Projects if empty
    if db.query(models.Project).count() == 0:
        projects = [
            models.Project(
                name="Project Vidya: Rural Education Support",
                description="Providing free learning material, digital tabs, and evening coaching classes to underprivileged children in remote villages.",
                status="Ongoing",
                location="Kanchipuram & Tiruvallur Districts",
                budget="₹5,00,000",
                beneficiaries="2,500+ Students",
                progress=75,
                image_url="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
                impact_metrics="25 Schools Reached, 15 Digital Classrooms Built"
            ),
            models.Project(
                name="Project Suvaya: Community Food Kitchens",
                description="Serving cooked, wholesome, nutritious meals daily to homeless elders and daily wage workers across Tamil Nadu.",
                status="Ongoing",
                location="Chennai Metro Region",
                budget="₹8,00,000",
                beneficiaries="1,000+ Daily Meals",
                progress=90,
                image_url="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
                impact_metrics="3,50,000+ Meals Served to date"
            ),
            models.Project(
                name="Project Pachai: Clean & Green Earth",
                description="Massive tree plantation drives, seed ball creation workshops, and rainwater harvesting installation in suburban schools.",
                status="Completed",
                location="Coimbatore & Salem",
                budget="₹3,50,000",
                beneficiaries="10,000+ Saplings Planted",
                progress=100,
                image_url="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
                impact_metrics="12,500 Trees Growing Strong"
            ),
            models.Project(
                name="Project Shakti: Women Skill Training",
                description="Tailoring, handicraft making, and micro-entrepreneurship workshops empowering rural women toward economic freedom.",
                status="Ongoing",
                location="Madurai & Tirunelveli",
                budget="₹4,00,000",
                beneficiaries="450+ Women Trained",
                progress=60,
                image_url="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
                impact_metrics="180 Self-Help Sewing Units Started"
            )
        ]
        db.add_all(projects)

    # Seed Events if empty
    if db.query(models.Event).count() == 0:
        events = [
            models.Event(
                title="Mega Free Medical & Eye Camp",
                description="Comprehensive general health checkups, free prescription glasses distribution, and blood pressure screening.",
                date="August 15, 2026",
                location="Community Hall, Ambattur, Chennai",
                image_url="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
                category="Healthcare",
                is_past=False
            ),
            models.Event(
                title="Green Warriors Tree Planting Marathon",
                description="Join over 200 volunteers to plant 1,000 native tree saplings along lake bunds.",
                date="September 5, 2026",
                location="Chembarambakkam Lake Area",
                image_url="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
                category="Environment",
                is_past=False
            ),
            models.Event(
                title="Annual Charity Youth Run & Awareness Walk",
                description="5K Marathon raising awareness for child protection and higher education scholarships.",
                date="May 10, 2026",
                location="Marina Beach Road, Chennai",
                image_url="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop",
                category="Community",
                is_past=True
            )
        ]
        db.add_all(events)

    # Seed Team Members
    if db.query(models.TeamMember).count() == 0:
        team = [
            models.TeamMember(
                name="Mahesh Shanmugam",
                role="Founder & Managing Trustee",
                bio="Social entrepreneur driven by compassion, dedicated to building sustainable community solutions.",
                image_url="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
            ),
            models.TeamMember(
                name="Dr. Aruna Sundaram",
                role="Director of Medical Relief",
                bio="Senior Medical Officer leading mobile health units and rural emergency response teams.",
                image_url="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
            ),
            models.TeamMember(
                name="Rajesh Kumar",
                role="Head of Education Initiatives",
                bio="Former Principal passionate about digital literacy and equal access for rural children.",
                image_url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
            )
        ]
        db.add_all(team)

    # Seed Partners
    if db.query(models.Partner).count() == 0:
        partners = [
            models.Partner(name="Apollo Hospitals Foundation", category="Hospital", logo_url="https://via.placeholder.com/150?text=Apollo+Health"),
            models.Partner(name="Tata Trusts CSR", category="Corporate CSR", logo_url="https://via.placeholder.com/150?text=Tata+CSR"),
            models.Partner(name="Government of Tamil Nadu - Social Welfare", category="Government", logo_url="https://via.placeholder.com/150?text=TN+Govt"),
            models.Partner(name="IIT Madras Alumni Network", category="Educational Institution", logo_url="https://via.placeholder.com/150?text=IITM+Alumni"),
            models.Partner(name="Rotary Club International", category="NGO", logo_url="https://via.placeholder.com/150?text=Rotary")
        ]
        db.add_all(partners)

    # Seed Reports
    if db.query(models.Report).count() == 0:
        reports = [
            models.Report(title="Annual Financial & Impact Report 2025", category="Annual Report", year="2025", file_url="#"),
            models.Report(title="Audited Financial Statements 2024-25", category="Audit Report", year="2025", file_url="#"),
            models.Report(title="80G & 12A Tax Exemption Certificate", category="Certificate", year="2024", file_url="#"),
            models.Report(title="FCRA Registration & Compliance Filing", category="Compliance Document", year="2025", file_url="#")
        ]
        db.add_all(reports)

    # Seed Testimonials
    if db.query(models.Testimonial).count() == 0:
        testimonials = [
            models.Testimonial(
                name="Saraswathi M.",
                role="Beneficiary - Skill Development",
                story="Thanks to Project Shakti, I set up my own tailoring shop. I can now fund my children's schooling with pride.",
                type="Beneficiary Story",
                image_url="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
            ),
            models.Testimonial(
                name="Karthik Raja",
                role="Volunteer Lead",
                story="Volunteering with Mahesh Trust gave my weekends real meaning. Seeing smiles on kids' faces as they open their learning kits is priceless.",
                type="Volunteer Review",
                image_url="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
            ),
            models.Testimonial(
                name="Anand Vishwanathan",
                role="Regular Monthly Donor",
                story="The transparency of Mahesh Trust is unmatched. I receive detailed reports showing exactly how my monthly ₹2,500 impacts rural lives.",
                type="Donor Review",
                image_url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
            )
        ]
        db.add_all(testimonials)

    # Seed Gallery
    if db.query(models.GalleryItem).count() == 0:
        items = [
            models.GalleryItem(title="Free Health Camp Distribution", category="Medical Camps", media_type="photo", url="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"),
            models.GalleryItem(title="Distributing Books & Tabs", category="Education", media_type="photo", url="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"),
            models.GalleryItem(title="Plantation Drive 2025", category="Tree Plantation", media_type="photo", url="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"),
            models.GalleryItem(title="Elderly Meals Service", category="Community Programs", media_type="photo", url="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop")
        ]
        db.add_all(items)

    # Seed Blogs
    if db.query(models.BlogPost).count() == 0:
        blogs = [
            models.BlogPost(
                title="Empowering the Next Generation: Why Digital Literacy in Villages Matters",
                subtitle="Closing the technology gap between rural and urban classrooms across Tamil Nadu.",
                content="In today's digital era, access to technology is not a luxury—it is a fundamental right...",
                category="Education",
                image_url="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
            ),
            models.BlogPost(
                title="Preventive Healthcare at the Doorstep of Rural Communities",
                subtitle="How mobile health clinics are reducing preventable chronic diseases.",
                content="For thousands living in remote hamlets, reaching a civil hospital requires traveling tens of kilometers...",
                category="Healthcare",
                image_url="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
            )
        ]
        db.add_all(blogs)

    db.commit()

seed_initial_data()

# Root Health Check
@app.get("/")
def read_root():
    return {"status": "ok", "message": "Mahesh Trust & NGO API is running smoothly."}

# Auth Routes
@app.post("/api/auth/login", response_model=schemas.Token)
def login(login_data: schemas.LoginRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == login_data.email).first()
    if not user or not security.verify_password(login_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )
    access_token = security.create_access_token(data={"sub": user.email, "role": user.role})
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }

@app.get("/api/auth/me", response_model=schemas.UserResponse)
def get_me(current_user: models.User = Depends(security.get_current_user)):
    return current_user

# Volunteers API
@app.post("/api/volunteers", response_model=schemas.VolunteerResponse)
def register_volunteer(volunteer: schemas.VolunteerCreate, db: Session = Depends(get_db)):
    db_volunteer = models.Volunteer(**volunteer.model_dump())
    db.add(db_volunteer)
    db.commit()
    db.refresh(db_volunteer)
    return db_volunteer

@app.get("/api/volunteers", response_model=List[schemas.VolunteerResponse])
def get_volunteers(db: Session = Depends(get_db)):
    return db.query(models.Volunteer).order_by(models.Volunteer.created_at.desc()).all()

@app.put("/api/volunteers/{volunteer_id}/status")
def update_volunteer_status(volunteer_id: int, status_val: str = Query(..., alias="status"), db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    volunteer = db.query(models.Volunteer).filter(models.Volunteer.id == volunteer_id).first()
    if not volunteer:
        raise HTTPException(status_code=404, detail="Volunteer not found")
    volunteer.status = status_val
    db.commit()
    return {"message": f"Volunteer status updated to {status_val}"}

# Donations API
@app.post("/api/donations", response_model=schemas.DonationResponse)
def create_donation(donation: schemas.DonationCreate, db: Session = Depends(get_db)):
    tx_id = f"TXN_{uuid.uuid4().hex[:8].upper()}"
    db_donation = models.Donation(
        **donation.model_dump(),
        payment_status="Completed",
        transaction_id=tx_id
    )
    db.add(db_donation)
    db.commit()
    db.refresh(db_donation)
    return db_donation

@app.get("/api/donations", response_model=List[schemas.DonationResponse])
def get_donations(db: Session = Depends(get_db)):
    return db.query(models.Donation).order_by(models.Donation.created_at.desc()).all()

# Events API
@app.get("/api/events", response_model=List[schemas.EventResponse])
def get_events(db: Session = Depends(get_db)):
    return db.query(models.Event).order_by(models.Event.created_at.desc()).all()

@app.post("/api/events", response_model=schemas.EventResponse)
def create_event(event: schemas.EventCreate, db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    db_event = models.Event(**event.model_dump())
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event

# Projects API
@app.get("/api/projects", response_model=List[schemas.ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    return db.query(models.Project).all()

@app.post("/api/projects", response_model=schemas.ProjectResponse)
def create_project(project: schemas.ProjectCreate, db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    db_project = models.Project(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

# Gallery API
@app.get("/api/gallery", response_model=List[schemas.GalleryItemResponse])
def get_gallery(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(models.GalleryItem)
    if category and category != "All":
        query = query.filter(models.GalleryItem.category == category)
    return query.all()

@app.post("/api/gallery", response_model=schemas.GalleryItemResponse)
def create_gallery_item(item: schemas.GalleryItemCreate, db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    db_item = models.GalleryItem(**item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

# Blog Posts API
@app.get("/api/blogs", response_model=List[schemas.BlogPostResponse])
def get_blogs(db: Session = Depends(get_db)):
    return db.query(models.BlogPost).order_by(models.BlogPost.created_at.desc()).all()

@app.post("/api/blogs", response_model=schemas.BlogPostResponse)
def create_blog(blog: schemas.BlogPostCreate, db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    db_blog = models.BlogPost(**blog.model_dump())
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog

# Team Members API
@app.get("/api/team", response_model=List[schemas.TeamMemberResponse])
def get_team(db: Session = Depends(get_db)):
    return db.query(models.TeamMember).all()

# Testimonials API
@app.get("/api/testimonials", response_model=List[schemas.TestimonialResponse])
def get_testimonials(db: Session = Depends(get_db)):
    return db.query(models.Testimonial).all()

# Partners API
@app.get("/api/partners", response_model=List[schemas.PartnerResponse])
def get_partners(db: Session = Depends(get_db)):
    return db.query(models.Partner).all()

# Reports API
@app.get("/api/reports", response_model=List[schemas.ReportResponse])
def get_reports(db: Session = Depends(get_db)):
    return db.query(models.Report).all()

# Admin Dashboard Stats
@app.get("/api/admin/stats", response_model=schemas.DashboardStats)
def get_admin_stats(db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    donations = db.query(models.Donation).all()
    total_donations = sum(d.amount for d in donations)
    total_volunteers = db.query(models.Volunteer).count()
    active_projects = db.query(models.Project).filter(models.Project.status == "Ongoing").count()
    total_events = db.query(models.Event).count()
    recent_donations = db.query(models.Donation).order_by(models.Donation.created_at.desc()).limit(5).all()
    recent_volunteers = db.query(models.Volunteer).order_by(models.Volunteer.created_at.desc()).limit(5).all()

    return {
        "total_donations": total_donations,
        "total_volunteers": total_volunteers,
        "active_projects": active_projects,
        "total_events": total_events,
        "recent_donations": recent_donations,
        "recent_volunteers": recent_volunteers
    }

# Export CSV APIs
@app.get("/api/export/volunteers")
def export_volunteers_csv(db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    volunteers = db.query(models.Volunteer).all()
    data = [{
        "ID": v.id, "Name": v.name, "Age": v.age, "Gender": v.gender, "Email": v.email,
        "Phone": v.phone, "Address": v.address, "Occupation": v.occupation,
        "Skills": v.skills, "Availability": v.availability, "Preferred Area": v.preferred_area,
        "Status": v.status, "Date": v.created_at.strftime("%Y-%m-%d %H:%M")
    } for v in volunteers]
    df = pd.DataFrame(data)
    stream = io.StringIO()
    df.to_csv(stream, index=False)
    return Response(content=stream.getvalue(), media_type="text/csv", headers={"Content-Disposition": "attachment; filename=volunteers_report.csv"})

@app.get("/api/export/donations")
def export_donations_csv(db: Session = Depends(get_db), current_user: models.User = Depends(security.get_current_user)):
    donations = db.query(models.Donation).all()
    data = [{
        "ID": d.id, "Donor Name": d.donor_name, "Email": d.email, "Phone": d.phone,
        "Amount (INR)": d.amount, "Payment Method": d.payment_method, "Status": d.payment_status,
        "Transaction ID": d.transaction_id, "Message": d.message, "Date": d.created_at.strftime("%Y-%m-%d %H:%M")
    } for d in donations]
    df = pd.DataFrame(data)
    stream = io.StringIO()
    df.to_csv(stream, index=False)
    return Response(content=stream.getvalue(), media_type="text/csv", headers={"Content-Disposition": "attachment; filename=donations_report.csv"})
