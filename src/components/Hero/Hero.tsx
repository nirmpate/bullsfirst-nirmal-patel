import logo from '../../assets/bullsfirst-logo.svg';
import './Hero.css';
import { Button } from '../Button';

interface HeroType {
    onSignIn: () => {}
}

export const Hero = (props: HeroType) => {

    const onClick: any = () => {
        return props.onSignIn();
    };

    return (
        <div className="hero-bg">
            <div className="hero container">
                <div>
                    <img className="hero-img" src={ logo } alt="Bullsfirst Logo"/>
                    <h1 className="title">
                        Get better results with Bullsfirst at the helm of your portfolio.
                    </h1>
                </div>
                <div className="hero-btn">
                    <Button click={() => onClick()} variant="filled" color="primary" type="button" linkText="Sign In"/>
                </div>
            </div>
        </div>

    )
  };