import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// In-line styling
const styles = {
  title: {
    textAlign: "center",
  },
};

const formStyle = {
  border: `2px solid`,
  borderRadius: "4px",
  padding: 12,
  backgroundColor: "#00000090",
};


const Contact = () => {

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
    <Grid container justifyContent="center">
      <Grid item xs={10} md={6}>
        <h2 style={styles.title}>Contact Me:</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <Grid container direction="column" alignItems="center">
            <TextField
              required
              // Manually adjusting colors for MUI text box field
              sx={{
                "& .MuiInputBase-root": {
                  color: "#D3D3D3",
                },
                "& .MuiFormLabel-root": {
                  color: "#007b6d",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#007b6d",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&:hover fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007b6d",
                  },
                },
              }}
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
              // Manually adjusting colors for MUI text box field
              sx={{
                "& .MuiInputBase-root": {
                  color: "#D3D3D3",
                },
                "& .MuiFormLabel-root": {
                  color: "#007b6d",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#007b6d",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&:hover fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007b6d",
                  },
                },
              }}
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
              sx={{
                // Manually adjusting colors for MUI text box field
                "& .MuiInputBase-root": {
                  color: "#D3D3D3",
                },
                "& .MuiFormLabel-root": {
                  color: "#007b6d",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#007b6d",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&:hover fieldset": {
                    borderColor: "#007b6d",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007b6d",
                  },
                },
              }}
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
