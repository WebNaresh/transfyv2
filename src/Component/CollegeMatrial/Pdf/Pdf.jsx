import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import LinearProgress from "@mui/material/LinearProgress";
import { Paper } from "@mui/material/";
import { useContext } from "react";
import UseContext from "../../../State/UseState/UseContext";
function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const { window1 } = useContext(UseContext);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);

    setPageNumber(1);
  }

  return (
    <div className="App">
      <center>
        <div>
          {pageNumber}
          {loading}
          <Document
            file="./sample.pdf"
            loading={<LinearProgress sx={{ width: "90vh" }} />}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Paper
                key={`page_${index + 1}`}
                sx={{
                  marginBottom: 8,
                  background: "inherit",
                  borderRadius: 50,
                }}
              >
                <Page
                  width={window1.innerWidth > 600 ? undefined : 270}
                  loading={""}
                  pageNumber={index + 1}
                />
              </Paper>
            ))}
          </Document>
        </div>
      </center>
    </div>
  );
}

export default Pdf;
