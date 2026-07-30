"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Landmark, Percent, Wallet, Sprout, ArrowRight, RefreshCw } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import Card from "@/components/Card";
import GoldButton from "@/components/GoldButton";
import IconTile from "@/components/IconTile";

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState("sip");

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanRate, setLoanRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5);

  // Tax Calculator State
  const [income, setIncome] = useState(900000);

  // FD Calculator State
  const [fdDeposit, setFdDeposit] = useState(100000);
  const [fdRate, setFdRate] = useState(7.2);
  const [fdYears, setFdYears] = useState(3);

  // KCC Calculator State
  const [landAcres, setLandAcres] = useState(3);
  const [cropType, setCropType] = useState("paddy");

  // --- SIP Calculations ---
  const calculateSIP = () => {
    const P = Number(sipMonthly);
    const i = Number(sipRate) / 100 / 12;
    const n = Number(sipYears) * 12;
    if (i === 0) return { invested: P * n, total: P * n, returns: 0 };
    const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = P * n;
    const total = Math.round(M);
    const returns = total - invested;
    return { invested, total, returns };
  };

  // --- EMI Calculations ---
  const calculateEMI = () => {
    const P = Number(loanAmount);
    const r = Number(loanRate) / 100 / 12;
    const n = Number(loanTenure) * 12;
    if (r === 0) return { emi: Math.round(P / n), totalPayable: P, totalInterest: 0 };
    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;
    return { emi, totalPayable, totalInterest };
  };

  // --- Tax Calculations (FY 2024-25 New Regime vs Old) ---
  const calculateTax = () => {
    const inc = Number(income);
    // Standard deduction 75,000 for New Regime
    const taxableIncNew = Math.max(0, inc - 75000);
    let taxNew = 0;

    if (taxableIncNew > 300000) {
      if (taxableIncNew <= 700000) {
        taxNew = (taxableIncNew - 300000) * 0.05;
      } else if (taxableIncNew <= 1000000) {
        taxNew = 400000 * 0.05 + (taxableIncNew - 700000) * 0.1;
      } else if (taxableIncNew <= 1200000) {
        taxNew = 400000 * 0.05 + 300000 * 0.1 + (taxableIncNew - 1000000) * 0.15;
      } else if (taxableIncNew <= 1500000) {
        taxNew = 400000 * 0.05 + 300000 * 0.1 + 200000 * 0.15 + (taxableIncNew - 1200000) * 0.2;
      } else {
        taxNew = 400000 * 0.05 + 300000 * 0.1 + 200000 * 0.15 + 300000 * 0.2 + (taxableIncNew - 1500000) * 0.3;
      }
    }
    // Rebate 87A up to 7 Lakh taxable in New Regime
    if (taxableIncNew <= 700000) taxNew = 0;

    return {
      taxableIncNew,
      taxNew: Math.round(taxNew),
      effectiveRate: inc > 0 ? ((taxNew / inc) * 100).toFixed(1) : 0,
    };
  };

  // --- FD Calculations ---
  const calculateFD = () => {
    const P = Number(fdDeposit);
    const r = Number(fdRate) / 100;
    const t = Number(fdYears);
    const n = 4; // Quarterly compounding
    const amount = Math.round(P * Math.pow(1 + r / n, n * t));
    const interest = amount - P;
    return { amount, interest };
  };

  // --- KCC Loan Calculations ---
  const calculateKCC = () => {
    const acres = Number(landAcres);
    const scaleOfFinance = cropType === "paddy" ? 28000 : cropType === "wheat" ? 24000 : cropType === "cotton" ? 35000 : 30000;
    const cropCost = acres * scaleOfFinance;
    const postHarvest = cropCost * 0.2;
    const farmMaintenance = cropCost * 0.2;
    const limit = Math.round(cropCost + postHarvest + farmMaintenance);
    return { cropCost, postHarvest, farmMaintenance, limit };
  };

  const sipRes = calculateSIP();
  const emiRes = calculateEMI();
  const taxRes = calculateTax();
  const fdRes = calculateFD();
  const kccRes = calculateKCC();

  return (
    <div className="py-10 space-y-10">
      {/* HERO */}
      <AnimatedSection>
        <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(23,27,34,0.9) 0%, rgba(15,17,22,0.95) 100%)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <SectionEyebrow icon={Calculator}>Interactive Financial Suite</SectionEyebrow>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-semibold text-[#F2F1EC] mt-1">
            Financial Calculators
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] text-[#A9AEB6] leading-relaxed">
            Plan your SIP investments, loan EMIs, tax liabilities, fixed deposits, and agricultural credit limits with precision and clarity.
          </p>

          {/* TAB BAR */}
          <div className="mt-8 flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#12151B]/90 border border-white/5 max-w-fit">
            {[
              { id: "sip", label: "SIP Wealth", icon: TrendingUp },
              { id: "emi", label: "EMI Loan", icon: Wallet },
              { id: "tax", label: "Income Tax", icon: Percent },
              { id: "fd", label: "Fixed Deposit", icon: Landmark },
              { id: "kcc", label: "KCC Farm Credit", icon: Sprout },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-[13.5px] font-medium transition-all flex items-center gap-2"
                style={{
                  background: activeTab === tab.id ? "linear-gradient(135deg, #D4AF37, #F4C430)" : "transparent",
                  color: activeTab === tab.id ? "#0A0C10" : "#A9AEB6",
                }}
              >
                <IconTile icon={tab.icon} boxed={false} size={16} color={activeTab === tab.id ? "#0A0C10" : "#D4AF37"} />
                <span className="ml-1">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CALCULATOR PANELS */}
      {/* 1. SIP CALCULATOR */}
      {activeTab === "sip" && (
        <AnimatedSection key="sip">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card hover={false} className="!p-7 space-y-6">
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
                <IconTile icon={TrendingUp} size={22} />
                <span>SIP Wealth Calculator</span>
              </h3>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Monthly Investment (₹)</span>
                  <span className="text-[#D4AF37] font-mono">₹{Number(sipMonthly).toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range" min="500" max="100000" step="500" value={sipMonthly}
                  onChange={(e) => setSipMonthly(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Expected Annual Return (%)</span>
                  <span className="text-[#D4AF37] font-mono">{sipRate}%</span>
                </div>
                <input
                  type="range" min="1" max="25" step="0.5" value={sipRate}
                  onChange={(e) => setSipRate(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Investment Tenure (Years)</span>
                  <span className="text-[#D4AF37] font-mono">{sipYears} Years</span>
                </div>
                <input
                  type="range" min="1" max="30" step="1" value={sipYears}
                  onChange={(e) => setSipYears(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>
            </Card>

            <Card hover={false} className="!p-7 space-y-6 bg-[#12151B]/80 border-[#D4AF37]/20">
              <h4 className="text-[12px] uppercase tracking-wider text-[#8A8F98] font-mono">Wealth Projections</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Invested Amount</div>
                  <div className="text-[1.3rem] font-semibold text-[#F2F1EC] mt-1 font-mono">
                    ₹{sipRes.invested.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Estimated Returns</div>
                  <div className="text-[1.3rem] font-semibold text-[#3FBF7F] mt-1 font-mono">
                    +₹{sipRes.returns.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <div className="text-[12.5px] text-[#D4AF37] uppercase tracking-wide font-semibold">Total Wealth Created</div>
                <div className="text-[2.2rem] font-bold text-[#F2F1EC] mt-1 font-mono">
                  ₹{sipRes.total.toLocaleString("en-IN")}
                </div>
                <p className="text-[12px] text-[#A9AEB6] mt-2 leading-relaxed">
                  Regular SIP compounding turns small monthly discipline into long-term financial freedom.
                </p>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      )}

      {/* 2. EMI CALCULATOR */}
      {activeTab === "emi" && (
        <AnimatedSection key="emi">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card hover={false} className="!p-7 space-y-6">
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
                <Wallet size={22} className="text-[#D4AF37]" />
                <span>EMI &amp; Loan Calculator</span>
              </h3>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Loan Amount (₹)</span>
                  <span className="text-[#D4AF37] font-mono">₹{Number(loanAmount).toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range" min="10000" max="10000000" step="50000" value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Interest Rate (% p.a.)</span>
                  <span className="text-[#D4AF37] font-mono">{loanRate}%</span>
                </div>
                <input
                  type="range" min="5" max="24" step="0.25" value={loanRate}
                  onChange={(e) => setLoanRate(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Tenure (Years)</span>
                  <span className="text-[#D4AF37] font-mono">{loanTenure} Years</span>
                </div>
                <input
                  type="range" min="1" max="30" step="1" value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>
            </Card>

            <Card hover={false} className="!p-7 space-y-6 bg-[#12151B]/80 border-[#D4AF37]/20">
              <h4 className="text-[12px] uppercase tracking-wider text-[#8A8F98] font-mono">Monthly Repayment Breakdown</h4>
              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <div className="text-[12.5px] text-[#D4AF37] uppercase tracking-wide font-semibold">Monthly EMI</div>
                <div className="text-[2.2rem] font-bold text-[#F2F1EC] mt-1 font-mono">
                  ₹{emiRes.emi.toLocaleString("en-IN")} <span className="text-[14px] font-normal text-[#A9AEB6]">/ mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Principal Amount</div>
                  <div className="text-[1.2rem] font-semibold text-[#F2F1EC] mt-1 font-mono">
                    ₹{Number(loanAmount).toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Total Interest</div>
                  <div className="text-[1.2rem] font-semibold text-[#F4C430] mt-1 font-mono">
                    ₹{emiRes.totalInterest.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      )}

      {/* 3. TAX CALCULATOR */}
      {activeTab === "tax" && (
        <AnimatedSection key="tax">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card hover={false} className="!p-7 space-y-6">
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
                <Percent size={22} className="text-[#D4AF37]" />
                <span>Income Tax Calculator (FY 2024–25)</span>
              </h3>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Annual Gross Income (₹)</span>
                  <span className="text-[#D4AF37] font-mono">₹{Number(income).toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range" min="300000" max="5000000" step="50000" value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[13px] text-[#A9AEB6] space-y-1.5">
                <div className="font-semibold text-[#D4AF37]">Highlights of New Tax Regime:</div>
                <div>• Standard Deduction: ₹75,000</div>
                <div>• Full Tax Rebate under Sec 87A up to ₹7,000,000 taxable income</div>
                <div>• Simplified slabs without complicated exemption paperwork</div>
              </div>
            </Card>

            <Card hover={false} className="!p-7 space-y-6 bg-[#12151B]/80 border-[#D4AF37]/20">
              <h4 className="text-[12px] uppercase tracking-wider text-[#8A8F98] font-mono">Tax Estimate (New Regime)</h4>
              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <div className="text-[12.5px] text-[#D4AF37] uppercase tracking-wide font-semibold">Estimated Net Tax Payable</div>
                <div className="text-[2.2rem] font-bold text-[#F2F1EC] mt-1 font-mono">
                  ₹{taxRes.taxNew.toLocaleString("en-IN")}
                </div>
                <div className="text-[12.5px] text-[#3FBF7F] mt-1">
                  Effective Tax Rate: {taxRes.effectiveRate}%
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[12px] text-[#A9AEB6]">Taxable Income (After ₹75k Standard Deduction)</div>
                <div className="text-[1.2rem] font-semibold text-[#F2F1EC] mt-1 font-mono">
                  ₹{taxRes.taxableIncNew.toLocaleString("en-IN")}
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      )}

      {/* 4. FD CALCULATOR */}
      {activeTab === "fd" && (
        <AnimatedSection key="fd">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card hover={false} className="!p-7 space-y-6">
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
                <Landmark size={22} className="text-[#D4AF37]" />
                <span>Fixed Deposit Return Calculator</span>
              </h3>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Deposit Amount (₹)</span>
                  <span className="text-[#D4AF37] font-mono">₹{Number(fdDeposit).toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range" min="5000" max="2000000" step="5000" value={fdDeposit}
                  onChange={(e) => setFdDeposit(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Interest Rate (% p.a.)</span>
                  <span className="text-[#D4AF37] font-mono">{fdRate}%</span>
                </div>
                <input
                  type="range" min="3" max="10" step="0.1" value={fdRate}
                  onChange={(e) => setFdRate(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Duration (Years)</span>
                  <span className="text-[#D4AF37] font-mono">{fdYears} Years</span>
                </div>
                <input
                  type="range" min="1" max="10" step="1" value={fdYears}
                  onChange={(e) => setFdYears(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>
            </Card>

            <Card hover={false} className="!p-7 space-y-6 bg-[#12151B]/80 border-[#D4AF37]/20">
              <h4 className="text-[12px] uppercase tracking-wider text-[#8A8F98] font-mono">Maturity Returns</h4>
              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <div className="text-[12.5px] text-[#D4AF37] uppercase tracking-wide font-semibold">Total Maturity Value</div>
                <div className="text-[2.2rem] font-bold text-[#F2F1EC] mt-1 font-mono">
                  ₹{fdRes.amount.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Principal Deposit</div>
                  <div className="text-[1.2rem] font-semibold text-[#F2F1EC] mt-1 font-mono">
                    ₹{Number(fdDeposit).toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[12px] text-[#A9AEB6]">Guaranteed Interest</div>
                  <div className="text-[1.2rem] font-semibold text-[#3FBF7F] mt-1 font-mono">
                    +₹{fdRes.interest.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      )}

      {/* 5. KCC CALCULATOR */}
      {activeTab === "kcc" && (
        <AnimatedSection key="kcc">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card hover={false} className="!p-7 space-y-6">
              <h3 className="text-[1.3rem] font-semibold text-[#F2F1EC] flex items-center gap-2">
                <Sprout size={22} className="text-[#D4AF37]" />
                <span>Kisan Credit Card (KCC) Limit Estimator</span>
              </h3>

              <div>
                <div className="flex justify-between text-[13.5px] mb-2 font-medium">
                  <span className="text-[#A9AEB6]">Cultivated Land (Acres)</span>
                  <span className="text-[#D4AF37] font-mono">{landAcres} Acres</span>
                </div>
                <input
                  type="range" min="1" max="25" step="0.5" value={landAcres}
                  onChange={(e) => setLandAcres(e.target.value)}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div>
                <div className="text-[13.5px] mb-2 font-medium text-[#A9AEB6]">Primary Crop Type</div>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-[14px] bg-[#12151B] border border-[#D4AF37]/30 text-[#F2F1EC] outline-none"
                >
                  <option value="paddy">Paddy / Rice (₹28,000 / acre)</option>
                  <option value="wheat">Wheat (₹24,000 / acre)</option>
                  <option value="cotton">Cotton / Cash Crop (₹35,000 / acre)</option>
                  <option value="sugarcane">Sugarcane (₹30,000 / acre)</option>
                </select>
              </div>
            </Card>

            <Card hover={false} className="!p-7 space-y-6 bg-[#12151B]/80 border-[#D4AF37]/20">
              <h4 className="text-[12px] uppercase tracking-wider text-[#8A8F98] font-mono">Estimated KCC Credit Limit</h4>
              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <div className="text-[12.5px] text-[#D4AF37] uppercase tracking-wide font-semibold">Recommended KCC Limit (Year 1)</div>
                <div className="text-[2.2rem] font-bold text-[#F2F1EC] mt-1 font-mono">
                  ₹{kccRes.limit.toLocaleString("en-IN")}
                </div>
                <div className="text-[12px] text-[#3FBF7F] mt-1 font-medium">
                  Subsidized Interest Rate: 4% (with prompt repayment incentive)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[12.5px]">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[#A9AEB6]">Crop Cultivation Cost</div>
                  <div className="font-semibold text-[#F2F1EC] mt-0.5 font-mono">₹{kccRes.cropCost.toLocaleString("en-IN")}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[#A9AEB6]">Post-Harvest Maintenance</div>
                  <div className="font-semibold text-[#F2F1EC] mt-0.5 font-mono">₹{kccRes.postHarvest.toLocaleString("en-IN")}</div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
