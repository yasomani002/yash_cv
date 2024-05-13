import React from 'react'
import { TextContainer } from '../common/TextContainer';

const Education = ({ data }) => {
    return (
        <TextContainer
            title={data?.title}
            description={data?.description}
        />
    )
}

export default Education