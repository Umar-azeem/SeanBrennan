// app/team/layout.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { teamMembers } from "@/app/data/team";

interface LayoutProps {
  children: React.ReactNode;
}

function HeroBanner() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("member");
  const selected = teamMembers.find((m) => m.id === selectedId);

  return (
    <div className="bg-gradient-to-r from-[#006132] via-[#004d26] to-[#011829] text-white py-16 px-4 rounded-2xl relative overflow-hidden">
      {/* animated background blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#67d8dc]/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#f36f55]/20 blur-3xl animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {selected ? (
          <>
            <span className="text-green-200 text-sm font-medium uppercase tracking-wider">
              Team Member
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              {selected.name}
            </h1>
            <p className="text-green-200 mt-2 text-lg max-w-2xl">
              {selected.title} · NMLS #{selected.nmls}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
            <p className="text-green-200 mt-2 text-lg">
              Meet the experienced loan officers dedicated to your success
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function HeroBannerLoading() {
  return (
    <div className="bg-[#006132] text-white py-16 px-4 rounded-2xl">
      <div className="container mx-auto max-w-7xl">
        <div className="h-12 w-64 bg-white/20 rounded-lg animate-pulse mb-2" />
        <div className="h-6 w-96 bg-white/20 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

export default function TeamLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Suspense fallback={<HeroBannerLoading />}>
        <HeroBanner />
      </Suspense>
      <div className="container mx-auto px-4 py-8 max-w-7xl">{children}</div>
    </div>
  );
}