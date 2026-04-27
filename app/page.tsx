"use client";

import { useState } from "react";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/avatar-nav.png" alt="Anirudh Thandu" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", objectPosition: "top center", display: "block", flexShrink: 0 }} />
          <span className="font-fraunces text-[20px] font-light tracking-tight text-white">
            Anirudh Thandu
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {([
            { label: "About", href: "#about" },
            { label: "Work", href: "#work" },
            { label: "Builds", href: "#builds" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Credentials", href: "#certifications" },
          ] as const).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[15px] font-dm-sans font-light text-[#CCCCCC] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:anirudh.gt9@gmail.com"
          className="inline-flex items-center gap-1 text-sm font-dm-sans font-light px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-[#0F0F0F] transition-colors"
        >
          Let&rsquo;s talk →
        </a>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-36 pb-10 md:pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-4 py-1.5 bg-white text-sm font-dm-sans font-light text-[#555555]">
                🇸🇬 Singapore
              </span>
              <span className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-4 py-1.5 bg-white text-sm font-dm-sans font-light text-[#555555]">
                🇦🇪 Dubai
              </span>
            </div>

            <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-6">
              Partnerships &amp; GTM · 10 Years · APAC &amp; GCC
            </p>

            <h1
              className="font-fraunces font-light leading-[1.08] text-[#0F0F0F] mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Partnerships leader.
              <br />
              <em style={{ fontStyle: "italic", color: "#0F6E56" }}>
                Accidental builder.
              </em>
            </h1>

            <p className="text-[17px] font-dm-sans font-light text-[#555555] max-w-xl leading-relaxed mb-10">
              I help SaaS companies grow through partnerships: sourcing and closing
              strategic alliances, building ecosystems from the ground up, and
              unlocking new markets across Asia. Outside of work, I tinker with AI
              and occasionally end up with something worth sharing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F0F0F] text-white text-sm font-dm-sans font-light hover:bg-[#333] transition-colors"
              >
                View my work
              </a>
              <a
                href="https://linkedin.com/in/anirudh-thandu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-[#0F0F0F] text-sm font-dm-sans font-light hover:border-black/40 transition-colors"
              >
                <IconLinkedIn />
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — profile photo (hidden on mobile) */}
          <div className="hidden md:flex justify-center items-center self-center pr-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Anirudh Thandu"
              style={{
                width: 280,
                height: 360,
                borderRadius: 20,
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const stats = [
    { value: "10", label: "Years in SaaS Partnerships & GTM" },
    { value: "12", label: "Markets across APAC & GCC" },
    { value: "3×", label: "AI products shipped since 2025" },
  ];

  return (
    <section id="about" className="py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-dm-sans font-light tracking-[0.18em] uppercase text-[#0F6E56] mb-4">
          About
        </p>

        <h2
          className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-8 md:mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Commercial by trade.{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>
            Curious by nature.
          </em>
        </h2>

        <div className="space-y-6 text-[16px] font-dm-sans font-light text-[#555555] leading-[1.75] mb-10">
          <p>
            I&rsquo;m a partnerships and GTM leader with close to a decade of
            experience building ecosystems across Asia. The short version: I
            moved from Dubai to Singapore in 2018 to build Sapaad&rsquo;s APAC
            business from the ground up. No playbook, no team, just a market
            to crack.
          </p>
          <p>
            From there I joined Xero, scaling their partner ecosystem across
            Asia through product integrations, channel partnerships, and
            commercial strategy across 12 markets. Eight years after landing
            in Singapore, I found myself between roles.
          </p>
          <p>So I started building.</p>
          <p>
            Tilfaz, a social TV tracking app I wanted to exist. An automated
            job search pipeline. This portfolio. All built using Claude with
            no prior coding experience. I went from knowing nothing about how
            software gets made to shipping full-stack apps because I was
            curious, and because I could.
          </p>
          <p>
            That same instinct, spot a gap, figure it out, build the thing,
            is what I&rsquo;ve brought to partnerships for a decade.
          </p>
          <p>
            I specialise in navigating Asia&rsquo;s fragmented markets, negotiating
            complex commercial agreements, and bridging technical, legal, and
            business teams. I turn market gaps into partnership opportunities,
            and apparently, occasionally into apps.
          </p>
          <p>
            When I&rsquo;m not in spreadsheets or terminal windows, I&rsquo;m playing
            padel, cooking something that probably needed more salt, or
            watching too much TV. Tilfaz helps with that last one.
          </p>
        </div>

        <div className="bg-white border border-black/10 rounded-2xl px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col items-center text-center px-6 py-6 sm:py-0">
                <span className="font-fraunces font-light text-[40px] leading-none text-[#0F6E56] mb-2">
                  {s.value}
                </span>
                <span className="text-[13px] font-dm-sans font-light text-[#555555] leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Work helpers ────────────────────────────────────────────────────────────

function CalloutItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] font-dm-sans font-light text-[#555555] leading-[1.7] py-3 border-b border-black/[0.06] last:border-0">
      <span className="text-[#0F6E56] shrink-0 mt-[2px] text-[13px]">→</span>
      <span>{children}</span>
    </li>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mt-5 mb-2">
      {children}
    </p>
  );
}

function RoleLabel({ role, meta }: { role: string; meta: string }) {
  return (
    <div className="mb-3">
      <p className="text-[13px] font-dm-sans font-light text-[#0F0F0F]">
        {role}
      </p>
      <p className="text-[12px] font-dm-sans font-light text-[#999999] mt-0.5">
        {meta}
      </p>
    </div>
  );
}

function MetricsRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="mt-6 pt-5 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((m) => (
        <div key={m.value + m.label} className="flex flex-col">
          <span className="font-fraunces font-light text-[32px] leading-none text-[#0F0F0F] mb-1">
            {m.value}
          </span>
          <span className="text-[12px] font-dm-sans font-light text-[#999999] leading-snug">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-dm-sans font-light tracking-wide text-[#0F6E56] bg-[#E1F5EE] px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

function WorkCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl overflow-hidden">
      <div className="h-[3px] bg-[#0F6E56]" />
      <div className="p-7">{children}</div>
    </div>
  );
}

// ─── Work ────────────────────────────────────────────────────────────────────

function Work() {
  return (
    <section id="work" className="py-10 md:py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-dm-sans font-light tracking-[0.18em] uppercase text-[#0F6E56] mb-4">
          Work
        </p>
        <h2
          className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-8 md:mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          What I&rsquo;ve built{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>for others.</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Xero */}
          <WorkCard>
            <TagPill>Ecosystem · Channel · GTM</TagPill>
            <div className="flex items-center gap-3 mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/xero.png" alt="Xero" style={{ height: 24, width: "auto", objectFit: "contain" }} />
              <h3 className="font-fraunces font-light text-[28px] text-[#0F0F0F]">
                Xero
              </h3>
            </div>
            <p className="text-[12px] font-dm-sans font-light text-[#999999] mb-6">
              Singapore · May 2022 – Feb 2026
            </p>

            <RoleLabel
              role="Partnerships Manager – Ecosystem & Strategic Partnerships"
              meta="May 2022 – May 2023"
            />
            <ul>
              <CalloutItem>
                Achieved a{" "}
                <strong className="font-light text-[#0F0F0F]">
                  75% migration rate
                </strong>{" "}
                commercialising Xero&rsquo;s Asia ecosystem from the legacy App
                Marketplace to the new App Store, moving 70 apps onto a
                revenue-share model for the first time
              </CalloutItem>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">
                  2 strategic technology partners signed
                </strong>{" "}
                to plug critical product gaps in HR/Payroll and Tenant Management
              </CalloutItem>
            </ul>

            <div className="mt-4 pt-5 border-t border-black/10">
              <RoleLabel
                role="Partnerships Manager – Asia"
                meta="May 2023 – March 2026"
              />

              <SubHead>Product Partnerships</SubHead>
              <ul>
                <CalloutItem>
                  <strong className="font-light text-[#0F0F0F]">
                    128% growth in app attach rate:
                  </strong>{" "}
                  organisations using 3rd party apps with Xero grew from 14K to
                  32K, directly reducing churn
                </CalloutItem>
                <CalloutItem>
                  <strong className="font-light text-[#0F0F0F]">
                    13 strategic technology partners signed
                  </strong>{" "}
                  across tax, payroll, eCommerce, and financial workflow, including
                  the first MAS-owned carbon accounting platform on the
                  Xero App Store
                </CalloutItem>
                <CalloutItem>
                  Negotiated a{" "}
                  <strong className="font-light text-[#0F0F0F]">
                    70% pricing reduction
                  </strong>{" "}
                  for bank statement extraction and secured free or discounted
                  payroll solutions for 9K+ organisations affected by a product
                  sunset, protecting retention across Asia
                </CalloutItem>
              </ul>

              <SubHead>Channel Partnerships</SubHead>
              <ul>
                <CalloutItem>
                  Built Xero Asia&rsquo;s channel partnerships function from scratch,
                  closing{" "}
                  <strong className="font-light text-[#0F0F0F]">
                    9 referral partnerships with a combined customer base of 1M+
                  </strong>
                  , LTV/CAC above 4
                </CalloutItem>
                <CalloutItem>
                  Structured a creative partnership in Malaysia to unlock a
                  government grant Xero couldn&rsquo;t access directly, driving an{" "}
                  <strong className="font-light text-[#0F0F0F]">
                    80% increase in new customer acquisition
                  </strong>
                </CalloutItem>
              </ul>

              <SubHead>Events</SubHead>
              <ul>
                <CalloutItem>
                  Grew Xero Asia Roadshow partner revenue from{" "}
                  <strong className="font-light text-[#0F0F0F]">
                    S$13.5K (2022) to USD $33.5K (2025)
                  </strong>
                  , with 100% exhibitor CSAT and 4,000+ leads generated for
                  ecosystem partners across three years
                </CalloutItem>
              </ul>
            </div>

            <MetricsRow
              items={[
                { value: "15", label: "Technology partners signed" },
                { value: "128%", label: "Attach rate growth" },
                { value: "1M+", label: "Channel partner reach" },
                { value: "$80K+", label: "Roadshow revenue" },
              ]}
            />
          </WorkCard>

          {/* Sapaad */}
          <WorkCard>
            <TagPill>GTM · BD</TagPill>
            <div className="flex items-center gap-3 mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sapaad.png" alt="Sapaad" style={{ height: 44, width: 44, objectFit: "contain" }} />
              <h3 className="font-fraunces font-light text-[28px] text-[#0F0F0F]">
                Sapaad
              </h3>
            </div>
            <p className="text-[12px] font-dm-sans font-light text-[#999999] mb-6">
              Singapore &amp; Dubai · 2016 – 2022
            </p>

            <RoleLabel
              role="Sales Manager, APAC (Singapore) · Product Specialist (Dubai)"
              meta="2016 – 2022"
            />
            <ul>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">
                  Built Sapaad&rsquo;s Singapore business from the ground up:
                </strong>{" "}
                relocated to establish the APAC regional HQ, hired and managed a
                5-person cross-functional team, and led full GTM strategy across
                Southeast Asia
              </CalloutItem>
              <CalloutItem>
                Landed integrations with{" "}
                <strong className="font-light text-[#0F0F0F]">
                  foodpanda, Grab, Google, and Stripe
                </strong>
                ; acquired 100+ restaurant brands across ASEAN; secured IMDA
                Pre-Approved Vendor status and an MOU with ITE Singapore making
                Sapaad the official software in their Hospitality curriculum
              </CalloutItem>
              <CalloutItem>
                Closed{" "}
                <strong className="font-light text-[#0F0F0F]">
                  200+ new restaurant accounts in Dubai in under two years
                </strong>{" "}
                before relocating to build the Singapore operation
              </CalloutItem>
            </ul>

            <MetricsRow
              items={[
                { value: "300+", label: "Brands acquired" },
                { value: "5", label: "Person team led" },
                { value: "5", label: "Platform integrations" },
                { value: "IMDA", label: "Pre-Approved Vendor" },
              ]}
            />

          </WorkCard>
        </div>
      </div>
    </section>
  );
}

// ─── Builds ──────────────────────────────────────────────────────────────────

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-dm-sans font-light text-[#0F6E56] bg-[#E1F5EE] px-2.5 py-1 rounded-full">
      {children}
    </span>
  );
}

function IconTV() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconFlask() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v6l-6 10.5A1 1 0 0 0 4 21h16a1 1 0 0 0 .87-1.5L15 9V3" />
      <line x1="6.5" y1="14" x2="17.5" y2="14" />
    </svg>
  );
}

function BuildCard({
  icon,
  title,
  description,
  tech,
  link,
  linkLabel,
  comingSoon,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  comingSoon?: boolean;
}) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col">
      <div className="w-11 h-11 rounded-xl bg-[#E1F5EE] text-[#0F6E56] flex items-center justify-center mb-5 shrink-0">
        {icon}
      </div>

      <h3 className="font-fraunces font-light text-[22px] text-[#0F0F0F] mb-3">
        {title}
      </h3>

      <p className="text-[14px] font-dm-sans font-light text-[#555555] leading-[1.7] mb-5 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <TechPill key={t}>{t}</TechPill>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-dm-sans font-light text-[#0F6E56] hover:underline"
        >
          {linkLabel ?? "Live demo ↗"}
        </a>
      )}
      {comingSoon && (
        <span className="text-sm font-dm-sans font-light text-[#999999]">
          Coming soon
        </span>
      )}
    </div>
  );
}

function Builds() {
  return (
    <section id="builds" className="py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-dm-sans font-light tracking-[0.18em] uppercase text-[#0F6E56] mb-4">
          Builds
        </p>
        <h2
          className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-8 md:mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          What I&rsquo;ve built{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>for myself.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BuildCard
            icon={<IconTV />}
            title="Tilfaz"
            description="A social TV tracking app: Letterboxd for television. Built with zero prior coding experience using Claude. Features TMDB search, genre swimlanes, a follow system, activity feeds, and ratings."
            tech={["Next.js", "Supabase", "TMDB API", "Vercel", "Claude"]}
            link="https://tilfaz.vercel.app"
            linkLabel="Visit Tilfaz ↗"
          />
          <BuildCard
            icon={<IconGear />}
            title="Job Search Pipeline"
            description="An automated job search system built with Claude, Gmail, Google Drive, and Apollo.io. Reads LinkedIn job alerts daily, scores and tailors applications, and logs everything to a Google Sheets dashboard."
            tech={["Claude", "Gmail", "Apollo.io", "Google Sheets", "Cowork"]}
          />
          <BuildCard
            icon={<IconFlask />}
            title="Google × IMDA Challenge"
            description="Building an AI workflow for a real partnerships problem; selected as one of 500 professionals in Singapore's Skills Ignition AI Challenge."
            tech={["Google Gemini", "In progress"]}
            comingSoon
          />
        </div>

        <div className="mt-6 bg-[#E1F5EE] border border-[#0F6E56]/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderWidth: "0.5px" }}>
          <div>
            <h3 className="font-fraunces font-light text-[22px] text-[#0F0F0F] mb-1">
              And yes, this portfolio too.
            </h3>
            <p className="text-[13px] font-dm-sans font-light text-[#555555] leading-relaxed">
              Designed and built with Claude through natural language prompting. No prior Next.js experience. Deployed on Vercel.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:shrink-0">
            {["Claude", "Next.js", "Vercel"].map((t) => (
              <span key={t} className="text-[11px] font-dm-sans font-light text-[#0F6E56] bg-white px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
      <span
        className="font-fraunces text-[72px] leading-none text-[#0F6E56] select-none mb-2"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p
        className="font-fraunces font-light text-[17px] leading-[1.7] text-white flex-1 mb-8"
        style={{ fontStyle: "italic" }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-sm font-dm-sans font-light shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-dm-sans font-light text-white">{name}</p>
          <p className="text-xs font-dm-sans font-light text-white/50 mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-10 md:py-16 px-6 md:px-12 bg-[#0F0F0F]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-dm-sans font-light tracking-[0.18em] uppercase text-[#0F6E56] mb-4">
          Testimonials
        </p>
        <h2
          className="font-fraunces font-light leading-tight text-white mb-8 md:mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          What senior{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>
            colleagues say.
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="Ani's real strength is relationship building, with a clear focus on the long game. He brings strong ecosystem knowledge and a good instinct for identifying where products can address genuine product-market fit gaps, strengthen partner value propositions, and support sustainable growth. Ani adds value through his ability to connect dots across the ecosystem, surface meaningful opportunities, and engage partners in thoughtful, growth-oriented conversations."
            name="Koren Wines"
            role="Managing Director, Xero APAC"
            initials="KW"
          />
          <TestimonialCard
            quote="Ani possesses a rare combination of high emotional intelligence and rigorous strategic analysis and execution. What stands out immediately is his personable nature; he doesn't just manage accounts, he builds genuine trust. Beyond his relationship-building skills, Ani is able to manage complex commercial deals from the very beginning of the lifecycle through to final execution. He doesn't shy away from ambiguity; instead, he structures it."
            name="Michael Green"
            role="GM Partnerships, UK & Emerging Markets, Xero"
            initials="MG"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ──────────────────────────────────────────────────────────

type LogoInitials = { type: "initials"; text: string; bg: string; color: string };
type LogoImg = {
  type: "img";
  src: string;
  fallbackText: string;
  fallbackBg: string;
  fallbackColor: string;
};
type CertEntry = {
  name: string;
  issuer: string;
  year: string;
  link?: string;
  logo?: LogoInitials | LogoImg;
};

const certs: CertEntry[] = [
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    year: "2026",
    link: "https://www.coursera.org/account/accomplishments/specialization/DMEW9WM2HZSA",
    logo: {
      type: "img",
      src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      fallbackText: "G",
      fallbackBg: "#4285F4",
      fallbackColor: "#ffffff",
    },
  },
  {
    name: "LV2 Foundational Negotiation",
    issuer: "The Maker Group",
    year: "2025",
    link: "https://certificates.themakergroup.com/eccb5f04-11d6-468e-afd1-f66d2dbd61a6",
    logo: {
      type: "img",
      src: "/the_maker_group_consulting_logo.jpeg",
      fallbackText: "TMG",
      fallbackBg: "#1a1a1a",
      fallbackColor: "#c9a84c",
    },
  },
  {
    name: "High-Impact Communication Skills; Managing Difficult Conversations",
    issuer: "Pinnacle Performance Company",
    year: "2025",
    logo: {
      type: "img",
      src: "/pinnacle_performance_company_logo.jpeg",
      fallbackText: "PP",
      fallbackBg: "#c85a1a",
      fallbackColor: "#ffffff",
    },
  },
  {
    name: "Crucial Conversations for Mastering Dialogue",
    issuer: "Crucial Learning",
    year: "2025",
    logo: {
      type: "img",
      src: "/Crucial learning logo.png",
      fallbackText: "CC",
      fallbackBg: "#c0392b",
      fallbackColor: "#ffffff",
    },
  },
  {
    name: "B.Tech, Materials Engineering",
    issuer: "National Institute of Technology, Warangal · India",
    year: "2016",
    logo: {
      type: "img",
      src: "/national_institute_of_technology_warangal_logo.jpeg",
      fallbackText: "NIT",
      fallbackBg: "#003580",
      fallbackColor: "#ffffff",
    },
  },
];

function CertLogo({ logo }: { logo: CertEntry["logo"] }) {
  const [errored, setErrored] = useState(false);

  // Fixed 48×48 wrapper for every logo — keeps all cards aligned
  const wrap = (content: React.ReactNode) => (
    <div className="w-12 h-12 shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-white">
      {content}
    </div>
  );

  const tealFallback = (text: string) =>
    wrap(
      <div className="w-full h-full bg-[#0F6E56] flex items-center justify-center text-white text-[11px] font-dm-sans font-light select-none rounded-xl">
        {text}
      </div>
    );

  if (!logo) return <div className="w-12 h-12 shrink-0" />;

  if (logo.type === "initials") {
    return wrap(
      <div
        className="w-full h-full flex items-center justify-center text-[11px] font-dm-sans font-light select-none"
        style={{ backgroundColor: logo.bg, color: logo.color }}
      >
        {logo.text}
      </div>
    );
  }

  if (errored) return tealFallback(logo.fallbackText);

  return wrap(
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={logo.src}
      alt=""
      onError={() => setErrored(true)}
      style={{ width: 40, height: 40, objectFit: "contain" }}
    />
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-dm-sans font-light tracking-[0.18em] uppercase text-[#0F6E56] mb-4">
          Credentials
        </p>
        <h2
          className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-8 md:mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          The learning{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>never stops.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((c) => {
            const inner = (
              <div className="bg-white border border-black/10 rounded-2xl px-5 py-4 flex items-center gap-5 h-full">
                <CertLogo logo={c.logo} />
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-dm-sans font-light text-[#0F0F0F] leading-snug">
                    {c.name}
                  </p>
                  <p className="text-[12px] font-dm-sans font-light text-[#999999] mt-1">
                    {c.issuer} · {c.year}
                  </p>
                  {c.link && (
                    <p className="text-[11px] font-dm-sans font-light text-[#0F6E56] mt-1.5">
                      View credential ↗
                    </p>
                  )}
                </div>
              </div>
            );

            return c.link ? (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                {inner}
              </a>
            ) : (
              <div key={c.name}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/anirudh-thandu/", icon: <IconLinkedIn /> },
    { label: "Email", href: "mailto:anirudh.gt9@gmail.com", icon: <IconMail /> },
  ];

  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-fraunces font-light text-[32px] text-white mb-2">
              Anirudh Thandu
            </p>
            <p className="text-sm font-dm-sans font-light text-[#999999]">
              Partnerships · GTM · Building with AI · Singapore
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-dm-sans font-light text-[#999999] hover:text-white transition-colors"
              >
                {l.icon}
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs font-dm-sans font-light text-[#555555]">
            © 2026 Anirudh Thandu
          </p>
          <p className="text-xs font-dm-sans font-light text-[#555555]">
            Built with Claude
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Builds />
        <Testimonials />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
