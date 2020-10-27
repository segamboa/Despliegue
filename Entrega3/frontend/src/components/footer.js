import React from "react";

const Footer = () => {
  return (
    <footer className="footer_area p_120">
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>
                Do you want to be even more successful? Learn to love learning
                and growth. The more effort you put into improving your skills,
              </p>
              <p>
                Copyright &copy; All rights reserved | This template is made by
                Hephaestus Group with
                <i className="fa fa-heart-o" aria-hidden="true"></i> and help
                from
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </p>
            </aside>
          </div>
          <div className="col-lg-5 col-sm-6"></div>
          <div className="col-lg-2">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
