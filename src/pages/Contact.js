import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.styles.css";
import Form from "../components/form/form-component";
import PageHeader from "../components/page-header/page-header.component";
import {Helmet} from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formSuccess, setformSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = (data, e) => {
    console.dir(e.target);
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "gmail",
        "contact_form_portfolio_site",
        templateParams,
        "user_Wh0dKa6sUbn3uoizLFFJS"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setformSuccess(true);
          e.target.reset();
        },
        function (error) {
          console.log("FAILED...", error);
          setformSuccess(false);
        }
      );
  };

  return (
    <div className="page-wrapper contact">
      <Helmet>
        <title>Farida Alin | Contact</title>
        <meta
          name="description"
          content="Feel free to contact me for questions or business request."/>
      </Helmet>
      <PageHeader title="Contact" />
      <div className="form-container">
        {formSuccess ? (
          <p
            className="contact-intro"
            data-aos="fade-up"
            style={{ color: "#d40101a8" }}
          >
            Thanks for contacting me, I will get back to you as soon as
            possible.
            <br></br>
            <br></br>
            Meanwhile, have a nice day!
          </p>
        ) : (
          <p className="contact-intro" data-aos="fade-up">
            Whether you have questions regarding some of my projects or just
            want to get in touch with me. I´m only an inbox away.
          </p>
        )}
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Contact;
