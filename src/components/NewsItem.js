import React, { Component } from "react";

export class NewsItem extends Component {
    
  constructor(){
    super();
  }  
  
  
  
  
  render() {
    let { title, description  , imgURL , newsURL} = this.props;
    return (
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={imgURL}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} className="btn btn-primary">
              Read full Article
            </a>
          </div>
        </div>
    );
  }
}

export default NewsItem;
