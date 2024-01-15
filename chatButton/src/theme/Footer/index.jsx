import React, { useEffect } from "react"
import Footer from '@docusaurus/theme-classic/lib/theme/Footer'
import { listenerFunction } from "../../../../shared/listener"


export default function FooterWrapper () {


    useEffect(() => {
        console.log('ChatButton')
    }, [])

    return (
        <>
            <div id='inkeepChatButton' />
            <Footer />
        </>
    )
}