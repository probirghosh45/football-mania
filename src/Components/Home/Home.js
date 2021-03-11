import React, { useState, useEffect } from "react";
import Team from "../Team/Team";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Home.css'
import banner from '../../images/banner.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#700808',
    minHeight: '275'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const shuffle = (teams) => {
  for (let i = teams.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [teams[i - 1], teams[j]] = [teams[j], teams[i - 1]];
  }
};



const Home = () => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  shuffle(teams);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328")
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
    // .then (data => console.log(data.teams));
  },[]);

  return (
          <div>
            <div className="BannerStyle">
                     <img src={banner} alt=""/>
                    <h3 className="Heading">Football Mania</h3>
            </div>
            <div className={classes.root}>
             <Container className={classes.container} maxWidth="xl">
               <Grid container spacing={3}>
                  {teams.map((team) => (
                    <Team team={team} lg={4} md={4} sm={6} xs={12}></Team>
                  ))} 
              </Grid>
            </Container>

    </div>
          </div>
  );
};

export default Home;
