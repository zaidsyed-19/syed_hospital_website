import Image from "next/image";
import { site } from "@/lib/site";

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/media/hospital-drone-poster.jpg">
            <source src="/media/hospital-drone.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
        </div>

        <header className="topbar">
          <a className="brand" href="#home" aria-label="Syed Hospital home">
            <Image src="/images/syed-hospital-logo.png" alt="Syed Hospital" width={62} height={62} priority />
            <span className="brand-name">SYED <span>HOSPITAL</span></span>
          </a>
          <div className="top-location"><span className="pin" aria-hidden="true">⌖</span>{site.location}</div>
          <a className="top-link" href="#discover">Discover <ArrowIcon /></a>
        </header>

        <div className="hero-content" id="home">
          <div className="eyebrow"><span className="eyebrow-line" /> A new place for care, close to home</div>
          <h1 id="hero-title">Quality healthcare.<br /><em>Close to you.</em></h1>
          <p className="hero-description">A new 25-bed multispeciality hospital is taking shape in Hubballi.</p>
          <div className="hero-actions">
            {site.phone ? <a className="button button-gold" href={`tel:${site.phone}`}>Call the hospital <ArrowIcon /></a> : <span className="button button-gold button-muted" aria-label="Call contact to be announced">Call contact coming soon</span>}
            {site.whatsapp ? <a className="button button-glass" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a> : <span className="button button-glass button-muted" aria-label="WhatsApp contact to be announced">WhatsApp soon</span>}
          </div>
        </div>

        <div className="hero-foot">
          <span>HUBBALLI <span className="foot-dot">·</span> KARNATAKA</span>
          <span className="scroll-cue"><span className="scroll-line" /> SCROLL TO DISCOVER</span>
          <span className="opening-label"><span className="status-dot" /> OPENING SOON</span>
        </div>
      </section>

      <section className="intro" id="discover">
        <div className="section-label">A place for care</div>
        <div className="intro-copy">
          <h2>Thoughtfully designed<br />around <em>people.</em></h2>
          <div className="intro-detail">
            <p>Syed Hospital is coming to Hubballi as a 25-bed multispeciality hospital, with a simple promise at its heart: care should feel closer.</p>
            <a className="text-link" href="#contact">Find us in Hubballi <ArrowIcon /></a>
          </div>
        </div>
        <div className="preview-grid" aria-label="A preview of the future hospital website">
          <article className="preview-card preview-dark">
            <span className="card-index">01 / THE HOSPITAL</span>
            <span className="card-mark">SH</span>
            <h3>Care, with room<br />to feel at ease.</h3>
            <p>About Syed Hospital</p>
            <span className="card-arrow"><ArrowIcon /></span>
          </article>
          <article className="preview-card preview-gold">
            <span className="card-index">02 / YOUR VISIT</span>
            <span className="visit-icon" aria-hidden="true">✳</span>
            <h3>Here when<br />you need us.</h3>
            <p>Plan your visit</p>
            <span className="card-arrow"><ArrowIcon /></span>
          </article>
          <article className="preview-card preview-light">
            <span className="card-index">03 / GET IN TOUCH</span>
            <span className="contact-icon" aria-hidden="true">↗</span>
            <h3>We’re just<br />around the corner.</h3>
            <p>Hubballi, Karnataka</p>
            <span className="card-arrow"><ArrowIcon /></span>
          </article>
        </div>
      </section>

      <footer id="contact">
        <a className="footer-brand" href="#home"><Image src="/images/syed-hospital-logo.png" alt="" width={42} height={42} /> <span>SYED HOSPITAL</span></a>
        <span className="footer-location">{site.location}</span>
        <span className="footer-note">A new beginning in care. Coming soon.</span>
        <span className="copyright">© {new Date().getFullYear()} Syed Hospital</span>
      </footer>
    </main>
  );
}
