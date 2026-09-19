import {Layout} from '../components/Layout';
import {withBase} from '../lib/paths';

export function HomePage() {
  return (
    <Layout active="home">
      <section className="home-hero">
        <div className="content-width home-hero__inner">
          <div className="home-hero__content">
            <p className="home-kicker">SomNOG9 · Software Development Track</p>
            <h1>Workshop schedule and learning materials</h1>
            <p className="home-hero__lead">
              A simple place for participants to check the programme, open workshop files and read session documentation.
            </p>

            <div className="event-meta">
              <span>19-24 September 2026</span>
              <span>Public access · No login required</span>
            </div>

            <div className="hero-actions">
              <a className="button button--primary" href={withBase('/schedule/')}>View Schedule</a>
              <a className="button button--secondary" href={withBase('/materials/')}>Open Materials</a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-width quick-section">
        <div className="section-title">
          <div>
            <p className="home-kicker">Resources</p>
            <h2>Everything in one place</h2>
          </div>
        </div>

        <div className="quick-links">
          <a href={withBase('/schedule/')} className="quick-link">
            <div>
              <span className="quick-link__label">SCHEDULE</span>
              <strong>Full Workshop Schedule</strong>
              <small>Sessions, times and facilitators</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>

          <a href={withBase('/materials/')} className="quick-link">
            <div>
              <span className="quick-link__label">FILES</span>
              <strong>Workshop Materials</strong>
              <small>PDF, Word, Excel, ZIP and links</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>

          <a href={withBase('/docs/')} className="quick-link">
            <div>
              <span className="quick-link__label">DOCS</span>
              <strong>Session Documentation</strong>
              <small>Markdown guides powered by Docusaurus</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
