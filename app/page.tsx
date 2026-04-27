// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF8] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo + avatar */}
        <a href="#" className="flex items-center gap-3">
          {/* Avatar — swap src to /avatar.jpg once uploaded */}
          <div className="w-8 h-8 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-[11px] font-dm-sans font-light shrink-0 select-none">
            AT
          </div>
          <span className="font-fraunces text-[20px] font-light tracking-tight text-[#0F0F0F]">
            Anirudh Thandu
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {(["Work", "Builds", "About"] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[15px] font-dm-sans font-light text-[#555555] hover:text-[#0F0F0F] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:anirudh.gt9@gmail.com"
          className="inline-flex items-center gap-1 text-sm font-dm-sans font-light px-4 py-2 rounded-full border border-[#0F0F0F] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white transition-colors"
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
    <section className="pt-40 pb-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 mb-8 bg-white">
          <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0" />
          <span className="text-sm font-dm-sans font-light text-[#555555]">
            Singapore · Dubai
          </span>
        </div>

        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-6">
          Partnerships &amp; GTM · 10 years APAC
        </p>

        <h1 className="font-fraunces font-light leading-[1.08] text-[#0F0F0F] mb-8" style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>
          Building ecosystems,
          <br />
          and the tools
          <br />
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>to scale them.</em>
        </h1>

        <p className="text-[17px] font-dm-sans font-light text-[#555555] max-w-xl leading-relaxed mb-10">
          I help SaaS companies grow through partners — sourcing and closing
          strategic alliances, building ecosystems from the ground up, and
          unlocking new markets across Asia. Outside of work, I build things
          with AI just because I can.
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
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Impact Strip ────────────────────────────────────────────────────────────

const impactMetrics = [
  { number: "128%", label: "Growth in organisations extending Xero with 3rd party apps (14K → 32K)" },
  { number: "15", label: "Strategic app partners signed across Xero Asia" },
  { number: "1M+", label: "Combined customer base reached through channel partnerships" },
  { number: "$80K+", label: "Partner roadshow revenue generated across Asia (2022–2025)" },
];

function ImpactStrip() {
  return (
    <section className="px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-black/10 rounded-2xl px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x divide-black/10">
            {impactMetrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-6 py-6 lg:py-0 first:pt-0 last:pb-0 lg:first:pt-0 lg:last:pb-0"
              >
                <span className="font-fraunces font-light text-[40px] leading-none text-[#0F6E56] mb-3">
                  {m.number}
                </span>
                <span className="text-[13px] font-dm-sans font-light text-[#555555] leading-snug max-w-[160px]">
                  {m.label}
                </span>
              </div>
            ))}
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
    { value: "APAC & GCC", label: "Markets" },
    { value: "3×", label: "AI products shipped since 2025" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-4">
          About
        </p>

        <h2 className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-14" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Strategic by nature.{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>Builder by choice.</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-[16px] font-dm-sans font-light text-[#555555] leading-[1.75]">
            <p>
              Nearly a decade building partner ecosystems across APAC — starting
              with taking Sapaad from zero to a fully operational Singapore
              business with a cross-functional team, to scaling Xero&rsquo;s App
              Store across Asia through product integrations, channel
              partnerships, and commercial strategy.
            </p>
            <p>
              I specialise in navigating Asia&rsquo;s fragmented markets, negotiating
              complex commercial agreements, and bridging technical, legal, and
              business teams. I turn market gaps into partnership opportunities.
            </p>
            <p>
              When I&rsquo;m not doing that, I build things. Tilfaz (a social TV
              tracking app), an automated job search pipeline, this portfolio —
              all built using Claude with no prior coding experience.
            </p>
          </div>

          <div className="space-y-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-white border border-black/10 rounded-2xl px-6 py-5 flex items-center gap-6"
              >
                <span className="font-fraunces font-light text-[32px] text-[#0F0F0F] shrink-0 w-20 text-right">
                  {s.value}
                </span>
                <div className="w-px h-8 bg-black/10 shrink-0" />
                <span className="text-sm font-dm-sans font-light text-[#555555] leading-snug">
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
      <p className="text-[13px] font-dm-sans font-light text-[#0F0F0F]">{role}</p>
      <p className="text-[12px] font-dm-sans font-light text-[#999999] mt-0.5">{meta}</p>
    </div>
  );
}

function MetricsRow({ items }: { items: string[] }) {
  return (
    <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap gap-x-6 gap-y-2">
      {items.map((m) => (
        <span key={m} className="text-[12px] font-dm-sans font-light text-[#555555]">
          {m}
        </span>
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
    <section id="work" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-4">
          Work
        </p>
        <h2 className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-14" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          What I&rsquo;ve built{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>for others.</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Xero */}
          <WorkCard>
            <TagPill>Ecosystem · Channel · GTM</TagPill>
            <h3 className="font-fraunces font-light text-[28px] text-[#0F0F0F] mb-1">
              Xero
            </h3>
            <p className="text-[12px] font-dm-sans font-light text-[#999999] mb-6">
              Singapore · May 2022 – Feb 2026
            </p>

            <RoleLabel
              role="Partnerships Manager – Ecosystem & Strategic Partnerships"
              meta="May 2022 – May 2023"
            />
            <ul>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">75% app migration rate</strong> — commercialised Xero&rsquo;s Asia ecosystem from zero, moving 70 apps onto a new revenue-share model
              </CalloutItem>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">2 strategic app partners signed</strong> to plug critical product gaps in HR/Payroll and Tenant Management
              </CalloutItem>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">S$13,500 in partner revenue</strong> generated at Xero Roadshow 2022 — oversold every exhibitor and pitch slot
              </CalloutItem>
            </ul>

            <div className="mt-4 pt-5 border-t border-black/10">
              <RoleLabel
                role="Partnerships Manager – Asia"
                meta="May 2023 – Feb 2026"
              />

              <SubHead>Product Partnerships</SubHead>
              <ul>
                <CalloutItem>
                  <strong className="font-light text-[#0F0F0F]">128% growth in app attach rate</strong> — organisations using 3rd party apps with Xero grew from 14K to 32K, directly reducing churn
                </CalloutItem>
                <CalloutItem>
                  <strong className="font-light text-[#0F0F0F]">13 strategic app partners signed</strong> across tax, payroll, eCommerce, and financial workflow — including the first MAS-owned carbon accounting platform on the Xero App Store
                </CalloutItem>
                <CalloutItem>
                  Negotiated a <strong className="font-light text-[#0F0F0F]">70% pricing reduction</strong> for bank statement extraction and secured free or discounted payroll solutions for 9K+ organisations affected by a product sunset — protecting retention across Asia
                </CalloutItem>
              </ul>

              <SubHead>Channel Partnerships</SubHead>
              <ul>
                <CalloutItem>
                  Built Xero Asia&rsquo;s channel partnerships function from scratch — <strong className="font-light text-[#0F0F0F]">9 referral partnerships closed with 1M+ combined customer base</strong>, LTV/CAC above 4
                </CalloutItem>
                <CalloutItem>
                  Structured a creative partnership in Malaysia to unlock a government grant Xero couldn&rsquo;t access directly — drove <strong className="font-light text-[#0F0F0F]">80% increase in new customer acquisition</strong>
                </CalloutItem>
              </ul>

              <SubHead>Events</SubHead>
              <ul>
                <CalloutItem>
                  Grew Xero Asia Roadshow partner revenue from <strong className="font-light text-[#0F0F0F]">S$13.5K (2022) to USD $33.5K (2025)</strong> — 100% exhibitor CSAT and 4,000+ leads generated for ecosystem partners across three years
                </CalloutItem>
              </ul>
            </div>

            <MetricsRow
              items={[
                "15 app partners signed",
                "128% attach rate growth",
                "1M+ channel reach",
                "USD $80K+ roadshow revenue",
              ]}
            />
          </WorkCard>

          {/* Sapaad */}
          <WorkCard>
            <TagPill>GTM · BD</TagPill>
            <h3 className="font-fraunces font-light text-[28px] text-[#0F0F0F] mb-1">
              Sapaad
            </h3>
            <p className="text-[12px] font-dm-sans font-light text-[#999999] mb-6">
              Singapore &amp; Dubai · 2016 – 2022
            </p>

            <RoleLabel
              role="Sales Manager, APAC (Singapore) · Product Specialist (Dubai)"
              meta="2016 – 2022"
            />
            <ul>
              <CalloutItem>
                <strong className="font-light text-[#0F0F0F]">Built Sapaad&rsquo;s Singapore business from the ground up</strong> — relocated to establish the APAC regional HQ, hired and managed a 5-person cross-functional team, and led full GTM strategy across Southeast Asia
              </CalloutItem>
              <CalloutItem>
                Landed integrations with <strong className="font-light text-[#0F0F0F]">foodpanda, Grab, Google, and Stripe</strong>; acquired 100+ restaurant brands across ASEAN; secured IMDA Pre-Approved Vendor status and an MOU with ITE Singapore making Sapaad the official software in their Hospitality curriculum
              </CalloutItem>
              <CalloutItem>
                Closed <strong className="font-light text-[#0F0F0F]">200+ new restaurant accounts in Dubai in under two years</strong> before relocating to build the Singapore operation
              </CalloutItem>
            </ul>

            <MetricsRow
              items={[
                "100+ brands acquired",
                "5-person team led",
                "4 platform integrations",
                "IMDA Pre-Approved Vendor",
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
    <section id="builds" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-4">
          Builds
        </p>
        <h2 className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-14" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          What I&rsquo;ve built{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>for myself.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BuildCard
            icon={<IconTV />}
            title="Tilfaz"
            description="A social TV tracking app — Letterboxd for television. Built with zero prior coding experience using Claude. Features TMDB search, genre swimlanes, a follow system, activity feeds, and ratings."
            tech={["Next.js", "Supabase", "TMDB API", "Vercel"]}
            link="https://tilfaz.vercel.app"
            linkLabel="Live demo ↗"
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
            description="Building an AI workflow for a real partnerships problem — selected as one of 500 participants in Singapore's Skills Ignition AI Challenge."
            tech={["Google Gemini", "In progress"]}
            comingSoon
          />
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
    <div className="bg-white border border-black/10 rounded-2xl p-8 flex flex-col">
      <span
        className="font-fraunces text-[72px] leading-none text-[#0F6E56] select-none mb-2"
        style={{ opacity: 0.15 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p
        className="font-fraunces font-light text-[17px] leading-[1.7] text-[#0F0F0F] flex-1 mb-8"
        style={{ fontStyle: "italic" }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-sm font-dm-sans font-light shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-dm-sans font-light text-[#0F0F0F]">{name}</p>
          <p className="text-xs font-dm-sans font-light text-[#999999] mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-4">
          Testimonials
        </p>
        <h2 className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-14" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          What senior{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>colleagues say.</em>
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

const certs = [
  { name: "Google AI Professional Certificate", issuer: "Google", year: "2026" },
  { name: "LV2 Foundational Negotiation", issuer: "The Maker Group", year: "2025" },
  {
    name: "High-Impact Communication Skills; Managing Difficult Conversations",
    issuer: "Pinnacle Performance Company",
    year: "2025",
  },
  { name: "Crucial Conversations for Mastering Dialogue", issuer: "Crucial Learning", year: "2025" },
  {
    name: "B.Tech, Materials Engineering",
    issuer: "National Institute of Technology, Warangal · India",
    year: "2016",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-dm-sans font-light tracking-widest uppercase text-[#0F6E56] mb-4">
          Credentials
        </p>
        <h2 className="font-fraunces font-light leading-tight text-[#0F0F0F] mb-14" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          How I keep{" "}
          <em style={{ fontStyle: "italic", color: "#0F6E56" }}>sharpening.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-black/10 rounded-2xl px-6 py-5 flex items-start gap-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0 mt-[6px]" />
              <div>
                <p className="text-[15px] font-dm-sans font-light text-[#0F0F0F] leading-snug">
                  {c.name}
                </p>
                <p className="text-[13px] font-dm-sans font-light text-[#999999] mt-1">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/anirudh-thandu/" },
    { label: "GitHub", href: "https://github.com/anirudhgt9" },
    { label: "Email", href: "mailto:anirudh.gt9@gmail.com" },
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
                className="text-sm font-dm-sans font-light text-[#999999] hover:text-white transition-colors"
              >
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
        <ImpactStrip />
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
