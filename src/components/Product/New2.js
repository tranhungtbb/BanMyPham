import {react, useState, useEffect} from 'react';
import Slider from "react-slick";
import {settingSlideNews} from '../../constants/slides';
import Call from '../../utils/Call';

export default function New() {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        async function getData(){
            var dataX = [];
            let headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Content-Type', 'application/json');
            await Call('api/getListProductNew', 'GET', headers).then(res => {
                dataX = res.data;
            })
            console.log(dataX);
            setNews(dataX);
        }
        getData();
    }, [])
    
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
                                <img src={item.Image} alt />
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