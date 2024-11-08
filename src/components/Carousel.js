import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div class="carousel-caption" style={{zIndex:"10"}}> 
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success text-white" type="submit">Search</button>
        </form>
        </div>
          <div className="carousel-item active">
            <img src="/images/image1.webp" className="d-block w-100 carousel-image" style={{filter:"brightness(30%)"}} alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/image2.webp" className="d-block w-100 carousel-image" style={{filter:"brightness(30%)"}} alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/image3.webp" className="d-block w-100 carousel-image" style={{filter:"brightness(30%)"}} alt="Third Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
