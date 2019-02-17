import React from "react"


export default ({ image }) => {

    if (image) {
        const src = "/" + { image }
        return (
            <img src={src} className="absImage"></img>
        )
    } else {
        return (
            <img src="/body-512.png" className="absImage"></img>
        )
    }

}