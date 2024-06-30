import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgSup from './images/icon-supervisor.svg';
import ImgTeam from './images/icon-team-builder.svg';
import ImgKarma from './images/icon-karma.svg';
import ImgCalc from './images/icon-calculator.svg';

const MainPart = () => {
    AOS.init();

    return (
        <Container fluid className='px-0 px-lg-5 py-5 py-lg-0 cs-h d-flex flex-column align-items-center justify-content-center'>
            <h1 data-aos="fade-down" className='m-0 text-center cs-fw-2'>Reliable, efficient delivery</h1>
            <h1 data-aos="fade-down" data-aos-delay="100" className='m-0 cs-fw-6 text-center'>Powered by Technology</h1>
            <p data-aos="fade-down" data-aos-delay="200" className='mt-3 cs-tc-1 text-center cs-w cs-fs'>Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful</p>
            <Row className='gap-4 gap-lg-0 px-0 px-lg-5 mx-0 mx-lg-5'>
                <Col xs={12} lg={4} className='d-flex flex-column justify-content-center'>
                    <Container data-aos="flip-left" data-aos-delay="300" className='cs-s shadow rounded cs-bt-sup p-4 d-flex flex-column align-items-end'>
                        <h2 className='h5 cs-fw-6 w-100 text-start'>Supervisor</h2>
                        <p className='cs-fs-2 pe-0 pe-lg-5 cs-tc-1 w-100 text-start'>Monitors activity to identify project roadblocks</p>
                        <Image fluid src={ImgSup} alt='supervisor image' className='mt-auto' />
                    </Container>
                </Col>
                <Col xs={12} lg={4} className='d-flex flex-column justify-content-between'>
                    <Container data-aos="flip-down" data-aos-delay="250" className='cs-s mb-4 shadow rounded cs-bt-team p-4 d-flex flex-column align-items-end'>
                        <h2 className='h5 cs-fw-6 w-100 text-start'>Team Builder</h2>
                        <p className='cs-fs-2 pe-0 pe-lg-5 cs-tc-1 w-100 text-start'>Scans our talent network to create the optimal team for your project</p>
                        <Image fluid src={ImgTeam} alt='team builder image' className='mt-auto' />
                    </Container>
                    <Container data-aos="flip-up" data-aos-delay="350" className='cs-s shadow rounded cs-bt-karma p-4 d-flex flex-column align-items-end'>
                        <h2 className='h5 cs-fw-6 w-100 text-start'>Karma</h2>
                        <p className='cs-fs-2 pe-0 pe-lg-5 cs-tc-1 w-100 text-start'>Regularly evaluates our talent to ensure quality</p>
                        <Image fluid src={ImgKarma} alt='karma image' className='mt-auto' />
                    </Container>                
                </Col>
                <Col xs={12} lg={4} className='d-flex flex-column justify-content-center'>
                    <Container data-aos="flip-right" data-aos-delay="300" className='cs-s shadow rounded cs-bt-culc p-4 d-flex flex-column align-items-end'>
                        <h2 className='h5 cs-fw-6 w-100 text-start'>Calculator</h2>
                        <p className='cs-fs-2 pe-0 pe-lg-5 cs-tc-1 w-100 text-start'>Uses data from past projects to provide better delivery estimates</p>
                        <Image fluid src={ImgCalc} alt='supervisor image' className='mt-auto' />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPart;