"use client";

import Link from "next/link";
import {
  Landmark,
  TrendingUp,
  ShieldCheck,
  Wallet,
  GraduationCap,
  Bot,
  Sprout,
  Briefcase,
  Sparkles,
  ChevronRight,
  ArrowRight,
  PlayCircle,
  Percent,
  Calculator,
  Cpu,
  Globe,
  MessageSquare,
  Users,
  CreditCard,
  BarChart2,
  Zap,
} from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import GoldButton from "@/components/GoldButton";
import Pill from "@/components/Pill";
import StatTicker from "@/components/StatTicker";
import LedgerStrip from "@/components/LedgerStrip";
import IconTile from "@/components/IconTile";

const services = [
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Contextual, conversational answers that untangle financial terms and calculations on demand.",
  },
  {
    icon: Landmark,
    title: "Banking",
    desc: "Savings accounts, deposit frameworks, and everyday banking — explained plainly.",
  },
  {
    icon: TrendingUp,
    title: "Stock Market",
    desc: "Equities, compounding, indices, and disciplined long-term strategy fundamentals.",
  },
  {
    icon: Wallet,
    title: "Loans & EMIs",
    desc: "Compound interest, EMIs, and sustainable debt management, without the fine-print fog.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    desc: "Clear breakdowns of crop, life, and health cover so families stay prepared.",
  },
  {
    icon: GraduationCap,
    title: "Learning Hub",
    desc: "Structured pathways built for students, MSMEs, and rural households alike.",
  },
];

const reasons = [
  {
    title: "Financial Education",
    desc: "Structured modules built around long-term concepts — no jargon, no shortcuts.",
  },
  {
    title: "AI-Powered Learning",
    desc: "Guidance generated dynamically around your questions and local context.",
  },
  {
    title: "Multilingual Support",
    desc: "Breaking language barriers across English, Hindi, and Bengali.",
  },
];

// Who we serve with icons
const whoServe = [
  { icon: GraduationCap, label: "Students" },
  { icon: Sprout, label: "Farmers" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Landmark, label: "MSMEs" },
  { icon: Users, label: "Families" },
  { icon: TrendingUp, label: "First-Time Investors" },
];

const categories = [
  { icon: Landmark, label: "Banking" },
  { icon: TrendingUp, label: "Stock Market" },
  { icon: Wallet, label: "Personal Finance" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Briefcase, label: "Loans & EMIs" },
  { icon: Sprout, label: "Govt Schemes" },
];

const quickStarters = [
  { icon: CreditCard, cat: "Credit", q: "How to improve CIBIL Score?" },
  { icon: BarChart2, cat: "Wealth", q: "Explain SIP." },
  { icon: Landmark, cat: "Banking", q: "What is a Savings Account?" },
  { icon: Zap, cat: "UPI", q: "What is UPI?" },
];

export default function HomePage() {
  return (
    <div className="space-y-16 py-6">
      {/* HERO */}
      <section className="pt-10 md:pt-16 pb-6 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <AnimatedSection direction="up" distance={30}>
          <h1 className="text-[2.6rem] md:text-[3.5rem] leading-[1.04] font-semibold text-[#F2F1EC]">
            AI-Powered
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#F4C430,#D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Financial Education Platform.
            </span>
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed max-w-xl text-[#A9AEB6]">
            Making Financial Knowledge Simple, Trustworthy, and Accessible for
            Every Indian. Start navigating your educational journey with smart,
            localized technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/hub">
              <GoldButton icon={Sparkles}>Start Learning</GoldButton>
            </Link>
            <Link href="/calculators">
              <GoldButton variant="outline" icon={Calculator}>
                Financial Calculators
              </GoldButton>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.15}>
          <Card hover={false} className="!p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] tracking-[0.18em] uppercase font-mono text-[#8A8F98]">
                Platform Ledger
              </span>
              <Percent size={16} color="#D4AF37" />
            </div>
            <LedgerStrip />
            <div className="grid grid-cols-2 gap-3 mt-7">
              <StatTicker value="50+" label="Topics" />
              <StatTicker value="3" label="Languages (EN, HI, BN)" />
              <StatTicker value="24/7" label="AI Assistant" />
              <StatTicker value="100%" label="Free Access" />
            </div>
          </Card>
        </AnimatedSection>
      </section>

      {/* QUICK STARTERS PREVIEW SECTION */}
      <AnimatedSection delay={0.2}>
        <div className="rounded-2xl p-6 md:p-8 border border-[#D4AF37]/25 bg-gradient-to-r from-[#171B22]/90 to-[#0F1116]/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <SectionEyebrow icon={MessageSquare}>Instant Answers</SectionEyebrow>
              <h2 className="text-[1.5rem] font-semibold text-[#F2F1EC]">
                Try AI Quick Starters
              </h2>
            </div>
            <Link href="/assistant">
              <GoldButton variant="outline" icon={MessageSquare}>
                Open AI Assistant Studio
              </GoldButton>
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStarters.map((qs, i) => (
              <StaggerItem key={i}>
                <Link href={`/assistant?q=${encodeURIComponent(qs.q)}`}>
                  <div className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/50 bg-[#171B22]/60 border border-white/5 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-[#0F1116] border border-white/5 flex items-center justify-center">
                          <qs.icon size={16} color="#D4AF37" strokeWidth={1.6} />
                        </div>
                        <div className="text-[11.5px] font-semibold text-[#D4AF37]">
                          {qs.cat}
                        </div>
                      </div>

                      <div className="text-[13.5px] mt-3 font-medium text-[#F2F1EC]">
                        {qs.q}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-[12px] text-[#8A8F98] group-hover:text-[#D4AF37]">
                      <span>Ask now</span>
                      <ChevronRight size={14} className="ml-1 text-[#D4AF37]" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* CALCULATORS SPOTLIGHT */}
      <AnimatedSection delay={0.25}>
        <div className="grid md:grid-cols-2 gap-6 items-center rounded-2xl p-8 border border-[#D4AF37]/20 bg-gradient-to-br from-[#12151B] to-[#171B22]">
          <div>
            <SectionEyebrow icon={Calculator}>Financial Calculators</SectionEyebrow>
            <h2 className="text-[1.8rem] font-semibold text-[#F2F1EC] mt-1">
              Smart Decision Calculators
            </h2>
            <p className="mt-3 text-[14.5px] text-[#A9AEB6] leading-relaxed">
              Calculate SIP compounding returns, monthly loan EMIs, income tax
              slab liabilities (FY 2024–25), fixed deposit returns, and Kisan
              Credit Card (KCC) limits instantly.
            </p>
            <div className="mt-6">
              <Link href="/calculators">
                <GoldButton icon={Calculator}>Launch Calculators</GoldButton>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "SIP Wealth", desc: "Compounding projections" },
              { title: "EMI & Debt", desc: "Monthly payment breakdown" },
              { title: "Income Tax", desc: "New vs Old regime" },
              { title: "KCC Farm Credit", desc: "Crop loan limit" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <div className="text-[13px] font-semibold text-[#D4AF37]">
                  {item.title}
                </div>
                <div className="text-[12px] text-[#8A8F98] mt-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SERVICES / OFFERINGS */}
      <AnimatedSection delay={0.3}>
        <section className="py-4">
          <SectionEyebrow icon={Sparkles}>Core Offerings</SectionEyebrow>
          <h2 className="text-[1.9rem] font-semibold mb-8 text-[#F2F1EC]">
            What you can learn here
          </h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <Card className="h-full flex flex-col items-center text-center p-6">
                  <IconTile icon={s.icon} size={18} />
                  <div className="mt-4 text-[1.05rem] font-semibold text-[#F2F1EC]">
                    {s.title}
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#8A8F98]">
                    {s.desc}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </AnimatedSection>

      {/* WHY APPNA FINANCE */}
      <AnimatedSection delay={0.35}>
        <section className="py-4">
          <SectionEyebrow icon={BarChart2}>Why APPNA FINANCE</SectionEyebrow>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <div className="text-[1.05rem] font-semibold text-[#D4AF37]">
                    {r.title}
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#A9AEB6]">
                    {r.desc}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </AnimatedSection>

      {/* WHO WE SERVE */}
      <AnimatedSection delay={0.3}>
        <section className="py-2">
          <SectionEyebrow icon={Users}>Who We Serve</SectionEyebrow>
          <div className="mt-3 flex flex-wrap gap-3">
            {whoServe.map((w) => (
              <Pill key={w.label}>
                <IconTile icon={w.icon} boxed={false} size={16} />
                <span className="ml-2">{w.label}</span>
              </Pill>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CATEGORIES */}
      <AnimatedSection delay={0.4}>
        <section className="py-4">
          <SectionEyebrow icon={Wallet}>Financial Categories</SectionEyebrow>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((c, i) => (
              <div
                key={i}
                className="rounded-xl py-6 flex flex-col items-center gap-3 text-center transition-all hover:scale-105 hover:border-[#D4AF37]/40"
                style={{
                  background: "rgba(23,27,34,0.6)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <IconTile icon={c.icon} size={18} />
                <span className="text-[12.5px] font-medium text-[#F2F1EC]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* LEARNING HUB PREVIEW */}
      <AnimatedSection delay={0.45}>
        <section className="py-4">
          <SectionEyebrow icon={PlayCircle}>Learn on Demand</SectionEyebrow>
          <div className="rounded-2xl overflow-hidden relative border border-[#D4AF37]/20">
            <div
              className="p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,12,16,0) 30%, rgba(10,12,16,0.96) 100%), radial-gradient(circle at top right, rgba(212,175,55,0.1), transparent 60%)",
              }}
            >
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded bg-[#D4AF37] text-[#0A0C10]">
                Learn on Demand
              </span>
              <h3 className="text-[1.9rem] font-semibold mt-4 text-[#F2F1EC]">
                Learn finance with APPNA FINANCE
              </h3>
              <p className="mt-2 max-w-2xl text-[14.5px] text-[#A9AEB6]">
                Explore Banking, Stock Market, Personal Finance, Insurance,
                Government Schemes, Mutual Funds, and MSME solutions through
                structured, beginner-friendly lessons.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/hub">
                  <GoldButton icon={PlayCircle}>
                    Explore Learning Hub
                  </GoldButton>
                </Link>
                <Link href="/about">
                  <GoldButton variant="outline" icon={ChevronRight}>
                    About Platform
                  </GoldButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FOUNDER SPOTLIGHT */}
      <AnimatedSection delay={0.5}>
        <section className="py-4">
          <SectionEyebrow icon={Users}>Founder Spotlight</SectionEyebrow>
          <Card hover={false} className="!p-9 md:!p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
              <div>
                <h3 className="text-[1.7rem] font-semibold text-[#F2F1EC]">
                  Akash Bauri
                </h3>
                <div className="text-[12px] tracking-[0.14em] uppercase mt-1 font-mono text-[#D4AF37]">
                  Founder, CEO &amp; Founding AI Engineer
                </div>
                <p className="mt-5 text-[1.05rem] italic leading-relaxed max-w-2xl text-[#D9DBDE]">
                  &ldquo;Our mission is to make financial knowledge simple,
                  trustworthy, and accessible so that every Indian can make
                  better financial decisions with confidence.&rdquo;
                </p>
                <div className="mt-6">
                  <Link href="/about">
                    <GoldButton variant="outline" icon={ArrowRight}>
                      Learn More
                    </GoldButton>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </AnimatedSection>

      {/* MISSION */}
      <AnimatedSection delay={0.55}>
        <section className="py-4 pb-10">
          <div className="rounded-2xl text-center px-8 py-12 border-l-4 border-[#D4AF37] bg-[#171B22]/50 border border-white/5">
            <p
              style={{
                fontFamily:
                  "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                fontSize: "1.35rem",
                fontStyle: "italic",
              }}
              className="max-w-2xl mx-auto text-[#F2F1EC]"
            >
              &ldquo;Making financial knowledge simple, trustworthy, and
              accessible for every Indian.&rdquo;
            </p>
            <div className="mt-6">
              <Link href="/about">
                <GoldButton variant="outline" icon={ChevronRight}>
                  Read Full Story
                </GoldButton>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
