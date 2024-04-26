import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import MainWallpaper from "../../assets/MainWallpaper.png";
import SlidingArea from "../SlidingArea/SlidingArea";
import { ClockFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, [screenWidth]);

  return (
    <>
      <NavBar />

      <div className="MainWallpaper">
        <img
          alt="MainWallpaper"
          src={MainWallpaper}
          style={{ width: "100%", height: "100%", filter: "blur(6px)" }}
        />
      </div>

      <br />
      <br />

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Get in Touch With Us</h2>
        <div
          style={{
            color: "grey",
          }}
        >
          For More Information About Our Profuct&Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate.
        </div>
      </div>

      <br />
      <br />

      <div
        // className="contact-us-main-div"
        style={{
          display: "flex",
          flexDirection: screenWidth < 768 ? "column" : "row",
          gap: "3em",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <GeoAltFill style={{ marginRight: "0.5em" }} />
              <h5>Address</h5>
            </div>
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </div>

          <br />

          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TelephoneFill style={{ marginRight: "0.5em" }} />
              <h5>Phone</h5>
            </div>
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 546-6789
          </div>

          <br />

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ClockFill style={{ marginRight: "0.5em" }} />
              <h5>Working Time</h5>
            </div>
            Monday-Friday: 9:00 -<br />
            22:00
            <br />
            Saturday-Sunday: 9:00 -<br />
            21:00
          </div>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={() => console.log("hi")}
        >
          <div>
            <label htmlFor="name">Your name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Abc"
              style={{
                width: "100%",
                border: "1px solid grey",
                borderRadius: "8px",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "0.4em",
              }}
              required
            />
          </div>

          <br />

          <div>
            <label htmlFor="email">Email address</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="abc@def.com"
              style={{
                width: "100%",
                border: "1px solid grey",
                borderRadius: "8px",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "0.4em",
              }}
              required
            />
          </div>

          <br />

          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input
              name="subject"
              type="text"
              placeholder="This is optional"
              style={{
                width: "100%",
                border: "1px solid grey",
                borderRadius: "8px",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "0.4em",
              }}
            />
          </div>

          <br />

          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              placeholder="Hi! I'd like to ask about"
              rows={3}
              cols={screenWidth > 423 ? 50 : 40}
              style={{
                resize: "none",
                border: "1px solid grey",
                borderRadius: "8px",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "0.4em",
              }}
              required
            />
          </div>

          <br />

          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "#B88E2F",
                border: "none",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "2em",
                paddingRight: "2em",
                color: "white",
                borderRadius: "5px",
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <br />
      <br />

      <SlidingArea />

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
