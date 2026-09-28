const engines = [
  {
    kicker: "Engine 01",
    title: "Idea Intelligence",
    copy: "Score startup concepts by urgency, market size, speed, competition, and founder leverage before wasting months on the wrong build."
  },
  {
    kicker: "Engine 02",
    title: "Validation Flow",
    copy: "Turn raw ideas into sharp offers, landing pages, outreach scripts, pricing tests, and early proof paths."
  },
  {
    kicker: "Engine 03",
    title: "Portfolio Control",
    copy: "Run many startup experiments at once, compare signal, and route time and capital toward the few that actually move."
  }
]

const nodes = [
  ["01", "Input", "Capture the idea, market, workflow, or customer pain."],
  ["02", "Score", "Rank demand, timing, risk, speed, and upside."],
  ["03", "Validate", "Test the offer before overbuilding the product."],
  ["04", "Launch", "Ship the smallest useful version into the market."],
  ["05", "Scale", "Double down on winners and package proof for capital."]
]

const scoredBets = [
  ["01", "Keep", "Warehouse-slot marketplace", "Demand 82 · Speed 71 · Risk 44", "Promote to validation flow"],
  ["02", "Watch", "AI invoice chase", "Demand 64 · Speed 88 · Risk 61", "Needs a priced offer test"],
  ["03", "Kill", "Generic founder community", "Demand 29 · Speed 40 · Risk 22", "No urgency, crowded, drop it"],
]

export default function Home() {
  return (
    <div>
      <div className="grid" />

      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <span className="brand-dot" />
            BlitzUnicorn
          </div>
          <div className="nav-links">
            <a className="nav-pill" href="#engines">Engines</a>
            <a className="nav-pill" href="#system">System</a>
            <a className="nav-pill" href="#proof">Proof Status</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap">
          <div className="hero-card">
            <div className="hero-grid">
              <div>
                <div className="eyebrow">Prototype · Portfolio operating system</div>
                <h1>
                  Build proof.
                  <br />
                  <span className="gradient">Find momentum.</span>
                  <br />
                  Scale winners.
                </h1>
                <p className="sub">
                  BlitzUnicorn helps founders turn startup ideas into structured execution:
                  validation, MVP direction, traction strategy, portfolio thinking, and
                  investor-ready clarity without pretending early proof is already scale.
                </p>
                <div className="actions">
                  <a className="btn btn-primary" href="#system">Explore the system</a>
                  <a className="btn btn-secondary" href="/demo">Open product demo</a>
                  <a className="btn btn-secondary" href="/product">Product notes</a>
                </div>
              </div>

              <div className="side">
                <div className="stat">
                  <div className="label">Portfolio logic</div>
                  <div className="value">100 → 10 → 1</div>
                  <div className="note">
                    Test many ideas, promote the strongest, and stop wasting time on weak signals.
                  </div>
                </div>

                <div className="stat">
                  <div className="label">Operating rule</div>
                  <div className="value">Traction first</div>
                  <div className="note">
                    Every build cycle should move closer to demand, revenue, or fundable proof.
                  </div>
                </div>

                <div className="stat">
                  <div className="label">Sample scoreboard · demo</div>
                  {scoredBets.map(([num, verdict, title, scores, next]) => (
                    <div className="note" key={title} style={{ marginTop: 12 }}>
                      <strong>{num} {verdict}</strong> — {title}
                      <br />
                      {scores}. {next}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="engines" className="section">
        <div className="wrap">
          <h2>A venture stack for one-person startup scale.</h2>
          <p className="section-copy">
            BlitzUnicorn is the operating layer between idea generation,
            product building, customer validation, and investor packaging.
          </p>

          <div className="cards">
            {engines.map((engine) => (
              <article className="card" key={engine.title}>
                <div className="label">{engine.kicker}</div>
                <h3>{engine.title}</h3>
                <p>{engine.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="section">
        <div className="wrap">
          <div className="os">
            <h2>BlitzUnicorn OS</h2>
            <p className="section-copy">
              An early-stage product concept: clear enough for users, serious enough
              for investors, and honest about what is built versus what is next.
            </p>

            <div className="nodes">
              {nodes.map(([num, title, copy]) => (
                <div className="node" key={title}>
                  <div className="label">{num}</div>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section">
        <div className="wrap">
          <h2>Current proof status</h2>
          <p className="section-copy">
            BlitzUnicorn is currently an early product demo and venture concept.
            Public claims stay honest: no fake customers, revenue, funding, partnerships,
            or traction.
          </p>

          <div className="cards">
            <article className="card">
              <div className="label">Known</div>
              <h3>Concept and positioning</h3>
              <p>The startup direction is defined: one system to help founders move from idea to proof and portfolio-scale execution.</p>
            </article>

            <article className="card">
              <div className="label">Partial</div>
              <h3>MVP surface</h3>
              <p>The public site can communicate the product and prepare the project for future dashboard, scoring, and validation features.</p>
            </article>

            <article className="card">
              <div className="label">Next</div>
              <h3>Interactive product</h3>
              <p>Add real idea scoring, project tracking, validation workflows, investor memo generation, and persistent storage.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="badge">
            <span>BlitzUnicorn prototype</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
