import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

// Store pdf of resume in variable
import pdf from '../assets/pdf/resume.pdf';

// In-line styling
const styles = {
  section: {
    marginTop: 40,
  },
  spaceSide: {
    marginLeft: 10,
    marginRight: 10,
  },
  spaceTop: {
    marginTop: 30
  }
};

export default function Resume() {

  // Set state for pdf page info
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid container direction="column" alignItems="center" style={styles.section}>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {/* If pdf has more than 1 page, load the buttons used to transition pages */}
      {numPages > 1 &&
        <Grid container justifyContent="center" style={styles.spaceTop}>
          <Button
            variant="contained"
            onClick={() => {
              // If the page number is higher than one, set the page number 1 back
              if(pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </Button>
          {/* Display current page number */}
          <p style={styles.spaceSide}>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            variant="contained"
            onClick={() => {
              // If the page number is lower than the max pages then set the page number 1 higher
              if(pageNumber < numPages) {
                setPageNumber(pageNumber + 1);
              }
              
            }}
          >
            Next
          </Button>
        </Grid>
      }
      {/* Button to download copy of resume */}
      <Button variant="outlined" href={pdf} download>Download</Button>
    </Grid>
  );
}