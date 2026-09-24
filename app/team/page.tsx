// app/team/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { teamMembers } from "@/app/data/team";

export default function TeamPage() {
  return (
    <div className="py-6">
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          About Sean Brennan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nexa Mortgage, we treat each customer as an individual, not a
              number. We don{`'`}t place you into a loan profile formula created
              by the banking industry. We use {`"`}common sense{`"`} and will
              help you obtain a great rate based on your situation. We represent
              a wide range of {`"`}A{`"`} rated lenders with first quality rates
              to private {`"`}hardship{`"`} lenders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with multiple investors. This allows us to get you
              competitive rates on all types of loan programs including: 30yr
              mortgage, 20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS,
              3yr ARMS, 5yr ARMS, Conventional, Jumbo, Home Equity Lines, VA and
              Commercial. Whether your situation calls for Full Documents, No
              Documents, Non-Owner Occupied (Investor) or Multi-Family, we
              {`'`}ll fit your needs!
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="tel:+12013173235"
                className="text-[#006132] font-medium flex items-center gap-2"
              >
                <Icons.Phone className="w-4 h-4" />
                (201) 317-3235
              </a>
              <a
                href="mailto:sbrennan@nexamortgage.com"
                className="text-[#006132] font-medium flex items-center gap-2"
              >
                <Icons.Mail className="w-4 h-4" />
                sbrennan@nexamortgage.com
              </a>
            </div>
          </div>

          <div className="relative  rounded-xl w-72 h-82 m-4 bg-[#006132] overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/img/sbr.png"
              alt="Sean Brennan"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">
            A TEAM YOU CAN TRUST
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            I would love to help you get into a new home. Please utilize the
            links below and contact my office if you have any questions. I have
            helped individuals and families throughout New Jersey, and would
            love to help you, too…
          </p>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          At Your Service
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you{`'`}re buying, selling, refinancing, or building your
          dream home, you have a lot riding on your loan specialist. Since
          market conditions and mortgage programs change frequently, you need to
          make sure you{`'`}re dealing with a top professional who is able to
          give you quick and accurate financial advice. As an experienced loan
          officer I have the knowledge and expertise you need to explore the
          many financing options available. Ensuring that you make the right
          choice for you and your family is my ultimate goal. And I am committed
          to providing my customers with mortgage services that exceed their
          expectations.
        </p>
      </motion.div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <Link href={`/team/${member.id}`}>
              <div
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#006132]/10 to-[#67d8dc]/10 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                      View Profile <Icons.ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#006132] transition">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#006132] font-medium">
                    {member.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    NMLS #{member.nmls}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                    <p className="flex items-center gap-2">
                      <Icons.Phone className="w-3.5 h-3.5 text-[#006132]" />
                      {member.phone}
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <Icons.Mail className="w-3.5 h-3.5 text-[#006132] flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
