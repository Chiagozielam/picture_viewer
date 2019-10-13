import React, { Component } from "react";
import imageArr from "../imgArray";
import { Link } from "react-router-dom";

class ImageDetail extends Component {
  state = {
    details: {}
  };

  componentDidMount() {
    const name = this.props.match.params.name;
    const detail = imageArr.find(obj => obj.name === name);
    this.setState({ details: detail });
  }
  render() {
    return (
      <div>
        <div className="row mt-5 ml-3">
          <div className="col-sm-10 col-md-4 col-lg-4">
            <img src={this.state.details.image} width="100%" alt="" />
          </div>
          <div className="col-sm-10 col-md-4 col-lg-5">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2>{this.state.details.name}</h2>
                </div>
                <div className="card-title">
                  <h5>
                    Photographer: <b>{this.state.details.photographer}</b>
                  </h5>
                </div>
                <p>{this.state.details.description}</p>
                <Link className="btn btn-primary" to="/">
                  Go Back To Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageDetail;
