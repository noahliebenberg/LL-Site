import React from 'react';
import './ProjectPages.css';
import NavBar from "../../partials/Nav Bar/NavBar";
import HeaderNavBar from "../../partials/Header-Nav-Bar";
import HeroHome from "../../partials/Hero Section/HeroHome";
import FeaturedSection from "../../partials/Featured Section/FeaturedSection";
import About from "../../partials/About Section/About";
import ProjectsSection from "../../partials/Project Section/ProjectsSection";
import Contact from "../../partials/Contact Section/Contact";
import Footer from "../../partials/Footer Section/Footer";

const WinePage = () => {
    return (
            <section className="WinePage flex flex-col min-h-screen overflow-hidden">
                <NavBar/>
                {/*  Page content */}
                <main className="grow">

                    <section className="Details-panel-section" id="Details">
                        <div className="grow main-container">
                            <h1 className="WineArt-title">Wine Art</h1>
                            <div className="WineArt-type">WEB APPLICATION</div>
                            <div className="left-title-details"><h1>Details</h1></div>

                            <div className="tab-panel">
                                <div>
                                    <input type="radio" name="slider" id="overview"/>
                                    <input type="radio" name="slider" id="tech"/>
                                    <input type="radio" name="slider" id="development"/>
                                    <input type="radio" name="slider" id="security"/>
                                    <input type="radio" name="slider" id="legal"/>
                                </div>

                                <nav>
                                    <label for="overview" className="overview">Overview</label>
                                    <label for="tech" className="tech">Tech stack</label>
                                    <label for="deployment" className="deployment">Deployment</label>
                                    <label for="security" className="security">Security</label>
                                    <label for="legal" className="legal">Legal compliance</label>
                                </nav>

                            </div>

                        </div>


                    </section>

                    <section className="Client-feedback-section" id="Client-feedback">

                        <div className="project-section-text">
                            <div className="project-section-title">Client <span className="grey"> Feedback </span></div>
                        </div>
                    </section>


                </main>

                {/*  Site footer */}
                <Footer />
            </section>

    );
};

export default WinePage;
