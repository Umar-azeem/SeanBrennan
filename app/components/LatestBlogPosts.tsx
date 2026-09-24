"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

// ---------- Blog Data ----------
const blogPosts = [
  {
    id: "fed-raises-rates-what-it-means",
    date: "Sep 21, 2026",
    readTime: "5 min read",
    category: "Market Update",
    title: "Fed Raises Rates: What It Could Mean for Homebuyers",
    excerpt:
      "The Federal Reserve made its latest move on September 16, raising the federal funds target range by 0.25 percentage point to 3.75%–4.00%. The Fed said economic activity remains...",
    image: "/img/h1.jpg",
    href: "/blog/fed-raises-rates-what-it-means",
  },
  {
    id: "why-homebuyers-total-cost",
    date: "Sep 09, 2026",
    readTime: "6 min read",
    category: "Home Buying",
    title: "Why Homebuyers Should Pay Attention to the Total Cost of...",
    excerpt:
      "The purchase price may get most of the attention, but it is only one part of what a home really costs. For buyers, understanding the total cost of ownership can lead to better decisions...",
    image: "/img/h2.jpg",
    href: "/blog/why-homebuyers-total-cost",
  },
  {
    id: "what-happens-after-offer-accepted",
    date: "Sep 03, 2026",
    readTime: "4 min read",
    category: "Process Guide",
    title: "What Happens After Your Offer Is Accepted",
    excerpt:
      "Getting an offer accepted is a huge milestone, but it is not the finish line. Once the seller says yes, the transaction moves into a new phase that includes financing, inspections, appraisal...",
    image: "/img/h3.jpg",
    href: "/blog/what-happens-after-offer-accepted",
  },
];

function BlogCard({
  post,
  index,
  isInView,
}: {
  post: (typeof blogPosts)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse-follow tilt values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  // Glow position
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 60, rotateX: -15 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative"
    >
      <Link href={post.href} className="block h-full">
        <div
          className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200/80
                     shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                     group-hover:shadow-[0_20px_60px_rgba(0,97,50,0.18)]
                     transition-shadow duration-500"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated gradient border on hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #006132 0%, #67d8dc 50%, #f36f55 100%)",
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Mouse-following glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(400px circle at ${x} ${y}, rgba(0,97,50,0.08), transparent 40%)`
              ),
            }}
          />

          {/* Image with parallax zoom */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Category badge with shimmer */}
            <div className="absolute top-4 left-4 z-10">
              <span className="relative inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#006132] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg overflow-hidden">
                <Sparkles className="w-3 h-3" />
                {post.category}
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 -translate-x-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </div>

            {/* Read time pill (bottom-right of image) */}
            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="relative p-6 md:p-7 flex flex-col flex-1"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#006132]" />
              <span className="font-medium">{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#006132] transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5 flex-1">
              {post.excerpt}
            </p>

            {/* Read more with animated underline */}
            <div className="inline-flex items-center gap-2 text-[#006132] font-semibold text-sm mt-auto group/link">
              <span className="relative">
                READ MORE
                {/* Animated underline */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#006132] group-hover/link:w-full transition-all duration-300" />
              </span>
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006132] via-[#67d8dc] to-[#006132] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}

// ---------- Main Section ----------
export default function LatestBlogPosts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8faf9] via-white to-[#f8faf9] overflow-hidden"
    >
      {/* Animated background decorations */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#006132]/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#67d8dc]/10 blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Small tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#006132]/10 text-[#006132] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Insights & Updates
          </motion.div>

          {/* Title with gradient + shimmer */}
          <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 inline-block">
            Latest{" "}
            <span className="relative bg-gradient-to-r from-[#006132] via-[#67d8dc] to-[#006132] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Blog Posts
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Expert mortgage insights, market updates, and home buying tips
            from your trusted loan officer.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#006132] to-transparent mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
          {blogPosts.map((post, idx) => (
            <BlogCard
              key={post.id}
              post={post}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 bg-[#006132] hover:bg-[#004d26] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,97,50,0.3)]"
          >
            contact us for more insights
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Keyframes for shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}