import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Title from './Title'
import Education from './Education'
import { ProfessionalCareer } from './ProfessionalCareer'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Achievements } from './Achievements'
import Hobbies from './Hobbies'
import Contact from './Contact'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        height: 'auto',
        maxWidth: '692px',
        width: '595px',
        backgroundColor: '#BCCCF8',
        display: 'grid',
        padding: '1rem',
        boxSizing: 'border-box',
        borderRadius: '0.5rem'
    },
    textContainer: {
        margin: '20px 0'
    },
    panel: {
        display: 'grid',
        padding: '10px',
        rowGap: '1rem'
    },
    topTitleContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '1rem',
        margin: '0 0 1rem 0'
    },
    '@media (max-width: 800px)': {
        body: {
            display: 'grid',
            gridTemplateColumns: '1fr'
        },
    }
})
const RootContainer = props => {
    const classes = useStyles()
    const [error, setError] = useState()
    const [leftResponse, setLeftResponse] = useState()
    useEffect(() => {
        axios.get("https://65b3f716770d43aba47ac437.mockapi.io/portfolio/getData")
            .then((response) => setLeftResponse(response?.data))
            .catch((error) => setError(error))
    }, [])
    return (
        <>
            <div className={classes.root}>
                <div className={classes.body}>
                    {/* left pannel  */}
                    <div className={classes?.panel}>
                        {leftResponse?.map((data, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className={classes.topTitleContainer}>
                                        <Title />
                                        <Contact />
                                    </div>
                                    <Education data={data?.education} />
                                    <Skills data={data?.skills} />
                                    <ProfessionalCareer data={data?.professionalCareer} />
                                    <Projects data={data?.projects} />
                                    <Hobbies data={data?.hobbies} />
                                    <Achievements data={data?.achievements} />
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RootContainer