import React, { Component } from 'react';
import Slider from 'react-slick';

import { settingSlideProducs } from '../../constants/slides';
import { WatchedContext } from '../../contexts/ProductsWatched';
import Call from '../../utils/Call';
import * as Config from '../../constants/Config';

class ProductsBestSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsBestSale: []
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductBestSale', 'GET', headers).then(res => {
            debugger
            this.setState({
                productsBestSale: res.data
            })
        })
    }

    render() {
        const { productsBestSale } = this.state;
        return (
            <div className="ProductsBestSale">
                <div className="spacing">
                    <div className="_2Vb4g5 card promotion-combo">
                        <div className="_3hEEfi promotion-combo__header">
                            <div className="_1ahGUN promotion-combo__header-left">
                                <div className="_2ti2Ft promotion-combo__title">Sản phẩm bán chạy</div>
                            </div>
                        </div>
                        <Slider {...settingSlideProducs}>
                            {
                                productsBestSale.map((item, index) => {
                                    return (
                                        <div className="_3cyAdE" key={index}>
                                            <WatchedContext.Consumer>
                                                {({ addWatched }) =>
                                                    <a
                                                        className="tickid-item-card--link tickid-item-card-padding"
                                                        title={item.ProductName}
                                                        href={'product?id=' + item.ID}
                                                        onClick={() => addWatched(item)}
                                                    >
                                                        <div className="tickid-item-card tickid-item-card--full">
                                                            <div className="tickid-item-card__cover-img">
                                                                <div className="_3ZDC1p">
                                                                    <div
                                                                        className="tickid-item-card__cover-img-background _3XaILN"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url("+ Config.API_URL + item.Image  +")",
                                                                            backgroundSize: "contain",
                                                                            backgroundRepeat: "no-repeat"
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className>
                                                                <div className="tickid-item-card__text-name">
                                                                    {item.ProductName}
                                                                </div>
                                                                <div className="tickid-item-card__section-price">
                                                                    <div className="tickid-item-card__original-price">
                                                                        {item.Price}đ
                                                        </div>
                                                                    <div className="tickid-item-card__price-gap" />
                                                                    <div className="tickid-item-card__current-price tickid-item-card__current-price--free-shipping">
                                                                        {item.Promote}đ
                                                        </div>
                                                                    <div className="tickid-item-card__spacer" />
                                                                </div>
                                                                <div className="tickid-item-card__extra-badge-wrapper" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                }
                                            </WatchedContext.Consumer>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsBestSale;