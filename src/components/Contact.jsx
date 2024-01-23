import React from "react";
import sg from "../assets/photo_2023-11-27_19-18-54-removebg-preview.png";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <main>
          <div>
            <h1>Contact Us</h1>
          </div>
          <div>
            <form action="">
              <div>
                <input type="text" required placeholder="Name" />
              </div>
              <div>
                <input type="email" required placeholder="E-mail" />
              </div>
              <div>
                <input
                  style={{ padding: "3rem 2rem" }}
                  className="message"
                  type="text"
                  required
                  placeholder="Message"
                />
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </main>
        <img src={sg} alt="" />
      </div>
    </>
  );
};

export default Contact;
