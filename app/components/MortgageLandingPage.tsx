"use client";
import Link from "next/link";
import { useState } from "react";

const Icon = ({
  src,
  size = 20,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) => <img src={src} width={size} height={size} className={className} alt="" />;

const MortgageLandingPage = () => {
  const icons = {
    phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
    chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
    calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
    arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
    facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
    instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
    linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
    youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
    google: "https://img.icons8.com/ios-filled/50/374151/google-logo.png",
    tiktok: "https://img.icons8.com/ios-filled/50/374151/tiktok.png",
  };

  return (
    <div className="">
      <div className="rounded-3xl bg-[#006132] text-white font-sans overflow-hidden relative ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          {/* <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
            <path
              d="M100 650V100L300 400L500 100V650"
              stroke="white"
              strokeWidth="80"
              fill="none"
            />
          </svg> */}
        </div>

        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-18 pb-20 gap-10">
          <div className="flex-1  max-w-2xl w-full text-center lg:text-left">
            <div className="hidden md:flex flex-col ">
              <p className=" text-md font-bold tracking-[0.2em] mb-6 uppercase">
                Hi, I{`'`}m Sean Brennan
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Mortgage
                <br />
                Loan Officer
              </h1>
            </div>
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At Nexa Mortgage, we treat each customer as an individual, not a
              number. We don{`'`}t place you into a loan profile formula created
              by the banking industry. We use {`"`}common sense{`"`} and will
              help you obtain a great rate based on your situation. We represent
              a wide range of {`"`}A{`"`} rated lenders with first quality rates
              to private {`"`}hardship{`"`} lenders.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link href="/about">
                {" "}
                <button className="w-full sm:w-auto flex items-center border-2 border-white/30 justify-center gap-3  px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
                  Start Application{" "}
                  <img
                    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                    alt="arrow"
                  />
                </button>
              </Link>
              <a href="/contact-us">
                <button className="w-full sm:w-auto flex items-center bg-white text-black justify-center gap-3  px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Quick Contact
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="absolute hidden -top-2 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b22_Customer%20Badges.svg"
                  alt="Customers"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
                <p className="text-sm sm:text-lg text-gray-100 -mt-6 sm:-mt-8 text-center whitespace-nowrap">
                  Satisfied Customers
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">100K+</h2>
            </div>

            <div className="  relative w-full max-w-[450px]">
              <div className="flex flex-col text-center p-1 md:hidden">
                <p className="text-md font-bold tracking-[0.2em] mb-2 uppercase">
                  Hi, I{`'`}m Sean Brennan{" "}
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-24">
                  Your Mortgage
                  <br />
                  Loan Officer{" "}
                </h1>
              </div>
              <div className="absolute md:hidden   top-26 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b22_Customer%20Badges.svg"
                    alt="Customers"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex  pt-2">
                    <p className="text-xs text-gray-100 -mt-6 sm:-mt-8 text-center whitespace-nowrap">
                      Satisfied Customers
                    </p>
                  </div>
                  <h2 className="text-sm font-semibold">100K+</h2>
                </div>
              </div>
              <img
                src="/img/sb.png"
                alt="Sean Brennan"
                className="w-full h-[400px] sm:h-[580px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute -bottom-6 sm:bottom-10 right-0 md:right-22 left-0 text-white sm:left-auto mx-auto sm:mx-0 bg-[#006132]/85  p-2 border-white border-2 sm:p-3 rounded-2xl shadow-xl w-[60%] sm:w-62">
                <h3 className="text-xl font-bold mb-2">Sean Brennan</h3>
                <p className="text-white text-sm mb-1">Sr. Loan Officer</p>
                <p className="text-white text-xs mb-1">NMLS ID: 168226</p>
                <div className="flex items-center gap-3 w-full">
                  <a
                    href="https://www.facebook.com/sean.brennan.234820/"
                    className="w-9 h-8 md:w-10 text-white md:h-10  bg-white  rounded-full border border-gray-300 flex items-center justify-center hover:bg-transparent transition"
                  >
                    <Icon
                      src={icons.facebook}
                      size={18}
                      className="text-black"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/mylendinggenie/"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex bg-white items-center justify-center hover:bg-transparent transition"
                  >
                    <Icon src={icons.instagram} size={18} />
                  </a>
                  {/* <a
                    href="https://www.youtube.com/@loanwolfmoney"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon src={icons.youtube} size={18} />
                  </a> */}
                  {/* <a
                    href="https://www.tiktok.com/@loanwolfmoney"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon src={icons.tiktok} size={18} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MortgageLandingPage;