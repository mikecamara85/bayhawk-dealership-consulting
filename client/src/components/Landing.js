import React from "react";
//
export const Landing = () => {
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
    alert("⚠ This page is still under construction!");
  };
  //
  return (
    <main className="container pt-5">
      <nav className="navbar sticky-top">
        <a href="#top">
          <h1 className="logo-text center-text">Bayhawk Software</h1>
        </a>

        <button
          type="button"
          className="button-primary large-text"
          onClick={ctaClick}
        >
          What can we build for you?
        </button>
      </nav>
      <header className="row p-5" id="top">
        <div className="col pt-5">
          <h1 className="main-heading center-text dim-grey-text pt-5">
            Turning Ideas into <span className="dark-blue-text">Reality</span>
          </h1>
          <p className="xl-text center-text pt-5 pb-5 dim-grey-text">
            Give your vision a voice.
          </p>
          <div className="d-flex justify-content-center">
            <img
              className="tilt-forward"
              id="tiltforward"
              src="/lead-zen-ipad.png"
              alt="lead-zen"
            />
          </div>
        </div>
      </header>

      <section className="card-row d-flex p-5">
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              <p className="xl-text purple-text fira">() =&gt; &#123;&#125;</p>
              <h3 className="large-text">Applications</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Have an idea for a new app that would make your life or your job
              easier? We want to talk to you! Our team of experts can help bring
              your app to life.
            </div>
          </div>
        </div>
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              <p className="xl-text purple-text fira">&lt;&nbsp;/&nbsp;&gt;</p>
              <h3 className="large-text">Websites</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Do you need a website without the high cost of other providers or
              having to use a clunky DIY platform? We are ready to help you
              start your online business now!
            </div>
          </div>
        </div>
        <div className="col p-5 d-flex justify-content-center">
          <div className="card center-text p-5">
            <div className="dark-blue-text mb-3">
              <svg className="icon icon-tools pb-3">
                <use href="/icons/symbol-defs.svg#icon-tools-2"></use>
              </svg>
              <h3 className="large-text">Management Tools</h3>
            </div>
            <div className="medium-text dim-grey-text justify">
              Take complete control of every part of your online business.
              Market your product and update your content with the most secure,
              user-friendly tools in the industry.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row p-5 large-text">
          <h2 className="main-heading center-text dim-grey-text pt-5">
            The Power of <span className="dark-blue-text">Process</span>
          </h2>
        </div>
        <div className="pt-5"></div>
        <div className="process-row process-row-reverse d-flex p-5 xl-text dim-grey-text">
          <div className="process-col d-flex center-text">
            <p>
              <span className="dark-blue-text">1.</span>&nbsp;Tell us your
              vision
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              A crucial first step in any project is for us to understand
              exactly what you want to build. The clearer and more detailed the
              vision, the better the results!
            </p>
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
              <span className="dark-blue-text">2.</span>&nbsp;A&nbsp;
              <span className="colorful-text">Beautiful</span>&nbsp;Design
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              Based on your input we'll design the look and feel of your app or
              website. Any product bearing our name is built to deliver the very
              best user experience possible.
            </p>
          </div>
        </div>
        {/* <div className="arrow-down-left">=&gt;</div> */}
        <div className="process-row process-row-reverse d-flex p-5 xl-text dim-grey-text">
          <div className="process-col d-flex center-text">
            <p>
              <span className="dark-blue-text">3.</span>&nbsp;Consistent
              Dialogue
            </p>
            <p className="large-text dim-grey-text p-5 justify">
              Throughout the design process, we send drafts to you for feedback,
              which helps us further distill the product down to its most
              essential form.
            </p>
          </div>
          <img
            className="process-col d-flex rounded"
            src="/dialogue.png"
            alt="dialogue"
          />
        </div>
        {/* <div className="arrow-down-right">=&gt;</div> */}
        <div className="process-row d-flex p-5 mb-5 xl-text dim-grey-text">
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
        </div>
      </section>
      <section className="video-wrapper pt-5 mb-5 rounded">
        <video className="full-video rounded" autoPlay loop muted playsInline>
          <source src="https://www.bayhawk.cc/code.mov"></source>
        </video>
        <div className="video-gradient rounded center-text pt-5">
          {/* this is a weird hack I had to try because the lock has unexplained padding to the right I can't get rid of and it was causing it to not be centered */}
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
        <a href="https://www.leadzen.cc" target="_blank" className="project-row mt-5 p-5">
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
        <a href="https://www.quicksolutions.biz" target="_blank" className="project-row mt-5 p-5">
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
      </section>

      <footer className="footer-col small-text pb-5 pt-5">
        {/* leadzen.cc/bayhawk */}
        <a href="https://www.bayhawk.cc" className="p-3 white-text">
          &copy;2021 Bayhawk Software, LLC
        </a>
      </footer>
    </main>
  );
};

export default Landing;
