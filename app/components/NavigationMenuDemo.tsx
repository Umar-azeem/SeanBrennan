"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  Info,
  BookOpen,
  Phone,
  Home as HomeIcon,
  Shield,
  Building2,
  TrendingUp,
  RefreshCw,
  Landmark,
  BarChart3,
  FileText as FileTextIcon,
  Activity,
  PhoneCall,
  SquareArrowOutUpRight,
  UserSearch,
  Users,
  User,
  Briefcase,
  Award,
  UserCheck,
  CircleUser,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// ---------- Loan Programs Data ----------
const loanPrograms = [
  {
    title: "FHA Loans",
    href: "/loan-programs/fha",
    description:
      "FHA loans are mortgages insured by the Federal Housing Administration (FHA).",
    icon: HomeIcon,
  },
  {
    title: "VA Home Loans",
    href: "/loan-programs/va",
    description:
      "VA Loans offer options for veterans, service members, and their surviving spouses.",
    icon: Shield,
  },
  {
    title: "DPA Loans",
    href: "/loan-programs/dpa",
    description:
      "A Down Payment Assistance (DPA) loan helps cover a portion of the down payment on a home.",
    icon: Building2,
  },
  {
    title: "Jumbo Loans",
    href: "/loan-programs/jumbo",
    description: "Financing solutions for high-value properties.",
    icon: TrendingUp,
  },
  {
    title: "Refinance",
    href: "/loan-programs/refinance",
    description:
      "Refinance and cash-out refinance loans can be beneficial for clients by potentially.",
    icon: RefreshCw,
  },
  {
    title: "Non-QM",
    href: "/loan-programs/non-qm",
    description:
      "A Non-QM loan, or Non-Qualified Mortgage loan, is a type of mortgage loan that does not meet the standards set by the government-sponsored.",
    icon: Landmark,
  },
  {
    title: "Rehab Loans",
    href: "/loan-programs/rehab",
    description:
      "A rehab loan, also known as a renovation loan, is a type of loan used to finance the purchase and renovation of a property",
    icon: BarChart3,
  },
  {
    title: "USDA Loans",
    href: "/loan-programs/usda",
    description:
      "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    icon: FileTextIcon,
  },
  {
    title: "Adjustable-Rate (ARM) Loans",
    href: "/loan-programs/arm",
    description: "Start with lower rates that adjust over time.",
    icon: Activity,
  },
  {
    title: "Fixed-Rate (FRM) Loans",
    href: "/loan-programs/fixed-rate",
    description: "Start with lower rates that adjust over time.",
    icon: Activity,
  },
];

// ---------- Team Members Data ----------
const teamMembers = [
  {
    title: "Joseph Sheridan",
    role: "Sr Loan Officer",
    nmls: "259780",
    href: "/team/joseph-sheridan",
    description:
      "Whether you're buying, selling, refinancing, or building your dream home, you have a lot riding on your loan specialist.",
    icon: UserCheck,
  },
  {
    title: "Larry D. Merritt",
    role: "Sr Loan Officer",
    nmls: "73189",
    href: "/team/larry-merritt",
    description:
      "Decades of experience helping clients navigate complex financing scenarios with clarity and confidence.",
    icon: CircleUser,
  },
  {
    title: "Lenny Khrakovskiy",
    role: "Sr. Loan Officer",
    nmls: "1977304",
    href: "/team/lenny-khrakovskiy",
    description:
      "Specializing in tailored mortgage solutions for borrowers across New Jersey and beyond.",
    icon: User,
  },
  {
    title: "Lois Meyers",
    role: "Sr. Loan Originator",
    nmls: "249499",
    href: "/team/lois-meyers",
    description:
      "Helping families achieve the dream of homeownership with personalized service.",
    icon: Award,
  },
  {
    title: "Michael Truell",
    role: "Sr Mortgage Consultant",
    nmls: "172880",
    href: "/team/michael-truell",
    description:
      "Focused on finding the right loan program for each client's unique financial situation.",
    icon: Briefcase,
  },
  {
    title: "Lawrence Mallar",
    role: "Sr. Loan Officer",
    nmls: "1374348",
    href: "/team/lawrence-mallar",
    description:
      "Experienced loan officer committed to delivering exceptional service and competitive rates.",
    icon: UserCheck,
  },
  {
    title: "Dale Gallant",
    role: "Sr. Loan Officer",
    nmls: "229376",
    href: "/team/dale-gallant",
    description:
      "Over 28 years of continuous experience in most facets of the mortgage business.",
    icon: Award,
  },
];

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/team", label: "Our Team", icon: Users },
  { href: "/contact-us", label: "Contact", icon: Phone },
];

const mobileLoanLinks = loanPrograms.map((p) => ({
  href: p.href,
  label: p.title,
  icon: p.icon,
}));

const mobileTeamLinks = teamMembers.map((m) => ({
  href: m.href,
  label: m.title,
  icon: m.icon,
}));

function NavigationMenuDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileLoanOpen, setMobileLoanOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="animated-navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[#021A2B] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#021A2B] h-10 w-10"
            >
              <Menu className="h-10 w-10 text-2xl " />
            </Button>
          </SheetTrigger>
          <div className="flex flex-row gap-2 mx-2">
            <Link href="/contact-us">
              <Button
                variant="default"
                size="icon"
                className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#021A2B] h-10 w-10"
              >
                <SquareArrowOutUpRight className="h-10 w-10 text-2xl " />
              </Button>
            </Link>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#021A2B] h-10 w-10"
            >
              <a
                href="https://wa.me/12013173235"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 justify-center w-full px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.732.889.939-3.63-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
            </Button>
          </div>
          <SheetContent
            side="left"
            className="w-[380px] sm:w-[580px] bg-[#021A2B] text-white border-white/10 p-0 overflow-y-auto"
          >
            <div className="flex h-52 items-center border-b border-white/10 px-1">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-96 h-48 object-contain"
                  priority
                />
              </Link>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-5 w-5 text-text-white" />
                  {link.label}
                </Link>
              ))}

              {/* Loan Programs Dropdown */}
              <div>
                <button
                  onClick={() => setMobileLoanOpen(!mobileLoanOpen)}
                  className="flex items-center justify-between w-full gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-5 w-5 text-white" />
                    Loan Programs
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileLoanOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileLoanOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4">
                    {mobileLoanLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 text-white flex-shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Team Dropdown */}
              <div>
                <button
                  onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  className="flex items-center justify-between w-full gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-white" />
                    Our Team
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileTeamOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileTeamOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4">
                    {mobileTeamLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 text-white flex-shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            <div className="lg:hidden flex flex-col w-full items-center gap-3 text-white ">
              <Link
                href="https://wa.me/12013173235"
                className="flex gap-2 justify-center w-full px-4"
              >
                <button className="bg-white flex justify-center gap-4 text-[#021A2B] px-6 w-full py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  (201) 317-3235{" "}
                </button>
              </Link>
              <Link
                href="https://teamvb.shapeportal.com/ref/7"
                className="w-full px-4"
              >
                <button className="bg-white text-[#021A2B] px-6 w-full py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Apply Online
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 ">
              <div className="flex h-24 items-center">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-64 h-24 object-contain"
                    priority
                  />
                </Link>
              </div>

              <NavigationMenuItem className="text-white text-lg  rounded-xl font-semibold  transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/about"> About</Link>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>

              {/* Loan Programs Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-lg font-semibold ">
                  <Link href="/loan-programs">Loan Programs</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[640px] grid-cols-2 gap-1 p-4 lg:w-[780px] lg:grid-cols-3">
                    {loanPrograms.map((program) => (
                      <li key={program.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={program.href}
                            rel="noreferrer"
                            className="flex items-start gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-[#021A2B] hover:text-[#021A2B]-foreground group"
                          >
                            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#021A2B]/10 text-[#021A2B] group-hover:bg-[#021A2B] group-hover:text-[white] transition-colors">
                              <program.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="font-semibold leading-none text-[#021A2B]">
                                {program.title}
                              </div>
                              <div className="line-clamp-2 text-xs leading-snug text-[#021A2B]">
                                {program.description}
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border p-4"></div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Team Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-lg font-semibold">
                  <Link href="/team">Our Team</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[640px] grid-cols-2 gap-1 p-4 lg:w-[780px] lg:grid-cols-3">
                    {teamMembers.map((member) => (
                      <li key={member.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={member.href}
                            rel="noreferrer"
                            className="flex items-start gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-[#021A2B] hover:text-[#021A2B]-foreground group"
                          >
                            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#021A2B]/10 text-[#021A2B] group-hover:bg-[#021A2B] group-hover:text-[white] transition-colors">
                              <member.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="font-semibold leading-none text-[#021A2B]">
                                {member.title}
                              </div>
                              <div className="text-[10px] font-medium text-[#021A2B]/70 uppercase tracking-wide">
                                {member.role} · NMLS #{member.nmls}
                              </div>
                              <div className="line-clamp-2 text-xs leading-snug text-[#021A2B]">
                                {member.description}
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border p-4">
                    <Link
                      href="/team"
                      className="text-sm font-medium text-[#021A2B] hover:underline"
                    >
                      View All Team Members →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="text-white text-lg font-semibold rounded-xl transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center gap-3 text-white py-4">
          <Link href="tel:+12013173235" className="flex gap-2 justify-center ">
            <PhoneCall />
            <h3>(201) 317-3235 </h3>
          </Link>
          <Link
            href="https://teamvb.shapeportal.com/ref/7"
            target="_blank"
            className="flex gap-2 justify-center "
          >
            <button className="bg-white text-[#021A2B] px-6 py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm p-3 rounded-md hover:bg-accent transition-colors">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default NavigationMenuDemo;
