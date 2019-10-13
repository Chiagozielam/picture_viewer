import React, { Component } from "react";
import imageArr from "../imgArray";
import { Link } from "react-router-dom";
import "./style.css"

export default class index extends Component {
  render() {
    return (
      <div className = "index-container">
        <h1 id= "index-title">We Talk Photography!!</h1>
        <div className="row container">
          {imageArr.map(({ name, photographer, image }) => (
            <div className="col-sm-10 col-md-3 col-lg-4">
              <div className="card " style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p>
                    <b>Photographer: </b>
                    {photographer}
                  </p>
                  <Link to={`/image/${name}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
