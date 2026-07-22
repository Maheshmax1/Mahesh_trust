from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: str
    full_name: str
    role: Optional[str] = "admin"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

class LoginRequest(BaseModel):
    email: str
    password: str

# Volunteer
class VolunteerBase(BaseModel):
    name: str
    age: int
    gender: str
    email: str
    phone: str
    address: str
    occupation: str
    skills: str
    availability: str
    preferred_area: str

class VolunteerCreate(VolunteerBase):
    pass

class VolunteerResponse(VolunteerBase):
    id: int
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

# Donation
class DonationBase(BaseModel):
    donor_name: str
    email: str
    phone: str
    amount: float
    message: Optional[str] = None
    payment_method: str

class DonationCreate(DonationBase):
    pass

class DonationResponse(DonationBase):
    id: int
    payment_status: str
    transaction_id: Optional[str] = None
    created_at: datetime
    class Config:
        from_attributes = True

# Event
class EventBase(BaseModel):
    title: str
    description: str
    date: str
    location: str
    image_url: Optional[str] = None
    category: str
    is_past: Optional[bool] = False

class EventCreate(EventBase):
    pass

class EventResponse(EventBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Project
class ProjectBase(BaseModel):
    name: str
    description: str
    status: Optional[str] = "Ongoing"
    location: str
    budget: str
    beneficiaries: str
    progress: Optional[int] = 0
    image_url: Optional[str] = None
    impact_metrics: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# GalleryItem
class GalleryItemBase(BaseModel):
    title: str
    media_type: Optional[str] = "photo"
    category: str
    url: str

class GalleryItemCreate(GalleryItemBase):
    pass

class GalleryItemResponse(GalleryItemBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# BlogPost
class BlogPostBase(BaseModel):
    title: str
    subtitle: Optional[str] = None
    content: str
    category: str
    author: Optional[str] = "Mahesh Trust Team"
    image_url: Optional[str] = None

class BlogPostCreate(BlogPostBase):
    pass

class BlogPostResponse(BlogPostBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# TeamMember
class TeamMemberBase(BaseModel):
    name: str
    role: str
    bio: Optional[str] = None
    image_url: Optional[str] = None

class TeamMemberCreate(TeamMemberBase):
    pass

class TeamMemberResponse(TeamMemberBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Testimonial
class TestimonialBase(BaseModel):
    name: str
    role: str
    story: str
    type: Optional[str] = "Volunteer Review"
    image_url: Optional[str] = None

class TestimonialCreate(TestimonialBase):
    pass

class TestimonialResponse(TestimonialBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Partner
class PartnerBase(BaseModel):
    name: str
    category: str
    logo_url: Optional[str] = None

class PartnerCreate(PartnerBase):
    pass

class PartnerResponse(PartnerBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Report
class ReportBase(BaseModel):
    title: str
    category: str
    year: str
    file_url: str

class ReportCreate(ReportBase):
    pass

class ReportResponse(ReportBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Dashboard Stats Schema
class DashboardStats(BaseModel):
    total_donations: float
    total_volunteers: int
    active_projects: int
    total_events: int
    recent_donations: List[DonationResponse]
    recent_volunteers: List[VolunteerResponse]
