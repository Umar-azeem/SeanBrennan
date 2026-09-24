export interface TeamMember {
  id: string;
  name: string;
  title: string;
  nmls: string;
  photo: string;
  address: string;
  phone: string;
  fax?: string;
  email: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "joseph-sheridan",
    name: "Joseph Sheridan",
    title: "Sr Loan Officer",
    nmls: "259780",
    photo: "/img/sj.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(973) 214-5618",
    email: "jsheridan@nexamortgage.com",
    bio: "Experienced loan officer committed to helping clients achieve their homeownership goals.",
  },
  {
    id: "larry-merritt",
    name: "Larry D. Merritt",
    title: "Sr Loan Officer",
    nmls: "73189",
    photo: "/img/lm.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(908) 783-1991",
    email: "lmerritt@nexalending.com",
    bio: "Decades of experience in the mortgage industry.",
  },
  {
    id: "lenny-khrakovskiy",
    name: "Lenny Khrakovskiy",
    title: "Sr. Loan Officer",
    nmls: "1977304",
    photo: "/img/lk.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(917) 686-5759",
    email: "LennyK@NEXAlending.com",
    bio: "Specializing in tailored mortgage solutions.",
  },
  {
    id: "lois-meyers",
    name: "Lois Meyers",
    title: "Sr. Loan Originator",
    nmls: "249499",
    photo: "/img/lm.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(941) 920-3420",
    fax: "(941) 761-5205",
    email: "Lmeyers@nexalending.com",
    bio: "Helping families achieve the dream of homeownership.",
  },
  {
    id: "michael-truell",
    name: "Michael Truell",
    title: "Sr Mortgage Consultant",
    nmls: "172880",
    photo: "/img/mt.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(732) 470-5892",
    email: "mtruell@nexamortgage.com",
    bio: "Focused on finding the right loan program for each client.",
  },
  {
    id: "lawrence-mallar",
    name: "Lawrence Mallar",
    title: "Sr. Loan Officer",
    nmls: "1374348",
    photo: "/img/lmm.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(407) 739-1398",
    email: "lmallar@nexamortgage.com",
    bio: "Committed to delivering exceptional service and competitive rates.",
  },
  {
    id: "dale-gallant",
    name: "Dale Gallant",
    title: "Sr. Loan Officer",
    nmls: "229376",
    photo: "/img/dg.png",
    address: "53 Frontage Road, Hampton, NJ 08827",
    phone: "(973) 800-4101",
    email: "dgallant@nexalending.com",
    bio: "With over 28 years of continuous experience in the mortgage business.",
  },
];