"use client";

import Link from "next/link";
import Logo from "./Logo";
import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="mt-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(212,175,55,0.15)", background: "rgba(10,12,16,0.95)" }}>
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <AnimatedSection className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <div>
                <h3 className="text-[1.25rem] font-semibold text-[#F2F1EC]" style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
                  APPNA FINANCE
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#D4AF37" }}>
                  Learn · Grow · Prosper
                </p>
              </div>
            </div>

            <p className="text-[13.5px] mt-4 max-w-sm leading-relaxed text-[#8A8F98]">
              AI-powered financial education platform dedicated to making money management, banking, loans, taxes, and investing simple, trustworthy, and accessible for every Indian.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link href="/" className="text-[#A9AEB6] hover:text-[#F4C430] transition-colors">Home</Link></li>
              <li><Link href="/assistant" className="text-[#A9AEB6] hover:text-[#F4C430] transition-colors">AI Financial Assistant</Link></li>
              <li><Link href="/calculators" className="text-[#A9AEB6] hover:text-[#F4C430] transition-colors">Financial Calculators</Link></li>
              <li><Link href="/hub" className="text-[#A9AEB6] hover:text-[#F4C430] transition-colors">Learning Hub</Link></li>
              <li><Link href="/about" className="text-[#A9AEB6] hover:text-[#F4C430] transition-colors">About &amp; Team</Link></li>
            </ul>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Financial Pillars
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#A9AEB6]">
              <li>Banking &amp; Savings</li>
              <li>SIP &amp; Mutual Funds</li>
              <li>Stock Market Basics</li>
              <li>Loans &amp; EMIs</li>
              <li>Insurance &amp; Tax Slabs</li>
              <li>Government Schemes &amp; KCC</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-[12px] text-[#8A8F98]">
          <p>© 2026 APPNA FINANCE. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for absolute financial clarity across India.
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
