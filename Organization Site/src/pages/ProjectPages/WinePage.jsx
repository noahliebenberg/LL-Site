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




                </main>

                {/*  Site footer */}
                <Footer />
            </section>

    );
};

export default WinePage;
