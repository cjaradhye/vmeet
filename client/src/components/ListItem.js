import React from "react";


function ListItem(props){
    return(
        <a class="litem list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{props.heading}<br /></strong>
                </div>
                <div class="col-10 mb-1 small">{props.text}</div>
        </a>
    )
}

export default ListItem