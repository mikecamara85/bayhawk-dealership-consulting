import React from "react";
import { useHistory } from "react-router-dom";
//
export const Landing = () => {
  const history = useHistory();
  //
  window.addEventListener("scroll", () => {
    const tiltImg = document.getElementById("tiltforward");
    if (window.scrollY > 100 && tiltImg) {
      tiltImg.style.transform = "perspective(1000px) rotateX(0deg)";
    } else if (tiltImg) {
      tiltImg.style.transform = "perspective(1000px) rotateX(15deg)";
    }
  });
  //
  const ctaClick = (e) => {
    console.log("hi");
    history.push("/public-contact");
  };
  //
  return (
    <main className="container pt-5">
      <nav className="navbar sticky-top">
        <a href="#top">
          <h1 className="logo-text center-text">
            Bayhawk Dealership Consulting
          </h1>
        </a>

        <a href="#services" type="button" className="button-primary large-text">
          Services Offered
        </a>
        <button
          type="button"
          className="button-primary large-text"
          onClick={ctaClick}
        >
          Contact Us
        </button>
      </nav>
      <header className="row p-5" id="top">
        <div className="col pt-5">
          <h1 className="main-heading center-text dim-grey-text pt-5">
            The Power of <span className="dark-blue-text">Process</span>
          </h1>
          <p className="xl-text center-text pt-5 pb-5 dim-grey-text">
            The Professional Standard
          </p>
          <div className="d-flex justify-content-center">
            <img
              className="tilt-forward"
              id="tiltforward"
              src="/bayhawk-consulting-cover.png"
              alt="cover-photo"
            />
          </div>
        </div>
      </header>

      <section className="card-row d-flex p-5">
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              {/* <p className="xl-text purple-text fira">() =&gt; &#123;&#125;</p> */}
              <svg className="icon icon-tools pb-3">
                <use href="/icons/symbol-defs.svg#icon-handshake-o"></use>
              </svg>
              <h3 className="large-text">Sales Recruiting</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Having trouble hiring sales or BDC people? Look no further, as we
              will recruit and fully train them for you! Curriculum includes 10
              Steps to the Sale and much, much more.
            </div>
          </div>
        </div>
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              <svg className="icon icon-tools pb-3">
                <use href="/icons/symbol-defs.svg#icon-mobile"></use>
              </svg>
              <h3 className="large-text">BDC Consulting</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Not getting enough return on your advertising? Chances are, your
              BDC process could make all the difference. Leverage our team's
              extensive sales BDC experience to boost sales!
            </div>
          </div>
        </div>
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              <svg className="icon icon-tools pb-3">
                <use href="/icons/symbol-defs.svg#icon-display"></use>
              </svg>
              <h3 className="large-text">Management Tools</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Wasting money on an expensive, ineffective CRM? Bayhawk's own
              industry leading Lead Zen software can help you do better follow
              up and track business more accurately.
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="row p-5 large-text">
          <h2 className="main-heading center-text dim-grey-text pt-5">
            Get a Competitive&nbsp;<span className="dark-blue-text">Edge</span>
          </h2>
        </div>
        <div className="pt-5"></div>
        <div className="process-row process-row-reverse d-flex p-5 xl-text dim-grey-text">
          <div className="process-col d-flex center-text">
            <p className="dark-blue-text">Sales Training</p>
            <p className="large-text dim-grey-text p-5 justify">
              Candidates who complete our professional sales training are able
              to step onto the sales floor immediately and succeed. They will
              already have knowledge of:
            </p>
            <ul className="large-text">
              <li className="align-left">How to Meet and Greet</li>
              <li className="align-left">Proper Qualifying</li>
              <li className="align-left">5-Star Walkaround</li>
              <li className="align-left">Customer Control</li>
              <li className="align-left">Follow Up</li>
            </ul>
          </div>
          <img
            className="process-col d-flex rounded"
            src="/listening.png"
            alt="listening"
          />
        </div>
        {/* <div className="arrow-down-right">=&gt;</div> */}
        <div className="process-row d-flex p-5 xl-text dim-grey-text">
          <img
            className="process-col d-flex rounded"
            src="/design.png"
            alt="design"
          />
          <div className="process-col d-flex center-text">
            <p>
              <span className="dark-blue-text">Elevate Your Game</span>
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              If you are looking to start a new BDC department in your
              dealership or get more performance out of your existing BDC, we
              are here to help you! A strong BDC is the key to selling more cars
              and establishing a high level of professionalism in your follow-up
              process. Our tried-and-true word tracks and processes are designed
              to help your sales department maximize its' potential!
            </p>
          </div>
        </div>
        {/* <div className="arrow-down-left">=&gt;</div> */}
        <div className="process-row process-row-reverse d-flex p-5 xl-text dim-grey-text">
          <div className="process-col d-flex center-text">
            <p>
              <span className="dark-blue-text">World Class Tools</span>
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              One reason many salespeople stuggle with follow-up is the
              complicated, unreliable tools that are provided to them. Worse
              still, these tools often come at great expense! To solve this
              problem, we have created Lead Zen, the industry's only
              mobile-first CRM solution. This is a system that salespeople
              actually WANT to use, and to deliver easy-to-read reports to
              dealership management. To see this revolutionary software in
              action, simply contact us using the link above!
            </p>
          </div>
          <img
            className="process-col d-flex rounded"
            src="/dialogue.jpg"
            alt="dialogue"
          />
        </div>
        {/* <div className="arrow-down-right">=&gt;</div> */}
        {/* <div className="process-row d-flex p-5 mb-5 xl-text dim-grey-text">
          <img
            className="process-col d-flex rounded"
            src="/mern.png"
            alt="mern-stack"
          />
          <div className="process-col d-flex center-text">
            <p>
              <span className="dark-blue-text">4.</span>&nbsp;Data Architecture
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              Here, the product becomes interactive as we use the latest
              industry-leading tools to code a secure, stable, and highly
              performant web application.
            </p>
          </div>
        </div> */}
      </section>
      {/* <section className="video-wrapper pt-5 mb-5 rounded">
        <video className="full-video rounded" autoPlay loop muted playsInline>
          <source src="https://www.bayhawk.cc/code.mov"></source>
        </video>
        <div className="video-gradient rounded center-text pt-5">
          {/* this is a weird hack I had to try because the lock has unexplained padding to the right I can't get rid of and it was causing it to not be centered 
          <div className="d-flex flex-direction-row justify-content-center">
            <span className="p-3"></span>
            <svg className="icon-large icon-lock">
              <use href="/icons/symbol-defs.svg#icon-lock"></use>
            </svg>
          </div>

          <h2 className="main-heading light-blue-text center-text p-3">
            Security First
          </h2>
          <div className="responsive-text-column">
            <p className="white-text white-text-dark-background justify">
              We live in a world full of digital{" "}
              <span className="red-text">threats</span>. Therefore, every
              Bayhawk product is delivered over an encrypted connection with an
              SSL Certificate. In addition, we use dual-factor authentication
              and many other cutting-edge technologies to help keep you and your
              business <span className="bright-blue-text">safe</span>.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-5"></div>
        <div className="row p-5 large-text">
          <h2 className="main-heading center-text dim-grey-text pt-5">
            What do our <span className="dark-blue-text">Clients</span> say?
          </h2>
        </div>

        <div className="card-row d-flex p-5">
          <div className="col p-5 d-flex justify-content-center">
            <div className="review-card center-text rounded">
              <div className="review-card-heading dark-blue-text p-4 white-text">
                <div className="col-3 avatar avatar-1"></div>
                <div className="col-9 review-card-heading-col">
                  <div className="large-text">Lily K.</div>
                  <div className="medium-text">Owner</div>
                  <div className="small-text">Lily's Beauty Supply</div>
                </div>
              </div>
              <div className="review-card-body medium-text dim-grey-text justify p-5">
                "I had tried other platforms but found them hard to use and
                unreliable. Since moving to Bayhawk's platform, I was able to
                work with them to design the site exactly how I wanted! They
                also make it easy for me to track every dollar."
              </div>
            </div>
          </div>
          <div className="col p-5 d-flex justify-content-center">
            <div className="review-card center-text rounded">
              <div className="review-card-heading dark-blue-text p-4 white-text">
                <div className="col-3 avatar avatar-2"></div>
                <div className="col-9 review-card-heading-col">
                  <div className="large-text">Eduardo S.</div>
                  <div className="medium-text">Sales Manager</div>
                  <div className="small-text">Sunrise Motors</div>
                </div>
              </div>
              <div className="review-card-body medium-text dim-grey-text justify p-5">
                "Bayhawk's Lead Zen Software has made a dramatic difference for
                us. The simplicity of the design has greatly increased
                salesperson engagement and we have seen increased traffic in our
                showroom -leading to more sales."
              </div>
            </div>
          </div>
          <div className="col p-5 d-flex justify-content-center">
            <div className="review-card center-text rounded">
              <div className="review-card-heading dark-blue-text p-4 white-text">
                <div className="col-3 avatar avatar-3"></div>
                <div className="col-9 review-card-heading-col">
                  <div className="large-text">Ray T.</div>
                  <div className="medium-text">Manager</div>
                  <div className="small-text">Quick Solutions Cleaning</div>
                </div>
              </div>
              <div className="review-card-body medium-text dim-grey-text justify p-5">
                "The website and editing tools that Bayhawk custom built for us
                have helped us take our business to the next level. Not only do
                we have the professional look we needed, we also have the
                flexibility to make changes without relying on anyone else."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row portfolio-section pb-5">
        <div className="row p-5 large-text">
          <h2 className="main-heading center-text dim-grey-text">
            <span className="dark-blue-text">Featured</span> Projects
          </h2>
        </div>
        <div className="pt-5"></div>
        <a
          href="https://www.leadzen.cc"
          target="_blank"
          className="project-row mt-5 p-5"
        >
          <div className="project-col p-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="lead-zen-title">Lead&nbsp;Zen</h1>
              <p className="lead-zen-subheading">
                The&nbsp;Uncluttered&nbsp;CRM
              </p>
            </div>
          </div>
          <div className="project-col p-5">
            <div className="review-card-body medium-text dim-grey-text justify">
              A first-party Bayhawk project, Lead Zen is a world-class Customer
              Response Management (CRM) system for use in automotive dealerships
              of any size. With a design based on over 10 years of dealership
              experience, Lead Zen is built to be easy to use - sidestepping the
              overcomplexity of other CRM systems.
            </div>
          </div>
        </a>
        <div className="p-5"></div>
        <a
          href="https://www.quicksolutions.biz"
          target="_blank"
          className="project-row mt-5 p-5"
        >
          <div className="project-col p-5">
            <div className="d-flex flex-row align-items-center justify-content-center grey-back p-5">
              <img
                src="/quick-solutions-logo.png"
                className="quick-solutions-logo qs-head"
                alt="quick-solutions-logo"
              />
              <div className="quick-solutions-heading">
                Quick Solutions Cleaning
              </div>
            </div>
          </div>
          <div className="project-col p-5">
            <div className="review-card-body medium-text dim-grey-text justify">
              A website designed to showcase the wide range of high-quality
              services offered by Quick Solutions Cleaning and demonstrate their
              professionalism. This project also includes a website editor the
              client is able to use to update their content in real-time.
            </div>
          </div>
        </a>
        <div className="p-5"></div>
      </section> */}

      <footer className="footer-col small-text pb-5 pt-5">
        {/* leadzen.cc/bayhawk */}
        <a href="https://www.bayhawk.cc" className="p-3 white-text">
          &copy;2022 Bayhawk Software, LLC
        </a>
      </footer>
    </main>
  );
};

export default Landing;
