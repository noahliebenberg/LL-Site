import React, { useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard'; // import the new component at the top
import './About.css';

import paProfile from '../../images/PaProfile.jpg';
import yochanan from '../../images/Yochanan.jpg';
import noah from '../../images/Noah.jpg';
import benjamin from '../../images/Benjamin.png';
function About() {
    return (
        <section className="About-section" id="About">
            <div className="About-left-text">
                <div className="About-title"><h1>About<span className="grey"> us </span></h1></div>
                <div className="About-text">As a team, we are a group of three professionals with diverse backgrounds and expertise. Our skills cover various areas including computer science, data science, and law. We are passionate about continuous learning and tackling complex challenges, and are committed to delivering solutions that are data-driven. Our team consists of a Computer Science Honours graduate and Master's candidate in Data Science specializing in Machine Learning, a Computer Science Honours graduate with expertise in C#, Python, and JavaScript, and a first-class honours LLB graduate studying law at Swansea University.
                </div>
                <div className="About-text">Together, we bring a wealth of knowledge and experience to any project we undertake. We work collaboratively to leverage our diverse skill sets to achieve our goals, with a shared commitment to excellence. We are enthusiastic, dedicated, and bring a high level of professionalism to our work, making us a valuable asset to any organization. We are excited about the opportunities that come our way, and we are always looking for new challenges to take on.
                </div>
            </div>
            <div className="About-right-icons">
                <div className="About-blocks-container">
                    <ProfileCard
                        imgSrc={paProfile}
                        altText="Pa Profile"
                        name="Yochanan Liebenberg"
                        description="Entrepreneur and business mogul. Developed E-locate, Nexus, Tsitsikamma Mountain Reserve, Stone Wall Farm..."
                    />
                    <ProfileCard
                        imgSrc={yochanan}
                        altText="Yochanan"
                        name="Yochanan Jnr Liebenberg"
                        description="I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University."
                    />
                    <ProfileCard
                        imgSrc={noah}
                        altText="Noah"
                        name="Noah Liebenberg"
                        description="I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University."
                    />
                    <ProfileCard
                        imgSrc={benjamin}
                        altText="Benjamin"
                        name="Benjamin Liebenberg"
                        description="Working currently as an in-house paralegal for the Vice-Chancellor’s Office at Swansea University. Capital Law Ltd."
                    />
                </div>
            </div>
        </section>
    );
}

export default About;