import React from "react";
import Button from "../buttons/buttonPrimary";
import "./form.scss";

const Form = ({ title }) => {
  return (
    <form action="https://formspree.io/f/mzbkyeyj" method="POST">
      <h1 className="line">{title}</h1>
      <div className="my-5">
        <input
          placeholder="Full Name"
          type="text"
          className="form-control"
          id="name"
          name="fullName"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="my-5">
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="form-control"
          id="email"
        />
      </div>
      <textarea name='message' className="textarea" placeholder="message" />

      <Button title="Submit" />
    </form>
  );
};

export default Form;
