import React from 'react'
import { TextContainer } from '../common/TextContainer'

function Tools({data}) {
  return (
    <div>
            <TextContainer
                title={data?.title}
                description={data?.description}
            />
        </div>
  )
}

export default Tools
