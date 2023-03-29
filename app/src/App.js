import React from "react";
import iera from "./assets/iera.png";
import tmc from "./assets/tmc.png";
import anwar from "./assets/anwar.png";
import hassan from "./assets/hassan.jpg";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import animationDatas from "./lotties/twork.json";
import animationDatas2 from "./lotties/mwork.json";
import animationDatas3 from "./lotties/work.json";

import Lottie from "react-lottie";
function App() {
  const googleFormsEmbedCode =
    '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd28udKVEu-i7-xKqMW3FfAK-FOB-TwJpfyk9VfjmtBTl6HOQ/viewform?embedded=true" width="600" height="1082" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={20}
        outerSize={50}
        color="92,138,174"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "video",
          "img",
          "Lottie",
          ".link",
        ]}
      />
      {animationDatas && (
        <a>
          <div className="lottie-wrapp">
            <Lottie
              options={{ animationData: animationDatas }}
              eventListeners={[{}]}
            />
          </div>
        </a>
      )}
      {animationDatas2 && (
        <a>
          <div className="lottie-wraptwo">
            <Lottie
              options={{ animationData: animationDatas2 }}
              eventListeners={[{}]}
            />
          </div>
        </a>
      )}
      <div className="content-wrapper">
        <div className="content-wrapperone">
          <div className="content-wrappertwo">
            <img
              src={iera}
              alt="IERA logo"
              className="logo"
              // style={{ marginRight: 20 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5 style={{ textAlign: "center" }}>IERA and TMC presents</h5>
              <h1
                className="title changecolor"
                style={{
                  marginTop: -20,
                  fontFamily: "Righteous",
                }}
              >
                Come To Success
              </h1>
            </div>
            <img src={tmc} alt="TMC logo" className="logo tmclogo" />
          </div>
        </div>
        <div className="bodyWrapper">
          {" "}
          <h4>‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="bodyWrappertwo"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Righteous",
                }}
                className="changecolor"
              >
                COME TO SUCCESS DA'WAH CONFERENCE <br />
                <span style={{ fontSize: 15 }}>IS RIGHT AROUND THE CORNER</span>
              </h1>
              <h3
                style={{
                  textAlign: "center",
                  fontFamily: "Space Grotesk",
                }}
              >
                Get ready to experience an unforgettable Dawah Conference with
                IERA and TMC, featuring the dynamic Sheikh Anwar Arafat and the
                esteemed Sheikh Hassan Sultan, joining forces to bring you an
                event like no other. Students from Tampa will also be in
                attendance, adding to the excitement and energy of this
                must-attend conference. Don't miss out on this opportunity to
                enrich your faith. Join us now!
              </h3>
              <h4
                style={{
                  textAlign: "center",
                }}
              >
                <span className="changecolor">SAVE THE DATES: </span>May 12th -
                May 14th, 2023&nbsp;
                <br />
                <span className="changecolor">WHERE IS IT? </span>Memphis,
                Tennessee (Memphis Islamic Center, 10299 Humphrey Road)
              </h4>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <img src={anwar} className="person slide-in" />
                <h5 className="slide-in">Sheikh Anwar Arafat</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={hassan} className="person slide-in" />
                <h5 className="slide-in">Sheikh Hassan Sultan</h5>
              </div>
            </div>
          </div>
          <h3
            className="description-text"
            style={{ textAlign: "center", fontFamily: "Space Grotesk" }}
          >
            The conference will include discussions on the Prophetic strategies
            of giving dawah, catering it to the youth, and engaging in the study
            of dawah.
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="#form" style={{ textDecoration: "none" }}>
              <button className="glow-on-hover bounce">
                Interested? Fill out the interest form!
              </button>
            </a>
            <h5 className="note-text" style={{ fontSize: 10, marginTop: 5 }}>
              Takes only a minute wallahi
            </h5>
          </div>
        </div>

        <div
          className="form-wrapper"
          id="form"
          style={{
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          {animationDatas3 && (
            <a>
              <div className="lottie-wrapped">
                <Lottie
                  options={{ animationData: animationDatas3 }}
                  eventListeners={[{}]}
                />
              </div>
            </a>
          )}
          <h4
            stlye={{
              fontFamily: "Space Grotesk",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Fill out the quick interest form to save your spot!
          </h4>
          <iframe
            title="Google Forms"
            srcDoc={googleFormsEmbedCode}
            width="600"
            height="1080"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
