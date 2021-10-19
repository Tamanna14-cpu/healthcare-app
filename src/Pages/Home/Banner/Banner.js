import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h1 className="fw-bold lh-base font-monospace heading">Thousands of <br /> smiles delivered everyday</h1>
                <div>
                    <input className="banner-input mt-3" type="text" name="search" placeholder="Search.." />
                </div>
                <div className="container mt-5 extra-portion">
                    <div className="row">
                        <div className="col">
                            <h2>Quick Search</h2>
                        </div>
                        <div className="col">
                            <button className="banner-btn">Anxiety</button>
                        </div>
                        <div className="col">
                            <button className="banner-btn">Stress</button>
                        </div>
                        <div className="col">
                            <button className="banner-btn">Activities</button>
                        </div>
                        <div className="col">
                            <button className="banner-btn">Depression</button>
                        </div>
                        <div className="col">
                            <button className="banner-btn">Mood Swing</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;