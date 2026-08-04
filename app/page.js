import Image from 'next/image';

const interests = [
  ['01', 'Runner', 'Chasing miles, clearer thoughts, and the next finish line.'],
  ['02', 'Builder', 'Turning a good idea into something real and useful.'],
  ['03', 'Designer', 'Finding clarity in the details people can feel.'],
  ['04', 'Crypto explorer', 'Curious about the ideas reshaping ownership and the internet.'],
  ['05', 'Movie enthusiast', 'Always looking for a story that stays with me after the credits.']
];

export default function Home() {
  return (
    <main>
      <nav><a className="wordmark" href="#top">UNDERSCORE<span>.</span></a><a className="nav-link" href="#about">ABOUT ME <span>â†“</span></a></nav>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">AYOKANMI UNDERSCORE / PERSONAL SPACE</p>
          <h1>Who is<br />Ayokanmi<br /><i>Underscore?</i></h1>
          <p className="roles">Runner <b>â€¢</b> Builder <b>â€¢</b> Designer<br className="mobile-break" /> <b>â€¢</b> Crypto Explorer <b>â€¢</b> Movie Enthusiast</p>
          <a className="begin" href="#about">EXPLORE <span>â†“</span></a>
        </div>
        <div className="portrait-wrap"><Image src="/images/ayo.jpg" alt="Ayokanmi Underscore" fill priority sizes="(max-width: 760px) 100vw, 45vw" className="portrait" /><span className="portrait-note">LAGOS, NG<br />2026</span></div>
      </section>
      <section className="intro section" id="about">
        <p className="kicker">01 / A LITTLE INTRODUCTION</p>
        <div className="intro-grid"><h2>Just a curious person<br />making his way<br /><i>through the world.</i></h2><p>Iâ€™m Ayokanmi â€” better known as Underscore. Iâ€™m drawn to the discipline of a good run, the satisfaction of building, and the tiny decisions that make a design feel right. This is where I collect the things Iâ€™m learning, creating, and enjoying along the way.</p></div>
      </section>
      <section className="interests section">
        <p className="kicker">02 / THE THINGS THAT MOVE ME</p>
        <div className="interest-list">{interests.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>â†—</b></article>)}</div>
      </section>
      <section className="running section" id="running">
        <div><p className="kicker">03 / RUNNING LOG</p><h2>Miles made<br /><i>visible.</i></h2><p className="running-copy">A live view of the work behind the run. Strava will power this section once connected.</p><button className="strava" disabled>CONNECTING STRAVA <span>â†—</span></button></div>
        <div className="stat-card"><p className="stat-label">COMING SOON</p><div className="stat-grid"><div><strong>â€”</strong><span>TOTAL KM</span></div><div><strong>â€”</strong><span>RUNS</span></div><div><strong>â€”</strong><span>THIS MONTH</span></div><div><strong>â€”</strong><span>LATEST RUN</span></div></div><p className="stat-foot">Your live Strava dashboard will appear here.</p></div>
      </section>
      <section className="closing section"><p className="kicker">04 / KEEP IN TOUCH</p><h2>Thereâ€™s more<br />to <i>come.</i></h2><p>This is the beginning of a living space for the things I care about.</p><a href="mailto:hello@underscore.dev" className="email">SAY HELLO <span>â†—</span></a></section>
      <footer><span>Â© 2026 UNDERSCORE</span><span>BUILT WITH CURIOSITY</span></footer>
    </main>
  );
}
