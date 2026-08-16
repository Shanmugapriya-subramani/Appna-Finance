"use client";

import { CheckCircle2, Clock, BookOpen, Bot, Star, MessageSquare, FileText, Video, Mic, BarChart2, UserCheck, ShieldCheck, Mail, Globe2, Github, Linkedin, Youtube, Settings } from "lucide-react";
import IconTile from "@/components/IconTile";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import StatTicker from "@/components/StatTicker";
import GoldButton from "@/components/GoldButton";

// Content adapted from the Streamlit Profile page
const metrics = [
  { label: "Financial Lessons", value: "24", note: "Demo Account" },
  { label: "AI Conversations", value: "0", note: "Awaiting Backend" },
  { label: "Videos Watched", value: "12", note: "Active Learner" },
  { label: "Knowledge Score", value: "92%", note: "+5% this week" },
];

const achievements = [
  { icon: CheckCircle2, title: "Early Supporter", desc: "Granted to founding contributors exploring the alpha builds." },
  { icon: Bot, title: "AI Explorer", desc: "Ready to query the intelligent engine across multilingual concepts." },
  { icon: BookOpen, title: "Finance Learner", desc: "Consistently engaging with courses, video modules, and tax rules." },
  { icon: Star, title: "APPNA Founder", desc: "Core system developer credentials enabled on this workspace profile." },
];

const upcoming = [
  { icon: MessageSquare, title: "Chat History", desc: "Access, export, and review your previous conversations and dynamic roadmaps." },
  { icon: FileText, title: "Saved Notes", desc: "Bookmark key financial terms, personalized tax summaries, and study models." },
  { icon: Video, title: "Saved Videos", desc: "Keep a tailored watch list of educational finance shorts and modules." },
  { icon: Mic, title: "Voice Assistant", desc: "Ask questions naturally using audio streaming inputs configured for regional accents." },
  { icon: BarChart2, title: "Financial Reports", desc: "Generate personalized financial charts based on mock portfolio sessions." },
  { icon: BookOpen, title: "Personalized Learning", desc: "AI dynamically optimizes study sequences matching your sector." },
  { icon: Bot, title: "AI Recommendations", desc: "Proactive delivery of relevant welfare updates or financial guidelines." },
  { icon: ShieldCheck, title: "Secure Vault", desc: "Encrypt sensitive practice entries mapped under isolated user states." },
];

const personal = [
  ["Full Name", "Akash Bauri"],
  ["Email", "Coming Soon"],
  ["Phone", "Coming Soon"],
  ["State", "Jharkhand"],
  ["District", "Dhanbad"],
  ["Preferred Language", "English"],
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "Coming Soon" },
  { icon: Globe2, label: "Website", value: "Coming Soon" },
  { icon: Github, label: "GitHub", value: "Coming Soon" },
  { icon: Linkedin, label: "LinkedIn", value: "Coming Soon" },
  { icon: Youtube, label: "YouTube Channel", value: "https://youtube.com/@akashlearninghub-m7n" },
];

export default function ProfilePage() {
  return (
    <div className="py-10 space-y-12">
      {/* HEADER / HERO */}
      <AnimatedSection>
        <div
          className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,27,34,0.9) 0%, rgba(15,17,22,0.95) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <SectionEyebrow icon={UserCheck}>Profile</SectionEyebrow>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-semibold text-[#F2F1EC] mt-1">
            My Profile
          </h1>
          <p className="mt-3 text-[15px] text-[#A9AEB6]">
            Manage your APPNA FINANCE account and learning journey.
          </p>
        </div>
      </AnimatedSection>

      {/* PROFILE TWO-COLUMN */}
      <AnimatedSection delay={0.12}>
        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
          <div>
            <div className="rounded-2xl p-4 bg-[#0F1116]/80 border border-white/5 text-center">
              <img
                src="/team/akash_bauri.png"
                alt="Akash"
                className="mx-auto rounded-lg w-56 h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="mt-4 text-[1.25rem] font-semibold text-[#F2F1EC]">
                Akash Bauri
              </div>
              <div className="text-[13px] text-[#D4AF37] mt-1">
                Founder, CEO & Founding AI Engineer
              </div>
            </div>
          </div>

          <div>
            <Card hover={false} className="!p-6">
              <div className="text-[1.3rem] font-semibold text-[#D4AF37]">
                Account Summary
              </div>
              <div className="mt-3 grid sm:grid-cols-3 gap-3 text-[13px]">
                <div>
                  <span className="text-[#8A8F98]">Membership:</span>
                  <div className="text-[#F2F1EC] font-medium">
                    Founder Account
                  </div>
                </div>
                <div>
                  <span className="text-[#8A8F98]">Status:</span>
                  <div className="text-[#55D437] font-medium">
                    Frontend MVP (Backend Integration Coming Soon)
                  </div>
                </div>
                <div>
                  <span className="text-[#8A8F98]">Backend:</span>
                  <div className="text-[#FFA500] font-medium">Coming Soon</div>
                </div>
              </div>
            </Card>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <Card>
                <div className="flex items-center gap-2 font-semibold text-[#D4AF37]">
                  <IconTile icon={FileText} boxed={false} size={16} />
                  <span>Personal Information</span>
                </div>
                <div className="mt-3 text-[13px] text-[#B0B0B0]">
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      {personal.map(([k, v]) => (
                        <tr
                          key={k}
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          <td
                            style={{
                              padding: "8px 6px",
                              color: "#808080",
                              verticalAlign: "top",
                            }}
                          >
                            {k}
                          </td>
                          <td
                            style={{
                              padding: "8px 6px",
                              color: "#FFFFFF",
                              fontWeight: 500,
                            }}
                          >
                            {v}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-2 font-semibold text-[#D4AF37]">
                  <IconTile icon={ShieldCheck} boxed={false} size={16} />
                  <span>Account & Integration Status</span>
                </div>
                <ul className="mt-3 text-[13px] text-[#B0B0B0] list-none space-y-2">
                  <li className="flex items-start gap-2">
                    <IconTile icon={CheckCircle2} boxed={false} size={14} color="#55D437" />
                    <div><strong className="text-[#55D437]">Frontend Ready</strong> — Premium UI Complete</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconTile icon={Clock} boxed={false} size={14} />
                    <div><strong>Supabase Authentication</strong> — Integration Pending</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconTile icon={Clock} boxed={false} size={14} />
                    <div><strong>Google Login</strong> — OAuth Protocol Setup Next</div>
                  </li>
                  {/* <li className="flex items-start gap-2">
                    <IconTile icon={Clock} boxed={false} size={14} />
                    <div><strong>FastAPI Backend</strong> — Architecture Mapping Complete</div>
                  </li> */}
                  <li className="flex items-start gap-2">
                    <IconTile icon={Clock} boxed={false} size={14} />
                    <div><strong>AI Chat History</strong> — Persisted RAG Logging Next</div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* LEARNING PROGRESS */}
      <AnimatedSection delay={0.25}>
        <section>
          <SectionEyebrow icon={BarChart2}>Learning Progress</SectionEyebrow>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {metrics.map((m) => (
              <StatTicker key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ACHIEVEMENTS */}
      <AnimatedSection delay={0.32}>
        <section>
          <SectionEyebrow icon={Star}>Achievements</SectionEyebrow>
          <div className="grid sm:grid-cols-4 gap-4 mt-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center border border-white/5 bg-[#171B22]/60"
              >
                <div className="flex items-center justify-center gap-2">
                  <IconTile icon={a.icon} boxed={false} size={18} />
                  <div className="text-[1.05rem] font-semibold text-[#D4AF37]">{a.title}</div>
                </div>
                <div className="mt-2 text-[13px] text-[#808080]">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* SETTINGS */}
      <AnimatedSection delay={0.38}>
        <section>
          <SectionEyebrow icon={Settings}>Settings</SectionEyebrow>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5">
              <div className="font-semibold text-[#D4AF37]">
                Interface Preferences
              </div>
              <div className="mt-3 text-[13px] text-[#B0B0B0]">
                <label className="block mb-2">
                  Preferred Interface Language (disabled)
                </label>
                <select
                  disabled
                  className="w-full p-2 rounded bg-[#0A0C10] text-white border border-white/5"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                </select>
                <div className="mt-3">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" disabled /> Enable Push & Email
                    Notifications (disabled)
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5">
              <div className="font-semibold text-[#D4AF37]">
                Feature Toggles
              </div>
              <div className="mt-3 text-[13px] text-[#B0B0B0]">
                <label className="block mb-2">
                  <input type="checkbox" disabled checked /> Force High-Contrast
                  Dark Theme (Glassmorphism)
                </label>
                <label className="block">
                  <input type="checkbox" disabled /> Enable Personalized AI
                  Recommendations
                </label>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* UPCOMING FEATURES */}
      <AnimatedSection delay={0.44}>
        <section>
          <SectionEyebrow icon={Clock}>Upcoming Core Engine Enhancements</SectionEyebrow>
          <div className="grid sm:grid-cols-4 gap-4 mt-4">
            {upcoming.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-4 bg-[#171B22]/60 border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <IconTile icon={f.icon} boxed={false} size={16} />
                  <div className="text-[1.05rem] font-semibold text-[#D4AF37]">{f.title}</div>
                </div>
                <div className="mt-2 text-[13px] text-[#808080]">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection delay={0.5}>
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
                  <div className="text-[13px] font-semibold text-[#D4AF37]">{c.label}</div>
                </div>
                {c.value.startsWith && c.value.startsWith("http") ? (
                  <a
                    href={c.value}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2 text-[#F2F1EC] hover:underline"
                  >
                  Visit Channel
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
