import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import uuid from "uuid";

import test_bg from '../../assets/hero-bg.jpg'

const useStyles = makeStyles((theme) => ({
    post_container: {
        padding: theme.spacing(0,4),
        paddingBottom: theme.spacing(8),
        display:'flex',
        justifyContent: 'center',
        backgroundColor: '#F5F6F6',
        maxWidth:'inherit',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0,0),
            paddingBottom: theme.spacing(8)
        },
    },
    body: {
        display:'flex',
        flexDirection: 'column',
        maxWidth: '1200px',
        '& > img': {
            marginBottom: theme.spacing(4)
        },
        '& > h1':{
            marginBottom: theme.spacing(4)
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            '& > img': {
                marginBottom: theme.spacing(4)
            },
            '& > h1,h2':{
                marginBottom: theme.spacing(4),
                padding: theme.spacing(0,8),
                fontSize: '16px'
            },
            '& > h1':{
                fontSize: '24px'
            }
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            '& > img': {
                marginBottom: theme.spacing(4)
            },
            '& > h1,h2':{
                marginBottom: theme.spacing(4),
                padding: theme.spacing(0,2),
                fontSize: '16px'
            },
            '& > h1':{
                fontSize: '24px'
            }
        },
    }
}))



export default function PostView(props) {
    const classes = useStyles()
    const state = props.state
    console.log(state)
    const string = state.post_content
    const datas = string.split("\n")
    return (
        <Container className={classes.post_container}>
            <div className={classes.body}>
                <img src={state.image_src} alt = 'post_image' />
                <Typography variant='h1' style={{ textAlign: 'center', fontWeight:'bold', }}>
                    {state.heading}
                </Typography>
                {datas.map((item)=>{
                    return (
                        <Typography variant='h2' style={{ color:'rgba(0, 0, 0, 0.6)',fontFamily:"Roboto, sans-serif", fontWeight:'normal', fontSize:'24px',wordƯrap: 'break-word'}} key={uuid.v4()}>
                            {item}
                        </Typography>
                    )
                })}
            
            </div>
            
            
        </Container>
    )
}
