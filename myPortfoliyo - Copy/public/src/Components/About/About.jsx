import React from 'react';
import './About.css';
import { section } from 'framer-motion/client';

export default function About() {
    return (

        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="about-content">
                            <h2 className="about-heading">About <span className="highlight">Me</span></h2>
                            <p className="about-description">
                                Hi, I am Kirtan, a passionate Full-Stack Developer with expertise in creating modern, scalable, and efficient web applications.
                                I love solving complex problems with clean and efficient code while ensuring the best user experience.
                            </p>
                            <p className="about-description">
                                With a strong foundation in both front-end and back-end technologies, I strive to deliver solutions that make a real impact.
                            </p>
                            <a href="#contact" className="btn">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="about-image">
                            <img src="/imags/myphoto.jpg" alt="About Me" />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
