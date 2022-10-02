import React, { Component } from 'react';
import Slider from 'react-slick';
import { settingSlide } from '../../constants/slides';

import Call from '../../utils/Call';
import * as Config from '../../constants/Config';

class SlideMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Menus: []
        }
    }
    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListSlide', 'GET', headers).then(res => {
            this.setState({
                Menus: res.data
            })
        })
    }

    render() {
        const { Menus } = this.state;
        return (
            <div className="hero__banner hero__banner--columns">
                <div className="hero__banner-inner">
                    
                    <div className="hero__banner-carousel">
                    <Slider {...settingSlide}>
                        {
                            Menus.map((item, index) => {
                                return (
                                    <a
                                        href="/tin-tuc/da-dau-co-can-duong-am"
                                        className="hero__banner-carousel-item"
                                    >
                                        <figure className="figure">
                                            <img
                                                src={ Config.API_URL + item.Image}
                                                alt
                                            />
                                        </figure>
                                    </a>
                                );
                            })
                        }
                    </Slider>
                    </div>
                    <div className="hero__banner-fixed">
                        <div className="hero__banner-fixed-primary">
                            <a
                                href="/tin-tuc/tang-ngay-combo-5-goi-mat-na-thai-doc-sum37"
                                className="link"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/850x500/83-1595935028-myphamohui-lgvina.png"
                                        alt
                                    />
                                </figure>
                            </a>
                        </div>
                        <div className="hero__banner-fixed-secondary">
                            <a
                                href="/tin-tuc/mini-game-choi-ngay-rinh-qua-lien-tay"
                                className="link"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/850x500/83-1589349012-myphamohui-lgvina.png"
                                        alt
                                    />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SlideMain;