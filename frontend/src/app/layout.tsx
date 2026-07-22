import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Mahesh Trust & NGO | Together We Can Build a Better Future',
  description: 'Official public charity trust supporting education, healthcare camps, food security, women empowerment, and environmental drives across Tamil Nadu.',
  keywords: 'Mahesh Trust, NGO, Charity, Tamil Nadu, 80G Tax Exemption, Volunteer, Donate, Healthcare Camps, Women Empowerment',
  openGraph: {
    title: 'Mahesh Trust & NGO Organization',
    description: 'Empowering communities through compassion and action.',
    url: 'https://maheshtrust.org',
    siteName: 'Mahesh Trust & NGO',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
