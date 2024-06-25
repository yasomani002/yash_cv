import React from 'react'
import { makeStyles } from '@mui/styles'
import Typo from '../common/Typo'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '0.5rem'
    }

})
const Title = () => {
    const classes = useStyles()
    return (

        <div className={classes.container} >
            <Typo varient="it01">
                Yash Somani
            </Typo>
            <Typo varient="it03">
                ( Front End Developer )
            </Typo>
        </div>

    )
}

export default Title