import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Travel</h1>
        <h2>Made Easy</h2>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
        <Link to="/page-2/">Plan A Trip</Link>
        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="20s"
              values= "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

	            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

	            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

	            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
      <div className="CardsText">
        <h2>Recommendations</h2>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.</p>
      <Link to="/page-2/">Explore Trips</Link>
      </div>

      <div className="CardGroup">
        <Card
          text="Iceland"
          image={require('../images/ice.jpg')} />
        <Card
          text="Barcelona"
          image={require('../images/spain.jpg')} />
      </div>
    </div>

    <div className="Story">
      <div className="ImageStory">
        <img src={require('../images/our.jpg')} />
      </div>

      <div className="StoryText">
        <h2>Our Story</h2>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to.</p>
        <Link to="/page-2/">Read More!</Link>
      </div>

    </div>
  </div>
)

export default IndexPage
