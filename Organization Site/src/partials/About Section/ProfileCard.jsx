import { Component, createRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './ProfileCard.module.css';

class ProfileCard extends Component {
    constructor() {
        super();
        this.frontCard = createRef();
        this.backCard = createRef();
        this.setCardDimensions = this.setCardDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.setCardDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCardDimensions);
    }

    setCardDimensions() {
        const frontHeight = this.frontCard.current.clientHeight;
        this.backCard.current.style.height = `${frontHeight}px`;

        const frontWidth = this.frontCard.current.clientWidth;
        this.backCard.current.style.width = `${frontWidth}px`;
    }

    render() {
        const {imgSrc, altText, name, description, isFlipped, onClick, phone, email, linkedin, role} = this.props;
        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className={styles.block} onClick={onClick} ref={this.frontCard}>
                    <div className="profile-card-top">
                        <img className={styles.icon} src={imgSrc} alt={altText} onLoad={this.setCardDimensions} />
                        <div className={styles.name}>{name}</div>
                        <div className={styles.role}>{role}</div>
                    </div>

                    <div className={styles.description}>{description}</div>
                </div>

                <div className={styles.block} onClick={onClick} ref={this.backCard}>
                    <ul>
                        <div className="contact-line">
                            <li className="contact-title">Email</li>
                            <li className="contact-details">{email}</li>
                        </div>
                        <div className="contact-line">
                            <li className="contact-title">Phone</li>
                            <li className="contact-details">{phone}</li>
                        </div>


                        {/* Social links */}
                        <div className="contact-line">
                            <a href={linkedin} target="_blank" className="contact-line-link">
                                <img src="https://uploads-ssl.webflow.com/602e7c287eefab52cb3f36dd/602ec3d193cf5ffb77ae7e12_LinkedIN.png" loading="lazy" alt="Imaginary Cloud Linkedin "></img>
                                <div className="social-link">LINKEDIN</div>
                            </a>
                        </div>

                    </ul>
                </div>
            </ReactCardFlip>
        )
    }
}

export default ProfileCard;
