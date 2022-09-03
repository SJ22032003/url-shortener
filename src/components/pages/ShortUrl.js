import React from "react";
import { Typography, Grid, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccordionTable from "../common/AccordionTable";
import { useState } from "react";
import { getURLShortener } from "../api/api";

function ShortUrl() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getURLShortener(url);
      setShortUrl(data.shortURL);
    } catch (error) {
      setShortUrl("Error");
    }
  };
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
          {shortUrl && (
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {shortUrl}
            </Typography>
          )}
        </center>
      </Grid>
    </div>
  );
}

export default ShortUrl;
