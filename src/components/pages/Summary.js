import React from 'react'
import { TextContainer } from '../common/TextContainer'

function Summary({ data }) {
    return (
        <TextContainer
            title={data?.title}
            description={data?.description}
        />
    )
}

export default Summary
