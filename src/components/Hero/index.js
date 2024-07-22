/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Welcome, I&apos;m</h1>;
  const two = <StyledBigTitle>Bradley Helphenstine</StyledBigTitle>;
  const three = <StyledBigTitle slate>Senior Front-End Engineer</StyledBigTitle>;
  const four = (
    <p>
      {/* I&apos;m a Proficient Senior Front-End Engineer offering 7 years of experience providing high-impact web solutions 
      for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications 
      incorporating a range of technologies. Proficient with CSS and JS Frameworks, with extensive knowledge of UX and 
      User psychology. Aspiring to combine broad background with strong analytical and technical skills to excel 
      as a Front-End Developer. */}
    </p>
  );
  const five = (
    <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
      View my Resume
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
