import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Chip from '@material-ui/core/Chip';
import LatestCard from "./LatestCard.jsx";
import React,{useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      
    },
    button1:{
        fontSize:'12px !important',
        
    },
    root1: {
        marginBottom:"-50px",
        
      },
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
          fontWeight:"600px",
          fontStyle:"normal"
      },
    paper: {
      height: 140,
      width: 100,
    },
    f1:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 0px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        
    },
    f3:{
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"-20px"
        
        
    },
    f4:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "black",
        color:"white",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    top:{
        display:"flex",
        minWidth:"70px",
        height:"5vh",
        minHeight:"40px",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "17px",
        marginBottom:"5px"
    },
    bottom:{
        display:"flex",minWidth:"70px",height:"5vh",minHeight:"40px",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px"
    },
    chipborder:{
        border:"solid",
        borderColor:"black",
        borderWidth:"0.1px",
        fontSize:"12px",
        fontColor:"black"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function Latest(props){
    const classes = useStyles();
    
    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(true);
    const addcount=()=>{
        setclick(!click)
    }
    const addcount1=()=>{
        set([...st1,""])
        console.log(st1)
        
      }

    const {usestate1}=props
    return(
        <div >
            {/* {
            [...Array(props.count)].map((e, i) => <span className="busterCards" key={i}><LatestCard addcount={props.addcount}  changeflag={props.changeflag}/></span>)} */}
            {usestate1.length===0?
            <div></div>:
            Object.keys(usestate1).map((index)=>(
              <div>
                            {console.log(usestate1[index],"print")}
            <LatestCard
            date={usestate1[index]['timestamp']}
            alertcreated={usestate1[index]['created']}
            severity={usestate1[index]['severity']} 
            title={usestate1[index]['source_title']} 
            source={usestate1[index]['source_url']}
            keyword={usestate1[index]['keywords']}
            tags={usestate1[index]['tags']}
            remediation={usestate1[index]['remediation']}
            id={usestate1[index]['id']}
            comments={usestate1[index]['comments']}
            disabled={false}
        
            
            // changeflag={props.changeflag} addcount={props.addcount}
            />
            
              </div>

            ))
            }
            <Grid container style={{minHeight:'50px'}}>

            </Grid>
      

        </div>
    )
}