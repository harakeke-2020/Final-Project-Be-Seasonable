import React from 'react'

function About () {
  return (
    <div className="about">
      <div data-testid={'about'} className="container">
        <h1 data-testid={'title'}>About Be Seasonable</h1>
        <h2>What is it?</h2>
        <p>Be seasonable is a free website that tells you what produce is currently in season, the average monthly cost based on the Statistics NZ Food Price Index, and any ethical warnings we&apos;ve identified for that produce.</p>
        <p>It does this by combining the average monthly costs of in-season produce with research into the environmental and ethical impacts of production.</p>
        <h2>Why did you make it?</h2>
        <p>Be Seasonable is designed to help you make informed decisions about your produce purchases.</p>
        <p>Even when you care deeply about ethical, affordable eating, it can be hard to make good choices. We wanted to make it easy to make informed decisions.</p>
        <p>Fruit and vegetables are great for our health, but they can be hard on the wallet and hard on the planet.</p>
        <p>Produce that is imported can have a high carbon cost, contributing to global warming. It may be farmed in areas using intensive irrigation, increasing the water usage. Or, the industry may have unethical labour practices and treat their employees poorly.</p>
        <h2>How is the data collected?</h2>
        <p>We sourced the data from Figure.NZ. It was originally collected by Stats NZ. Here&apos;s what they have to say about collection:</p>
        <blockquote>Prices are surveyed by visiting retail outlets in 12 urban areas: Whangarei, Auckland, Hamilton, Tauranga, Napier-Hastings, New Plymouth, Palmerston North, Wellington, Nelson, Christchurch, Dunedin, and Invercargill.
Fresh fruit and vegetable prices are surveyed weekly, and the remaining food prices are generally surveyed between the 8th and 16th day of the month, although sometimes surveying starts and finishes earlier or later.
Food prices are collected from about 560 outlets in the 12 surveyed urban areas. Of these, about 60 are supermarkets, 30 greengrocers, 20 fish shops, 30 butchers, 60 convenience stores (with about half being service stations and the rest being dairies, grocery stores, and superettes), 110 restaurants (for evening meals), and about 250 other suitable outlets (for breakfast, lunch, and takeaway food).
Stats NZ collects prices from a sample of supermarkets in each of the 12 Food Price Index pricing regions. This sample is designed to be representative of household purchases in each region.</blockquote>
        <h2>Who is behind it?</h2>
        <p>Be Seasonable was made by <a href="https://github.com/0qy">Qian-Ye</a>, <a href="https://github.com/lorenzo-joseph-fernandez-19">Lorenzo</a>, <a href="https://github.com/brendan-olphert">Brendan</a>, <a href="https://github.com/H-THO">Hywel</a>, and <a href="https://github.com/natdudley-EDA">Nat</a> as our graduation project for <a href="https://devacademy.co.nz/">Ensipiral Dev Academy</a>.</p>
      </div>
    </div>
  )
}

export default About
