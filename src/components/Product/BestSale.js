import React, { Component } from 'react';

import * as Config from '../../constants/Config';

import Call from '../../utils/Call';
class BestSale extends Component {
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
            this.setState({
                productsBestSale: res.data
            })
        })
    }

    render() {
        const { productsBestSale } = this.state;
        return (
            <div className="page-product__content--right">
                <div className="product-shop-hot-sales page-product__hot-sales">
                    <div className="product-shop-hot-sales__header">Sản phẩm bán chạy</div>
                    {
                        productsBestSale.map((item, index) => {
                            return (
                                <a className="item-card-special__link product-shop-hot-sales__item" href={'/product?id=' + item.ID} key={index}>
                                    <div className="item-card-special">
                                        <div className="item-card-special__img">
                                            <div className="lazy-image__container item-card-special__img-background">
                                                <div className="lazy-image__image" style={{ backgroundImage: 'url('+Config.API_URL + item.Image+')' }} />
                                            </div>
                                        </div>
                                        <div className="item-card-special__lower-padding">
                                            <div className="item-card-special__name item-card-special__name--special">{item.ProductName}</div>
                                            <div className="item-card-special__section-price item-card-special__section-price--special">
                                                <div className="item-card-special__current-price item-card-special__current-price--special">{item.Promote}đ</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default BestSale;