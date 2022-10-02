import React, { Component } from 'react';
import Slider from "react-slick";

import {settingSlideNews} from '../../constants/slides';
import Call from '../../utils/Call';
class News extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      news: []
    })
  }

  async componentDidMount() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Content-Type', 'application/json');
    await Call('api/getlistNews', 'GET', headers).then(res => {
      this.setState({
        news: res.data
      })
    })
  }

  render() {
    const { news } = this.state;
    return (
      <div className="News">
        <div className="spacing">
          <div className="news-slider">
            <div className="news-slider__wrapper">
              <div className="news-slider__inner">
                <div className="news-slider__header">
                  <div className="news-slider__title">Tin tức</div>
                </div>
                <Slider {...settingSlideNews}>
                  {
                    news.map((item, index) => {
                      return (
                        <div className="item_slide_news" key={index}>
                          <div className="item_img">
                            <a href="details-post.html">
                              <img src="https://img.abaha.vn/photos/resized/300x200/83-1595936336-myphamohui-lgvina.png" alt />
                            </a>
                          </div>
                          <div className="item_content">
                          <span>{item.Title}</span>
                            <p>{item.Content}</p>
                          </div>
                          <a href="details-post.html" className="view-details">Chi tiết</a>
                        </div>
                      );
                    })
                  }
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;