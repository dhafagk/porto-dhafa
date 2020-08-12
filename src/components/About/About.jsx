import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Nama lengkap saya Dhafa Gustiadi Kurniawan, seorang Web Developer yang semangat mempelajari hal baru. Fokus saya di back-end seperti PHP, Wordpress, dan framework-nya seperti Laravel. Saya juga bisa sedikit front-end seperti React dan Gatsby, dan saya juga bisa design web pakai Adobe XD / Figma.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Sebenernya saya telah membuat website dari tahun 2017, tapi saya sempat berhenti karena suatu alasan dan sekarang akhirnya mulai lagi dari 0. Tujuan saya kali ini adalah untuk fokus belajar hal baru dan menggunakan ilmu itu menjadi sesuatu yang bermanfaat.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Saya juga punya resume, silahkan di cek ya :)'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
