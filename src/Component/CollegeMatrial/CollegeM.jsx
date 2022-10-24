import { Button, Grid, Paper, Divider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import Dept from "./Option/Dept";
import Name from "./Option/Name";
import Sem from "./Option/Sem";
import Year from "./Option/Year";
import Pdf from "./Pdf/Pdf";

const CollegeM = () => {
  const { pdf, setPdf } = useContext(UseContext);
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item>
          <Dept />
        </Grid>
        <Grid item>
          <Year />
        </Grid>
        <Grid item>
          <Sem />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
        spacing={4}
      >
        <Grid container sx={{ justifyContent: "center" }} spacing={4} item>
          <FormRow />
        </Grid>
        <Grid container sx={{ justifyContent: "center" }} item>
          <Name />
        </Grid>
        <Grid container sx={{ justifyContent: "center" }} spacing={4} item>
          <Button
            onClick={() => (pdf === true ? setPdf(false) : setPdf(true))}
            sx={{ margin: 4 }}
            variant="outlined"
          >
            Submit
          </Button>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }} spacing={4} item>
          <Divider
            sx={{ color: "primary.main" }}
            variant="fullWidth"
            orientation="horizontal"
          />
        </Grid>
        {pdf ? (
          <Grid container sx={{ justifyContent: "center" }} item>
            <Paper variant="outlined">
              <Pdf />
            </Paper>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
};

export default CollegeM;
