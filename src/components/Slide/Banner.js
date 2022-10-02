import React, { Component } from 'react';

import Call from '../../utils/Call';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            banners: []
        })
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductSale', 'GET', headers).then(res => {
            this.setState({
                productsSale: res.data
            })
        })
    }

    render() {
        const {banners} = this.state;
        return (
            <div className="middle-banner">
                <div className="middle-banner__wrapper">
                    <div className="middle-banner__inner">
                        <div className="middle-banner__list js-middle-banner">
                            <a
                                href="/tin-tuc/chuong-trinh-khuyen-mai-chao-thang"
                                className="middle-banner__item"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/600x200/83-1589959200-myphamohui-lgvina.png"
                                        alt
                                    />
                                </figure>
                            </a>
                            <a
                                href="/tin-tuc/mini-game-choi-ngay-rinh-qua-lien-tay"
                                className="middle-banner__item"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/600x200/83-1589890586-myphamohui-lgvina.png"
                                        alt
                                    />
                                </figure>
                            </a>
                            <a
                                href="/tin-tuc/mini-game-choi-ngay-rinh-qua-lien-tay"
                                className="middle-banner__item"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/600x200/83-1589890140-myphamohui-lgvina.png"
                                        alt
                                    />
                                </figure>
                            </a>
                            <a
                                href="/tin-tuc/mini-game-choi-ngay-rinh-qua-lien-tay"
                                className="middle-banner__item"
                            >
                                <figure className="figure">
                                    <img
                                        src="https://img.abaha.vn/photos/resized/600x200/83-1589892521-myphamohui-lgvina.png"
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
export default Banner;