import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';

// Store pdf of resume in variable
import pdf from '../assets/pdf/resume2.pdf';

export default function Resume({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("resume")

  // Set state for pdf page info
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container>
    <Grid container direction="column" alignItems="center" className="resume">
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} xs={12}>
        <Page pageNumber={pageNumber} />
      </Document>
      {/* If pdf has more than 1 page, load the buttons used to transition pages */}
      {numPages > 1 &&
        <Grid container justifyContent="center" className="pages">
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
          <p>
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
    </Container>
  );
}