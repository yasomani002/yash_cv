import React, { Fragment } from 'react'
import Typo from './Typo'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: 'auto'
    },
    divider: {
        backgroundColor: '#000000',
        height: '1px',
        width: '100%',
        margin: '8px 0'
    },
    roleDetialsContainer: {
        margin: '15px 0'
    },
    aFontStyle: {
        fontSize: 'clamp(0.250rem , 5vw, 0.875rem)', //4px-14px
        fontFamily: 'Itim'
    }
})
export const TextContainer = ({ title, description, roleDetails, asLink, isBold }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Typo varient="it02">{title}</Typo>
                <div className={classes.divider}></div>
                {description?.map((data, index) => {
                    return (
                        <Fragment key={index}>
                            <Typo varient="it03">
                                {data}
                                <br />
                            </Typo>
                        </Fragment>
                    )
                })}
                {roleDetails?.map((data, index) => {
                    return (
                        <div key={index} className={classes.roleDetialsContainer}>
                            {data?.role &&
                                <>
                                    {isBold ?
                                        <Typo varient="it04">{data?.role}</Typo>
                                        :
                                        <Typo varient="it03">{data?.role}</Typo>
                                    }
                                    <br />
                                </>
                            }
                            {asLink ?
                                <a
                                    href={data?.roleDescription}
                                    target='_blank'
                                    className={classes.aFontStyle}
                                >
                                    {data?.roleDescription}
                                </a>
                                :
                                <Typo varient="it03">{data?.roleDescription}</Typo>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}
