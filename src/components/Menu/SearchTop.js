import React, { Component } from 'react';

import Call from '../../utils/Call';
import { CartContext } from '../../contexts/Cart';
import * as Config from '../../constants/Config';

class SearchTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {}
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getDetailCompany', 'GET', headers).then(res => {
            this.setState({
                company: res.data
            })
        })
    }
    render() {
        const { company } = this.state;
        return (
            <div className="container-wrapper header-with-search-wrapper">
                <div className="container header-with-search">
                    <ul className="header__navbar header__navbar--mobile header__navbar--left">
                        <li className="header__navbar-link">
                            <a
                                href="#"
                                className="icon-search js-toggle-header-menu"
                                data-target="header-menu-categories"
                            >
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    width="32px"
                                    height="32px"
                                    className="tickid-svg-icon"
                                >
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20 C512,404.954,503.046,396,492,396z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li className="header__navbar-link header__navbar-link--search">
                            <a
                                href="#"
                                className="icon-search js-toggle-header-search"
                                data-target="header-search"
                            >
                                <svg
                                    className="tickid-svg-icon"
                                    height={20}
                                    viewBox="0 0 20 20"
                                    width={20}
                                >
                                    <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                                        <g transform="translate(-1016 -32)">
                                            <g>
                                                <g transform="translate(405 21)">
                                                    <g transform="translate(611 11)">
                                                        <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                                        <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <a className="header-with-search__logo-section" href="/">
                        <img
                            src="https://img.abaha.vn/photos/resized/320x/83-1574737287-myphamohui-lgvina.png"
                            alt="logo"
                        />
                    </a>
                    <div className="header-with-search__search-section hidden-xs">
                        <div className="tickid-searchbar js-searchbar">
                            <div className="tickid-searchbar__main">
                                <form
                                    role="search"
                                    className="tickid-searchbar-input"
                                    autoComplete="on"
                                    action="/search"
                                    method="GET"
                                >
                                    <input
                                        aria-label="Tìm kiếm sản phẩm"
                                        className="tickid-searchbar-input__input js-searchbar-input"
                                        maxLength={128}
                                        placeholder="Tìm kiếm..."
                                        autoComplete="on"
                                        name="key"
                                    />
                                </form>
                                <div className="tickid-searchbar-selector js-searchbar-selector">
                                    <div className="tickid-drawer js-select">
                                        <div className="tickid-searchbar-selector__selected js-current">
                                            <div className="tickid-searchbar-selector__selected-label js-current-label">
                                                Cửa hàng
                                            </div>
                                            <svg
                                                className="tickid-svg-icon icon-arrow-down"
                                                enableBackground="new 0 0 11 11"
                                                viewBox="0 0 11 11"
                                                x={0}
                                                y={0}
                                            >
                                                <g>
                                                    <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="tickid-drawer__contents" style={{ right: 0 }}>
                                            <div className="tickid-searchbar-selector__options js-options">
                                                <div className="tickid-searchbar-selector__option js-option active">
                                                    <div className="tickid-searchbar-selector__option-label js-option-label">
                                                        Cửa hàng
                                                    </div>
                                                    <svg
                                                        className="tickid-svg-icon tickid-searchbar-selector__option-tick icon-tick"
                                                        enableBackground="new 0 0 15 15"
                                                        viewBox="0 0 15 15"
                                                        x={0}
                                                        y={0}
                                                    >
                                                        <g>
                                                            <path d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-solid-primary btn--s btn--inline js-submit-search-bar"
                            >
                                <svg
                                    className="tickid-svg-icon "
                                    height={19}
                                    viewBox="0 0 19 19"
                                    width={19}
                                >
                                    <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                                        <g transform="translate(-1016 -32)">
                                            <g>
                                                <g transform="translate(405 21)">
                                                    <g transform="translate(611 11)">
                                                        <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                                        <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="header-with-search__cart-wrapper">
                        <div className="tickid-drawer js-header-cart">
                            <div className="cart-drawer-container">
                                <div className="cart-drawer flex v-center">
                                    <svg
                                        className="tickid-svg-icon navbar__link-icon icon-shopping-cart-2"
                                        viewBox="0 0 26.6 25.6"
                                    >
                                        <polyline
                                            fill="none"
                                            points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                            strokeWidth="2.5"
                                        />
                                        <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                                        <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                                    </svg>
                                    <div
                                        className="tickid-cart-number-badge js-header-cart-number-badge"
                                        style={{ display: "block" }}
                                    >
                                        <CartContext.Consumer>
                                            {
                                                ({ cartItems }) => cartItems.length
                                            }
                                        </CartContext.Consumer>
                                    </div>
                                </div>
                            </div>
                            <div className="tickid-drawer__contents tickid-drawer__contents--header-cart js-header-cart-list-content">
                                <div className="OGgnps tickid-drawer__contents-wrapper">
                                    <div className="_20qg4r v-center">Sản phẩm đã thêm</div>
                                    <div className="header-with-search__cart-list-product">
                                        <CartContext.Consumer>
                                            {
                                                ({ cartItems, removeToCart, updateToCart }) => cartItems.map((item, index) => {
                                                    return (
                                                        <div
                                                            className="_1sUxy9 js-header-cart-item-product"
                                                            data-product={item.ID}
                                                            model
                                                        >
                                                            <div
                                                                className="_1bNSSj"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(" + Config.API_URL + item.Image + ")"
                                                                }}
                                                            />
                                                            <div className="_3V6d4p">
                                                                <div className="v-center">
                                                                    <div className="Oo4LQk">
                                                                        {item.ProductName}
                                                                    </div>
                                                                    <div className="_1d_3qO" />
                                                                    <div className="_1kIptg v-center">
                                                                        <div className="_2W2Ge6">{item.Price}đ</div>
                                                                        <div className="_1QX3YJ">x</div>
                                                                        <div className="_2Ib9-I">{item.Count}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="TGxoGr v-center">
                                                                    <div className="_1d_3qO" />
                                                                    <div className="_3dbrCy">
                                                                        <button className="tickid-button-no-outline js-header-cart-btn-remove-product"
                                                                            onClick={() => removeToCart(item.ProductID)}
                                                                        >
                                                                            Xóa
                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </CartContext.Consumer>

                                    </div>
                                    <div className="header-with-search__cart-footer">
                                        <div className="header-cart__info">
                                            <p className="header-cart__info-item">
                                                <span className="header-cart__info-title">Tổng tiền :</span>
                                                <span className="header-cart__info-value">
                                                    <CartContext>
                                                        {
                                                            ({ cartItems }) => cartItems.reduce((sum, item) => {
                                                                return sum += item.TotalPrice
                                                            }, 0)
                                                        }
                                                    </CartContext>
                                                    đ</span>
                                            </p>
                                            {/* <p className="header-cart__info-item">
                                                <span className="header-cart__info-title">Ví tích điểm</span>
                                                <span className="header-cart__info-value">+720 điểm</span>
                                            </p> */}
                                        </div>
                                        <div className="Rgll-d">
                                            <div className="navbar__spacer" />
                                            <a
                                                href="/cart"
                                                className="btn btn-solid-primary btn--s btn--inline AbVulL"
                                            >
                                                Xem Giỏ hàng
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="header__navbar header__navbar--mobile">
                        <li className="header__navbar-link">
                            <a
                                href="#"
                                className="icon-search js-toggle-header-menu"
                                data-target="header-menu-user"
                            >
                                <figure className="header__navbar-user-avatar figure">
                                    <img src="assets/images/avatar-default.png" alt="avatar" />
                                </figure>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }


}

export default SearchTop;