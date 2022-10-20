import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import pdf from '../../assets/pdf/resume.pdf';

const styles = {
  spaceSide: {
    marginLeft: 10,
    marginRight: 10,
  },
  spaceTop: {
    marginTop: 30
  }
};

export default function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // function removeTextLayerOffset() {
  //   const textLayers = document.querySelectorAll(
  //     '.react-pdf__Page__textContent'
  //   );
  //   textLayers.forEach((layer) => {
  //     const { style } = layer;
  //     style.top = '0';
  //     style.left = '0';
  //     style.transform = '';
  //   });
  // }

  return (
    <Grid container direction="column" alignItems="center">
      <h2>Resume Page</h2>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages > 1 &&
        <Grid container justifyContent="center" style={styles.spaceTop}>
          <Button
            variant="contained"
            onClick={() => {
              if(pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </Button>
          <p style={styles.spaceSide}>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            variant="contained"
            onClick={() => {
              if(pageNumber < numPages) {
                setPageNumber(pageNumber + 1);
              }
              
            }}
          >
            Next
          </Button>
        </Grid>
      }
    </Grid>
  );
}