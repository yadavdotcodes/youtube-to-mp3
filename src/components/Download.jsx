import React from 'react'

function Download(props) {
    return (
        <div className="full">
            <iframe title={`${props.url}`} src={`https://api.vevioz.com/@api/button/mp3/${props.url}`} className="download" scrolling="no"></iframe>
        </div>
    )
}

export default Download
