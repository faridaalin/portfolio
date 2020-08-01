import React, { useEffect } from "react";

import "./contact.styles.css";
import Form from "./components/form/form-component";
import PageHeader from "./components/page-header/page-header.component";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="page-wrapper contact">
      <PageHeader title="Contact" />
      <div className="form-container">
        <p className="contact-intro" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>

        <Form />
      </div>
    </div>
  );
}

export default Contact;
