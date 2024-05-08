import * as React from "react";
import { useState } from "react";
import { API } from "./api";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`${API}/getProducts?search=${item}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   axios.get(url)
  // try{
  // } catch(error){
  // console.log('Error In fetching Product',error)
  // }
  // Arun Kumar
  // 12:24
  // try{(res)=>console.log(res.data)}

  // useEffect(() => {
  //   axios
  //     .get(`${API}/getProducts`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);

  return (
    <div>
      <div className="container">
        <div>
          <img
            className="amazon"
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
            alt="flipkar"
          />
        </div>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Search Amazon.in"
            onChange={(event) => setItem(event.target.value)}
          />
        </div>
        <button onClick={getProducts}>Search</button>
        <div>Signin</div>
        <div>
          <img
            className="cart"
            src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
            alt="cart"
          />{" "}
          Cart
        </div>
        <div> Return & orders</div>
      </div>
      <div className="container1">
        <div>Amazon mini TV</div>
        <div>Sell </div>
        <div>Gift Cards</div>
        <div>Mobiles</div>
        <div>Electronics</div>
        <div>Fashion</div>
        <div>Furniture</div>
        <div>Buy Again</div>
        <div>Amazon Basics</div>
        <div>Appliences</div>
        <div>Personal Care</div>
        <div>Beauty</div>
        <div>Two Wheelers</div>
      </div>
      <div className="products">
        {product.data &&
          product.data.map((pro) => {
            console.log(product);
            return (
              <div className="card">
                <div className="cards">
                  <img src={pro.imgUrl} alt="pic" className="pro-imag" />
                  <br />
                  <h5>${pro.productName}</h5>
                  <p>${pro.price}</p>
                  <p>${pro.productLink}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
