import React from "react";
import "./CredentialsSection.css"; // Import the custom CSS file

const CredentialsSection = () => {
  return (
    <section id="credentials">
   

      <div className="container9">
        <div className="text-center">
          <h2 className="title">Why Trust Me?</h2>
        </div>

        <div className="grid-container">
          {/* Left Section */}
          <div className="left-section">
            {[
              { icon: "🏆", title: "Certified Sports Optometrist", desc: "HAC Jerusalem" },
              { icon: "🎯", title: "Certified Bates Method Trainer", desc: "British School of Yoga" },
              { icon: "📚", title: "Research Experience", desc: "8+ years in sports vision & cognitive training" }
            ].map((item, index) => (
              <div key={index} className="credential-card fadeInLeft">
                <div className="icon-container">
                  <span className="icon">{item.icon}</span>
                  <div className="text-container">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="right-section">
            {[
              { icon: "👀", title: "Trained 40+ athletes", desc: "in 2 offline programs" },
              { icon: "🔥", title: "Success Stories", desc: "4 students permanently removed their glasses" },
              { icon: "🏏", title: "Proven Results", desc: "Cricketers improved shot timing by 10%" }
            ].map((item, index) => (
              <div key={index} className="credential-card dark-card fadeInRight">
                <div className="icon-container">
                  <span className="icon green">{item.icon}</span>
                  <div className="text-container">
                    <h3 className="card-title white">{item.title}</h3>
                    <p className="card-desc light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="cta-text">💡 Athletes trust me because I deliver RESULTS.</p>
          <div>
            <a href="https://tagmango.app/36e3433a84" className="cta-button">
              👉 Join the Free Webinar & See for Yourself
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
