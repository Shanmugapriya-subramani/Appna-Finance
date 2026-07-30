"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Mic,
  Sparkles,
  AlertTriangle,
  CreditCard,
  BarChart2,
  Landmark,
  Zap,
  Bot,
  MessageSquare,
} from "lucide-react";
import IconTile from "@/components/IconTile";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import GoldButton from "@/components/GoldButton";

const API_URL = "https://agent-production-c6e4.up.railway.app/api/v1/chat";

const QUICK_QUESTIONS = [
  { icon: CreditCard, cat: "Credit", q: "How to improve CIBIL Score?" },
  { icon: BarChart2, cat: "Wealth", q: "Explain SIP." },
  { icon: Landmark, cat: "Banking", q: "What is a Savings Account?" },
  { icon: Zap, cat: "UPI", q: "What is UPI?" },
  { icon: CreditCard, cat: "Deposits", q: "Difference between FD and RD?" },
  { icon: BarChart2, cat: "Funds", q: "What is a Mutual Fund?" },
  { icon: CreditCard, cat: "Loans", q: "How do Education Loans work?" },
  { icon: BarChart2, cat: "Investing", q: "How to start investing?" },
];

const SUGGESTED_TOPICS = [
  "Banking",
  "Stock Market",
  "Insurance",
  "Personal Finance",
  "Mutual Funds",
  "Loans",
  "MSME",
  "Government Schemes",
  "Income Tax",
  "Digital Banking",
  "UPI",
  "Financial Planning",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Welcome to APPNA FINANCE! I'm your AI Financial Assistant. Ask me anything about banking, stock markets, personal finance, loans, insurance, taxes, or government schemes. I'll explain everything in simple language.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(text) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      if (res.ok) {
        const data = await res.json();
        setMessages((m) => [
          ...m,
          { role: "ai", text: data.answer || "No response received." },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "ai",
            text: `Backend error (${res.status}). The live API on Railway may be waking up — please try asking again in a few seconds.`,
          },
        ]);
      }
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: `Connection Error:\n\n${e.message || "Couldn't connect to backend. Please check network connection."}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleQuickQuestionClick = (question) => {
    setInput(question);
  };

  return (
    <div className="py-10 space-y-12">
      {/* 1. TOP HERO SECTION */}
      <AnimatedSection>
        <div
          className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,27,34,0.9) 0%, rgba(15,17,22,0.95) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            {/* <IconTile icon={Bot} boxed={false} size={22} /> */}
            <SectionEyebrow icon={Bot}>AI Financial Assistant</SectionEyebrow>
          </div>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-semibold leading-tight text-[#F2F1EC]">
            APPNA AI Assistant
          </h1>
          <p className="mt-2 max-w-3xl text-[15px] md:text-[16px] text-[#A9AEB6] leading-relaxed">
            Ask questions about banking, investments, loans, insurance, taxes,
            and government schemes in simple, jargon-free language.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. CONNECTED ASSISTANT INFO CARD */}
      <AnimatedSection delay={0.1}>
        <div
          className="rounded-xl p-6"
          style={{
            background: "rgba(23,27,34,0.7)",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          <div
            className="flex items-center gap-2 font-semibold text-[1.1rem]"
            style={{ color: "#D4AF37" }}
          >
            <span>ℹ️</span> Connected Assistant
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-[#F2F1EC]">
            <strong>APPNA FINANCE AI Assistant</strong> helps users understand
            financial concepts in simple, jargon-free language. This interface
            is connected to our FastAPI backend running on Railway with Groq key
            management and multi-lingual AI support.
          </p>
        </div>
      </AnimatedSection>

      {/* 3. QUICK QUESTION CARDS */}
      <AnimatedSection delay={0.15}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC]">
                💡 Quick Starters
              </h3>
              <p className="text-[13px] text-[#8A8F98]">
                Click any sample card below to auto-populate the AI input field
                and start learning instantly:
              </p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {QUICK_QUESTIONS.map((qq, i) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => handleQuickQuestionClick(qq.q)}
                  className="w-full text-left rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/50 group"
                  style={{
                    background: "rgba(23,27,34,0.6)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    minHeight: "105px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <IconTile icon={qq.icon} size={16} />
                    <div className="text-[12px] font-semibold text-[#D4AF37] group-hover:text-[#F4C430]">
                      {qq.cat}
                    </div>
                  </div>
                  <div className="text-[13.5px] mt-3 font-medium text-[#F2F1EC] line-clamp-2">
                    {qq.q}
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* 4. CHAT STUDIO */}
      <AnimatedSection delay={0.2} className="space-y-4">
        <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
          💬 Interactive Chat Studio
        </h3>

        {/* Chat Window */}
        <div ref={scrollRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[85%] rounded-2xl px-5 py-3.5 text-[14px] leading-relaxed shadow-lg"
                style={
                  m.role === "user"
                    ? {
                        background: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid rgba(212, 175, 55, 0.35)",
                        // borderBottomRightRadius: 4,
                        color: "#FFFFFF",
                      }
                    : {
                        background: "#1A1D24",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        // borderBottomLeftRadius: 4,
                        color: "#FFFFFF",
                      }
                }
              >
                <div
                  className="text-[11px] font-semibold mb-1"
                  style={{ color: m.role === "user" ? "#F4C430" : "#D4AF37" }}
                >
                  {m.role === "user" ? "You" : "APPNA AI Expert"}
                </div>
                <div className="whitespace-pre-wrap">{m.text}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start mt-5">
              <div
                className="rounded-2xl px-5 py-3.5 text-[13.5px] flex items-center gap-2"
                style={{
                  background: "#1A1D24",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8A8F98",
                }}
              >
                <Sparkles size={16} className="animate-spin text-[#D4AF37]" />
                <span>APPNA AI Expert is thinking…</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask your financial question… (e.g., Explain compound interest)"
            className="flex-1 rounded-xl px-4 py-3.5 text-[14px] transition-all"
            style={{
              background: "#12151B",
              border: "1px solid rgba(212,175,55,0.25)",
              color: "#F2F1EC",
            }}
          />
          <div className="flex gap-2">
            <GoldButton
              onClick={() => send()}
              icon={Send}
              disabled={loading}
              className="whitespace-nowrap"
            >
              Ask AI
            </GoldButton>
            <button
              disabled
              title="Voice Assistant coming soon"
              className="rounded-xl px-4 py-3 opacity-50 flex items-center gap-2 cursor-not-allowed text-[13px]"
              style={{
                background: "rgba(23,27,34,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#A9AEB6",
              }}
            >
              <Mic size={18} color="#D4AF37" />
              <span className="hidden sm:inline">Coming Soon</span>
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. SUGGESTED TOPICS */}
      <AnimatedSection delay={0.3}>
        <div>
          <h3 className="text-[1.2rem] font-semibold text-[#F2F1EC] mb-3">
            🏷️ Explore More Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => send(`Tell me about ${topic}`)}
                className="text-[12.5px] px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  color: "#F2F1EC",
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. IMPORTANT NOTICE DISCLAIMER */}
      <AnimatedSection delay={0.35}>
        <div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            borderLeft: "4px solid #F4C430",
            background: "rgba(26, 29, 36, 0.8)",
            border: "1px solid rgba(244, 196, 48, 0.2)",
            borderLeftWidth: "4px",
          }}
        >
          <div className="flex items-center gap-2 text-[#F4C430] font-semibold text-[14px]">
            <AlertTriangle size={18} />
            <span>⚠️ IMPORTANT EDUCATIONAL DISCLAIMER</span>
          </div>
          <p className="mt-2 text-[13px] text-[#B0B0B0] leading-relaxed">
            APPNA FINANCE provides financial education for informational and
            knowledge purposes only. It does not constitute personalized
            investment, legal, statutory or tax advice. Always verify crucial
            financial actions or statutory decisions with qualified professional
            advisors.
          </p>
        </div>
      </AnimatedSection>

      {/* 7. FUTURE ENVISIONED AI SUITE */}
      <AnimatedSection delay={0.4}>
        <div>
          <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] mb-4">
            🚀 Future Envisioned AI Suite
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Voice Assistant */}
            <Card className="!p-6">
              <div className="text-3xl mb-3">🎙️</div>
              <div className="text-[1.1rem] font-semibold text-[#F2F1EC]">
                Voice Assistant
              </div>
              <p className="text-[13px] text-[#8A8F98] mt-2 leading-relaxed">
                Talk directly to your advisor with real-time natural language
                auditory conversion.
              </p>
              <div className="mt-4">
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

            {/* Document Parsing */}
            <Card className="!p-6">
              <div className="text-3xl mb-3">📄</div>
              <div className="text-[1.1rem] font-semibold text-[#F2F1EC]">
                Document Parsing
              </div>
              <p className="text-[13px] text-[#8A8F98] mt-2 leading-relaxed">
                Upload financial sheets, tax forms, or company reports for
                instant semantic breakdown.
              </p>
              <div className="mt-4">
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

            {/* Multi-lingual AI */}
            <Card className="!p-6">
              <div className="text-3xl mb-3">🌐</div>
              <div className="text-[1.1rem] font-semibold text-[#F2F1EC]">
                Multi-lingual AI
              </div>
              <p className="text-[13px] text-[#8A8F98] mt-2 leading-relaxed">
                Access high-quality financial education in your preferred
                regional dialect dynamically.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {["English", "Hindi", "Bengali"].map((lang) => (
                  <span
                    key={lang}
                    className="text-[11px] px-2.5 py-1 rounded-full text-[#F2F1EC]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
