import React,{useState,useEffect} from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,IconButton,Typography,Divider,DialogContent,DialogActions,Box} from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import styles from "./LatestCard.module.css";
import CloseIcon from '@material-ui/icons/Close';

import GradeIcon from '@material-ui/icons/Grade';
import TextField from '@material-ui/core/TextField';
import theme from '../../../theme';
import Tooltip from '@material-ui/core/Tooltip';

import {Redirect,useHistory, withRouter} from 'react-router-dom';
import { HighlightStarsContext } from "./context/highlightstars.js";
import Analystsupportmodal from './Analystsupportmodal';
import CommentList from "./CommentsList.jsx";
import enter from "../../../Links/images/enter.png";
import Popup from "./PopUp.jsx";
import { trackPromise } from "react-promise-tracker";
const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const useStyles = makeStyles((theme) => ({
    f5:{
        
           background:"white",
            boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
            borderRadius: "6px",
            
        
    },
    chipborder:{
        border: "1px solid #000000",
        fontSize:"12px",
        fontColor:"black"
    },
    Buttons:{
        marginTop:"5px",
        fontSize:'12px !important',
        
    },
    f3:{
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"1px"
        
        
    },
    f31:{
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"1px"
        
        
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
    f41:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "white",
        
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    top:{
        display:"flex",
        
        height:"35px",
        
        justifyContent:"flex-start",
        alignItems:"flex-end",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "17px",
        marginBottom:"4px",
        
    },
    bottom:{
        display:"flex",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        
        height:"35px"
    },
    bottom1:{
        display:"flex",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        
        height:"35px",
        
    },
    chip: {
        margin: theme.spacing(0.5),
        padding:theme.spacing(0.5),
        fontStyle: "normal",
         fontWeight: "normal",
          fontSize: "12px",
          background:"white",
          border: "1px solid #000000"
      },
      chip1: {
          margin: theme.spacing(0.5),
          paddingLeft:theme.spacing(0.5),
          paddingRight:theme.spacing(0.5),
          paddingTop:theme.spacing(0.3),
          paddingBottom:theme.spacing(0.3),
          fontStyle: "normal",
           fontWeight: "normal",
            fontSize: "10px",
            height:"15px",
            border: "0.4px solid #000000",
            borderRadius:"2px"
  
        },
      tag:{
          
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "22px",
          color: "#000000"
      },
      fontp:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
      },
    
}))
export default function LatestCard(props){
    const {date,
        alertcreated,severity,
        title,source,keyword,
        remediation,tags,comments}=props
        
        // const tags1=tags.filter(tag=>tag==="highlightedalerts")
        // console.log(tags1)
        const barChartUAInfoData = React.useContext(HighlightStarsContext);
        console.log(barChartUAInfoData)
        const {addcount,changeflag,count}=barChartUAInfoData;
        console.log(count)
        const [tags1,settags1]=React.useState()
        if(severity!==""){
        // console.log(severity)
        const newStr = severity.split('');
        newStr.splice(0,8);
       var nseverity = newStr.join('');
    }
    else{
        var nseverity=severity
    }

    const [fullWidth, setFullWidth] = React.useState(true);
    const [commenting,setcommenting]=React.useState('');
      //=======================================================================
  const [userComment, setUserComment] = React.useState([]);
  const [commentText, setCommentText] = useState("");
  const [popOpen, setPopOpen] = React.useState(false);
  const [upload, setUpload] = useState();
  const handlePopOpen = () => {
    setPopOpen(true);
  };
  const handlePopClose = () => {
    setPopOpen(false);
  };
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState();
  //=======================================================================

    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(true);

    const [star,selectstar]=React.useState(tags1)
    const [open, setOpen] = React.useState(false);
    // const addcount=()=>{
    //     selectstar(!star)
    //     if(star===false){
    //         props.addcount()
    //     }
    //     else if(star===true){
    //         props.changeflag()
    //     }
        
        
    //     // console.log(props.changeflag)
    // }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const history = useHistory();
    const loggedout=()=>{
        localStorage.removeItem("token")
        
        history.push("/");
        window.location.reload();
        
      }
//     const handlecomment=async()=>{
//         if(comments.length>0){
//             console.log("faisal2",commenting,comments[0]['id'])
//             const token=localStorage.getItem("token")
//             const  x= async()=>{
//                 const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+id+'/comments/'+comments[0]['id'], {
//                     method: 'PUT',
//                     headers: {
//                         'accept': 'application/json',
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                         'Authorization': token
//                     },
//                     body: 'text='+commenting
//                 });
//                 const y=await response.json()
//                 if(y.message==="Invalid access token"){
//                     console.log(y,"typefaisal")
//                     loggedout()
//                 }

//                 // console.log(y,"typefaisal")
//                 // setstate1(y.alerts)
//             }
//             x() 
//             // const response= await fetch('https://if.cyberintelligencehouse.com/api/alerts/'+id+'/comments/'+comments[0]['id'], {
//             //     method: 'PUT',
//             //     headers: {
//             //         'accept': 'application/json',
//             //         'X-Api-Key': '1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2',
//             //         'Content-Type': 'application/x-www-form-urlencoded'
//             //     },
//             //     body: 'text='+commenting
//             // });
//             // let data = await response.json()
//             // console.log(data)
//         }
//         else{
//             const token=localStorage.getItem("token")
//             const  x= async()=>{
//                 const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+id+'/comments', {
//                     method: 'POST',
//                     headers: {
//                         'accept': 'application/json',
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                         'Authorization': token
//                     },
//                     body: 'nick=dsadasdsasd&text='+commenting
//                 });
//                 const y=await response.json()
//                 if(y.message==="Invalid access token"){
//                     console.log(y,"typefaisal")
//                     loggedout()
//                 }

//                 // console.log(y,"typefaisal")
//                 // setstate1(y.alerts)
//             }
//             x() 
//             // const response=await fetch('https://if.cyberintelligencehouse.com/api/alerts/'+id+'/comments', {
//             //     method: 'POST',
//             //     headers: {
//             //         'accept': 'application/json',
//             //         'X-Api-Key': '1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2',
//             //         'Content-Type': 'application/x-www-form-urlencoded'
//             //     },
//             //     body: 'nick=dsadasdsasd&text='+commenting
//             // });
//             // let data = await response.json()
//             // console.log(data)
//         }

// }
useEffect(() => {
    setUserComment(props.comments);
  }, [props.comments]);
  const adComment = (comment) => {
    if (isEdit) {
      editComment(id, commentText);
      setIsEdit(false);
    } else {
      if (commentText) {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const commentObj = {
          nick: user,
          created: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}:${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          text: comment,
        };
        fetch(
          "https://if.cyberdevelopment.house/api/alerts/" +
            props.id +
            "/comments",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: token,
            },
            body: `nick=${commentObj.nick}&text=${commentObj.text}`,
          }
        ).then((res) => {
          console.log("res = ", res);
          setUserComment((prevComments) => [...prevComments, commentObj]);
        });
      }
    }
    setCommentText("");
    handlePopClose();
  };
  const deleteComment = (commentId) => {
    const token = localStorage.getItem("token");
    
    fetch(
      `https://if.cyberdevelopment.house/api/alerts/${props.id}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      }
    ).then((res) => {
      console.log("deleteRes = ", res);
      setUserComment((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    });
  };
  const findComment = (commentId) => {
    const comment = userComment.find((comment) => comment.id === commentId);
    const message = comment.text;
    setCommentText(message);
    setId(comment.id);
    setIsEdit(true);
  };

  const editComment = (id, comment) => {
    const token = localStorage.getItem("token");
    const newComments = userComment.map((com) => {
      if (com.id === id) {
        return {
          ...com,
          text: comment,
        };
      } else {
        return { ...com };
      }
    });
    fetch(
      "https://if.cyberdevelopment.house/api/alerts/" +
        props.id +
        "/comments/" +
        id,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: token,
        },
        body: "text=" + comment,
      }
    ).then((res) => {
      console.log("Edit Res =", res);
      setUserComment(newComments);
    });
  };
const controlhighlight=(e)=>{
    selectstar(!star)
    if(star===false){
        
        const pushcomment=async()=>{
            const token=localStorage.getItem("token")
            const response= await trackPromise( fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/tags', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'tag=highlighted'
            }));
            
            const y=await trackPromise( response.json());
            await (addcount())
            
            if(y.message==="Invalid access token"){
                console.log(y,"typefaisal")
                loggedout()
            }
        }
        pushcomment()
        
    }
    else if(star===true){
        

            const pushcomment=async()=>{
            const token=localStorage.getItem("token")
            const response= await trackPromise( fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/tags/highlighted', {
                method: 'DELETE',
                headers: {
                    'accept': 'application/json',
                    'Authorization': token,
                }
            }));
        const y=await trackPromise(response.json());
        await (changeflag());
        
        if(y.message==="Invalid access token"){
            console.log(y,"typefaisal")
            loggedout()
        }
        }
        pushcomment()
        
    }
    
}
const handlecommenting=(e)=>{
    setcommenting(e.target.value)
}
React.useEffect(() => {
    selectstar(tags.some((tag) => tag === "highlighted"));
    if (comments.length > 0) {
      setcommenting(comments[0]["text"]);
    } else {
      setcommenting("");
    }
  }, [tags]);
    // https://if.cyberintelligencehouse.com/api/alerts/39412cec-8a69-4254-9a81-3cf21a83ba09/comments
     const classes=useStyles()
     const [open1,setopen1]=React.useState(false);
     const handle1=()=>{
         setopen1(true)
     }
     const handle2=()=>{
         setopen1(false)
     }
    return(
        <div>
            {/* {console.log("keyword",keyword[0]['value'])} */}
            <Grid item xs={12}  style={{marginBottom:"10px"}}>
            <Box className={classes.f5}  >
                <Grid item    xs={12}>
                    <Grid container  justify="flex-start" spacing={1}>
                        <Grid item xs={2} lg={2}  >
                            {/* <Grid container direction="column">
                                <Grid item style={{display:"flex",alignItems:"center",height:"50%",justifyContent:"center",fontStyle: "normal",fontWeight: "500",
                                    fontSize: "12px",color: "#000000",opacity:"0.5"}}>
                                {date}
                                </Grid>
                                <Grid item>
                                {nseverity}
                                </Grid>
                            </Grid> */}
                            <div style={{display:"flex",flexDirection:"column",width:"130px",height:"180px",background:"white",borderRight:"0.2px solid #000000"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50%",fontStyle: "normal",fontWeight: "500",
                                    fontSize: "12px",color: "#000000",opacity:"0.5"}}>
                                    {date}
                                </div>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50%",fontStyle: "normal",fontWeight: "600",
                                    fontSize: "16px",color: "white",background:"#F5A623"}}>

                                                    {nseverity}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={8} lg={8} >
                            <div style={{display:"flex"}}>
                                <Grid container justify="space-between">
                                <Grid item>
                                    <div style={{display:"flex",width:"22vw",height:"70px",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%",borderRight:"1px solid #000000"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Title
                                            </div>
                                            <div style={{paddingTop:"5px",fontStyle: "normal",fontWeight: "normal",fontSize: "12px"}}>
                                                {title}
                                            </div>
                                        </div>

                                    </div>
                                        
                                </Grid>
                                <Grid item>
                                    <div style={{display:"flex",width:"20.5vw",height:"70px",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Source
                                            </div>
                                            <div style={{paddingTop:"5px",fontStyle: "normal",fontWeight: "normal",fontSize: "12px"}}>
                                                {source}
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div style={{display:"flex",width:"22vw",height:"70px",background:"white",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%",borderRight:"1px solid #000000"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Keyword
                                            </div>
                                            <div style={{display:"flex",paddingTop:"5px",justifyContent:"flex-start"}}>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Chip  size="small" label={keyword[0]['value']} variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item style={{width:"20.5vw"}}>
                                    <Grid container direction="column">
                                        <Grid item style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px",marginTop:"8px",marginBottom:"5px"}}>
                                            Tags
                                        </Grid>
                                        <Grid item style={{paddingBottom:"10px"}}>
                                            <Grid container >
                                                {tags.map((number)=>
                                                        <Grid item>
                                                        <Chip style={{margin:"2px"}} size="small" label={number} variant="outlined" className={classes.chipborder}/>
                                                        </Grid>
                                                          
                                                    )}
                                                <Grid item>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                            {/* <div style={{display:"flex",width:"20.5vw",alignItems:"center"}}>
                                                <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                                                <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                    Tags
                                                </div>
                                                <div style={{display:"flex",paddingTop:"5px",justifyContent:"flex-start"}}>
                                                    {tags.map((number)=>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <Chip style={{margin:"2px"}} size="small" label={number} variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                          
                                                    )}
                                                  
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                </div>
                                        </div>
                                            
                                            
                                            </div> */}
                                </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={2} lg={2} >
                                <Grid container alignItems="center" justify="flex-start" >
                                <Grid item>
                                    <div style={{display:"flex",height:"140px"}}>
                                        <div style={{display:"flex",paddingLeft:"0px",alignItems:"center",justifyContent:"flex-start"}}>
                                        <Button variant="contained" color="primary" className={classes.Buttons} onClick={handleClickOpen}>
                                            View Details
                                        </Button>
                                        </div>

                                        
                                    </div>
                                    </Grid>
                                <Grid item>
                                    <Grid container alignItems="flex-start" style={{height:'140px'}}>
                                        <Grid item>
                                    <div>
                                        
                                        <Grid item xs={12} >
                                                    <LightTooltip title="Highlight alert">
                                                        <IconButton aria-label="settings" disabled={props.disabled}  onClick={controlhighlight} >
                                                            <GradeIcon style={{fontSize:'32px',color:star?"yellow":"gray"}}/>

                                                        </IconButton>   
                                                    </LightTooltip >
                                                
                                        </Grid>
                                        
                                        </div>
                                        </Grid>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                
                            

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} style={{display:click?"block":"none"}}>
                    <Grid container justify="flex-start" maxWidth="xl" >
                        <Card className={classes.f3}>
                            <Grid item md={12} lg={12}>
                                <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"4vh",minHeight:"40px",margin:"0.3vw",justifyContent:"center",alignItems:"center"}} >
                                <Card className={classes.f4}>
                                <Grid container alignItems="center" direction="row" >
                                    
                                    <div style={{padding:"10px"}}>
                                        About Data is displayed here
                                    </div>

                                    
                                </Grid>
                                </Card>
                                </div>
                            </Grid>
                                 
                        
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} style={{display:click?"block":"none"}}>
                    <Grid container justify="flex-start" maxWidth="xl" >
                        <Card className={classes.f31}>
                            <Grid item md={12} lg={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                    <div  >
                                    
                                    <Grid container alignItems="center" direction="row" style={{padding:theme.spacing(2)}} >
                                        
                                    <Grid item xs={11}>
                            <TextField
                              id="comments"
                              multiline
                              variant="outlined"
                              value={commentText}
                              onChange={(event) =>
                                setCommentText(event.target.value)
                              }
                            //   onBlur={handlecomment}
                              placeholder="Add notes here"
                              fullWidth
                            />
                          </Grid>
                          <Popup
                            event="add"
                            open={popOpen}
                            handleClose={handlePopClose}
                            modalTitle="Add a note"
                            handleContinue={() => adComment(commentText)}
                          />
                          <Grid item xs={1}>
                              <Grid container justify="center">
                                  <Grid item >
                            <div onClick={handlePopOpen}>
                                <img src={enter} style={{width:"50px",height:"60px",cursor: "pointer"}}/>
                              {/* () => adComment(commentText)}
                              <PlayArrowTwoToneIcon
                                color="primary"
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                  fontSize: "2rem",
                                }}
                              /> */}
                            </div>
                            </Grid>
                            </Grid>
                          </Grid>
                          <CommentList
                            comments={userComment}
                            onDeleteComment={deleteComment}
                            onFindComment={findComment}
                          />
                        </Grid>
                                    
                                    </div>
                                    </Grid>

                                </Grid>

                            </Grid>
                                 
                        
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            </Grid>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
                
            >
                
                <DialogTitle>
                                    <Grid container style={{minheight:"60px",marginTop:"-25px",marginLeft:"-24px"}} >
                                        <Grid items xs={11} >
                                            <Grid container direction="row">
                                            <Grid item xs={2} style={{backgroundColor:"white",height:"90px"}}>
                                                <Grid container direction="row">
                                                    <Grid item xs={10} style={{background:"#F5A623",height:"100px"}}>
                                                    <Grid container alignItems="center" justify="center">
                                                        <Grid item >
                                                            <Typography component="div" style={{marginTop:"45px",fontSize:"18px",color:"white"}}>
                                                                {nseverity}
                                                    
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                    </Grid>
                                                </Grid>
                                                
                                            
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1.5vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}}>
                                            Title
                                            </div>

                                            <div className={classes.bottom1} >
                                            {title}
                                            </div>

                                            </div>
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}} >
                                            Source
                                            </div>

                                            <div className={classes.bottom1} >
                                            {source}
                                            </div>

                                            </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Grid container justify="flex-end" alignItems="center" style={{height:"70px"}}>
                                                    <Grid item>
                                                    <LightTooltip title="Highlight alert">
                                                        <IconButton aria-label="settings" disabled={props.disabled}  onClick={controlhighlight} >
                                                            <GradeIcon style={{fontSize:'32px',color:star?"yellow":"gray"}}/>

                                                        </IconButton>   
                                                    </LightTooltip >

                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                            </Grid>
                                        
                                        </Grid>
                                        
                                        <Grid items xs={1} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                        
                                        <CloseIcon onClick={handleClose} />
                                        
                                            
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                </DialogTitle>                  
                <Divider/>
                <DialogContent >
                <div className={styles.main} >
            <div className={styles.detect} >
            <h2>Detect</h2>
            
            <div className={styles.date1} >
                <p> 
                    {date}</p>
            </div>

            </div>

            <div className={styles.alert} >
            <h2>Alert Created</h2>
            
            <div className={styles.date2} >
                <p>{alertcreated}</p>
            </div>
            </div>
        </div>

        <div className={styles.main4}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={6}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                    KeyWord
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                    <Chip size="small" className={classes.chip} label={keyword[0]['value']} variant="outlined"/>         
                                </Grid>
                            </Grid>
                </Grid>
                <Grid item xs={6}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                    Tags
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                    <Grid container>
                                    {tags.map((number)=>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                       <Chip size="small" className={classes.chip} label={number}variant="outlined"/>       
                                  
                                                        
                                                        </div>
                                                          
                                                    )}
                                    </Grid>

                                    {/* <Chip size="small" className={classes.chip} label="Tags" variant="outlined"/>       
                                    <Chip  size="small" className={classes.chip}   label="Tags" variant="outlined"/> 
                                    <Chip  size="small" className={classes.chip} label="Tags" variant="outlined"/>   
                                    <Chip  size="small" className={classes.chip}   label="Tags" variant="outlined"/>       */}
                                
                                </Grid>
                            </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>

        <div className={styles.main4} >
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                            <Grid item className={classes.tag} >
                                Notes
                            </Grid>
                            <Grid container alignItems="center" direction="row" style={{padding:theme.spacing(2)}} >
                                        
                                        <Grid item xs={11}>
                                <TextField
                                  id="comments"
                                  multiline
                                  variant="outlined"
                                  value={commentText}
                                  onChange={(event) =>
                                    setCommentText(event.target.value)
                                  }
                                //   onBlur={handlecomment}
                                  placeholder="Add notes here"
                                  fullWidth
                                />
                              </Grid>
                              <Popup
                                event="add"
                                open={popOpen}
                                handleClose={handlePopClose}
                                modalTitle="Add a note"
                                handleContinue={() => adComment(commentText)}
                              />
                              <Grid item xs={1}>
                                  <Grid container justify="center">
                                      <Grid item >
                                <div onClick={handlePopOpen}>
                                    <img src={enter} style={{width:"50px",height:"60px",cursor: "pointer"}}/>
                                  {/* () => adComment(commentText)}
                                  <PlayArrowTwoToneIcon
                                    color="primary"
                                    style={{
                                      width: "100%",
                                      cursor: "pointer",
                                      fontSize: "2rem",
                                    }}
                                  /> */}
                                </div>
                                </Grid>
                                </Grid>
                              </Grid>
                              <CommentList
                                comments={userComment}
                                onDeleteComment={deleteComment}
                                onFindComment={findComment}
                              />
                            </Grid>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>
        </div>

        <div className={styles.main3} >

            <div className={styles.data} >
                <h2>Data</h2>
            </div>

            <div className={styles.para} >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur temporibus tenetur placeat nulla explicabo dolorum reprehenderit sint sequi. Voluptatum rerum provident perferendis nulla eius beatae repellat pariatur tenetur aliquam, maxime magni quia dolore esse. Commodi laudantium earum, explicabo perspiciatis tempora alias quod reiciendis .
                <br/>
                <br/>
                Quidem ea dolore, cupiditate 
            </div>
        </div>


        <div className={styles.main4} >
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                            <Grid item className={classes.tag} >
                                Remedition Suggestion
                            </Grid>
                            <Grid item className={classes.fontp}style={{paddingTop:"4px"}}>
                                    {remediation}
                            </Grid>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>

        </div>



    
        </DialogContent>
        <DialogActions style={{marginRight:"15px",marginBottom:"20px"}}>
          <Button onClick={handleClose} color="primary" style={{border:"0.8px solid #000000",color:"black",padding:"12px",marginRight:"10px",fontSize:"15px"}}>
            Track Remedition
          </Button>
          <Button onClick={handle1} color="primary" variant="contained" style={{padding:"12px",fontSize:"15px"}} autoFocus>
            Analyst Support
          </Button>
        </DialogActions>
      </Dialog>
      <Analystsupportmodal open={open1} handle1={handle2} alertdata={props} />
        </div>
    )
}