import React, { Component } from 'react';
import qs from 'query-string';
import axios from 'axios';
import cookie from 'js-cookie';

import Call from '../../utils/Call';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            header: {},
            cards: []
        })
        this.removeCard = this.removeCard.bind(this);
    }

    async componentDidMount() {
        axios.post('http://localhost:51466/token',
            qs.stringify({
                    username: 'DinhHung', //gave the values directly for testing
                    password: '123',
                    grant_type: 'password'
            }), {
              headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).then(function(response) {
                cookie.set("jwt_access_token", response.data.access_token, { expires: 30, signed: true });
            });
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + cookie.get('jwt_access_token')
        }
        this.setState({
            headers: headers
        })

        await Call('api/cards', 'GET', headers).then(res => {
            this.setState({
                cards: res.data
            })
        })
    }

    async removeCard(id) {
        const { headers } = this.state;
        await Call('api/removeToCard?id=' + id, 'GET', headers).then(res => {
            if (res.code === 1) {
                Call('api/cards', 'GET', headers).then(res => {
                    this.setState({
                        cards: res.data
                    })
                })
                alert(res.messages);
            } else {
                alert(res.messages);
            }
        }).catch(err => alert(err));
    }

    render() {
        const { cards } = this.state;
        return (
            <div className="Cards">
                <div role="main" className="cart-page__content cart-page__content--opc js-cart-page-content">
                    <div className="cart-page-product-header">
                        <div className="cart-item__cell-checkbox cart-page-shop-header__checkbox-wrapper">
                            <label className="stardust-checkbox stardust-checkbox--checked">
                                <input className="stardust-checkbox__input js-check-all" type="checkbox" defaultChecked />
                                <div className="stardust-checkbox__box" />
                            </label>
                        </div>
                        <div className="cart-page-product-header__product">Sản phẩm</div>
                        <div className="cart-page-product-header__unit-price">Đơn giá</div>
                        <div className="cart-page-product-header__quantity">Số lượng</div>
                        <div className="cart-page-product-header__total-price">Số tiền</div>
                        <div className="cart-page-product-header__action">Thao tác</div>
                    </div>
                    <div className="cart-page-shop-section">
                        <div className="cart-page-shop-section__items">
                            {
                                cards.map((item, index) => {
                                    return (
                                        <div className="cart-item js-product-cart" data-product={item.ID} model key={item.ID}>
                                            <div className="cart-item__content">
                                                <div className="cart-item__cell-overview">
                                                    <a className="cart-item-overview__thumbnail-wrapper" title={item.ProductName}>
                                                        <div className="cart-item-overview__thumbnail" alt="cart_thumbnail" style={{ backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/73-1574413855-myohui.png)' }}>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="cart-item__flex">
                                                    <div className="cart-item-overview__product-name-wrapper">
                                                        <a className="cart-item-overview__name" title={item.ProductName}>
                                                            {item.ProductName}
                                                        </a>
                                                    </div>
                                                    <div className="cart-item-overview__price">
                                                        <div className="cart-item__cell-unit-price">
                                                            <span className="cart-item__unit-price cart-item__unit-price--after js-cart-item-unit-price">{item.Price}đ</span>
                                                        </div>
                                                        <div className="cart-item__cell-quantity">
                                                            <div className="_19lAw4 tickid-input-quantity js-plus-minus" min={1} max={999}>
                                                                <button className="btn btn-quantity _1zT8xu js-minus">
                                                                    <svg className="tickid-svg-icon" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                                                                        </polygon>
                                                                    </svg>
                                                                </button>
                                                                <input className="_1zT8xu _18Y8Ul js-current js-input-update-cart" type="number" defaultValue={item.Count} />
                                                                <button className="btn btn-quantity _1zT8xu js-plus">
                                                                    <svg className="tickid-svg-icon icon-plus-sign" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                                                        </polygon>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__cell-total-price js-cart-item-total-price">
                                                            {item.TotalPrice}đ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__cell-actions">
                                                    <button className="cart-item__action js-remove-cart" onClick={() => this.removeCard(item.ID)}>Xóa</button>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="cart-page-footer js-cart-page-footer">
                    <div className="cart-page-footer__voucher js-cart-page-footer-voucher">
                        <p className="cart-page-footer__voucher-item">
                            <span className="cart-page-footer__voucher-item-title">Phí Ship : </span>
                            <span className="cart-page-footer__voucher-item-value">Chưa tính</span>
                        </p>
                    </div>
                    <div className="_3GKP7a cart-page-footer__row2" />
                    <div className="_3GKP7a cart-page-footer__row4" />
                    <div className="cart-page-footer__row _1a6khS cart-page-footer__row5">
                        <div className="cart-item__cell-checkbox cart-page-shop-header__checkbox-wrapper">
                            <label className="stardust-checkbox stardust-checkbox--checked">
                                <input className="stardust-checkbox__input js-check-all" type="checkbox" defaultChecked />
                                <div className="stardust-checkbox__box" />
                            </label>
                        </div>
                        <div className="cart-page-footer__summary">
                            <div className="cart-page-footer__first-summary">
                                <div className="cart-page-footer-summary__subtotal">
                                    <div className="cart-page-footer-summary__subtotal-text">Tổng tiền hàng
                                            (<span className="js-cart-page-footer-total-product">{cards.length} sản phẩm</span>)
                                        </div>
                                    <div className="cart-page-footer-summary__subtotal-amount js-cart-page-footer-total-price">
                                        {
                                            cards.reduce((sum, item) => {
                                                return sum += item.TotalPrice
                                            }, 0)
                                        }đ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-page-footer__checkout">
                            <button className="tickid-button-solid tickid-button-solid--primary js-submit-cart"><span className="cart-page-footer__checkout-text">Mua hàng</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;