"use client";

import {
  CheckCircle2,
  Mail,
  Globe2,
  Github,
  Linkedin,
  Youtube,
  ShieldCheck,
  BookOpen,
  Bot,
  Landmark,
  TrendingUp,
  Sprout,
  Users,
  Heart,
  Briefcase,
  Cpu,
  Server,
  Database,
  Lock,
  Cloud,
  Monitor,
} from "lucide-react";
import IconTile from "@/components/IconTile";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import GoldButton from "@/components/GoldButton";
import Image from "next/image";

// Content updated to reflect the Streamlit About page copy provided
const missions = [
  {
    icon: BookOpen,
    title: "Financial Education",
    desc: "Easy learning resources covering everyday money management, saving hacks, and investment options.",
  },
  {
    icon: Bot,
    title: "AI Powered Learning",
    desc: "An active AI assistant available 24/7 to solve your questions in simple words without technical jargon.",
  },
  {
    icon: Landmark,
    title: "Banking Knowledge",
    desc: "A clear guide to savings accounts, FD rates, online transactions, and staying safe from financial fraud.",
  },
  {
    icon: TrendingUp,
    title: "Stock Market Basics",
    desc: "Demystifying mutual funds, stocks, indices (NSE/BSE), and smart portfolio investing.",
  },
  {
    icon: ShieldCheck,
    title: "Loans, Insurance & Tax",
    desc: "Understand different loans, find the right insurance cover, and navigate income tax slabs easily.",
  },
  {
    icon: Sprout,
    title: "Government Schemes",
    desc: "Easy instructions explaining rural subsidies, MSME grants, and social welfare programs.",
  },
];

const audience = [
  {
    icon: BookOpen,
    title: "Students",
    desc: "Learn how to build early savings, understand money basics, and prepare for student loan decisions early.",
  },
  {
    icon: Sprout,
    title: "Farmers",
    desc: "Know your options under the Kisan Credit Card (KCC), crop insurance coverage, and farm business grants.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Master active tax savings strategies, asset allocation, smart budget rules, and long-term investment setups.",
  },
  {
    icon: Briefcase,
    title: "MSMEs",
    desc: "Scale your small business with secure startup capital guidance, business loans, and MSME tax benefits.",
  },
  {
    icon: Users,
    title: "Families",
    desc: "Set up robust emergency funds, plan family insurance plans, and organize life goals seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "First-Time Investors",
    desc: "Step confidently into SIPs, mutual funds, and stock markets without fear of complicated jargon.",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Education First",
    desc: "Our central goal is to teach you how money works, not sell you financial products.",
  },
  {
    icon: Bot,
    title: "AI for Good",
    desc: "Applying state-of-the-art conversational AI to solve personal financial confusion on demand.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "Unbiased information without high-interest loans, promotions, or hidden sales scripts.",
  },
  {
    icon: Globe2,
    title: "Financial Inclusion",
    desc: "Reaching remote towns, agricultural zones, and everyday households with regional language dialects.",
  },
  {
    icon: Cpu,
    title: "Purposeful Tech",
    desc: "Designing clear, low-friction interfaces so even a beginner can learn easily.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Structuring our learning flows, roadmaps, and videos around your questions and needs.",
  },
  {
    icon: Users,
    title: "Empowering India",
    desc: "Doing our part to build a financially literate, self-reliant, and money-smart nation.",
  },
];

const techStack = [
  {
    icon: Monitor,
    title: "Frontend",
    name: "Streamlit",
    desc: "Powering a beautiful, responsive, premium glassmorphic visual interface.",
  },
  {
    icon: Server,
    title: "Backend",
    name: "FastAPI (Upcoming)",
    desc: "A high-performance backend processing fast user queries and orchestrations.",
  },
  {
    icon: Cpu,
    title: "AI Engine",
    name: "Vertex AI & Groq LLM",
    desc: "Generating simple, accurate, multilingual answers in seconds.",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    name: "ChromaDB (RAG)",
    desc: "Empowering the AI assistant with verified financial books and guidelines.",
  },
  {
    icon: Lock,
    title: "Security & Auth",
    name: "Supabase (Upcoming)",
    desc: "Ensuring highly secure user logins and personalized tracking metrics.",
  },
  {
    icon: Cloud,
    title: "Infrastructure",
    name: "Google Cloud Platform",
    desc: "Hosting scalable servers to deliver seamless education nationwide.",
  },
];

const roadmapPhases = [
  [
    "Phase 1: Frontend MVP (Completed)",
    "Successfully constructed premium luxury user interfaces, demo chat engines, and structured learning categories.",
  ],
  [
    "Phase 2: AI Assistant Core (In Progress)",
    "Tuning our LLM engines to explain personal finance in highly conversational, simplified regional languages.",
  ],
  [
    "Phase 3: Google Cloud Integration (Upcoming)",
    "Deploying secure database layers, establishing RAG architecture models, and connecting backend routes via FastAPI.",
  ],
  [
    "Phase 4: Voice & Regional Dialect (Upcoming)",
    "Enabling natural vocal inputs and audio responses to make the app friendly for elderly and rural users.",
  ],
  [
    "Phase 5: Automated Document Summarizer (Upcoming)",
    "Enable simple PDF audits to scan complex loan contracts, bank letters, or taxes instantly with AI.",
  ],
  [
    "Phase 6: National Scale Release (Future)",
    "Official platform rollout helping millions across schools, colleges, cooperatives, and small businesses.",
  ],
];

const teamMembers = [
  {
    name: "Akash Bauri",
    role: "Founder, CEO & Founding AI Engineer",
    img: "/akash_bauri.png",
    desc: `Responsible for the overall vision, AI architecture, product strategy, research, backend system design, RAG pipeline, AI agent development, machine learning integration, prompt engineering, and long-term technology roadmap of APPNA FINANCE.`,
  },
  {
    name: "Jyoti Bouri",
    role: "Co-Founder | Operations & Business Support",
    img: "/jyoti_bouri.jpg",
    desc: "Supports business operations, customer relationship management, accounting coordination, financial documentation, administrative planning, partnership support, and organizational growth while helping build a reliable and customer-focused financial education platform.",
  },
  {
    name: "Shanmugapriya Subramani",
    role: "Lead Frontend Engineer",
    img: "/shanmugapriya_subramani.png",
    desc: "Leads frontend architecture and user experience design by developing modern, responsive, and scalable interfaces. Responsible for implementing premium UI components, improving usability, maintaining design consistency, and delivering a seamless learning experience across the APPNA FINANCE platform.",
  },
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "Coming Soon" },
  { icon: Globe2, label: "Website", value: "Coming Soon" },
  { icon: Github, label: "GitHub", value: "Coming Soon" },
  { icon: Linkedin, label: "LinkedIn", value: "Coming Soon" },
  {
    icon: Youtube,
    label: "YouTube Channel",
    value: "https://youtube.com/@akashlearninghub-m7n",
  },
];

export default function AboutPage() {
  return (
    <div className="py-10 space-y-14">
      {/* HERO */}
      <AnimatedSection>
        <div
          className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,27,34,0.9) 0%, rgba(15,17,22,0.95) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <SectionEyebrow icon={BookOpen}>About Us</SectionEyebrow>

          <h1 className="text-[2.2rem] md:text-[2.8rem] font-semibold text-[#F2F1EC] mt-1">
            🏢 About APPNA FINANCE
          </h1>
          <h6 className="font-semibold text-[#D4AF37]">
            Making Financial Knowledge Simple, Trustworthy, and Accessible for
            Every Indian.
          </h6>
          <p className="mt-3 max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-[#A9AEB6]">
            APPNA FINANCE is an AI-powered financial education platform. We help
            students, farmers, professionals, MSMEs, entrepreneurs, families,
            and first-time investors understand money and banking through simple
            explanations, smart AI conversations, and quick educational videos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#mission">
              <GoldButton icon={ShieldCheck}>Explore Our Mission</GoldButton>
            </a>
            <a href="#founding-team">
              <GoldButton variant="outline" icon={Youtube}>
                Meet Our Team
              </GoldButton>
            </a>
          </div>
        </div>

        <div className="mt-6">
          <img
            src="/hero_banner.png"
            alt="Hero Banner"
            className="w-full rounded-2xl border border-white/5"
          />
          <p className="mt-2 text-[13px] text-[#A9AEB6] text-center">
            Empowering rural and urban communities with simple, accessible
            digital finance education.
          </p>
        </div>
      </AnimatedSection>

      {/* MISSION */}
      <AnimatedSection delay={0.15}>
        <section id="mission" style={{ scrollMarginTop: "110px" }}>
          <SectionEyebrow icon={BookOpen}>Our Mission</SectionEyebrow>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {missions.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <IconTile icon={m.icon} boxed={false} size={18} />
                  <div className="text-[14px] font-semibold text-[#D4AF37]">
                    {m.title}
                  </div>
                </div>
                <div className="mt-2 text-[13px] text-[#B0B0B0]">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* WHO WE SERVE */}
      <AnimatedSection delay={0.2}>
        <section>
          <SectionEyebrow icon={Users}>Who We Serve</SectionEyebrow>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {audience.map((a, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <IconTile icon={a.icon} boxed={false} size={18} />
                  <div className="text-[14px] font-semibold text-[#D4AF37]">
                    {a.title}
                  </div>
                </div>
                <div className="mt-2 text-[13px] text-[#B0B0B0]">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* VISION */}
      <AnimatedSection delay={0.25}>
        <div className="rounded-2xl text-center p-8 md:p-10 border border-[#D4AF37]/35 bg-[#171B22]/70">
          <div className="font-semibold text-[1.2rem] text-[#D4AF37]">
            Becoming India's Most Trusted Education Platform
          </div>
          <p
            className="mt-3 text-[1.1rem] max-w-2xl mx-auto text-[#F2F1EC]"
            style={{ fontWeight: 500 }}
          >
            "To make high-quality financial knowledge simple, multilingual, and
            free for every single Indian household."
          </p>
        </div>
      </AnimatedSection>

      {/* CORE VALUES */}
      <AnimatedSection delay={0.3}>
        <section>
          <SectionEyebrow icon={BookOpen}>Our Core Values</SectionEyebrow>
          <div className="grid sm:grid-cols-4 gap-4 mt-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <IconTile icon={v.icon} boxed={false} size={16} />
                  <div className="text-[13px] font-semibold text-[#D4AF37]">
                    {v.title}
                  </div>
                </div>
                <div className="mt-2 text-[13px] text-[#B0B0B0]">{v.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* TECHNOLOGY STACK */}
      <AnimatedSection delay={0.35}>
        <section>
          <SectionEyebrow icon={Monitor}>Our Tech Stack</SectionEyebrow>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {techStack.map((t, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <IconTile icon={t.icon} boxed={false} size={18} />
                  <div className="text-[13px] font-semibold text-[#D4AF37]">
                    {t.title}
                  </div>
                </div>
                {/* <div className="mt-2 text-[14px] font-semibold text-white">{t.name}</div> */}
                <div className="mt-2 text-[13px] text-[#808080]">{t.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ROADMAP */}
      <AnimatedSection delay={0.4}>
        <section>
          <SectionEyebrow icon={Landmark}>
            Our Evolutionary Journey
          </SectionEyebrow>
          <div className="mt-4 space-y-4">
            {roadmapPhases.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0F1116]/80 border-l-4"
                style={{
                  borderLeftColor:
                    i === 0 ? "#55D437" : i === 1 ? "#D4AF37" : "#808080",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    color:
                      i === 0 ? "#55D437" : i === 1 ? "#D4AF37" : "#808080",
                  }}
                >
                  {r[0]}
                </div>
                <div className="mt-2 text-[#B0B0B0]">{r[1]}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* FOUNDER SPOTLIGHT */}
      <AnimatedSection delay={0.45}>
        <section>
          <SectionEyebrow icon={Users}>Founder Profile</SectionEyebrow>
          <Card hover={false} className="!p-8 md:!p-10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-7 items-start">
              <div className="flex items-center justify-center">
                <div className="w-56 h-56 rounded-xl bg-[#111214] overflow-hidden relative text-[2rem] font-bold text-[#D4AF37]">
                  <Image
                    src="/team/akash_bauri.png"
                    alt="Akash Bauri"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[1.4rem] font-semibold text-[#F2F1EC]">
                  Akash Bauri
                </h3>
                <div className="text-[13px] text-[#D4AF37] font-mono">
                  Founder, CEO & Founding AI Engineer
                </div>
                <div className="mt-4 text-[14px] text-[#B0B0B0] leading-relaxed">
                  Responsible for the overall vision, AI architecture, product
                  strategy, research, backend system design, RAG pipeline, AI
                  agent development, machine learning integration, prompt
                  engineering, and long-term technology roadmap of APPNA
                  FINANCE.
                  <br />
                  <br />
                  He has hands-on experience in Artificial Intelligence, Machine
                  Learning, Generative AI, Large Language Models (LLMs),
                  Retrieval-Augmented Generation (RAG), AI Agents, Prompt
                  Engineering, Automation, and Intelligent Financial Systems.
                  <br />
                  <br />
                  His vision is to bridge the financial knowledge gap in India
                  by helping students, farmers, working professionals,
                  entrepreneurs, first-time investors, and families understand
                  banking, investments, stock markets, personal finance,
                  insurance, taxation, and government financial schemes through
                  AI-powered education.
                  <br />
                  <br />
                  Under his leadership, APPNA FINANCE is being developed as a
                  multilingual AI-powered financial education platform
                  supporting English, Hindi, and Bengali, making financial
                  knowledge accessible to users from both urban and rural
                  communities.
                  <br />
                  <br />
                  His long-term mission is to build one of India's most trusted
                  AI-powered financial education platforms while contributing to
                  financial literacy, financial inclusion, and responsible
                  financial decision-making across the country.
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="pointer-events-none opacity-60">
                    <GoldButton variant="outline" icon={Linkedin}>
                      LinkedIn
                    </GoldButton>
                  </div>

                  <div className="pointer-events-none opacity-60">
                    <GoldButton variant="outline" icon={Github}>
                      GitHub
                    </GoldButton>
                  </div>

                  <a
                    href="https://youtube.com/@akashlearninghub-m7n"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoldButton variant="outline" icon={Youtube}>
                      YouTube
                    </GoldButton>
                  </a>

                  <div className="pointer-events-none opacity-60">
                    <GoldButton variant="outline" icon={Mail}>
                      Contact Direct
                    </GoldButton>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </AnimatedSection>

      {/* THE FOUNDING TEAM */}
      <AnimatedSection delay={0.5}>
        <section id="founding-team" style={{ scrollMarginTop: "110px" }}>
          <SectionEyebrow icon={Users}>The Founding Team</SectionEyebrow>
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {teamMembers.map((m, i) => (
              <Card key={i} className="h-full p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden mb-4 relative">
                    <Image
                      src={
                        m.img &&
                        (m.img.startsWith("/")
                          ? `/team${m.img}`
                          : `/team/${m.img}`)
                      }
                      alt={m.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-[15px] font-semibold text-[#F2F1EC] text-center">
                    {m.name}
                  </div>
                  <div className="text-[13px] mt-1 text-[#D4AF37] text-center">
                    {m.role}
                  </div>
                </div>

                <p className="text-[13px] mt-4 leading-relaxed text-[#8A8F98] text-left">
                  {m.desc}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-[13px] text-[#B0B0B0] text-center">
            🚀 We are growing! More roles, financial creators, and engineering
            positions are coming soon.
          </div>
        </section>
      </AnimatedSection>

      {/* WHY APPNA FINANCE */}
      <AnimatedSection delay={0.55}>
        <section>
          <SectionEyebrow icon={CheckCircle2}>
            Why Choose APPNA FINANCE?
          </SectionEyebrow>
          <div className="grid sm:grid-cols-4 gap-4 mt-4">
            {[
              [
                "✔ Trusted Knowledge",
                "Verified financial study guides from government institutions and bank policies.",
              ],
              [
                "✔ AI Powered Learning",
                "Ask dynamic questions and get smart, clear solutions instantly.",
              ],
              [
                "✔ Beginner Friendly",
                "Zero jargon. Everything is explained like we're speaking with a young student.",
              ],
              [
                "✔ Regional Support",
                "Learn comfortably with English, Hindi, and Bengali configurations.",
              ],
            ].map((w, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="text-[13px] font-semibold text-[#55D437]">
                  {w[0]}
                </div>
                <div className="mt-2 text-[13px] text-[#B0B0B0]">{w[1]}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection delay={0.6}>
        <section>
          <SectionEyebrow icon={Mail}>Get in Touch</SectionEyebrow>
          <div className="grid sm:grid-cols-5 gap-4 mt-4">
            {contactDetails.map((c, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center justify-center gap-2">
                  <IconTile icon={c.icon} boxed={false} size={16} />
                  <div className="text-[13px] font-semibold text-[#D4AF37]">
                    {c.label}
                  </div>
                </div>
                {c.value.startsWith && c.value.startsWith("http") ? (
                  <a
                    href={c.value}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2 text-[#F2F1EC] hover:underline"
                  >
                    Visit Channel 🔗
                  </a>
                ) : (
                  <div className="mt-2 text-[#808080]">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
