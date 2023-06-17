import React, { useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';

import './ProjectsSection.css';
import turbineImage from '../../images/turbine.png';
import carImage from '../../images/car.png';
import wineImage from '../../images/wine-website.png';

function ProjectsSection() {
    const slider = useRef(null);

    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.current.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.current.classList.add('active');
            startX = e.pageX - slider.current.offsetLeft;
            scrollLeft = slider.current.scrollLeft;
        });

        slider.current.addEventListener('mouseleave', () => {
            isDown = false;
            slider.current.classList.remove('active');
        });

        slider.current.addEventListener('mouseup', () => {
            isDown = false;
            slider.current.classList.remove('active');
        });

        slider.current.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.current.offsetLeft;
            const walk = (x - startX) * 2; // adjust the speed of the drag
            slider.current.scrollLeft = scrollLeft - walk;
        });

        const mediaElements = slider.current.querySelectorAll('.media-element');

        mediaElements.forEach(element => {
            element.addEventListener('click', () => {
                element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            });
        });

    }, []);

    return (
        <section className="projects-section" id="Portfolio">
            <div className="project-section-text">
                <div className="project-section-title">Project <span className="grey"> portfolio </span></div>
            </div>

            <section ref={slider} className="media-scroller snaps-inline">
                <div className="media-element" id="Product-1">
                    <div>
                        <div className="product-type">WEB APPLICATION</div>
                        <div className="product-title">WINE ART</div>
                        <div className="project-about">A project developed with Express, Node JS and deployed using Google cloud services. Get your portrait done in your favorite wine by simply uploading a picture. Transform Your Photos into Works of Art </div>
                        <div className="link-for-more"><Link to="/wine">More Details</Link></div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product" src={wineImage} alt="Wine" />
                    </div>
                </div>

                <div className="media-element" id="Product-3">
                    <div>
                        <div className="product-type">Mobile APPLICATION</div>
                        <div className="product-title">Auto Sage</div>
                        <div className="project-about">Auto Sage is the ultimate app for accurate car pricing and seamless buying and selling experiences. Powered by AI, it provides real-time valuations based on comprehensive market data. Access fair market values, compare prices.</div>
                        <div className="link-for-more">  <Link to="/car">More Details</Link></div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product" src={carImage} alt="Car" />
                    </div>
                </div>

                <div className="media-element" id="Product-2">
                    <div>
                        <div className="product-type">Desktop APPLICATION</div>
                        <div className="product-title">Turbine Damage Detector</div>
                        <div className="project-about">Developed a Python application to process wind turbine images and locate damage to be flagged for the user.</div>
                        <div className="link-for-more"><Link to="/turbine">More Details</Link></div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product" src={turbineImage} alt="Turbine" />
                    </div>
                </div>

            </section>

        </section>
    );
}

export default ProjectsSection;
