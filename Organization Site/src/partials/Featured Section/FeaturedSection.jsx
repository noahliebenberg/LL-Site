import React, { useRef, useEffect } from 'react';
import './FeaturedSection.css';
import featuredImage from '../../images/AutoSage.png';

function FeaturedSection() {
    return (
        <section className="Featured-section" id="Featured">
            <div className="left-container">
                <div className="featured-left-title"><h1>Upcoming<span className="second-title-color"> projects </span></h1></div>
                <h1 className="featured-left-title2">
                    Auto Sage
                </h1>

                <div className="featured-left-text"><p>Introducing Auto Sage, the revolutionary app that integrates artificial intelligence, comprehensive market data, and seamless user interfaces. It offers unrivaled experiences in determining accurate car valuations and facilitating smooth buying and selling transactions.</p></div>
            </div>

            <div className="right-container">
                <div className="featured-right-picture">
                    <img src={featuredImage} alt="Featured"/>
                    <div className="card"></div>
                </div>

                <div className="rainbow-right-text">
                    <h1>True Pricing</h1>
                    <h1>AI Valuations</h1>
                    <h1>Auto Analytics</h1>
                    <h1>Market prediction</h1>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
