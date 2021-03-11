import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faMapMarkerAlt,faMars,faFlag,faFutbol } from '@fortawesome/free-solid-svg-icons'
import "./TeamDetail.css"
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'


const useStyles = makeStyles((theme) => ({
    root: {
    minWidth: 275,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    // marginBottom: theme.spacing(1),
  }
}));




const TeamDetail = (props) => {
    const {teamId}=useParams();
    const [team, setTeam] = useState([]);
    const {strTeamBanner,strTeamBadge,intFormedYear,strTeam,strCountry,strSport,strGender,strTwitter,strFacebook,strYoutube,strStadiumDescription,strDescriptionEN} =team
    useEffect(() => {
       const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
       fetch(url)
       .then((res)=>res.json())
       .then(data=>setTeam(data.teams[0]))
    //    .then(data=>console.log(data.teams[0]))
    }, [teamId])

   const classes = useStyles();

  const bgImage = {
    background : ` linear-gradient(#0005, #0005),url("${strTeamBanner}") no-repeat center center / cover`,
}
   
    return (

<div  style={{backgroundColor:'#700808'}} >

       <div>
         <div style={bgImage} className="TeamBannerStyle" >
             <img  className="TeamBadgeStyle" src={strTeamBadge} alt="Team Badge"/>
         </div>
          </div>

     <Card className={classes.root} variant="outlined" style={{backgroundColor:'#700808'}} >
      <CardContent>
      <Grid container style={{backgroundColor:'#FC4D57'}} className="TeamInfo">
        <Grid item lg={6} md={6} sm={6} xs={12} style={{color:'#ffffff'}}>
                    <h2>{strTeam}</h2>           
                    <h3><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded : {intFormedYear}</h3>
                    <h3><FontAwesomeIcon icon={faFlag}/> Country : {strCountry}</h3>
                    <h3><FontAwesomeIcon icon={faFutbol}/> Sport Type : {strSport}</h3>
                    <h3><FontAwesomeIcon icon={faMars}/> Gender : {strGender}</h3>
        </Grid>

        <Grid item lg={6} md={6} sm={6}   xs={12}>
            <img style={{height:'200px'}} src={strGender==="Male"?maleImage:femaleImage} alt="Team"/>
        </Grid>
       </Grid> 
      </CardContent>
     </Card>
       
       <div>
        <p className="teamDescription" style={{paddingBottom:'20px'}}>{strStadiumDescription}</p>

        <p className="teamDescription">{strDescriptionEN}</p>
        
       </div>


       <div className="social-container">

              <a href={`https://${strTwitter}`} target="_blank" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>  

              <a href={`https://${strFacebook}`} target="_blank" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a href={`https://${strYoutube}`} target="_blank" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <i class="fas fa-mars"></i>
                <i class="fas fa-mars"></i>
              </a>

       </div>
   </div>
   
    );
};

export default TeamDetail;