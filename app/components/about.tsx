"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Heart,
  Mail,
  Phone,
  Star,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Icons.Shield,
      title: "Honesty & Transparency",
      description:
        "You get straight answers and clear explanations. No jargon, no surprises.",
    },
    {
      icon: Icons.Zap,
      title: "Unmatched Responsiveness",
      description:
        "I answer calls and return emails promptly. You're never left wondering.",
    },
    {
      icon: Icons.Handshake,
      title: "A Partnership for Life",
      description:
        "My goal is to be your trusted mortgage advisor for every home and every milestone.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "A no-obligation conversation to understand your goals and financial picture.",
    },
    {
      step: 2,
      title: "Document Checklist",
      description:
        "Receive a clear, simple list of required documents for your specific situation.",
    },
    {
      step: 3,
      title: "Reliable Pre-Approval",
      description:
        "Get your financing fully vetted for a strong, competitive offer.",
    },
    {
      step: 4,
      title: "Home Shopping Support",
      description:
        "Receive guidance and updated payment scenarios as you tour homes.",
    },
    {
      step: 5,
      title: "Seamless Underwriting",
      description:
        "Proactive management of the underwriting process to ensure a smooth journey.",
    },
    {
      step: 6,
      title: "Closing Day",
      description:
        "We ensure all figures are accurate for a stress-free closing.",
    },
    {
      step: 7,
      title: "Post-Closing Partnership",
      description: "Benefit from ongoing rate monitoring and support for life.",
    },
  ];

  const loanPrograms = [
    {
      title: "Conventional Loans",
      description:
        "Traditional mortgage financing with competitive rates, flexible terms, and down payments as low as 3%.",
    },
    {
      title: "FHA Loans",
      description:
        "Government-backed home loans with flexible credit requirements and down payments as low as 3.5%.",
    },
    {
      title: "VA Home Loans",
      description:
        "Exclusive zero-down mortgage benefits for veterans and service members.",
    },
    {
      title: "USDA Loans",
      description:
        "Loans designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    },
    {
      title: "New Construction Financing",
      description:
        "Specialized financing for building your dream home from the ground up.",
    },
    {
      title: "Non-Traditional Solutions",
      description:
        "Tailored financing options for self-employed borrowers who may not qualify through traditional methods.",
    },
  ];

  const faqs = [
    {
      q: "How fast can I get pre-approved?",
      a: "Most pre-approvals are completed within 24-48 hours once all documentation is received.",
    },
    {
      q: "What credit scores work for first-time buyers?",
      a: "FHA loans accept scores as low as 580 with 3.5% down. Conventional loans typically require 620+.",
    },
    {
      q: "What documents do self-employed borrowers need?",
      a: "Typically 12-24 months of personal or business bank statements showing consistent income, along with tax returns.",
    },
    {
      q: "What are USDA loan requirements?",
      a: "USDA loans are for rural properties and require the home to be in an eligible area. They offer 0% down payment options.",
    },
    {
      q: "How does new construction financing work?",
      a: "Construction loans provide funds to build your home, then convert to permanent financing once construction is complete.",
    },
    {
      q: "What are typical VA loan timelines?",
      a: "VA loans typically close in 30-45 days. We help veterans navigate the process from COE to appraisal.",
    },
  ];

  const states = ["NJ"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Sean Brennan */}
      <div className="relative bg-gradient-to-r from-[#003961] to-[#021A2B] text-white rounded-2xl">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ffdfd9] font-bold tracking-[4px] text-sm mb-4">
                Sr. Loan Officer
              </p>
              <p className="text-[#ffdfd9]  text-sm mb-2">NMLS #168226</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Sean Brennan
              </h1>
              <p className="text-[#ffdfd9]  text-lg max-w-xl mb-2">
                53 Frontage Road
              </p>
              <p className="text-gray-200 text-lg max-w-xl mb-6">
                Hampton, NJ 08827
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <button className="bg-white text-[#021A2B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get Pre-Approved
                  </button>
                </Link>
                <a href="tel:+12013173235">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                    <Icons.Phone className="w-4 h-4" /> Call Sean
                  </button>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-[#011829]/95 animate-pulse" />
                <Image
                  src="/img/sbr.png"
                  alt="Sean Brennan - Sr. Loan Officer"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <Icons.BadgeCheck className="w-8 h-8 text-[#021A2B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* About Sean Brennan */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            About Sean Brennan
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Nexa Mortgage, we treat each customer as an individual, not a
                number. We don{`'`}t place you into a loan profile formula
                created by the banking industry. We use {`"`}common sense{`"`}{" "}
                and will help you obtain a great rate based on your situation.
                We represent a wide range of {`"`}A{`"`} rated lenders with
                first quality rates to private {`"`}hardship{`"`} lenders.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with multiple investors. This allows us to get you
                competitive rates on all types of loan programs including: 30yr
                mortgage, 20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS,
                3yr ARMS, 5yr ARMS, Conventional, Jumbo, Home Equity Lines, VA
                and Commercial. Whether your situation calls for Full Documents,
                No Documents, Non-Owner Occupied (Investor) or Multi-Family, we
                {`'`}ll fit your needs!
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="tel:+12013173235"
                  className="text-[#021A2B] font-medium flex items-center gap-2"
                >
                  <Icons.Phone className="w-4 h-4" />
                  (201) 317-3235
                </a>
                <a
                  href="mailto:sbrennan@nexamortgage.com"
                  className="text-[#021A2B] font-medium flex items-center gap-2"
                >
                  <Icons.Mail className="w-4 h-4" />
                  sbrennan@nexamortgage.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                A TEAM YOU CAN TRUST
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I would love to help you get into a new home. Please utilize the
                links below and contact my office if you have any questions. I
                have helped individuals and families throughout New Jersey, and
                would love to help you, too…
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Mission, Values & Client Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 bg-[#021A2B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#021A2B]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#08263d] mb-8 text-center">
            ME, & My Team
          </h2>

          <div className="relative w-full rounded-xl overflow-hidden mb-2">
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                  A Team You Can Trust
                </h3>
                <p className="text-white/90 mt-2 drop-shadow-lg">
                  Helping families achieve their dream of homeownership
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 relative h-64 md:h-1/3  min-h-1/2">
              <Image
                src="/img/me-team.png"
                alt="Team Banner 1"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
                quality={90}
              />
            </div>
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-[#eef5f6] rounded-xl p-6 mb-4">
                  <h4 className="text-lg font-bold text-[#08263d] mb-3 flex items-center gap-2">
                    <Heart size={20} className="text-[#67d8dc]" />
                    My Journey in Mortgage
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    At Nexa Mortgage, we treat each customer as an individual,
                    not a number. We don{`'`}t place you into a loan profile
                    formula created by the banking industry. We use {`"`}common
                    sense{`"`} and will help you obtain a great rate based on
                    your situation.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We represent a wide range of {`"`}A{`"`} rated lenders with
                  first quality rates to private {`"`}hardship{`"`} lenders. We
                  work with multiple investors, allowing us to get you
                  competitive rates on all types of loan programs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 text-[#67d8dc]">
                      <CheckCircle size={18} />
                      <span className="font-semibold text-[#08263d]">
                        My Passion
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Treating each customer as an individual, not a number
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 text-[#67d8dc]">
                      <Users size={18} />
                      <span className="font-semibold text-[#08263d]">
                        My Process
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Using common sense to help you obtain a great rate based
                      on your situation
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#08263d] rounded-xl text-white">
                  <p className="italic text-white/90">
                    "At Nexa Mortgage, we treat each customer as an individual,
                    not a number. We don{`'`}t place you into a loan profile
                    formula created by the banking industry."
                  </p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-[#67d8dc]" />
                      <span className="text-sm">Multiple Investor Network</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-[#67d8dc]" />
                      <span className="text-sm">Competitive Rates</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#67d8dc] text-[#08263d] font-bold rounded-full hover:bg-[#67d8dc]/90 transition-all hover:scale-105"
                  >
                    Contact Sean <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/#calculator"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#08263d] text-[#08263d] font-bold rounded-full hover:bg-[#08263d] hover:text-white transition-all"
                  >
                    Try Our Calculator <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Can I Afford? */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What can I afford?
            </h2>
            <p className="text-gray-600 mb-6">
              With this mortgage calculator, you can easily determine your
              estimated monthly payment, as well as how much interest you might
              pay and your projected principal balances. You can also input
              prepayment amounts to see their impact on your mortgage.
            </p>
            <Link href="/calculator">
              <button className="bg-[#021A2B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f36f55] transition">
                Try Our Mortgage Calculator
              </button>
            </Link>
          </div>
        </section>

        {/* Loan Programs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Loan Programs & Expertise
          </h2>
          <p className="text-gray-600 mb-6">
            Sean offers a full range of loan options to meet your unique needs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-xs">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Let's Get You Into Your Dream Home */}
        <section className="mb-16 bg-[#021A2B] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let{`'`}s get you into your dream home
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto mb-8">
            It{`'`}s simple to get started on your mortgage journey – whether
            you{`'`}re just looking to get pre-qualified or are ready to submit
            an application. Just click the button below or submit a contact form
            to speak with me. I'm here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:sbrennan@nexamortgage.com">
              <button className="bg-white text-[#021A2B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started Today
              </button>
            </a>
            <Link href="/contact-us">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                <Icons.Mail className="w-4 h-4" /> Contact Sean
              </button>
            </Link>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Work With Sean
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.slice(0, 4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#021A2B] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {processSteps.slice(4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#021A2B] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Service Areas
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Sean is proud to offer expert mortgage guidance in the following
            states. Please note that specific loan program availability can vary
            by state.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {states.map((state) => (
              <span
                key={state}
                className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {state}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <div className="mt-12 bg-[#021A2B] rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
          <p className="text-green-200 mb-6 text-sm">
            Contact Sean today for a no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+12013173235"
              className="inline-flex items-center gap-2 bg-white text-[#021A2B] font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition"
            >
              <Icons.Phone className="w-5 h-5" /> (201) 317-3235
            </a>
            <a
              href="mailto:sbrennan@nexamortgage.com"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <Icons.Mail className="w-5 h-5" /> Email Sean
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Sean Brennan is a licensed mortgage professional. NMLS #168226. Loan
            approvals are subject to underwriting guidelines. Equal Housing
            Lender.
          </p>
        </div>
      </div>
    </div>
  );
}
