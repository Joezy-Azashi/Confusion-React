import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home" style={{color: "white"}}>Home</Link></li>
                        <li><Link to="/aboutus" style={{color: "white"}}>About Us</Link></li>
                        <li><Link to="/menu" style={{color: "white"}}>Menu</Link></li>
                        <li><Link to="/contactus" style={{color: "white"}}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address style={{color: "white"}}>
		              HNO. 4 Amponsah Street, Kwesimintsim<br />
		              P. O. Box TD 233, Takoradi<br />
		              Ghana<br />
		              <i className="fa fa-phone fa-lg"></i>: +233 24 161 4050<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 50 137 4847<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:azaliaashilabe@gmail.com">
                         azashifashion.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google mr-2" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook mr-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin mr-2" href="https://www.linkedin.com/mwlite/in/azalia-ashilabe-24183573"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter mr-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google mr-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Azashi Solutions</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;