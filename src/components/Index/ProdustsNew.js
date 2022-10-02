import React, { Component } from 'react';
import Slider from 'react-slick';

import { settingSlideProducs } from '../../constants/slides';
import Call from '../../utils/Call';
import { WatchedContext } from '../../contexts/ProductsWatched';
import DetailProduct from '../../pages/Product/DetailProduct';
import * as Config from '../../constants/Config';

class ProductsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsNew: []
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductNew', 'GET', headers).then(res => {
            this.setState({
                productsNew: res.data
            })
        })
    }

    render() {
        const { productsNew } = this.state;

        return (
            <div className="ProductsNew">
                <div className="spacing">
                    <div className="_2Vb4g5 card promotion-combo">
                        <div className="_3hEEfi promotion-combo__header">
                            <div className="_1ahGUN promotion-combo__header-left">
                                <div className="_2ti2Ft promotion-combo__title">Sản phẩm mới</div>
                            </div>
                        </div>
                        <Slider {...settingSlideProducs}>
                            {
                                productsNew.map((item, index) => {
                                    return (
                                        <div className="_3cyAdE" key={index}>
                                            <WatchedContext.Consumer>
                                                {({ addWatched }) =>
                                                    <a
                                                        className="tickid-item-card--link tickid-item-card-padding"
                                                        title={item.ProductName}
                                                        href={'/product?id=' + item.ID}
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
                                                                    {item.ProductName}đ
                                                            </div>
                                                                <div className="tickid-item-card__section-price">
                                                                    <div className="tickid-item-card__original-price">
                                                                        {item.Price}
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

export default ProductsNew;