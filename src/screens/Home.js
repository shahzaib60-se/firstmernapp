import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState('');
  const [productItem, setProductItem] = useState([]);
  const [productCat, setProductCat] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/productData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setProductItem(response[0]);
      setProductCat(response[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div class="carousel-caption" style={{zIndex:"10"}}> 
        <div class="d-flex justify-content-center">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
          {/* <button class="btn btn-outline-success text-white" type="submit">Search</button> */}
        </div>
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

      <div className="container">
        {
        
        productCat.length > 0 ? (
          productCat.map((data) => {
            return (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {productItem.length > 0 ? (
                  productItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.title.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card productItem={filterItems} />
                        </div>
                      );
                    })
                ) : (
                  <div>No Products Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Categories Found</div>
        )
        
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
