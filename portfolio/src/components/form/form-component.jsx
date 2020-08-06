import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./form.styles.css";


function Form(props) {
  const [inputNameLength, setInputNameLength] = useState(0);
  const [inputEmailLength, setInputEmailLength] = useState(0);
  const [inputMessageLength, setInputMessageLength] = useState(0);

  const { handleSubmit, register, errors } = useForm();

  const nameHandler = (e) => {
    setInputNameLength(e.target.value.trim().length);
  };
  const emailHandler = (e) => {
    setInputEmailLength(e.target.value.trim().length);
  };
  const messageHandler = (e) => {
    setInputMessageLength(e.target.value.trim().length);
  };

  useEffect(() => {
    AOS.init({ duration: 400, once: true })
  }, [])



  return (
    <form className="contact_form" data-aos="fade-up" onSubmit={handleSubmit(props.onSubmit)}>
      <div
        className={`input-container ${
          inputNameLength > 0 ? "changeStyle" : ""
          }`}
      >
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          ref={register({
            required: true,
            minLength: 2,
          })}
          onBlur={nameHandler}
        />
        {errors.name && errors.name.type === "required" && <p className="error">Required</p>}
        {errors.name && errors.name.type === "minLength" && <p className="error">Must be more than two characters</p>}
      </div>

      <div
        className={`input-container ${
          inputEmailLength > 0 ? "changeStyle" : ""
          }`}
      >
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          onBlur={emailHandler}
        />
        {errors.email && errors.email.type === "required" && <p className="error">Required</p>}
        {errors.email && errors.email.type === "pattern" && <p className="error">Invalid email</p>}
      </div>

      <div
        className={`input-container ${inputMessageLength > 0 ? "changeStyle" : ""}`}
      >
        <label htmlFor="message">Message</label>
        <textarea
          className="input"
          name="message"
          id="message"
          cols="10"
          rows="5"
          ref={register({
            required: true,
            minLength: 8,
          })}
          onBlur={messageHandler}
        ></textarea>
        {errors.message && errors.message.type === "required" && <p className="error">Required</p>}
        {errors.message && errors.message.type === "minLength" && <p className="error">Must more than 8 characters.</p>}
      </div>

      <div className="btn-container">
        <input className="project-site" type="submit" value="Send" />
      </div>
    </form>
  );
}

export default Form;
