import React from "react";

function Row(){


    const imgstyle = {width: '100%'}
    const mystyle = {width: '80%', height: "300px", borderRadius: "21px 21px 0 0"}

    return(
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./pic1.png" class="d-block w-100" height="100%" />
          </div>
          <div class="carousel-item">
            <img src="./pic2.png" class="d-block w-100" height="100%" />
          </div>
          <div class="carousel-item">
            <img src="./pic3.png" class="d-block w-100" height="100%" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      )
}


export default Row;