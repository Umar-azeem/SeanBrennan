import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { teamMembers } from "@/app/data/team";
import MortgageCalculator from "@/app/components/MortgageCalculator";
import FAQ from "@/app/components/FAQ";
import LatestBlogPosts from "@/app/components/LatestBlogPosts";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.id }));
}
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

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await Promise.resolve(params);
  const member = teamMembers.find((m) => m.id === resolved.slug);

  if (!member) return notFound();

  return (
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <Link
        href="/team"
        className="inline-flex items-center text-[#006132] font-medium mb-8 group"
      >
        <Icons.ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" />
        Back to Team
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10 grid md:grid-cols-3 gap-8">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
          <p className="text-[#006132] font-semibold">{member.title}</p>
          <p className="text-sm text-gray-500">NMLS #{member.nmls}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href={`tel:${member.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 bg-[#F0F7F3] text-[#006132] px-4 py-2 rounded-full text-sm"
            >
              <Icons.Phone className="w-4 h-4" /> {member.phone}
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 bg-[#F0F7F3] text-[#006132] px-4 py-2 rounded-full text-sm"
            >
              <Icons.Mail className="w-4 h-4" /> {member.email}
            </a>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Icons.MapPin className="w-4 h-4 text-[#006132]" />
            {member.address}
          </p>

          {member.bio && (
            <div className="pt-4 border-t">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          )}
        </div>




      </div>
      <section className="mb-16 bg-[#006132] text-white rounded-2xl p-8 text-center">
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
                    <button className="bg-white text-[#006132] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
                      <div className="w-12 h-12 bg-[#006132] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
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
                      <div className="w-12 h-12 bg-[#006132] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
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
      <div className="mt-12 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <MortgageCalculator/>
      </div>
       <LatestBlogPosts/>
      <div className="mt-12 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <FAQ/>
      </div>
    </div>
  );
}