import React from 'react'

import PostView from '../../components/PostView'

export default function BlogContentDisplay(props) {
    const {state}  = props.location
    console.log(state)
    return (
        <>
            <PostView state={state}></PostView>  
        </>
    )
}
