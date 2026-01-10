import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service',
  description: "O'Brien Plumbing & Heating terms of service and conditions.",
}

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p className="lead">
            Last updated: January 2026
          </p>

          <h2>1. Services</h2>
          <p>
            O'Brien Plumbing & Heating provides plumbing, heating, and related
            services to residential and commercial customers in Cork and surrounding
            areas. All services are subject to these terms.
          </p>

          <h2>2. Quotes and Pricing</h2>
          <p>
            Quotes are valid for 30 days from the date issued unless otherwise
            stated. Prices quoted are based on the information provided and may be
            subject to change if additional work is required once we assess the job
            on-site.
          </p>
          <p>
            Emergency call-out fees apply outside standard business hours (Monday-Friday
            8am-6pm, Saturday 9am-2pm).
          </p>

          <h2>3. Payment Terms</h2>
          <p>
            Payment is due upon completion of work unless otherwise agreed in writing.
            We accept cash, card, and bank transfer. For larger projects, a deposit
            may be required before work commences.
          </p>

          <h2>4. Warranty</h2>
          <p>
            All workmanship is guaranteed for 12 months from the date of completion.
            This warranty covers defects in our work but does not cover damage caused
            by misuse, third-party interference, or normal wear and tear.
          </p>
          <p>
            Manufacturer warranties apply separately to any parts or equipment
            installed.
          </p>

          <h2>5. Cancellation</h2>
          <p>
            Please provide at least 24 hours notice if you need to cancel or
            reschedule an appointment. Late cancellations may incur a fee to cover
            our costs.
          </p>

          <h2>6. Access and Preparation</h2>
          <p>
            You agree to provide reasonable access to the work area and ensure it is
            clear of obstructions. We may need to turn off water or heating systems
            during work - we will inform you in advance where possible.
          </p>

          <h2>7. Liability</h2>
          <p>
            We carry €2 million public liability insurance. Our liability is limited
            to the cost of rectifying defective work. We are not liable for
            consequential losses except where required by law.
          </p>

          <h2>8. Complaints</h2>
          <p>
            If you're not satisfied with our service, please contact us immediately.
            We take all complaints seriously and will work to resolve any issues
            promptly.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. The current version will
            always be available on our website.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions about these terms, contact us:
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
