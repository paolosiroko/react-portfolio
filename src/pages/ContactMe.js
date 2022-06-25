import React from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import styles from "../components/styles/Contact.module.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

function ContactMe() {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nj5e7zr",
        "template_5mmxnln",
        e.target,
        "kC7OdsU13u-IBkHkW"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response);
      })
      .catch((err) => console.log(err))
      .then(() => {
        navigate("/", { replace: true });
      });
  };

  return (
    <div className={styles.all}>
      <h1>Contact Me</h1>
      <div className={styles.App}>
        <Form className={styles.Form} onSubmit={sendEmail}>
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="message"
            rows={8}
            placeholder="Message…"
            required
          />
          <Button type="submit" color="black">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;
