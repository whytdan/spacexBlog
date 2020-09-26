import React, { useEffect } from "react";
import axios from "axios";
import classes from "./Launches.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../../redux/actions/launches";
import { Grid } from "@material-ui/core";
import Launch from "../Launch/Launch";

function Launches() {
  
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => {
    console.log(state);
    return state.launches.loading;
  });

  const launches = useSelector((state) => {
    return state.launches.launches;
  });

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <>
      {isLoading ? (
        <p className={classes.Title}>Loading...</p>
      ) : (
        <Grid container spacing={3} className={classes.Wrapper}>
          {launches.map((launch) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={launch.id}>
              <Launch 
              launchImg={launch.links.flickr_images[0]} 
              description={launch.details}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Launches;
