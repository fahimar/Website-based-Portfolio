import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const blogStyles = `
  :root {
    --blog-bg: #0a0a0f;
    --blog-surface: #12121a;
    --blog-border: #1e1e2e;
    --blog-accent: #00ff88;
    --blog-accent2: #ff6b35;
    --blog-accent3: #7c6af7;
    --blog-text: #e8e8f0;
    --blog-muted: #6b6b8a;
    --blog-code-bg: #0d1117;
    --blog-danger: #ff4757;
    --blog-success: #00ff88;
    --blog-warning: #ffa502;
  }

  .blog-page * { margin: 0; padding: 0; box-sizing: border-box; }

  .blog-page {
    background: var(--blog-bg);
    color: var(--blog-text);
    font-family: 'Syne', sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  .blog-page::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(124,106,247,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,106,247,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  .blog-container {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    animation: blogFadeUp 0.5s ease both;
  }

  /* Back button */
  .blog-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    letter-spacing: 1px;
    color: var(--blog-accent3);
    text-decoration: none;
    padding: 16px 0;
    transition: color 0.2s;
  }
  .blog-back-btn:hover { color: var(--blog-accent); }

  .blog-header {
    padding: 32px 0 0;
    border-bottom: 1px solid var(--blog-border);
    margin-bottom: 64px;
  }

  .blog-tag {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--blog-accent);
    background: rgba(0,255,136,0.08);
    border: 1px solid rgba(0,255,136,0.2);
    padding: 4px 12px;
    border-radius: 2px;
    margin-bottom: 24px;
  }

  .blog-page h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -1px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #e8e8f0 0%, #7c6af7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .blog-subtitle {
    font-size: 1.1rem;
    color: var(--blog-muted);
    margin-bottom: 32px;
    font-weight: 400;
  }

  .blog-meta {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 20px 0;
    border-top: 1px solid var(--blog-border);
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    color: var(--blog-muted);
  }

  .blog-meta-item { display: flex; align-items: center; gap: 6px; }
  .blog-dot { color: var(--blog-border); }

  .blog-article { padding-bottom: 80px; }

  .blog-tldr {
    background: linear-gradient(135deg, rgba(124,106,247,0.08), rgba(0,255,136,0.05));
    border: 1px solid rgba(124,106,247,0.3);
    border-left: 3px solid var(--blog-accent3);
    border-radius: 0 8px 8px 0;
    padding: 24px 28px;
    margin-bottom: 48px;
    position: relative;
    overflow: hidden;
  }

  .blog-tldr::before {
    content: 'TL;DR';
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--blog-accent3);
    display: block;
    margin-bottom: 8px;
  }

  .blog-tldr p { color: var(--blog-text); font-size: 1rem; }

  .blog-page h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 56px 0 20px;
    color: var(--blog-text);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .blog-page h2::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 28px;
    background: linear-gradient(var(--blog-accent), var(--blog-accent3));
    border-radius: 2px;
    flex-shrink: 0;
  }

  .blog-page h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 32px 0 12px;
    color: var(--blog-accent);
    font-family: 'Space Mono', monospace;
  }

  .blog-page p { margin-bottom: 16px; color: #c8c8d8; font-size: 1rem; }

  .blog-page pre {
    background: var(--blog-code-bg);
    border: 1px solid var(--blog-border);
    border-radius: 8px;
    padding: 20px 24px;
    overflow-x: auto;
    margin: 20px 0;
    position: relative;
  }

  .blog-page pre::before {
    content: attr(data-lang);
    position: absolute;
    top: 8px;
    right: 14px;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--blog-muted);
    text-transform: uppercase;
  }

  .blog-page code {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: #a9b1d6;
  }

  .blog-page p code, .blog-page li code {
    background: rgba(124,106,247,0.12);
    border: 1px solid rgba(124,106,247,0.2);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.85em;
    color: #c0b7ff;
  }

  .blog-callout {
    border-radius: 8px;
    padding: 20px 24px;
    margin: 28px 0;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .blog-callout-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
  .blog-callout-body { flex: 1; }
  .blog-callout-title { font-weight: 700; margin-bottom: 6px; font-size: 0.9rem; letter-spacing: 0.5px; }
  .blog-callout p { margin-bottom: 0; }

  .blog-callout.warning {
    background: rgba(255,165,2,0.07);
    border: 1px solid rgba(255,165,2,0.25);
  }
  .blog-callout.warning .blog-callout-title { color: var(--blog-warning); }

  .blog-callout.danger {
    background: rgba(255,71,87,0.07);
    border: 1px solid rgba(255,71,87,0.25);
  }
  .blog-callout.danger .blog-callout-title { color: var(--blog-danger); }

  .blog-callout.success {
    background: rgba(0,255,136,0.05);
    border: 1px solid rgba(0,255,136,0.2);
  }
  .blog-callout.success .blog-callout-title { color: var(--blog-success); }

  .blog-callout.info {
    background: rgba(124,106,247,0.07);
    border: 1px solid rgba(124,106,247,0.25);
  }
  .blog-callout.info .blog-callout-title { color: var(--blog-accent3); }

  .blog-table-wrap {
    overflow-x: auto;
    margin: 28px 0;
    border-radius: 8px;
    border: 1px solid var(--blog-border);
  }

  .blog-page table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
  }

  .blog-page thead tr { background: rgba(124,106,247,0.1); }
  .blog-page th {
    padding: 12px 16px;
    text-align: left;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--blog-accent3);
    font-weight: 700;
    border-bottom: 1px solid var(--blog-border);
  }

  .blog-page td {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(30,30,46,0.8);
    color: var(--blog-text);
  }

  .blog-page tr:last-child td { border-bottom: none; }
  .blog-page tr:hover td { background: rgba(255,255,255,0.02); }

  .status-safe { color: var(--blog-success); font-weight: 700; }
  .status-danger { color: var(--blog-danger); font-weight: 700; }

  .blog-steps { list-style: none; margin: 20px 0; padding: 0; }
  .blog-steps li {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .blog-step-num {
    background: rgba(124,106,247,0.15);
    border: 1px solid rgba(124,106,247,0.3);
    color: var(--blog-accent3);
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .blog-flow {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 28px 0;
  }

  .blog-flow-node {
    background: var(--blog-surface);
    border: 1px solid var(--blog-border);
    border-radius: 8px;
    padding: 14px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    position: relative;
  }

  .blog-flow-node.trigger { border-color: rgba(0,255,136,0.3); background: rgba(0,255,136,0.04); }
  .blog-flow-node.check { border-color: rgba(255,165,2,0.3); background: rgba(255,165,2,0.04); }
  .blog-flow-node.action { border-color: rgba(124,106,247,0.3); background: rgba(124,106,247,0.04); }
  .blog-flow-node.result { border-color: rgba(255,71,87,0.3); background: rgba(255,71,87,0.04); }

  .blog-flow-node-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--blog-muted);
    margin-bottom: 4px;
  }

  .blog-flow-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blog-muted);
    height: 24px;
    font-size: 18px;
  }

  .blog-page hr {
    border: none;
    border-top: 1px solid var(--blog-border);
    margin: 48px 0;
  }

  .highlight { color: var(--blog-accent); font-weight: 700; }
  .highlight-orange { color: var(--blog-accent2); font-weight: 700; }
  .highlight-purple { color: var(--blog-accent3); font-weight: 700; }

  .blog-migration-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }

  @media (max-width: 560px) {
    .blog-migration-grid { grid-template-columns: 1fr; }
  }

  .blog-migration-card {
    background: var(--blog-surface);
    border: 1px solid var(--blog-border);
    border-radius: 8px;
    padding: 18px 20px;
    transition: border-color 0.2s;
  }

  .blog-migration-card:hover { border-color: var(--blog-accent3); }

  .blog-migration-card h4 {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: var(--blog-accent3);
    margin-bottom: 8px;
  }

  .blog-migration-card p {
    font-size: 13px;
    color: var(--blog-muted);
    margin-bottom: 0;
  }

  .blog-footer {
    border-top: 1px solid var(--blog-border);
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    color: var(--blog-muted);
    flex-wrap: wrap;
    gap: 16px;
  }

  .blog-series-nav {
    background: var(--blog-surface);
    border: 1px solid var(--blog-border);
    border-radius: 8px;
    padding: 24px 28px;
    margin: 48px 0;
  }

  .blog-series-nav-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--blog-accent3);
    margin-bottom: 12px;
  }

  .blog-series-nav h3 {
    font-size: 1rem;
    color: var(--blog-text);
    font-family: 'Syne', sans-serif;
    margin-bottom: 6px;
    margin-top: 0;
  }

  .blog-series-nav p { font-size: 14px; margin-bottom: 0; }

  .kw { color: #7c6af7; }
  .str { color: #9ece6a; }
  .cm { color: #565f89; font-style: italic; }
  .num { color: #ff9e64; }
  .fn { color: #73daca; }
  .prop { color: #7dcfff; }

  @keyframes blogFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const DockerPostgresBlog = () => {
  useEffect(() => {
    // Load Google Fonts for blog
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="blog-page">
      <style>{blogStyles}</style>

      <div className="blog-container">
        {/* Back to portfolio */}
        <Link to="/" className="blog-back-btn">
          ← Back to Portfolio
        </Link>

        <header className="blog-header">
          <span className="blog-tag">Docker Series · Part 01</span>
          <h1>
            Docker + Postgres:
            <br />
            Volume কি সত্যিই Temporary?
          </h1>
          <p className="blog-subtitle">
            initdb কেন বারবার run করে না — এবং production এ কী করা উচিত
          </p>
          <div className="blog-meta">
            <span className="blog-meta-item">ফাহিম আল রশিদ </span>
            <span className="blog-dot">·</span>
            <span className="blog-meta-item">March 2026</span>
            <span className="blog-dot">·</span>
            <span className="blog-meta-item">8 min read</span>
            <span className="blog-dot">·</span>
            <span
              className="blog-meta-item"
              style={{ color: "var(--blog-accent)" }}
            >
              Docker · Postgres · DevOps
            </span>
          </div>
        </header>

        <article className="blog-article">
          {/* TL;DR */}
          <div className="blog-tldr">
            <p>
              Docker volume <strong>temporary না — persistent</strong>। Container
              delete হলেও data থাকে। কিন্তু{" "}
              <code>/docker-entrypoint-initdb.d/</code> শুধু প্রথমবার empty
              volume দেখলে run করে। Production এ schema update করতে migration
              tool ব্যবহার করো — <code>initdb</code> এর উপর ভরসা করো না।
            </p>
          </div>

          {/* Section 1 */}
          <h2>প্রশ্নটা কোথা থেকে এলো?</h2>
          <p>
            একটা common scenario। তুমি Postgres container চালাচ্ছো, নতুন একটা
            table যোগ করলে <code>schema.sql</code> এ, container restart দিলে —
            কিন্তু table নেই। মাথায় প্রশ্ন আসে:{" "}
            <span className="highlight-orange">
              volume কি delete হয়ে গেছে? নাকি schema run হয়নি?
            </span>
          </p>
          <p>
            এই confusion টা আসলে Docker এর একটা intentional design decision না
            বোঝার কারণে হয়। চলো step by step ভেঙে দেখি।
          </p>

          {/* Section 2 */}
          <h2>Volume কি আসলে Temporary?</h2>
          <p>
            <span className="highlight">না।</span> Docker volume হলো{" "}
            <strong>persistent storage</strong>। এটা container এর lifecycle এর
            সাথে tied না। মানে:
          </p>

          <div className="blog-callout success">
            <span className="blog-callout-icon">✓</span>
            <div className="blog-callout-body">
              <div className="blog-callout-title">VOLUME TRUTH</div>
              <p>
                Container stop করো, restart করো, এমনকি{" "}
                <code>docker compose down</code> করো — volume এর data থাকবে।
                Volume আলাদা entity, container না।
              </p>
            </div>
          </div>

          <p>তাহলে সমস্যা কোথায়?</p>

          {/* Section 3 */}
          <h2>initdb.d — The One-Time Magic</h2>
          <p>
            Postgres Docker image এর একটা feature আছে:{" "}
            <code>/docker-entrypoint-initdb.d/</code> ফোল্ডারে যেকোনো{" "}
            <code>.sql</code> বা <code>.sh</code> ফাইল রাখলে সেটা startup এ run
            করে।
          </p>
          <p>
            কিন্তু{" "}
            <span className="highlight-orange">শুধুমাত্র তখনই</span> যখন data
            directory সম্পূর্ণ empty থাকে।
          </p>

          <div className="blog-flow">
            <div className="blog-flow-node trigger">
              <div className="blog-flow-node-label">Trigger</div>
              docker compose up (প্রথমবার)
            </div>
            <div className="blog-flow-arrow">↓</div>
            <div className="blog-flow-node check">
              <div className="blog-flow-node-label">Check</div>
              postgres_data volume → <strong>empty?</strong>
            </div>
            <div className="blog-flow-arrow">↓</div>
            <div className="blog-flow-node action">
              <div className="blog-flow-node-label">Action (empty হলে)</div>
              initdb.d scripts run → tables create → DB initialize
            </div>
            <div className="blog-flow-arrow">↓</div>
            <div className="blog-flow-node result">
              <div className="blog-flow-node-label">Result (পরের বার)</div>
              volume already initialized → initdb.d SKIP ❌
            </div>
          </div>

          <p>
            এটা intentional। Postgres ধরে নেয়: "data already আছে, আমি overwrite
            করবো না।" এটা data safety feature।
          </p>

          {/* Section 4 */}
          <h2>তোমার Real-World Scenario</h2>
          <p>ধরো তোমার project এ এই tables ছিল:</p>

          <pre data-lang="sql">
            <code>
              <span className="cm">-- schema.sql (original)</span>
              {"\n"}
              <span className="kw">CREATE TABLE</span>{" "}
              <span className="fn">faq_entries</span> (...);{"\n"}
              <span className="kw">CREATE TABLE</span>{" "}
              <span className="fn">training_entries</span> (...);{"\n"}
              <span className="kw">CREATE TABLE</span>{" "}
              <span className="fn">conversation_logs</span> (...);
            </code>
          </pre>

          <p>পরে তুমি যোগ করলে:</p>

          <pre data-lang="sql">
            <code>
              <span className="kw">CREATE TABLE</span>{" "}
              <span className="fn">groq_usage_logs</span> (...);{" "}
              <span className="cm">-- নতুন</span>
            </code>
          </pre>

          <p>
            কিন্তু <code>docker compose up</code> করার পর{" "}
            <code>groq_usage_logs</code> নেই।
          </p>

          <div className="blog-callout warning">
            <span className="blog-callout-icon">⚠️</span>
            <div className="blog-callout-body">
              <div className="blog-callout-title">WHY IT HAPPENED</div>
              <p>
                Volume আগে থেকেই initialized ছিল (তিনটা table নিয়ে)। Postgres
                দেখলো "DB exists" — তাই <code>initdb.d</code> skip করলো। নতুন
                table কোনোদিনই create হয়নি।
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2>Volume এর সত্যিকারের Life Cycle</h2>

          <div className="blog-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Volume Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>docker compose stop</code>
                  </td>
                  <td>সব data থাকে</td>
                  <td className="status-safe">✓ SAFE</td>
                </tr>
                <tr>
                  <td>
                    <code>docker compose down</code>
                  </td>
                  <td>সব data থাকে</td>
                  <td className="status-safe">✓ SAFE</td>
                </tr>
                <tr>
                  <td>Container delete</td>
                  <td>সব data থাকে</td>
                  <td className="status-safe">✓ SAFE</td>
                </tr>
                <tr>
                  <td>
                    <code>docker compose down -v</code>
                  </td>
                  <td>Volume সহ সব যায়</td>
                  <td className="status-danger">✗ DANGER</td>
                </tr>
                <tr>
                  <td>
                    <code>docker volume rm &lt;name&gt;</code>
                  </td>
                  <td>Volume delete, সব যায়</td>
                  <td className="status-danger">✗ DANGER</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="blog-callout danger">
            <span className="blog-callout-icon">🔥</span>
            <div className="blog-callout-body">
              <div className="blog-callout-title">PRODUCTION WARNING</div>
              <p>
                <code>docker compose down -v</code> flag টা production এ কখনো
                blindly run করো না। এই <code>-v</code> flag টাই সব data মুছে
                দেয়।
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2>Volume আছে কিনা Check করো</h2>

          <pre data-lang="bash">
            <code>
              <span className="cm"># সব volume দেখো</span>
              {"\n"}
              <span className="fn">docker</span> volume ls{"\n"}
              {"\n"}
              <span className="cm">
                # Project এর volume inspect করো
              </span>
              {"\n"}
              <span className="fn">docker</span> volume inspect
              faces-chatbot_postgres_data
            </code>
          </pre>

          <p>
            Volume এর নাম সাধারণত হয়:{" "}
            <code>
              &lt;project-folder-name&gt;_&lt;volume-name-in-compose&gt;
            </code>
            ।
          </p>

          <p>
            যদি <code>docker-compose.yml</code> এ লেখা থাকে:
          </p>

          <pre data-lang="yaml">
            <code>
              <span className="prop">volumes</span>:{"\n"}
              {"  "}
              <span className="prop">postgres_data</span>:
            </code>
          </pre>

          <p>
            আর project folder এর নাম <code>faces-chatbot</code> হলে, volume এর
            নাম হবে <code>faces-chatbot_postgres_data</code>।
          </p>

          <hr />

          {/* Section 7 */}
          <h2>Production-Safe Solution: Migration</h2>
          <p>
            <code>initdb.d</code> দিয়ে শুধু initial setup করা যায়। Schema
            evolve করতে হলে দরকার <strong>migration system</strong>।
          </p>
          <p>Concept টা simple:</p>

          <ul className="blog-steps">
            <li>
              <span className="blog-step-num">1</span>
              <div>
                প্রতিটা schema change কে numbered file এ রাখো (e.g.,{" "}
                <code>V1__initial.sql</code>,{" "}
                <code>V2__add_groq_logs.sql</code>)
              </div>
            </li>
            <li>
              <span className="blog-step-num">2</span>
              <div>
                Migration tool track করে কোন version পর্যন্ত applied হয়েছে
              </div>
            </li>
            <li>
              <span className="blog-step-num">3</span>
              <div>শুধু নতুন files apply করে — আগেরগুলো skip করে</div>
            </li>
          </ul>

          <h3>// Popular Migration Tools</h3>

          <div className="blog-migration-grid">
            <div className="blog-migration-card">
              <h4>Alembic</h4>
              <p>
                SQLAlchemy projects এর জন্য। Python-based। Auto-generate
                migrations সহ।
              </p>
            </div>
            <div className="blog-migration-card">
              <h4>Flyway</h4>
              <p>
                SQL-first approach। Java ecosystem popular। Docker image আছে।
              </p>
            </div>
            <div className="blog-migration-card">
              <h4>Liquibase</h4>
              <p>
                XML/YAML/JSON format এ schema define করো। Enterprise-friendly।
              </p>
            </div>
            <div className="blog-migration-card">
              <h4>Manual Versioned SQL</h4>
              <p>
                Simplest। <code>migrations/</code> folder এ numbered SQL files।
                Small projects এর জন্য perfect।
              </p>
            </div>
          </div>

          <h3>// Quick Fix (Immediate Solution)</h3>
          <p>
            এখনই production এ table add করতে চাইলে, সরাসরি running container এ
            run করো:
          </p>

          <pre data-lang="bash">
            <code>
              <span className="cm">
                # Running container এ connect করো
              </span>
              {"\n"}
              <span className="fn">docker</span> exec -it
              &lt;postgres-container-name&gt; psql -U &lt;user&gt; -d
              &lt;dbname&gt;{"\n"}
              {"\n"}
              <span className="cm"># তারপর SQL run করো</span>
              {"\n"}
              <span className="kw">CREATE TABLE</span>{" "}
              <span className="fn">groq_usage_logs</span> ({"\n"}
              {"  "}id <span className="kw">SERIAL PRIMARY KEY</span>,{"\n"}
              {"  "}created_at <span className="kw">TIMESTAMP DEFAULT NOW</span>
              (){"\n"}
              {"  "}
              <span className="cm">-- বাকি columns...</span>
              {"\n"});
            </code>
          </pre>

          <div className="blog-callout info">
            <span className="blog-callout-icon">💡</span>
            <div className="blog-callout-body">
              <div className="blog-callout-title">PRO TIP</div>
              <p>
                এই manual change টাকেও একটা migration file এ document করে রাখো।
                নাহলে পরে নতুন environment setup করতে গেলে এই table miss হবে।
              </p>
            </div>
          </div>

          <hr />

          {/* Section 8 */}
          <h2>Docker Compose env_file Bonus Fix</h2>
          <p>
            যেহেতু কথা উঠলো — একটা common compose error এর সমাধানও দিয়ে রাখি।
          </p>
          <p>
            Error: <code>services.api.environment must be a mapping</code>
          </p>
          <p>
            এটা হয় যখন <code>environment:</code> এ .env content paste করা হয়
            যেটা YAML mapping format এ নেই।
          </p>

          <pre data-lang="yaml">
            <code>
              <span className="cm">
                # ❌ Wrong — string format
              </span>
              {"\n"}
              <span className="prop">environment</span>:{"\n"}
              {"  "}- DATABASE_URL=postgres://...{"\n"}
              {"\n"}
              <span className="cm">
                # ✅ Correct — use env_file instead
              </span>
              {"\n"}
              <span className="prop">api</span>:{"\n"}
              {"  "}
              <span className="prop">build</span>: .{"\n"}
              {"  "}
              <span className="prop">env_file</span>:{"\n"}
              {"    "}- .env.prod{"\n"}
              {"  "}
              <span className="prop">depends_on</span>:{"\n"}
              {"    "}- postgres
            </code>
          </pre>

          <p>
            <code>env_file:</code> ব্যবহার করলে <code>environment:</code> block
            দরকার নেই।
          </p>

          <hr />

          {/* Key Takeaways */}
          <h2>Key Takeaways</h2>

          <ul className="blog-steps">
            <li>
              <span className="blog-step-num">→</span>
              <div>
                <span className="highlight">Volume persistent</span> — container
                lifecycle এর সাথে যায় না
              </div>
            </li>
            <li>
              <span className="blog-step-num">→</span>
              <div>
                <span className="highlight-orange">initdb.d</span> শুধু empty
                volume এ একবারই run করে
              </div>
            </li>
            <li>
              <span className="blog-step-num">→</span>
              <div>
                <span className="highlight-purple">Migration tool</span> ব্যবহার
                করো schema evolution এর জন্য
              </div>
            </li>
            <li>
              <span className="blog-step-num">→</span>
              <div>
                <code>docker compose down -v</code> production এ সাবধানে
                ব্যবহার করো
              </div>
            </li>
          </ul>

          <div className="blog-series-nav">
            <div className="blog-series-nav-label">Up Next in Series</div>
            <h3>
              Part 02 · Zero-Downtime Schema Migration with Alembic
            </h3>
            <p>
              FastAPI + SQLAlchemy project এ Alembic দিয়ে কিভাবে safely schema
              update করবে — production downtime ছাড়া।
            </p>
          </div>
        </article>

        <footer className="blog-footer">
          <span>Fahim's DevLog · Docker Production Series</span>
          <span>Part 01 of 4</span>
        </footer>
      </div>
    </div>
  );
};

export default DockerPostgresBlog;
