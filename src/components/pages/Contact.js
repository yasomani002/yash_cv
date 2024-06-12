import { makeStyles } from '@mui/styles'
import React from 'react'
import Typo from '../common/Typo'

const useStyles = makeStyles({
    container: {
        height: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    linkText:{
        textDecoration: 'none'
    }

})
const Contact = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} >
            <Typo varient="it03">
                Ahmedabad
                <br />
                (+91) 799 00 80 974
                <br />
                yasomani002@gmail.com
                <br />
                <a className={classes.linkText} href='https://www.linkedin.com/in/yash-somani-002/' target='_blank'>www.linkedin.com/yash-somani-002/</a>
            </Typo>
        </div>

    )
}

export default Contact