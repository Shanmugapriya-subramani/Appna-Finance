"use client";

import { motion } from "framer-motion";
import { Fraunces } from "next/font/google";
import {
  Bot,
  BookOpen,
  LineChart,
  Landmark,
  CreditCard,
  ShieldCheck,
  Languages,
  GraduationCap,
  Sprout,
  Factory,
  Briefcase,
  Wheat,
  Building2,
  Wallet,
  PiggyBank,
  Receipt,
  TrendingUp,
  HeartHandshake,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Check,
  Smartphone,
  Server,
  Cpu,
  Rocket,
  Database,
  Mic,
  MessageSquare,
  Users,
  Globe2,
  Youtube,
  Store,
} from "lucide-react";
import Logo from "@/components/Logo";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"] });

/* ---------------------------------- data (from pitch deck) ---------------------------------- */

const GOLD = "#D4AF37";

const problemTopics = [
  { icon: Landmark, label: "Banking" },
  { icon: LineChart, label: "Stock Market" },
  { icon: PiggyBank, label: "Mutual Funds & SIPs" },
  { icon: CreditCard, label: "Loans & Credit" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Receipt, label: "Taxes" },
  { icon: Building2, label: "Government Schemes" },
  { icon: Wallet, label: "Personal Finance" },
];

const marketOpportunity = [
  { icon: TrendingUp, label: "Rapid growth in retail investors" },
  { icon: Smartphone, label: "Massive adoption of digital banking & UPI" },
  { icon: CreditCard, label: "Expansion of digital lending" },
  { icon: Bot, label: "Increasing AI adoption" },
  {
    icon: Globe2,
    label: "Growing demand for financial education in regional languages",
  },
];

const solutionItems = [
  { icon: Bot, label: "AI Financial Assistant" },
  { icon: BookOpen, label: "Financial Learning Hub" },
  { icon: TrendingUp, label: "Investment Education" },
  { icon: Landmark, label: "Banking Education" },
  { icon: CreditCard, label: "Loan Education" },
  { icon: ShieldCheck, label: "Insurance Awareness" },
  { icon: Languages, label: "English, Hindi & Bengali Support" },
];

const visionSteps = [
  "Learn First",
  "Understand Finance",
  "Make Better Decisions",
  "Build Wealth Responsibly",
];

const ecosystem = [
  {
    icon: Youtube,
    title: "Free YouTube Learning",
    tag: "Free",
    desc: "Beginner-friendly content on Banking Basics, Stock Market, Personal Finance, Government Schemes, Loan Awareness — builds trust and drives users into the platform",
  },
  {
    icon: Bot,
    title: "Basic",
    tag: "Free",
    desc: "AI Financial Assistant, Banking Education, Stock Market Basics, Loan Education, Financial Dictionary, Government Schemes, Personal Finance Learning",
  },
  {
    icon: BookOpen,
    title: "Intermediate",
    tag: "Paid",
    desc: "Structured Courses, Video Lessons, PDFs, Quizzes, Assignments, Case Studies — Mutual Funds, SIP, Fundamental Analysis, Banking Preparation",
  },
  {
    icon: TrendingUp,
    title: "Advanced",
    tag: "Paid",
    desc: "Portfolio Building, Financial Planning, Wealth Creation, Trading Concepts, Advanced Investing",
  },
  {
    icon: Store,
    title: "Future Financial Services",
    tag: "",
    desc: "Loan Marketplace, Insurance Marketplace, Investment Marketplace",
  },
];

const techStack = [
  { icon: Smartphone, title: "Frontend", desc: "Android, Web" },
  { icon: Server, title: "Backend", desc: "FastAPI" },
  {
    icon: Cpu,
    title: "AI",
    desc: "Groq LLM, Retrieval-Augmented Generation (RAG), ChromaDB, Python",
  },
  {
    icon: Rocket,
    title: "Future",
    desc: "Voice AI, AI Agents, OCR, Recommendation Engine",
  },
];

const aiFlow = [
  { icon: MessageSquare, label: "User Query" },
  { icon: Bot, label: "AI Assistant" },
  { icon: Cpu, label: "RAG Engine" },
  { icon: Database, label: "Finance KB" },
];

const literacyPoints = [
  "Save smarter",
  "Invest responsibly",
  "Manage debt wisely",
  "Avoid financial fraud",
  "Build long-term wealth",
  "Plan for education, healthcare, retirement, and emergencies",
];

const stockMarketPoints = [
  "Companies raise capital for expansion",
  "Businesses create employment",
  "Entrepreneurs scale innovation",
  "Investors participate in wealth creation",
  "Strengthen India's economy through productive investment",
];

const advantages = [
  { from: "Static videos", to: "AI Conversations" },
  { from: "English Only", to: "English + Hindi + Bengali" },
  { from: "Complex Finance", to: "Class 5-Level Explanations" },
  { from: "Only Education", to: "Education + AI + Future Financial Services" },
  { from: "Generic Content", to: "Personalized Learning" },
  { from: "Multiple Platforms", to: "One Integrated Ecosystem" },
];

const roadmap = [
  {
    icon: Check,
    phase: "Phase 1",
    tag: "✅ MVP",
    items:
      "Android App, Web Platform, AI Assistant, Banking Knowledge, Stock Market Knowledge, Loan Education",
  },
  {
    icon: Mic,
    phase: "Phase 2",
    tag: "",
    items:
      "Voice AI, More Indian Languages, Personalized Learning, Gamification",
  },
  {
    icon: Users,
    phase: "Phase 3",
    tag: "",
    items:
      "NBFC Partnerships, Loan Marketplace, Insurance Marketplace, Investment Marketplace",
  },
  {
    icon: Bot,
    phase: "Phase 4",
    tag: "",
    items:
      "AI Wealth Coach, AI Retirement Planner, AI Credit Advisor, Nationwide Expansion",
  },
];

const audiences = [
  { icon: GraduationCap, label: "Students" },
  { icon: HeartHandshake, label: "Women" },
  { icon: Sprout, label: "Farmers" },
  { icon: Factory, label: "MSMEs" },
  { icon: Briefcase, label: "Young Professionals" },
  { icon: Wheat, label: "Rural Communities" },
  { icon: Building2, label: "Tier-2 & Tier-3 Cities" },
  { icon: TrendingUp, label: "First-Time Investors" },
];

const founders = [
  {
    name: "Akash Bauri",
    role: "Founder, CEO & Founding AI Engineer",
    initials: "AB",
    skills: [
      "AI",
      "ML",
      "LLMs",
      "RAG Systems",
      "Backend Development",
      "Product Development",
    ],
    contact: true,
  },
  {
    name: "Jyoti Bouri",
    role: "Co-Founder",
    initials: "JB",
    skills: ["Operations", "Finance Support", "Community Outreach"],
    contact: false,
  },
];

const currentProgress = [
  "Functional MVP",
  "AI Financial Assistant",
  "Banking Knowledge Base",
  "Stock Market Knowledge Base",
  "Loan Education Modules",
  "Android & Web Application",
  "Multilingual AI Support",
];

const lookingFor = [
  "Incubation Support",
  "Mentorship",
  "Banking & NBFC Partnerships",
  "Strategic Investors",
  "Government Grants",
  "Pilot Projects",
  "Product Validation",
  "Industry Partnerships",
];

/* -------------------------------- animation -------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Reveal({ children, i = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={i}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8CD6E]">
      <Sparkles size={13} />
      {children}
    </span>
  );
}

function GoldText({ children }) {
  return (
    <span className="bg-gradient-to-r from-[#F6E7B2] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

/* --------------------------------- page --------------------------------- */

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0A0C10] text-[#F2F1EC]">
      <style>{`
        @keyframes lp-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes lp-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .lp-grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%);
        }
      `}</style>

      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[820px]">
        <div className="lp-grid-bg absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.10] blur-[130px]" />
        <div className="absolute top-40 right-[-120px] h-[360px] w-[360px] rounded-full bg-emerald-500/[0.06] blur-[110px]" />
      </div>

      {/* ------------------------------- nav ------------------------------- */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: "rgba(10,12,16,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(212,175,55,0.15)",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={38} />
            <div className="leading-tight">
              <div className="text-[1.08rem] font-semibold text-[#F2F1EC]">
                APPNA FINANCE
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Learn · Grow · Prosper
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#problem" className="transition hover:text-white">
              Problem
            </a>
            <a href="#solution" className="transition hover:text-white">
              Solution
            </a>
            <a href="#roadmap" className="transition hover:text-white">
              Roadmap
            </a>
            <a href="#founders" className="transition hover:text-white">
              Founders
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="/hub"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#F6E7B2] to-[#C9A227] px-5 py-2.5 text-sm font-semibold text-[#0A0C10] transition hover:brightness-110 md:inline-flex"
          >
            Start Learning
            <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      {/* ------------------------------- hero ------------------------------- */}
      <section
        id="top"
        className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-16"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Learn • Invest • Borrow • Grow
              </span>
            </Reveal>

            <Reveal i={1}>
              <h1
                className={`${display.className} mt-6 text-[52px] leading-[1.05] md:text-7xl`}
              >
                <GoldText>APPNA FINANCE</GoldText>
              </h1>
            </Reveal>

            <Reveal i={2}>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/80">
                AI-Powered Multilingual Financial Education & Responsible
                Digital Lending Platform
              </p>
            </Reveal>

            <Reveal i={3}>
              <div className="mt-7 space-y-2 text-sm text-white/60">
                <p>
                  <span className="font-semibold text-white/85">Founder:</span>{" "}
                  Akash Bauri — Founder, CEO & Founding AI Engineer
                </p>
                <p>
                  <span className="font-semibold text-white/85">
                    Co-Founder:
                  </span>{" "}
                  Jyoti Bouri
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#D4AF37]" />
                  Chirkunda, Dhanbad, Jharkhand, India
                </p>
              </div>
            </Reveal>

            <Reveal i={4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/hub"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6E7B2] to-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#0A0C10] shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition hover:brightness-110"
                >
                  Start Learning
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#founders"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#D4AF37]/40 hover:text-white"
                >
                  Meet the Founders
                </a>
              </div>
            </Reveal>
          </div>

          {/* hero visual — from deck cover */}
          <Reveal i={2} className="relative">
            <div className="relative mx-auto max-w-[420px]">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">Portfolio Overview</p>
                    <p className="mt-1 text-2xl font-bold tracking-tight">
                      ₹2,45,680.35
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    +6.9% ↑
                  </span>
                </div>

                {/* chart */}
                <svg
                  viewBox="0 0 320 120"
                  className="mt-5 w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="lpArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={GOLD} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,95 C30,88 45,70 70,74 C95,78 110,52 140,55 C170,58 185,38 215,40 C245,42 260,22 320,14 L320,120 L0,120 Z"
                    fill="url(#lpArea)"
                  />
                  <path
                    d="M0,95 C30,88 45,70 70,74 C95,78 110,52 140,55 C170,58 185,38 215,40 C245,42 260,22 320,14"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="320" cy="14" r="4" fill={GOLD} />
                </svg>

                {/* holdings */}
                <div className="mt-5 space-y-3">
                  {[
                    {
                      n: "HDFC Bank",
                      t: "Equity",
                      v: "₹45,623.50",
                      d: "+2.34%",
                    },
                    { n: "Infosys", t: "Equity", v: "₹32,850.00", d: "+1.66%" },
                    {
                      n: "SBI Bluechip Fund",
                      t: "Mutual Fund",
                      v: "₹28,560.75",
                      d: "+2.01%",
                    },
                  ].map((h) => (
                    <div
                      key={h.n}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold">{h.n}</p>
                        <p className="text-[11px] text-white/40">{h.t}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{h.v}</p>
                        <p className="text-[11px] text-emerald-300">{h.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating chips */}
              <div
                className="absolute -left-6 top-24 hidden rounded-2xl border border-white/10 bg-[#12151C]/95 px-4 py-3 shadow-xl sm:block"
                style={{ animation: "lp-float 5s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#D4AF37]/15 text-[#E8CD6E]">
                    <Bot size={16} />
                  </span>
                  <p className="text-xs font-semibold">
                    AI Financial Assistant
                  </p>
                </div>
              </div>
              <div
                className="absolute -right-4 -bottom-5 hidden rounded-2xl border border-white/10 bg-[#12151C]/95 px-4 py-3 shadow-xl sm:block"
                style={{ animation: "lp-float 6s ease-in-out 1s infinite" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <Languages size={16} />
                  </span>
                  <p className="text-xs font-semibold">
                    English · Hindi · Bengali
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ marquee ------------------------------ */}
      {/* <div className="relative z-10 border-y border-white/5 bg-white/[0.02] py-4">
        <div className="flex overflow-hidden">
          <div
            className="flex shrink-0 items-center gap-10 pr-10 text-sm font-semibold tracking-[0.25em] text-white/30"
            style={{ animation: "lp-marquee 26s linear infinite" }}
          >
            {Array.from({ length: 2 }).map((_, dup) =>
              [
                "LEARN",
                "INVEST",
                "BORROW",
                "GROW",
                "ENGLISH",
                "हिंदी",
                "বাংলা",
              ].map((w) => (
                <span key={`${dup}-${w}`} className="flex items-center gap-10">
                  {w} <span className="text-[#D4AF37]/60">✦</span>
                </span>
              )),
            )}
          </div>
        </div>
      </div> */}

      {/* ------------------------------ problem ------------------------------ */}
      <section
        id="problem"
        className="relative z-10 border-b border-white/5 bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:px-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>The Problem</SectionTag>
            </Reveal>
            <Reveal i={1}>
              <h2
                className={`${display.className} mt-5 text-3xl leading-tight md:text-4xl`}
              >
                India is one of the world's fastest-growing digital economies,
                yet{" "}
                <GoldText>
                  millions still struggle with financial literacy.
                </GoldText>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-6 leading-relaxed text-white/60">
                People often do not understand banking, the stock market, mutual
                funds & SIPs, loans & credit, insurance, taxes, government
                schemes, and personal finance.
              </p>
            </Reveal>
            <Reveal i={3}>
              <p className="mt-5 rounded-2xl border border-red-400/15 bg-red-400/[0.05] p-5 text-sm leading-relaxed text-white/70">
                As a result, many people make poor financial decisions, fall
                into debt traps, become victims of financial fraud, and miss
                opportunities to build long-term wealth.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {problemTopics.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} i={i}>
                <div className="flex h-full items-center gap-3.5 rounded-2xl border border-white/8 bg-[#0E1117] px-5 py-4 transition hover:border-[#D4AF37]/25">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#E8CD6E]">
                    <Icon size={18} />
                  </span>
                  <p className="text-sm font-semibold text-white/85">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- market opportunity --------------------------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal className="text-center">
          <SectionTag>Market Opportunity</SectionTag>
        </Reveal>
        <Reveal i={1}>
          <h2
            className={`${display.className} mx-auto mt-5 max-w-2xl text-center text-3xl md:text-4xl`}
          >
            India is experiencing a <GoldText>financial revolution</GoldText>
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketOpportunity.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              i={i}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="flex h-full items-center gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 transition hover:border-[#D4AF37]/25 hover:bg-white/[0.05]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#E8CD6E]">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-semibold text-white/85">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ solution ------------------------------ */}
      <section
        id="solution"
        className="relative z-10 border-y border-white/5 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <Reveal className="text-center">
            <SectionTag>Our Solution</SectionTag>
          </Reveal>
          <Reveal i={1}>
            <h2
              className={`${display.className} mx-auto mt-5 max-w-3xl text-center text-3xl md:text-4xl`}
            >
              An <GoldText>AI-powered multilingual</GoldText> financial platform
              combining
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
            {solutionItems.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} i={i}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0E1117] px-6 py-4 transition hover:-translate-y-0.5 hover:border-[#D4AF37]/30">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37]/25 to-[#D4AF37]/5 text-[#E8CD6E]">
                    <Icon size={18} />
                  </span>
                  <p className="font-semibold text-white/90">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* vision */}
          <Reveal i={2}>
            <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-r from-[#D4AF37]/[0.10] via-[#D4AF37]/[0.05] to-transparent p-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#E8CD6E]">
                Vision
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {visionSteps.map((step, i) => (
                  <div key={step} className="relative text-center">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-sm font-bold text-[#E8CD6E]">
                      {i + 1}
                    </span>
                    <p className="mt-3 text-sm font-semibold">{step}</p>
                    {i < visionSteps.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="absolute -right-2.5 top-2.5 hidden text-[#D4AF37]/50 md:block"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- product ecosystem --------------------------- */}
      <section
        id="ecosystem"
        className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8"
      >
        <Reveal className="text-center">
          <SectionTag>Product Ecosystem & Technology</SectionTag>
        </Reveal>
        <Reveal i={1}>
          <h2
            className={`${display.className} mx-auto mt-5 max-w-2xl text-center text-3xl md:text-4xl`}
          >
            Product <GoldText>Ecosystem</GoldText>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ecosystem.map(({ icon: Icon, title, tag, desc }, i) => (
            <Reveal
              key={title}
              i={i}
              className={
                i < 3 ? "lg:col-span-2" : "sm:col-span-1 lg:col-span-3"
              }
            >
              <div className="group h-full rounded-2xl border border-white/8 bg-[#0E1117] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/30">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37]/25 to-[#D4AF37]/5 text-[#E8CD6E] transition group-hover:from-[#D4AF37]/40">
                    <Icon size={22} />
                  </span>
                  {tag && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        tag === "Free"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-[#D4AF37]/10 text-[#E8CD6E]"
                      }`}
                    >
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ technology ------------------------------ */}
      <section className="relative z-10 border-t border-white/5 mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>Technology Stack</SectionTag>
            </Reveal>
            <Reveal i={1}>
              <h2
                className={`${display.className} mt-5 text-3xl leading-tight md:text-4xl`}
              >
                Built on a <GoldText>modern AI stack</GoldText>
              </h2>
            </Reveal>
            <div className="mt-9 space-y-4">
              {techStack.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} i={i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#E8CD6E]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="mt-1 text-sm text-white/55">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionTag>AI Architecture</SectionTag>
            </Reveal>
            <Reveal i={1}>
              <h2
                className={`${display.className} mt-5 text-3xl leading-tight md:text-4xl`}
              >
                How the <GoldText>AI assistant</GoldText> works
              </h2>
            </Reveal>
            <div className="mt-9 space-y-3">
              {aiFlow.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} i={i}>
                  <div>
                    <div
                      className="flex items-center gap-4 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/[0.12] to-transparent px-6 py-4"
                      style={{ marginLeft: `${i * 8}%` }}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#E8CD6E]">
                        <Icon size={18} />
                      </span>
                      <p className="font-semibold">{label}</p>
                      <ArrowRight
                        size={16}
                        className="ml-auto text-[#D4AF37]/60"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- why financial literacy matters ----------------------- */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <Reveal className="text-center">
            <SectionTag>Why Financial Literacy Matters</SectionTag>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal i={1}>
              <div className="h-full rounded-3xl border border-white/8 bg-[#0E1117] p-8">
                <h3 className={`${display.className} text-2xl`}>
                  Why Financial Literacy is <GoldText>Important</GoldText>
                </h3>
                <p className="mt-3 text-sm text-white/55">
                  Financial literacy empowers individuals to:
                </p>
                <div className="mt-5 space-y-3">
                  {literacyPoints.map((p) => (
                    <div
                      key={p}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                        <Check size={12} />
                      </span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal i={2}>
              <div className="h-full rounded-3xl border border-white/8 bg-[#0E1117] p-8">
                <h3 className={`${display.className} text-2xl`}>
                  Why the Stock Market <GoldText>Matters</GoldText>
                </h3>
                <p className="mt-3 text-sm text-white/55">
                  The stock market plays a critical role in India's economic
                  growth. It helps:
                </p>
                <div className="mt-5 space-y-3">
                  {stockMarketPoints.map((p) => (
                    <div
                      key={p}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#D4AF37]/10 text-[#E8CD6E]">
                        <Check size={12} />
                      </span>
                      {p}
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-white/5 pt-5 text-sm leading-relaxed text-white/55">
                  A financially literate population contributes to sustainable
                  economic development and inclusive growth.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal i={3}>
            <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/[0.10] to-transparent p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8CD6E]">
                APPNA FINANCE Vision
              </p>
              <p
                className={`${display.className} mx-auto mt-4 max-w-2xl text-xl leading-relaxed md:text-2xl`}
              >
                Make financial education simple, practical, and accessible so
                every Indian can: Learn → Understand → Invest Responsibly → Grow
                Financially
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------- why appna ---------------------------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal className="text-center">
          <SectionTag>Competitive Advantage</SectionTag>
        </Reveal>
        <Reveal i={1}>
          <h2
            className={`${display.className} mx-auto mt-5 max-w-2xl text-center text-3xl md:text-4xl`}
          >
            Why <GoldText>APPNA FINANCE?</GoldText>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ from, to }, i) => (
            <Reveal key={to} i={i}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/8 bg-[#0E1117] p-6">
                <p className="text-sm text-white/40 line-through decoration-white/25">
                  {from}
                </p>
                <div className="mt-2 flex items-center gap-2.5">
                  <ArrowRight size={15} className="shrink-0 text-[#D4AF37]" />
                  <p className="font-semibold text-white/90">{to}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ roadmap ------------------------------ */}
      <section
        id="roadmap"
        className="relative z-10 border-y border-white/5 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <Reveal className="text-center">
            <SectionTag>Product Roadmap</SectionTag>
          </Reveal>
          <Reveal i={1}>
            <h2
              className={`${display.className} mx-auto mt-5 max-w-2xl text-center text-3xl md:text-4xl`}
            >
              Where we are — and <GoldText>where we're going</GoldText>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map(({ icon: Icon, phase, tag, items }, i) => (
              <Reveal key={phase} i={i}>
                <div className="h-full rounded-2xl border border-white/8 bg-[#0E1117] p-7 transition hover:border-[#D4AF37]/30">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ${
                      i === 0
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-[#D4AF37]/10 text-[#E8CD6E]"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">
                    {phase}{" "}
                    {tag && (
                      <span className="text-sm font-semibold text-emerald-300">
                        {tag}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {items}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- social impact & founding story ---------------------- */}
      <section
        id="founders"
        className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8"
      >
        <Reveal className="text-center">
          <SectionTag>Social Impact & Founding Story</SectionTag>
        </Reveal>
        <Reveal i={1}>
          <h2
            className={`${display.className} mx-auto mt-5 max-w-3xl text-center text-3xl md:text-4xl`}
          >
            Building from <GoldText>Jharkhand</GoldText> for Every Indian
          </h2>
        </Reveal>
        <Reveal i={2}>
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-white/60">
            APPNA FINANCE is founded in Chirkunda, Dhanbad, Jharkhand with a
            vision to make quality financial education accessible to everyone.
          </p>
        </Reveal>

        {/* our commitment */}
        <Reveal i={3}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/8 bg-white/[0.03] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8CD6E]">
              Our Commitment
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              We are proud founders from the Scheduled Caste (SC) community. Our
              background has strengthened our commitment to building an
              inclusive platform where financial knowledge is accessible
              regardless of language, location, or socioeconomic background.
            </p>
          </div>
        </Reveal>

        {/* founder cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} i={i}>
              <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-[#0E1117] p-8 transition hover:border-[#D4AF37]/30">
                <div className="flex items-center gap-5">
                  <span
                    className={`${display.className} grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#F6E7B2] to-[#B8860B] text-xl font-semibold text-[#0A0C10]`}
                  >
                    {f.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{f.name}</h3>
                    <p className="mt-1 text-sm text-[#E8CD6E]">{f.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Expertise
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {f.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {f.contact && (
                  <div className="mt-auto space-y-2.5 pt-7">
                    <a
                      href="mailto:akashbauri16021998@gmail.com"
                      className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#E8CD6E]"
                    >
                      <Mail size={15} className="text-[#D4AF37]" />
                      akashbauri16021998@gmail.com
                    </a>
                    <a
                      href="tel:+918002778855"
                      className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#E8CD6E]"
                    >
                      <Phone size={15} className="text-[#D4AF37]" />
                      +91 8002778855
                    </a>
                    <a
                      href="https://www.linkedin.com/in/akash-bauri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#E8CD6E]"
                    >
                      <Linkedin size={15} className="text-[#D4AF37]" />
                      linkedin.com/in/akash-bauri
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* mission: empower */}
        <Reveal i={2}>
          <p className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#E8CD6E]">
            Our Mission: Empower
          </p>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {audiences.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} i={i}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center transition hover:border-[#D4AF37]/25 hover:bg-white/[0.05]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#E8CD6E]">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-semibold text-white/85">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal i={3}>
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/[0.10] to-transparent p-8 text-center">
            <p
              className={`${display.className} mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl`}
            >
              To build India's most trusted AI-powered multilingual financial
              education platform, helping millions of Indians learn, invest
              responsibly, borrow wisely, and achieve financial independence.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ----------------- current progress & we are looking for ----------------- */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:px-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>Current Progress</SectionTag>
            </Reveal>
            <Reveal i={1}>
              <h2
                className={`${display.className} mt-5 text-3xl leading-tight md:text-4xl`}
              >
                What we've <GoldText>already built</GoldText>
              </h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {currentProgress.map((p, i) => (
                <Reveal key={p} i={i}>
                  <div className="flex items-center gap-3.5 rounded-2xl border border-white/8 bg-[#0E1117] px-5 py-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <Check size={14} />
                    </span>
                    <p className="text-sm font-semibold text-white/85">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionTag>We Are Looking For</SectionTag>
            </Reveal>
            <Reveal i={1}>
              <h2
                className={`${display.className} mt-5 text-3xl leading-tight md:text-4xl`}
              >
                Partners in the <GoldText>journey ahead</GoldText>
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {lookingFor.map((p, i) => (
                <Reveal key={p} i={i}>
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-3.5 transition hover:border-[#D4AF37]/25">
                    <ArrowRight size={14} className="shrink-0 text-[#D4AF37]" />
                    <p className="text-sm font-semibold text-white/85">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- contact ------------------------------- */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#151006] via-[#0E1117] to-[#0A0C10] px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[100px]" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-[#E8CD6E]">
              Learn • Invest • Borrow • Grow
            </p>
            <h2
              className={`${display.className} relative mx-auto mt-5 max-w-3xl text-3xl md:text-5xl`}
            >
              Thank You — <GoldText>APPNA FINANCE</GoldText>
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-white/60">
              Building India's AI-Powered Multilingual Financial Education &
              Responsible Financial Services Ecosystem
            </p>
            <p className="relative mt-8 font-semibold">
              Akash Bauri{" "}
              <span className="font-normal text-white/55">
                — Founder, CEO & Founding AI Engineer
              </span>
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:akashbauri16021998@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6E7B2] to-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#0A0C10] shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition hover:brightness-110"
              >
                <Mail size={16} />
                akashbauri16021998@gmail.com
              </a>
              <a
                href="tel:+918002778855"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#D4AF37]/40"
              >
                <Phone size={16} />
                +91 8002778855
              </a>
              <a
                href="https://www.linkedin.com/in/akash-bauri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#D4AF37]/40"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------- footer ------------------------------- */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
          <div className="flex items-center gap-2.5">
            <Logo size={32} />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[#F2F1EC]">
                APPNA FINANCE
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Learn · Grow · Prosper
              </div>
            </div>
          </div>
          <p className="flex items-center gap-2 text-xs text-white/40">
            <MapPin size={12} />
            Chirkunda, Dhanbad, Jharkhand, India
          </p>
          <p className="text-xs text-white/40">
            Learn • Invest • Borrow • Grow
          </p>
        </div>
      </footer>
    </div>
  );
}
