import React, { useRef, useEffect, Component } from 'react';
import ProfileCard from './ProfileCard'; // import the new component at the top
import './About.css';

import paProfile from '../../images/PaProfile.jpg';
import yochanan from '../../images/Yochanan.jpg';
import noah from '../../images/Noah.jpg';
import benjamin from '../../images/Benjamin.png';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flippedCard: null
        };
    }

    handleClick = (name) => {
        this.setState(prevState => ({
            flippedCard: prevState.flippedCard === name ? null : name
        }));
    }

    render() {
        return (
            <section className="About-section" id="About">
                <div className="About-left-text">
                    <div className="About-title"><h1>About<span className="grey"> us </span></h1></div>
                    <div className="About-text">
                        As a team, we are a group of three professionals with diverse backgrounds and expertise. Our skills cover various areas including computer science, data science, and law. We are passionate about continuous learning and tackling complex challenges, and are committed to delivering solutions that are data-driven. Our team consists of a Computer Science Honours graduate and Master's candidate in Data Science specializing in Machine Learning, a Computer Science Honours graduate with expertise in C#, Python, and JavaScript, and a first-class honours LLB graduate studying law at Swansea University.
                    </div>
                    <div className="About-text">
                        Together, we bring a wealth of knowledge and experience to any project we undertake. We work collaboratively to leverage our diverse skill sets to achieve our goals, with a shared commitment to excellence. We are enthusiastic, dedicated, and bring a high level of professionalism to our work, making us a valuable asset to any organization. We are excited about the opportunities that come our way, and we are always looking for new challenges to take on.
                    </div>
                </div>
                <div className="About-right-icons">
                    <div className="About-blocks-container">
                        <ProfileCard
                            imgSrc={paProfile}
                            altText="Pa Profile"
                            name="Yochanan Liebenberg"
                            description="Entrepreneur and business mogul. Developed E-locate, Nexus, Tsitsikamma Mountain Reserve, Stone Wall Farm..."
                            isFlipped={this.state.flippedCard === "Yochanan Liebenberg"}
                            onClick={() => this.handleClick("Yochanan Liebenberg")}
                            phone="+447724604324"
                            email="liebenbergyochanan@gmail.com"
                            linkedin={"https://www.linkedin.com/in/yochanan-liebenberg-489653211"}
                        />
                        <ProfileCard
                            imgSrc={yochanan}
                            altText="Yochanan"
                            name="Yochanan Jnr Liebenberg"
                            description="I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University."
                            isFlipped={this.state.flippedCard === "Yochanan Jnr Liebenberg"}
                            onClick={() => this.handleClick("Yochanan Jnr Liebenberg")}
                            phone="+447502950173"
                            email="yochananliebenberg@gmail.com"
                            linkedin={"https://www.linkedin.com/in/yochanan-liebenberg-486944212/"}
                        />
                        <ProfileCard
                            imgSrc={noah}
                            altText="Noah"
                            name="Noah Liebenberg"
                            description="I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University."
                            isFlipped={this.state.flippedCard === "Noah Liebenberg"}
                            onClick={() => this.handleClick("Noah Liebenberg")}
                            phone="+4407526226401"
                            email="noahliebenberg7@gmail.com"
                            linkedin={"https://www.linkedin.com/in/noahliebenberg/"}
                        />
                        <ProfileCard
                            imgSrc={benjamin}
                            altText="Benjamin"
                            name="Benjamin Liebenberg"
                            description="Working currently as an in-house paralegal for the Vice-Chancellor’s Office at Swansea University. Capital Law Ltd."
                            isFlipped={this.state.flippedCard === "Benjamin Liebenberg"}
                            onClick={() => this.handleClick("Benjamin Liebenberg")}
                            phone="+447763639508"
                            email="benjaminliebenberg7@gmail.com"
                            linkedin={"https://www.linkedin.com/in/benjamin-liebenberg-722048172/"}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
