import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    it01: {
        fontSize: 'clamp(1.5rem, 0.9688rem + 0.8333vw, 1.75rem)', //24px-28px
        fontFamily: 'Itim'
    },
    it02: {
        fontSize: 'clamp(0.250rem , 5vw, 1rem)', //4px-16px
        fontFamily: 'Itim',
        fontWeight: 600
    },
    it03: {
        fontSize: 'clamp(0.250rem , 5vw, 0.875rem)', //4px-14px
        fontFamily: 'Itim'
    },
    it04: {
        fontSize: 'clamp(0.250rem , 5vw, 0.875rem)', //4px-14px
        fontFamily: 'Itim',
        fontWeight: 600
    }
})

const Typo = ({ children, varient, onClick, className }) => {
    const classes = useStyles()
    const varientData = {
        'it01': classes.it01,
        'it02': classes.it02,
        'it03': classes.it03,
        'it04': classes.it04,
    }
    return (
        <span
            onClick={onClick}
            className={`${varientData[varient]} ${className}`}
            dangerouslySetInnerHTML={{ __html: children  }}
        >
        </span>
    )
}

export default Typo