import logo from '../../assets/bullsfirst-logo.svg';
import './Hero.css';
import { Button } from '../Button';
import popsicle from '../../assets/popsicle.png';

export interface HeroType {
  onSignIn: () => {};
}

export const Hero = (props: HeroType) => {
  const onClick: any = () => {
    return props.onSignIn();
  };

  return (
    <div className="hero-bg">
      <div className="hero container p-relative">
        <div>
          <img className="hero-img" src={logo} alt="Bullsfirst Logo" />
          <h1 className="title">
            Get better results with Bullsfirst at the helm of your portfolio.
          </h1>
        </div>
        <div className="hero-btn">
          <Button
            onClick={() => onClick()}
            variant="filled"
            color="primary"
            type="button"
          >
            Sign In
          </Button>
        </div>

        <div className="popsicle-container">
          <img src={popsicle} alt="Popsicle" />
        </div>
      </div>
    </div>
  );
};
