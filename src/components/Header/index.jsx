import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

import header_bg from '../../assets/hero-bg.jpg'

const useStyles = makeStyles((theme) => ({
    header_container: {
        width: '100%',
        height: '100%',
        minHeight: '786px',
        backgroundColor: 'transparent',
        position: 'relative',
        backgroundImage: `url(${header_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        '& > div': {
            display: 'block'
        }
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.6',
        backgroundColor: '#000000',
    },
    shadowOverlay:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.4',
        background:'-moz-linear-gradient(top,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        background: '-webkit-linear-gradient(top,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        background: 'linear-gradient(to bottom,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        filter: "progid: DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#cc000000', GradientType=0)",
    }

}))

export default function Header() {
    const classes = useStyles();
    
    return (
        <div className={classes.header_container}>
            <div className={classes.overlay}></div>
            <div class={classes.shadowOverlay}></div>
            <div class="home-content">

                <div class="row home-content__main">

                    <h3>Welcome to Glint -- A VN-EN website about literary</h3>

                    <h1>
                        We are a literary group <br/>
                        of people who find <br/>
                        interesting infomations <br/>
                        and amazing things.
                    </h1>

                    <div class="home-content__buttons">
                        <a href="#contact" class="smoothscroll btn btn--stroke">
                            Any question ?
                        </a>
                        <a href="index.html#about" class="smoothscroll btn btn--stroke">
                            More About Us
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
