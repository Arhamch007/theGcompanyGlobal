import Footer from "@/components/Footer";
import { CheckCircle, Users, Shield, Clock, Phone, Mail, MapPin, Heart, Wallet, FileText } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Protect your loved ones with comprehensive life insurance policies tailored to your family's needs and budget.",
  },
  {
    icon: Wallet,
    title: "Annuities",
    description: "Secure your retirement with guaranteed income streams and tax-advantaged growth options.",
  },
  {
    icon: Shield,
    title: "Final Expense",
    description: "Affordable coverage to ensure your final wishes are honored without burdening your family.",
  },
  {
    icon: FileText,
    title: "Medicare Supplements",
    description: "Fill the gaps in your Medicare coverage with plans designed for your healthcare needs.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed agents in all 50 states with comprehensive E&O coverage.",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Decades of expertise helping families secure their financial futures.",
  },
  {
    icon: Users,
    title: "10,000+ Clients Served",
    description: "A proven track record of satisfied clients across the nation.",
  },
  {
    icon: CheckCircle,
    title: "Top-Rated Carriers",
    description: "We partner with A-rated insurance carriers you can trust.",
  },
];

const testimonials = [
  {
    name: "Margaret Thompson",
    role: "Retired Teacher, Florida",
    quote: "They helped me find the perfect Medicare supplement plan. The process was simple and stress-free.",
  },
  {
    name: "Robert & Linda Garcia",
    role: "Business Owners, Texas",
    quote: "Our agent took the time to understand our family's needs and found us excellent life insurance coverage at a great rate.",
  },
  {
    name: "James Wilson",
    role: "Retired Veteran, Arizona",
    quote: "Professional, knowledgeable, and genuinely caring. They made planning for retirement so much easier.",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground">theGcompanyGlobal</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="tel:1-800-555-0123" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              1-800-555-0123
            </a>
            <a href="mailto:info@thegcompanyglobal.it.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
              info@thegcompanyglobal.it.com
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center bg-gradient-to-b from-muted/30 to-background px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Trusted Insurance Solutions Since 2003
          </p>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Protecting What Matters Most to You
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            We help families and individuals navigate life insurance, annuities, and retirement planning with personalized solutions and expert guidance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl">
              Get a Free Quote
            </button>
            <button className="rounded-lg border border-border bg-background px-8 py-3 font-medium text-foreground transition-all hover:bg-muted">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground">
            Our Insurance Solutions
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Comprehensive coverage options designed to protect your family and secure your financial future.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <service.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground">
            Why Choose theGcompany
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            We're committed to providing exceptional service and finding the right coverage for your unique situation.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Real stories from real clients who trusted us with their insurance needs.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="mb-8 opacity-90">
            Get a free, no-obligation quote today. Our licensed agents are here to help you find the perfect coverage.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-background px-8 py-3 font-medium text-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl">
              Request a Free Quote
            </button>
            <a href="tel:1-800-555-0123" className="flex items-center gap-2 font-medium opacity-90 hover:opacity-100">
              <Phone className="h-5 w-5" />
              Call 1-800-555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="border-t border-border bg-background px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>123 Insurance Plaza, Suite 100, Austin, TX 78701</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:1-800-555-0123" className="flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" />
              1-800-555-0123
            </a>
            <a href="mailto:info@securelifesolutions.com" className="flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4" />
              info@securelifesolutions.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
