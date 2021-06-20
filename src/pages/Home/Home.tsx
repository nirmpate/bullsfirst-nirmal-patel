import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import popsicle from '../../assets/popsicle.png';
import './Home.css';

export const Home = () => {
  return (
    <main>
      {/* Hero */}
      <Hero></Hero>
      {/* Body */}
      <div className="container body p-relative">
        <div className="popsicle-container">
          <img src={popsicle} alt="Popsicle"/>
        </div>
        <p>Every account comes with:</p>
        <ul>
          <li>0-second execution</li>
          <li>Portfolio insurance</li>
          <li>1 popsicle</li>
        </ul>
        <p>We love to trade, and we hope you do too!</p>
        <p>Now you can express that love with the latest trading platform from Bullsfirst. We guarantee a 0-second trade execution, and will give you a free popsicle if your trade doesn’t go through in this time period.</p>
        <p>On a side-note, we just bought a big freezer and 10,000 popsicles. Thankfully, we’ve hedged all popsicle expenses for the next two years! (Commodity experts say popsicles are on the rise).</p>
        <p className="footnote">This is a demo application. All data displayed is fictitious.</p>
      </div>

      {/* Footer */}
    </main>
  );
};
