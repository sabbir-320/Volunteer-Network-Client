import React from 'react'
export default function TitleInfo({ items }) {
    console.log(items);
    return (
        <div className="row">
            <div className="col-md-3">
                <img style={{width: "270px", height: "320"}} className="img-fluid" src={`data:image/png;base64,${items.image.img}`} />
            </div>
        </div>
    )
}