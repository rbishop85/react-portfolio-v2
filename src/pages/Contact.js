import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Contact = ({ setCurrentTab }) => {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("contact")

  // States for the 3 contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // When submit button is pushed, reset all states
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Grid container justifyContent="center" className="contact">
      <Grid item xs={10} md={6}>
        <h2 className="title">Contact Me:</h2>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <Grid container direction="column" alignItems="center">
            <TextField
              required
              id="contactName"
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "80%" }}
            />
            <TextField
              required
              id="contactEmail"
              label="E-Mail"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "80%" }}
            />
            <TextField
              required
              id="contactMessage"
              label="Message"
              variant="outlined"
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={6}
              style={{ width: "80%" }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
