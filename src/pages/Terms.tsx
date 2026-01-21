import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Terms = () => {
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
            Terms & Conditions
          </h1>

          <div className="legal-content">
            <p>
              By opting into SMS from a web form or other medium, you agree to
              receive SMS messages from theGCompanyGlobal, including appointment
              reminders and service-related communications. Message frequency
              may vary. Message and data rates may apply. Reply STOP to opt out
              at any time. Reply HELP for assistance or visit{" "}
              <a
                href="http://thegcompanyglobal.it.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <strong>Website</strong>
              </a>
              . See our{" "}
              <a
                href="https://thegcompanyglobal.it.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Privacy Policy</strong>
              </a>{" "}
              and{" "}
              <a
                href="https://thegcompanyglobal.it.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Terms of Service.</strong>
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
