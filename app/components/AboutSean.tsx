"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Phone,
  Mail,
  ShieldCheck,
  Award,
  TrendingUp,
  MapPin,
  Quote,
  ArrowUpRight,
} from "lucide-react";

// ── Animated circular stat ring ──
function StatRing({
  value,
  label,
  percent,
  delay,
  isInView,
}: {
  value: string;
  label: string;
  percent: number;
  delay: number;
  isInView: boolean;
}) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#E5E9EE"
            strokeWidth="5"
            fill="none"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#0EA5A0"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.4, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-[#021A2B]">{value}</span>
        </div>
      </div>
      <span className="mt-3 text-[11px] uppercase tracking-wider text-gray-500 font-semibold text-center">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutSeanNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  // Image parallax
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), {
    stiffness: 120,
    damping: 20,
  });
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 120,
    damping: 20,
  });

  const onImgMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageWrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onImgLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative mb-16 overflow-hidden rounded-3xl bg-[#F6F7F9]"
    >
      {/* Diagonal decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #021A2B 0, #021A2B 1px, transparent 1px, transparent 22px)",
        }}
      />

      {/* Corner gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,160,0.18), transparent 65%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        {/* ═══ LEFT SIDE: Image panel with diagonal clip ═══ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5 min-h-[520px] lg:min-h-[720px]"
        >
          {/* Navy backdrop block */}
          <div
            className="absolute inset-0 bg-[#021A2B]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)",
            }}
          />

          {/* Teal accent stripe */}
          <motion.div
            className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-[#0EA5A0] via-[#67d8dc] to-[#0EA5A0]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              right: "21.5%",
              transformOrigin: "top",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

          {/* Image with parallax + zoom */}
          <motion.div
            ref={imageWrapRef}
            onMouseMove={onImgMove}
            onMouseLeave={onImgLeave}
            className="relative h-full flex items-end justify-center pt-10"
          >
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="relative w-[85%] max-w-[520px] aspect-[3/4]"
            >
              <Image
                src="/img/sbr.png"
                alt="Sean Brennan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          </motion.div>

          {/* Vertical "ABOUT" text */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 hidden lg:flex items-center">
            <span
              className="text-white/15 font-black tracking-[0.4em] text-5xl"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              ABOUT
            </span>
          </div>

          {/* Rotating badge bottom-left */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9, type: "spring" }}
            className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(2,26,43,0.35)] flex items-center gap-3 z-10"
          >
            <div className="w-10 h-10 rounded-full bg-[#0EA5A0]/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#0EA5A0]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                Licensed
              </p>
              <p className="text-xs font-bold text-[#021A2B]">
                NMLS #168226
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══ RIGHT SIDE: Content ═══ */}
        <div className="relative lg:col-span-7 p-8 md:p-12 lg:p-14">
          {/* Eyebrow + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#0EA5A0]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0EA5A0]">
                Meet Your Loan Officer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#021A2B] leading-[1.05] tracking-tight">
              Sean
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#0EA5A0] to-[#67d8dc] bg-clip-text text-transparent">
                  Brennan
                </span>
                <motion.svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-2 left-0 w-full h-3"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.path
                    d="M2 8 Q 75 1, 150 6 T 298 4"
                    stroke="#FF6A5C"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: {
                        pathLength: 1,
                        transition: { duration: 1.2, delay: 0.6 },
                      },
                    }}
                  />
                </motion.svg>
              </span>
            </h2>

            <p className="mt-5 text-sm text-gray-500 font-medium tracking-wide">
              Sr. Loan Officer · New Jersey
            </p>
          </motion.div>

          {/* Bio with vertical timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-8 mb-8 space-y-6"
          >
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#0EA5A0] via-[#67d8dc] to-transparent origin-top"
            />

            {[
              {
                title: "Common-Sense Lending",
                text: "We treat each customer as an individual, not a number. We don't place you into a loan profile formula created by the banking industry — we use common sense to find the right fit.",
              },
              {
                title: "Direct Access to Lenders",
                text: "We represent a wide range of \"A\" rated lenders — from first quality rates to private hardship lenders — so you always have options.",
              },
              {
                title: "Any Scenario, Any Program",
                text: "30yr, 20yr, 15yr, 10yr mortgages, ARMs, Conventional, Jumbo, HELOCs, VA and Commercial. Full Docs, No Docs, Investor or Multi-Family — we'll fit your needs.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-[#0EA5A0] ring-4 ring-[#F6F7F9]" />
                <h3 className="font-bold text-[#021A2B] text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="relative bg-white rounded-2xl p-5 mb-8 border-l-4 border-[#FF6A5C] shadow-[0_8px_30px_rgba(2,26,43,0.06)]"
          >
            <Quote className="absolute top-3 right-4 w-8 h-8 text-[#FF6A5C]/15" />
            <p className="text-gray-700 italic text-sm leading-relaxed pr-8">
              &ldquo;I would love to help you get into a new home. I have
              helped individuals and families throughout New Jersey, and would
              love to help you, too.&rdquo;
            </p>
          </motion.div>

          {/* Stat rings row */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
            <StatRing
              value="15+"
              label="Years"
              percent={85}
              delay={0.7}
              isInView={isInView}
            />
            <StatRing
              value="500+"
              label="Families"
              percent={92}
              delay={0.85}
              isInView={isInView}
            />
            <StatRing
              value="11"
              label="Programs"
              percent={75}
              delay={1.0}
              isInView={isInView}
            />
          </div>

          {/* Contact CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="tel:+12013173235"
              className="group inline-flex items-center gap-2 bg-[#FF6A5C] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#e5544a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,106,92,0.4)]"
            >
              <Phone className="w-4 h-4" />
              (201) 317-3235
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:sbrennan@nexamortgage.com"
              className="group inline-flex items-center gap-2 bg-[#021A2B] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#0a3d5c] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(2,26,43,0.3)]"
            >
              <Mail className="w-4 h-4" />
              Email Sean
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="inline-flex items-center gap-2 text-gray-500 text-xs font-medium px-3 py-3.5">
              <MapPin className="w-4 h-4 text-[#0EA5A0]" />
              53 Frontage Rd, Hampton, NJ
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Marquee ticker at bottom ═══ */}
      <div className="relative bg-[#021A2B] py-4 overflow-hidden border-t border-white/10">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-8 items-center">
              {[
                "Conventional",
                "FHA",
                "VA",
                "USDA",
                "Jumbo",
                "Non-QM",
                "Refinance",
                "Cash-Out",
                "HELOC",
                "Commercial",
                "Multi-Family",
                "Investor",
              ].map((word, i) => (
                <div key={`${dup}-${i}`} className="flex items-center gap-8">
                  <span className="text-white/60 font-semibold text-sm tracking-wider uppercase">
                    {word}
                  </span>
                  <Award className="w-3.5 h-3.5 text-[#0EA5A0]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#021A2B] via-[#0EA5A0] to-[#FF6A5C]" />
    </section>
  );
}