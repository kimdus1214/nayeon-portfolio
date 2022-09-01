import React from "react";

function Paging({name,page}){
    return(
        <div className="page-naming">
            <h2>
                <span className="color-point">{name}</span> <br/>
                {page}
            </h2>
            <p className="mt-20">Copyright 2022. nayeon all rights reserved.</p>
        </div>
    )
}

export default Paging;