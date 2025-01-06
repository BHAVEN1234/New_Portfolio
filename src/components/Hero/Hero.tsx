import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import TextLoop from "react-text-loop";
import Illustration from "../../assets/illustration.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hey<img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1 style={{ color: 'orange', fontFamily: 'Arial, sans-serif' }}>Saakshi Dedhia</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
  <h2 style={{ color: 'rgb(108,180,238)', fontFamily: 'Arial, sans-serif' }}>
    <TextLoop interval={1000}>
      <span>Financial Analyst</span>
      <span>Data Analyst</span>
      <span>Economic Consultant</span>
      <span>Risk Analyst</span>
    </TextLoop>
  </h2>
</ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Expert in financial analysis, data insights, economic consulting, and risk management.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#about" className="button">ABOUT ME</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
          <a href="mailto:saakshij@usc.ed" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://www.linkedin.com/in/saakshi-dedhia/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a> 
            
            <a href="https://github.com/saakshidedhia/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img className="illustration-image" src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}