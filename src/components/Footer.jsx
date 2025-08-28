import React from 'react';
import EmailButton from "./EmailButton.jsx";

const Footer = () => {
    return (
        <footer className="row align-items-center">
            <div className="offset-2 col-2 btn btn-danger">
                <EmailButton email="example@gmail.com" />
            </div>
        </footer>
    );
};

export default Footer;