import React, { Component } from 'react';
import Slider from 'react-slick';
import * as Config from '../../constants/Config';

import { settingSlideProducs } from '../../constants/slides';
import Call from '../../utils/Call';
class ProductsRecommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsRecommend: []
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductRecommend?productID=10', 'GET', headers).then(res => {
            this.setState({
                productsRecommend: res.data
            })
        })
    }

    

    render() {
        const { productsRecommend } = this.state;
        return (
            <div className="_2Vb4g5 card promotion-combo">
                <div className="_3hEEfi promotion-combo__header">
                    <div className="_1ahGUN promotion-combo__header-left">
                        <div className="_2ti2Ft promotion-combo__title">Sản phẩm liên quan</div>
                    </div>
                    <div className="promotion-combo__header-right">
                        <a className="center _2NUz9G" href="/danh-muc/set-whoo-mini">Xem tất cả<svg className="tickid-svg-icon icon-arrow-right" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg></a>
                    </div>
                </div>
                <Slider {...settingSlideProducs}>
                    {
                        productsRecommend.map((item, index) => {
                            return (
                                <div className="_3cyAdE">
                                    <a className="tickid-item-card--link tickid-item-card-padding" href={'/product?id=' + item.ID} title={item.ProductName}>
                                        <div className="tickid-item-card tickid-item-card--full">
                                            <div className="tickid-item-card__cover-img">
                                                <div className="_3ZDC1p">
                                                    <div className="tickid-item-card__cover-img-background _3XaILN" style={{ backgroundImage: 'url('+Config.API_URL + item.Image+')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                                                </div>
                                            </div>
                                            <div className>
                                                <div className="tickid-item-card__text-name">{item.ProductName}</div>
                                                <div className="tickid-item-card__section-price">
                                                    <div className="tickid-item-card__original-price">{item.Price}đ</div>
                                                    <div className="tickid-item-card__price-gap" />
                                                    <div className="tickid-item-card__current-price tickid-item-card__current-price--free-shipping">{item.Promote}đ</div>
                                                    <div className="tickid-item-card__spacer" />
                                                </div>
                                                <div className="tickid-item-card__extra-badge-wrapper" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }
}
export default ProductsRecommend;