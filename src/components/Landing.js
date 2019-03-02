import React from 'react';
import { Link } from 'gatsby';

const LandingPage = () => (
  <section className="landing">
    <div className="landing__box">
      <p className="landing__box--title">I specialized dd in building websites I specialized in building websites </p>
      <p className="landing__box--desc">Lock inyour digiyal Lo ck in your digiyal Lock in your digiyal</p>
      <div className="landing__box--buttons">
        <Link to="/">Get Resume</Link>
        <Link to="/">Go to Blog</Link>
      </div>
    </div>
    <p className="landing__bottom">Kamil</p>
  </section>
);

export default LandingPage;
