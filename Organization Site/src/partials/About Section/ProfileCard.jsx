import { Component, createRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './ProfileCard.module.css';

class ProfileCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.frontCard = createRef();
        this.backCard = createRef();
        this.handleClick = this.handleClick.bind(this);
        this.setCardDimensions = this.setCardDimensions.bind(this);  // Bind this function to use it in img onLoad event
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
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
        const {imgSrc, altText, name, description} = this.props;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className={styles.block} onClick={this.handleClick} ref={this.frontCard}>
                    <img className={styles.icon} src={imgSrc} alt={altText} onLoad={this.setCardDimensions} />
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>{description}</div>
                </div>

                <div className={styles.block} onClick={this.handleClick} ref={this.backCard}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>This is the back of the card. Please replace this with your back content.</div>
                </div>
            </ReactCardFlip>
        )
    }
}


export default ProfileCard;
