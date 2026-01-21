import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Privacy Policy
          </h1>

          <div className="legal-content">
            <h2>Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us, which may include your name, email address, phone number, mailing address, and any other information you submit through our website forms, appointment requests, or communications with us.
            </p>

            <h2>How We Use Personal Information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Provide and deliver our services</li>
              <li>Communicate with you about appointments, services, and support</li>
              <li>Respond to inquiries and requests</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>How Personal Information Is Shared</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share personal information only with trusted service providers who assist us in operating our business (such as CRM systems, scheduling tools, or communication platforms), and only to the extent necessary to provide our services.
            </p>
            <p>SMS consent is not shared with third parties or affiliates.</p>

            <h2>SMS Communications</h2>
            <p>
              If you opt in to receive SMS messages from us, those messages may include appointment reminders, service-related notifications, or other business communications. Message and data rates may apply. You may opt out at any time by replying STOP.
            </p>
            <p>SMS consent is not shared with third parties or affiliates.</p>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
            </p>

            <h2>Access to This Privacy Policy</h2>
            <p>
              This privacy policy is easily accessible on our website and is linked near all web forms where personal information or SMS consent is collected. As a best practice, it is also included in the footer of every page on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how your information is handled, please contact us directly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
