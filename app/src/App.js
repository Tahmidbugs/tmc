import React from "react";
import iera from "./assets/iera.png";
import tmc from "./assets/tmc.png";
import anwar from "./assets/anwar.png";
import logo from "./assets/logo.png";

import hassan from "./assets/hassan.jpg";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import animationDatas from "./lotties/twork.json";
import animationDatas2 from "./lotties/mwork.json";
import animationDatas3 from "./lotties/work.json";
import { GiTicket } from "react-icons/gi";
// import { IconName } from "react-icons/gi";

import Lottie from "react-lottie";
import CountdownTimer from "./components/CountdownTimer";
function App() {
  const googleFormsEmbedCode =
    '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZSG3ERaPIYhBclG1NOMkO6Jm5hhwVj7rVrqsIy5Jw8Heeow/viewform?embedded=true" width="740" height="2685" frameborder="0" marginheight="0" marginwidth="220">Loading…</iframe>';

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
              <img src={logo} alt="IERA logo" className="logo2" />
              {/* <h1
                className="title changecolor"
                style={{
                  marginTop: -20,
                  fontFamily: "Righteous",
                  textAlign: "center",
                }}
              >
                Come To Success
              </h1> */}
            </div>
            <img src={tmc} alt="TMC logo" className="logo tmclogo" />
          </div>
        </div>
        <div className="bodyWrapper">
          {" "}
          <h4>‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ</h4>
          <div className="headingwrap">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <img
                src={anwar}
                className="person"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  boxShadow: "5px 20px 20px rgba(0, 0, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <h5 className="slide-in" style={{ fontFamily: "Space Grotesk" }}>
                Sheikh Anwar Arafat
              </h5>
            </div>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Righteous",
                marginLeft: 50,
                marginRight: 50,
              }}
              className="changecolor"
            >
              COME TO SUCCESS DA'WAH CONFERENCE <br />
              <span style={{ fontSize: 15 }}>IS RIGHT AROUND THE CORNER</span>
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={hassan}
                className="person"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  boxShadow: "5px 20px 20px rgba(0, 0, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <h5 className="slide-in" style={{ fontFamily: "Space Grotesk" }}>
                Sheikh Hassan Sultan
              </h5>
            </div>
          </div>
          <CountdownTimer targetDate="2023-05-12T00:00:00" />
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
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "Space Grotesk",
                  textTransform: "uppercase",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#cdb976",
                }}
              >
                Get ready to experience an unforgettable Dawah Conference with
                IERA and TMC, featuring the dynamic Sheikh Anwar Arafat and the
                esteemed Sheikh Hassan Sultan, joining forces to bring you an
                event like no other.
              </h2>
              <h3
                style={{
                  textAlign: "center",
                  color: "#cdb976",
                  textAlign: "center",
                  fontFamily: "Space Grotesk",
                  textTransform: "uppercase",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                <span className="changecolor">SAVE THE DATES: </span>
                May 12th - May 14th, 2023&nbsp;
                <br />
                <span className="changecolor">WHERE IS IT? </span>Memphis,
                Tennessee (Memphis Islamic Center, 10299 Humphrey Road)
              </h3>
            </div>
            <div style={{ display: "flex" }}></div>
          </div>
          <h3
            className="description-text"
            style={{
              textAlign: "center",
              fontFamily: "Space Grotesk",
              color: "#cdb976",
            }}
          >
            The conference will include discussions on the Prophetic strategies
            of giving dawah, catering it to the youth, and engaging in the study
            of dawah. Students from Tampa will also be in attendance, adding to
            the excitement and energy of this must-attend conference. Don't miss
            out on this opportunity to enrich your faith. Join us now!
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

        <Schedule />

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
            width="800"
            height="1080"
          />
        </div>
      </div>
    </div>
  );
}

const Schedule = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "",
        padding: "20px",
        borderRadius: "10px",
        borderColor: "#F5BC02",
        borderWidth: 10,
        borderStyle: "solid",
        marginTop: 120,
        fontFamily: "Righteous",
      }}
    >
      <div className="schedule">
        <div style={{ textAlign: "center" }}>
          <GiTicket color="#F5BC02" size={50} />
          <h4 style={{ marginBottom: "10px" }}>Ticket Price</h4>
          <div
            style={{
              backgroundColor: "#F5BC02",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ margin: 0 }}>$250/person</h2>
          </div>
        </div>
        <div
          style={{
            width: 0,
            borderColor: "#F5BC02",
            height: 200,
            borderWidth: 2,
            borderStyle: "solid",
            marginLeft: 20,
            marginRight: 15,
          }}
        ></div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "10px" }}>Day 1</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>10:00 AM - Registration</li>
            <li>11:00 AM - Opening Ceremony</li>
            <li>01:00 PM - Lunch Break</li>
            <li>02:00 PM - Why do Da'waah</li>
            <li>03:30 PM - Etiquettes of Da'wah</li>
            <li>04:30 PM - Prayer Break</li>
            <li>05:00 PM - Sheikh Hassan Sultan's lecture</li>
            <li>06:30 PM - End of Day 1</li>
          </ul>
        </div>
        <div
          style={{
            width: 0,
            borderColor: "#F5BC02",
            height: 200,
            borderWidth: 2,
            borderStyle: "solid",
            marginLeft: 20,
            marginRight: 15,
          }}
        ></div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "10px" }}>Day 2</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>10:00 AM - Registration</li>
            <li>11:00 AM - Qur'an Recitation</li>
            <li>01:00 PM - Dawa'h preliminaries</li>
            <li>02:00 PM - Sheikh Anwar Arafat's lecture</li>
            <li>03:30 PM - Q&A Session</li>
            <li>04:30 PM - Prayer Break</li>
            <li>06:30 PM - End of Day 2</li>
          </ul>
        </div>
        <div
          style={{
            width: 0,
            borderColor: "#F5BC02",
            height: 200,
            borderWidth: 2,
            borderStyle: "solid",
            marginLeft: 20,
            marginRight: 15,
          }}
        ></div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "10px" }}>Day 3</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>10:00 AM - Registration</li>
            <li>11:00 AM - Panel Discussion</li>
            <li>01:00 PM - Lunch Break</li>
            <li>02:00 PM - Demo Da'waah</li>
            <li>03:30 PM - Closing Ceremony and Dua</li>
            <li>04:30 PM - End of Workshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
