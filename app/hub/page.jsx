"use client";

import Link from "next/link";
import {
  Landmark,
  TrendingUp,
  Wallet,
  Briefcase,
  Sprout,
  Youtube,
  PlayCircle,
  ChevronRight,
  Sparkles,
  Mic,
  FileText,
  Bot,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react";
import IconTile from "@/components/IconTile";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import GoldButton from "@/components/GoldButton";

const WHY_LEARN = [
  {
    icon: BookOpen,
    title: "Beginner Friendly",
    subtitle: "Simple Explanations",
    desc: "Demystifying complex terminology into simple, everyday language that anyone can easily follow.",
  },
  {
    icon: Landmark,
    title: "Practical Finance",
    subtitle: "Real-world Examples",
    desc: "No dry theory. Learn with practical real-life case studies, calculation steps, and realistic scenarios.",
  },
  {
    icon: Bot,
    title: "AI Powered",
    subtitle: "Smart Learning",
    desc: "Complement your video watching experience with real-time interactive AI chats and tailored conceptual breakdowns.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    subtitle: "Regional Reach",
    desc: "Breaking linguistic barriers. Highly specialized finance modules explained clearly in English, Hindi, and Bengali.",
  },
];

const CATEGORIES = [
  {
    icon: Landmark,
    title: "Banking",
    items: [
      "Savings Account",
      "Current Account",
      "Fixed Deposits (FD)",
      "Recurring Deposits (RD)",
      "Unified Payments Interface (UPI)",
      "Debit Cards vs. Credit Cards",
      "Internet Banking Basics",
      "Mobile Banking Safety",
      "Financial Fraud Awareness",
    ],
  },
  {
    icon: TrendingUp,
    title: "Stock Market",
    items: [
      "Stock Market Basics",
      "NSE & BSE Exchanges",
      "Initial Public Offerings (IPO)",
      "Mutual Funds Explainer",
      "Systematic Investment Plans (SIP)",
      "Risk Management Techniques",
      "Portfolio Diversification",
      "Long-Term Value Investing",
    ],
  },
  {
    icon: Wallet,
    title: "Personal Finance",
    items: [
      "Zero-Based Budgeting",
      "Smart Saving Strategies",
      "Building Emergency Funds",
      "Life & Health Insurance",
      "Tax Planning (Old vs. New)",
      "Defining Smart Financial Goals",
      "Early Retirement Planning",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Finance",
    items: [
      "Understanding MSMEs",
      "Securing Business Loans",
      "Strategic Government Schemes",
      "Startup Seed Capital",
      "Fundamentals of Entrepreneurship",
      "Drafting a Bulletproof Business Plan",
    ],
  },
  {
    icon: Sprout,
    title: "Agriculture Finance",
    items: [
      "Kisan Credit Card (KCC)",
      "Agriculture & Crop Loans",
      "Pradhan Mantri Fasal Bima",
      "Government Subsidies & Schemes",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    step: "Step 1",
    icon: Landmark,
    title: "Learn Banking",
    desc: "Understand daily transactions, accounts, UPI, safe digital habits, and bank integrations.",
  },
  {
    step: "Step 2",
    icon: Wallet,
    title: "Understand Personal Finance",
    desc: "Master the art of budgeting, dynamic saving, taking the right insurance, and emergency shield creation.",
  },
  {
    step: "Step 3",
    icon: TrendingUp,
    title: "Learn Stock Market",
    desc: "Get comfortable with stock indices, shares, and understanding equity instruments securely.",
  },
  {
    step: "Step 4",
    icon: Sparkles,
    title: "Understand Investments",
    desc: "Explore mutual funds, Systematic Investment Plans (SIP), asset allocation, and balanced risk profiles.",
  },
  {
    step: "Step 5",
    icon: Sprout,
    title: "Build Long-Term Wealth",
    desc: "Deploy modern compounding portfolios, optimize taxes, and map strategies for long-term goals.",
  },
];

const LEARN_PILLS = [
  "Banking",
  "Stock Market",
  "Mutual Funds",
  "Insurance",
  "Government Schemes",
  "Loans",
  "Business Finance",
  "Personal Finance",
  "Investment Basics",
  "Digital Payments",
  "Financial Planning",
  "AI Finance",
];

const FUTURE_INNOVATIONS = [
  {
    icon: Mic,
    title: "Voice Learning",
    desc: "Listen to high-definition summary notes and curated lectures on the go without looking at your screen.",
  },
  {
    icon: FileText,
    title: "Download Notes",
    desc: "Instantly fetch simplified PDF cheat sheets, formula tables, and infographics for quick revision.",
  },
  {
    icon: Bot,
    title: "AI Video Recs",
    desc: "Intelligent matching algorithms suggesting exactly what video to watch next based on your chat history.",
  },
];

export default function HubPage() {
  const scrollToCategories = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-10 space-y-14">
      {/* 1. HERO SECTION */}
      <AnimatedSection>
        <div
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,27,34,0.9) 0%, rgba(15,17,22,0.95) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            {/* <IconTile icon={PlayCircle} boxed={false} size={22} /> */}
            <SectionEyebrow icon={PlayCircle}>
              Official Learning Hub
            </SectionEyebrow>
          </div>
          <h1
            className="text-[2.2rem] md:text-[3rem] font-semibold text-[#F2F1EC] mt-1"
            style={{
              fontFamily:
                "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            }}
          >
            Learning Hub
          </h1>
          <p
            className="text-[1.2rem] font-semibold mt-2 tracking-wide"
            style={{ color: "#D4AF37" }}
          >
            Learn Finance Visually with APPNA FINANCE
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-[15px] md:text-[16px] text-[#A9AEB6] leading-relaxed">
            Welcome to the official APPNA FINANCE Learning Hub. Learn Banking,
            Stock Market, Personal Finance, Government Schemes, and Business
            Finance through simple, beginner-friendly educational videos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GoldButton onClick={scrollToCategories} icon={PlayCircle}>
              Explore Topics
            </GoldButton>
            <a
              href="https://youtube.com/@akashlearninghub-m7n"
              target="_blank"
              rel="noreferrer"
            >
              <GoldButton variant="outline" icon={Youtube}>
                Visit YouTube Channel
              </GoldButton>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* 2. WHY LEARN WITH APPNA FINANCE */}
      <AnimatedSection delay={0.15}>
        <section>
          <div className="mb-6">
            <SectionEyebrow icon={Sparkles}>
              Why Learn with APPNA FINANCE?
            </SectionEyebrow>
            <h2 className="text-[1.6rem] font-semibold text-[#F2F1EC] mt-1">
              Built for Practical Financial Clarity
            </h2>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {WHY_LEARN.map((w, i) => (
              <StaggerItem key={i}>
                <Card className="h-full flex flex-col justify-between !p-5">
                  <div>
                    <IconTile icon={w.icon} size={22} />
                    <div className="font-semibold text-[1.05rem] text-[#D4AF37]">
                      {w.title}
                    </div>
                    <div className="text-[13px] font-medium text-[#F2F1EC] mt-0.5">
                      {w.subtitle}
                    </div>
                    <p className="text-[12.5px] mt-2.5 leading-relaxed text-[#808080]">
                      {w.desc}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </AnimatedSection>

      {/* 3. LEARNING CATEGORIES (CORE FINANCIAL PILLARS) */}
      <AnimatedSection delay={0.2}>
        <section id="categories">
          <div className="mb-6">
            <SectionEyebrow icon={FileText}>
              Core Financial Pillars
            </SectionEyebrow>

            <p className="text-[14px] text-[#A9AEB6] mt-1">
              Browse through our carefully structured pathways designed to take
              you from beginner to financially confident.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {CATEGORIES.slice(0, 3).map((cat, i) => (
              <StaggerItem key={i}>
                <Card className="h-full flex flex-col justify-between !p-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
                      <IconTile icon={cat.icon} size={22} />
                      <h3 className="font-bold text-[1.15rem] text-[#D4AF37]">
                        {cat.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] flex items-start gap-2 text-[#E0E0E0] leading-snug"
                        >
                          <span className="text-[#D4AF37] shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href={`/assistant?q=${encodeURIComponent(`Explain ${cat.title}`)}`}
                    >
                      <span className="text-[12px] font-medium text-[#D4AF37] hover:underline flex items-center gap-1">
                        Ask AI about {cat.title} <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-2 gap-5 mt-5">
            {CATEGORIES.slice(3).map((cat, i) => (
              <StaggerItem key={i}>
                <Card className="h-full flex flex-col justify-between !p-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
                      <IconTile icon={cat.icon} size={22} />
                      <h3 className="font-bold text-[1.15rem] text-[#D4AF37]">
                        {cat.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] flex items-start gap-2 text-[#E0E0E0] leading-snug"
                        >
                          <span className="text-[#D4AF37] shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href={`/assistant?q=${encodeURIComponent(`Explain ${cat.title}`)}`}
                    >
                      <span className="text-[12px] font-medium text-[#D4AF37] hover:underline flex items-center gap-1">
                        Ask AI about {cat.title} <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </AnimatedSection>

      {/* 4. LEARNING ROADMAP */}
      <AnimatedSection delay={0.25}>
        <section>
          <div className="mb-6">
            <SectionEyebrow icon={Landmark}>Recommended Roadmap</SectionEyebrow>
            <p className="text-[14px] text-[#A9AEB6] mt-1">
              Follow this structured milestone timeline to progressively elevate
              your financial intelligence.
            </p>
          </div>

          <div>
            {ROADMAP_STEPS.map((r, idx) => (
              <div key={r.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />
                  {idx < ROADMAP_STEPS.length - 1 && (
                    <span className="w-px flex-1 bg-[#D4AF37]/25" />
                  )}
                </div>
                <div className={idx < ROADMAP_STEPS.length - 1 ? "pb-6" : ""}>
                  <h3 className="text-[15px] font-semibold text-[#D4AF37]">
                    {r.step}: {r.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#9A9A9A]">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* 5. OFFICIAL YOUTUBE CHANNEL */}
      <AnimatedSection delay={0.3}>
        <section>
          <SectionEyebrow icon={Youtube}>Primary Media Resource</SectionEyebrow>
          <Card
            hover={false}
            className="!p-8 mt-4"
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(26,29,36,0.95)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="text-4xl">📺</div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#D4AF37]">
                    Official APPNA FINANCE Learning Hub
                  </h3>
                  <p className="text-[14px] text-[#FFFFFF] mt-1">
                    Watch beginner-friendly financial education videos designed
                    strictly to match modern Indian market scenarios.
                  </p>
                  <p className="text-[13px] text-[#808080] mt-1">
                    Channel Handle:{" "}
                    <strong className="text-[#FFFFFF]">
                      @akashlearninghub-m7n
                    </strong>
                  </p>
                </div>
              </div>
              <a
                href="https://youtube.com/@akashlearninghub-m7n"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <GoldButton icon={Youtube} className="whitespace-nowrap">
                  ▶ Visit Official YouTube Channel
                </GoldButton>
              </a>
            </div>
          </Card>
        </section>
      </AnimatedSection>

      {/* 6. WHAT YOU WILL LEARN */}
      <AnimatedSection delay={0.35}>
        <section>
          <SectionEyebrow icon={BookOpen}>What You Will Learn</SectionEyebrow>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {LEARN_PILLS.map((item) => (
              <span
                key={item}
                className="text-[13px] px-3.5 py-1.5 rounded-full font-medium"
                style={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  color: "#F2F1EC",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* 7. WHY THIS MATTERS */}
      <AnimatedSection delay={0.4}>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            borderLeft: "4px solid #D4AF37",
            background: "rgba(26, 29, 36, 0.85)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderLeftWidth: "4px",
          }}
        >
          <h3 className="text-[1.15rem] font-bold text-[#D4AF37]">
            🎓 Financial Education for Every Indian
          </h3>
          <p className="text-[14px] text-[#E0E0E0] leading-relaxed mt-2">
            APPNA FINANCE believes financial education should be simple,
            trustworthy, multilingual, and accessible. Our mission is to help
            students, farmers, professionals, entrepreneurs, and families make
            informed financial decisions through AI-powered learning modules and
            curated educational videos.
          </p>
        </div>
      </AnimatedSection>

      {/* 8. UPCOMING LEARNING INNOVATIONS */}
      <AnimatedSection delay={0.45}>
        <section>
          <div className="mb-6">
            <SectionEyebrow icon={Sparkles}>
              Upcoming Learning Innovations
            </SectionEyebrow>
            <h2 className="text-[1.5rem] font-semibold text-[#F2F1EC] mt-1">
              Next-Generation EdTech Features
            </h2>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {FUTURE_INNOVATIONS.map((feat, i) => (
              <StaggerItem key={i}>
                <Card className="h-full flex flex-col justify-between !p-6">
                  <div>
                    <div className="flex items-center gap-2 text-[1.1rem] font-bold text-[#D4AF37] mb-2">
                      <feat.icon size={20} />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-[13px] text-[#B0B0B0] leading-relaxed mt-2">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-5">
                    <span
                      className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full text-[#D4AF37]"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </AnimatedSection>
    </div>
  );
}
