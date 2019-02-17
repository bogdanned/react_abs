import React from "react"


export default ({ image }) => {

    if (image) {
        const src = "/questions/" +  image
        return (
            <img src={src} className="absImage"></img>
        )
    } else {
        return (
            <img src="/questions/generalised.png" className="absImage"></img>
        )
    }

}