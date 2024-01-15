import React, { useEffect } from 'react'
import { listenerFunction } from '../../../shared/listener'


export default function SearchBar () {


    useEffect(() => {
        console.log('SearchBar')
    }, [])

    return (
        <div id='inkeepSearchBar' />
    )
}
