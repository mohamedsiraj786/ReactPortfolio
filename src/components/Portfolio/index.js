import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json' ;
import "./index.scss";


const Portfolio = () => {
    
    console.log(portfolioData);
    const [letterClass, setLetterClass] = useState('text-animate');


    
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h3 className="description">{port.description}</h3>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (

        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
            <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                    </h1>

                    <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader  type="pacman" />
        </>
    );
}
export default Portfolio;