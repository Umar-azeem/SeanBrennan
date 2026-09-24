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
    <section className="mb-12">
  <div className="bg-gradient-to-br from-[#021A2B] via-[#0a3d5c] to-[#021A2B] rounded-2xl overflow-hidden shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 items-center">

      {/* Left: Text */}
      <div className="text-white">
        <p className="text-[#67d8dc] text-xs font-bold uppercase tracking-widest mb-2">
          About Me
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Sean Brennan
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          At Nexa Mortgage, we treat each customer as an individual, not a number.
          We don{`'`}t place you into a loan profile formula — we use common sense
          to find you a great rate based on your situation.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          From Conventional and Jumbo to VA, FHA, and Non-QM — we work with
          multiple investors to fit your needs.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+12013173235"
            className="inline-flex items-center gap-2 bg-[#67d8dc] text-[#021A2B] px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform"
          >
            <Icons.Phone className="w-4 h-4" />
            (201) 317-3235
          </a>
          <a
            href="mailto:sbrennan@nexamortgage.com"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Icons.Mail className="w-4 h-4" />
            Email Sean
          </a>
        </div>
      </div>

      {/* Right: BIG Image */}
      <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
        <Image
          src="/img/sbr.png"
          alt="Sean Brennan"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>
    </div>

    {/* Trust strip */}
    <div className="bg-black/20 px-6 md:px-8 py-4 border-t border-white/10">
      <p className="text-gray-300 text-xs leading-relaxed">
        <span className="font-bold text-white mr-1">A TEAM YOU CAN TRUST —</span>
        Helping individuals and families throughout New Jersey get into their dream homes.
      </p>
    </div>
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
            <Link href={`/team/${member.id}`} className="block h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                {/* Banner */}
                <div className="relative h-32 bg-gradient-to-br from-[#021A2B] via-[#0d4a63] to-[#67d8dc] overflow-hidden">
                  <div className="absolute -top-6 left-6 w-40 h-16 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute top-10 right-4 w-32 h-12 bg-white/15 rounded-full blur-2xl" />
                </div>

                {/* Avatar (overlaps banner) */}
                <div className="flex justify-center -mt-16">
                  <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-100">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="128px"
                    />
                  </div>
                </div>

                {/* Name + title */}
                <div className="text-center px-5 mt-4">
                  <h3 className="text-base font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{member.title}</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 px-6 mt-6 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Icons.BadgeCheck className="w-5 h-5 text-[#021A2B]" />
                    <span className="text-sm text-gray-700">{member.nmls}</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-400">
                      NMLS
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Icons.Phone className="w-5 h-5 text-[#021A2B]" />
                    <span className="text-sm text-gray-700">Call</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-400">
                      Phone
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Icons.Mail className="w-5 h-5 text-[#021A2B]" />
                    <span className="text-sm text-gray-700">Email</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-400">
                      Contact
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-8 mt-6 border-t border-gray-200" />

                {/* Button */}
                <div className="flex justify-center py-6 mt-auto">
                  <span className="inline-block bg-[#0f172a] text-white text-sm font-semibold px-12 py-3 rounded-full transition group-hover:bg-[#021A2B] group-hover:shadow-lg">
                    View Profile
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
