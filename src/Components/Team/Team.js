import React from 'react';
// import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, makeStyles,Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const useCardStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: theme.shadows[3]
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  body: {
    height: 130,
  },
}));



const Team = (props) => {
    const cardStyle = useCardStyles();
    const {strTeam,strSport,strTeamBadge,idTeam} = props.team;

    // const teamStyle={
    //     border: '1px solid purple ',
    //     margin: '20px',
    //     padding: '20px',
    //     borderRadius: '20px'
    // }

//    const history = useHistory();
//    const showDetails = idTeam => {
//         const url = `team/${idTeam}`;
//         history.push(url);
//     }



    return (

        <Grid item lg={props.lg} md={props.md} sm={props.sm} xs={props.xs}>
            <Card className={cardStyle.root}>

                <CardContent className={cardStyle.body}>

                    <Typography variant="subtitle" component="h3" className={cardStyle.paper}>
                        <img style={{height:'120px'}} src={strTeamBadge} alt="Team Badge"/><br/>
                        {strTeam}<br/>
                    </Typography> 

                    <Typography gutterBottom variant="subtitle2" component="h3" className={cardStyle.paper}>
                        Sport type: {strSport}
                    </Typography> 

                </CardContent>

                <CardActions style={{justifyContent: 'center',paddingTop:'60px'}}>

                    <Link to={`/team/${idTeam}`}>
                            <div  className={cardStyle.paper}>
                            <Button  variant="contained" color="primary">       
                            Explore<FontAwesomeIcon style={{paddingLeft:'10px'}} icon={faArrowRight}/>
                            </Button>
                        </div> 
                    </Link>
                    
                </CardActions>       
            </Card>
        </Grid>
        





        // <div style={teamStyle}>
        //     <img style={{height:'100px'}} src={strTeamBadge} alt="Team Badge"/>
        //     <h2>{strTeam}</h2>
        //     <p>{strLeague}</p>
        //     {/* <button onClick={() => showDetails(idTeam)}>show Comments</button> */}
        //      <Link to={`/team/${idTeam}`}><button>Explore</button></Link>
  
           
        // </div>
    );
};

export default Team;