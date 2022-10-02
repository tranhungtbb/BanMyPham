import React, { Component } from 'react';


import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import Footer from '../../components/Footer/Footer';

import { CartContext } from '../../contexts/Cart';
import * as Config from '../../constants/Config';



class Card extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <CartContext.Consumer>
                {
                    ({ count })=>{
                        if(count == false) {
                            return (
                                <div className="Card">
                                    <div id="main" className="module--tickid">
                                        <div>
                                            <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                                            <div className="tickid-page-wrapper">
                                                <MenuTop />
                                                <SearchTop />
                                                <div className="main">
                                                    <div className="main-content">
                                                        <div className="cart-empty-page">
                                                            <div className="container">
                                                                <div className="cart-empty-page__content">
                                                                    <figure className="cart-empty-page__content-image">
                                                                        <img src="assets/images/no-cart.png" />
                                                                    </figure>
                                                                    <p className="cart-empty-page__content-text">Giỏ hàng của bạn còn trống.</p>
                                                                    <a href="/" className="btn btn-solid-primary btn--l btn--inline">Mua ngay</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Footer />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div className="Card">
                                    <div id="main" className="module--tickid">
                                        <div>
                                            <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                                            <div className="tickid-page-wrapper">
                                                <MenuTop />
                                                <SearchTop />
                                                <div className="main">
                                                    <div className="main-content">
                                                        <div className="cart-page cart-page--opc js-cart-page">
                                                            <div className="container">
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
                                                                            <CartContext.Consumer>
                                                                                {
                                                                                    ({ cartItems, removeToCart, updateToCart }) => cartItems.map((item, index) => {
                                                                                        return (
                                                                                            <div className="cart-item js-product-cart" data-product={item.ID} model key={item.ID}>
                                                                                                <div className="cart-item__content">
                                                                                                    <div className="cart-item__cell-overview">
                                                                                                        <a className="cart-item-overview__thumbnail-wrapper" title={item.ProductName}>
                                                                                                            <div className="cart-item-overview__thumbnail" alt="cart_thumbnail" style={{ backgroundImage: 'url('+Config.API_URL + item.Image+')' }}>
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
                                                                                                                    <button className="btn btn-quantity _1zT8xu"
                                                                                                                        onClick={() => updateToCart(item.ProductID, -1)}
                                                                                                                    >
                                                                                                                        <svg className="tickid-svg-icon" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                                                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                                                                                                                            </polygon>
                                                                                                                        </svg>
                                                                                                                    </button>
                                                                                                                    <input className="_1zT8xu _18Y8Ul" type="text" value={item.Count} />
                                                                                                                    <button className="btn btn-quantity _1zT8xu"
                                                                                                                        onClick={() => updateToCart(item.ProductID, 1)}
                                                                                                                    >
                                                                                                                        <svg className="tickid-svg-icon icon-plus-sign" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                                                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                                                                                                            </polygon>
                                                                                                                        </svg>
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="cart-item__cell-total-price js-cart-item-total-price">
                                                                                                                {item.TotalPriceString}đ
                                                                                                                </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="cart-item__cell-actions">
                                                                                                        <button
                                                                                                            className="cart-item__action js-remove-cart"
                                                                                                            onClick={() => removeToCart(item.ProductID)}
                                                                                                        >
                                                                                                            Xóa
                                                                                                                </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        );
                                                                                    })
                                                                                }
                                                                            </CartContext.Consumer>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cart-page-footer js-cart-page-footer">
                                                                    <div className="gF2I4C cart-page-footer__row1">
                                                                        <img src="assets/images/coupon.png" className="tickid-svg-icon _1l1HhY" />
                                                                        <div className="KYuIQC">Mã giảm giá</div>
                                                                        <span className="KYuIQC js-modal-open cart-page-footer__row1-text" target="modal-login">Không có mã giảm giá nào</span>
                                                                    </div>
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
                                                                                                (<span className="js-cart-page-footer-total-product">
                                                                                            <CartContext.Consumer>
                                                                                                {
                                                                                                    ({ cartItems }) => cartItems.length
                                                                                                }
                                                                                            </CartContext.Consumer>
                                                                                                    sản phẩm</span>)
                                                                                            </div>
                                                                                    <div className="cart-page-footer-summary__subtotal-amount js-cart-page-footer-total-price">
                                                                                        <CartContext>
                                                                                            {
                                                                                                ({ cartItems }) => cartItems.reduce((sum, item) => {
                                                                                                    return sum += item.TotalPrice
                                                                                                }, 0)
                                                                                            }
                                                                                        </CartContext>đ
                                                                                            </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cart-page-footer__checkout">
                                                                            <a className="tickid-button-solid tickid-button-solid--primary js-submit-cart" href="/payment"><span className="cart-page-footer__checkout-text">Mua hàng</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Footer />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                }
            </CartContext.Consumer>

        )

    }
}
export default Card;