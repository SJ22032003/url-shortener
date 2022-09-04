import React from "react";
import { Typography, Grid, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccordionTable from "../common/AccordionTable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../redux/ActionType";

function ShortUrl() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.Reducer.data);
  const [url, setUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: GET_DATA, payload: url });
  };

  console.log(myData, "INSIDE COMPONENT");
  return (
    <div>
      <Grid container spacing={2} my={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
            Shorten your URL
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <center>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                value={url}
                sx={{ width: "70%" }}
                id="outlined-basic"
                label="Enter your URL"
                onChange={(e) => setUrl(e.target.value)}
              />
              <IconButton onClick={(e) => handleSubmit(e)}>
                <AddCircleIcon
                  sx={{ width: "35px", height: "35px", marginTop: "4px" }}
                />
              </IconButton>
            </form>
          </center>
        </Grid>
      </Grid>
      <Grid container my={2}>
        <center>
          <AccordionTable />
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {myData.shortURL}
          </Typography>
        </center>
      </Grid>
    </div>
  );
}

export default ShortUrl;
