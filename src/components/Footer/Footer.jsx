import React from 'react';
import './Footer.scss';

export const Footer = () => {

    const anio = new Date().getFullYear();

    return (
        <div className="footerContainer">
            <p> © {anio} - <b>Sneak</b> All Rigth Reserved </p>
            <div className="socialContainer">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest-p"></i>
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-youtube"></i>
            </div>
        </div>
    )
}
