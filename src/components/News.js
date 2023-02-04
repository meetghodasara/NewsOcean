import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../components/News.css"
export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=089963b7961d49a38fab22bba3aa864f";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles : parseData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsOcean - Top Headings</h2>
        <div className="container custom">
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgURL={element.urlToImage}
                    newsURL={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
