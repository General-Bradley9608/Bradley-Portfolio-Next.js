/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div>
        <StyledText>
          <div>
            <p>
              Hello!
            </p>
            <p>
              I&apos;m a Proficient Senior Front-End Engineer offering 7 years of experience providing high-impact web solutions for diverse industry organizations.
              Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies.
              Proficient with CSS and JS Frameworks, with extensive knowledge of UX and User psychology.
              Aspiring to combine broad background with strong analytical and technical skills to excel as a Front-End Developer.
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {Object.entries(skills).map(([category, skill]) =>
              <div key={category}>
                <h3>{category}</h3>
                <br></br>
                <ul>
                  {skill.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>)}
          </ul>
        </StyledText>

        {/* <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} blu src="/avatar.jpeg" alt="Avatar" className="img" />
          </div>
        </StyledPic> */}
      </div>
    </StyledAboutSection>
  );
};

export default About;
