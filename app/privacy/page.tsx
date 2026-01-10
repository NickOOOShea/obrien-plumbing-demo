import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy',
  description: "O'Brien Plumbing & Heating privacy policy and data protection information.",
}

export default function PrivacyPage() {
  return (
    <main className="py-32 md:py-40">
      <div className="section-container">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-trust-600 hover:text-trust-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="lead">
            Last updated: January 2026
          </p>

          <h2>Who We Are</h2>
          <p>
            O'Brien Plumbing & Heating ("we", "us", "our") operates the website
            trades.connecteire.ie. This page informs you of our policies regarding the
            collection, use, and disclosure of personal information when you use our
            website or services.
          </p>

          <h2>Information We Collect</h2>
          <p>When you contact us or request a quote, we may collect:</p>
          <ul>
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Property address (for service delivery)</li>
            <li>Details about the plumbing work required</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes</li>
            <li>Deliver plumbing services you've requested</li>
            <li>Contact you about appointments and follow-ups</li>
            <li>Send service reminders (e.g., annual boiler service)</li>
            <li>Improve our services</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide
            our services and fulfill legal obligations. For completed jobs, we keep
            records for 7 years for warranty and insurance purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request data portability</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website uses only essential cookies required for the website to
            function. We do not use tracking or advertising cookies.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your
            rights, contact us:
          </p>
          <ul>
            <li>Email: info@obrienplumbing.ie</li>
            <li>Phone: 021 123 4567</li>
            <li>Address: 15 Industrial Estate, Ballincollig, Cork, P31 AB12</li>
          </ul>
        </article>
      </div>
    </main>
  )
}
