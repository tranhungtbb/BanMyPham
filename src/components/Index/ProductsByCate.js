import React, { Component } from 'react';

import Call from '../../utils/Call';
import * as Config from '../../constants/Config';

class ProductsByCate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            products: []
        }
    }

    async componentDidMount() {
        const { IdCategory } = this.props;
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductByTrademark?trademarkID=' + IdCategory, 'GET', headers).then(res => {
            const listProduct = res.data;
            this.setState({
                product: listProduct.filter((item, index) => {
                    if (index < 1) {
                        return item;
                    }
                }),
                products: listProduct.filter((item, index) => {
                    if (index != 0) {
                        return item;
                    }
                })
            })
        })
    }

    render() {
        const { product, products } = this.state;
        const { IdCategory, CategoryName } = this.props;


        return (
            <div className="ProductsByCate">
                <div className="spacing" >
                    <div className="cat-products">
                        <div className="cat-products__wrapper">
                            <div className="cat-products__inner">
                                <div className="cat-products__header">
                                    <div className="cat-products__title">{CategoryName}</div>
                                    <a href={'product?id=' + product.ID} className="link cat-products__link">
                                        Xem tất cả{" "}
                                        <svg
                                            className="tickid-svg-icon icon-arrow-right"
                                            enableBackground="new 0 0 11 11"
                                            viewBox="0 0 11 11"
                                            x={0}
                                            y={0}
                                        >
                                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="cat-products__body">
                                    <div className="cat-products__content">
                                        <div className="cat-products__content-left">
                                            <div className="card__wrapper">
                                                {
                                                    product.map((item, index) => {
                                                        return (
                                                            <div className="card">
                                                                <a
                                                                    href={'product?id=' + item.ID}
                                                                    className="card-link "
                                                                >
                                                                    <div className="_1gkBDw">
                                                                        <div className="_3ZDC1p card-header">
                                                                            <div
                                                                                className="_1T9dHf _3XaILN"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                    "url("+ Config.API_URL + item.Image  +")",
                                                                                    backgroundSize: "contain",
                                                                                    backgroundRepeat: "no-repeat"
                                                                                }}
                                                                            ></div>
                                                                            <div className="_2N1Tif">
                                                                                <div className="tickid-badge tickid-badge--fixed-width tickid-badge--promotion">
                                                                                    <div className="tickid-badge--promotion__label-wrapper tickid-badge--promotion__label-wrapper--vi-VN">
                                                                                        <span className="percent">{item.Discount}%</span>
                                                                                        <span className="tickid-badge--promotion__label-wrapper__off-label tickid-badge--promotion__label-wrapper__off-label--vi-VN">
                                                                                            giảm
                                                                                    </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="card__cart-badge">
                                                                                <div className="card__cart-badge-inner">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-cart-badge js-btn-add-cart"
                                                                                        data-product={item.ID}
                                                                                        style={{ zIndex: 1000 }}
                                                                                        onClick={(e) => { e.preventDefault() }}
                                                                                    >
                                                                                        <span className="btn-cart-badge__inner">
                                                                                            <svg
                                                                                                height="1rem"
                                                                                                viewBox="0 -31 512.00033 512"
                                                                                                width="1rem"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0" />
                                                                                                <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0" />
                                                                                                <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0" />
                                                                                            </svg>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_1Ewdcf card-content">
                                                                            <div className="_1JAmkB" data-sqe="name">
                                                                                <div className="_1NoI8_ _2gr36I">
                                                                                    {item.ProductName}
                                                                                </div>
                                                                            </div>
                                                                            <div className="_36zw98">
                                                                                <div className="_1w9jLI QbH7Ig t-e-Bx">
                                                                                    {item.Price}đ
                                                                </div>
                                                                                <div
                                                                                    className="_1w9jLI _37ge-4 _2XtIUk"
                                                                                    style={{ maxWidth: "calc(100% - 22px)" }}
                                                                                >
                                                                                    <span className="_341bF0">{item.Promote}đ</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="_2-i6yP">
                                                                                <div className="Yy_uTH card_favorite js-single-sign-on ">
                                                                                    <svg
                                                                                        width={16}
                                                                                        height={16}
                                                                                        viewBox="0 0 16 16"
                                                                                        version="1.1"
                                                                                        className="icon-favorite"
                                                                                    >
                                                                                        <path
                                                                                            fill="#f53d2f"
                                                                                            d="m7.5718913 3.830906l.0395416.0333051c.1397621.1194612.2698939.2494171.3885671.3886499.1186733-.1392328.2488051-.2691887.3885671-.3886499l.0395416-.0333051c.6252617-.5189518 1.4350848-.830906 2.2718913-.830906 1.848 0 3.3 1.4506812 3.3 3.2970027 0 2.2659401-2.04 4.1122616-5.13 6.9177112l-.87.7852861-.87-.7912807c-3.09-2.799455-5.13-4.6457765-5.13-6.9117166 0-1.8463215 1.452-3.2970027 3.3-3.2970027.8368065 0 1.6466296.3119542 2.2718913.830906z"
                                                                                        ></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        height={16}
                                                                                        viewBox="0 0 16 16"
                                                                                        width={16}
                                                                                        version="1.1"
                                                                                        className="icon-not-favorite"
                                                                                    >
                                                                                        <path
                                                                                            className="change_filter-favorite"
                                                                                            d="m7.251221 4.2145388c-.549143-.4552525-1.2488781-.7145388-1.951221-.7145388-1.5719593 0-2.8 1.2269253-2.8 2.7970027 0 .5878515.158291 1.1598348.483492 1.7618948.6414654 1.1875754 1.5644044 2.1358244 4.4829309 4.7799304l.5348542.4864596.5326254-.4807607c2.9306205-2.660747 3.8471674-3.6039919 4.486777-4.7931984.3223805-.5993922.4793205-1.1689848.4793205-1.7543257 0-1.5700774-1.2280407-2.7970027-2.8-2.7970027-.7029148 0-1.4032175.2597087-1.9497845.7133288l-.0367779.0309601c-.1203966.1029087-.2318185.2143106-.3329071.3329122l-.3805305.4464557-.3805305-.4464557c-.1010886-.1186016-.2125105-.2300035-.3301434-.3305672z"
                                                                                            fill="none"
                                                                                            stroke="#000"
                                                                                            strokeOpacity=".54"
                                                                                        ></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div className="_2bRB2L" data-sqe="rating">
                                                                                    <div className="tickid-rating-stars">
                                                                                        <div className="tickid-rating-stars__stars">
                                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                                <svg
                                                                                                    className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                    enableBackground="new 0 0 15 15"
                                                                                                    viewBox="0 0 15 15"
                                                                                                    x={0}
                                                                                                    y={0}
                                                                                                >
                                                                                                    <polygon
                                                                                                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeMiterlimit={10}
                                                                                                    ></polygon>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                                <svg
                                                                                                    className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                    enableBackground="new 0 0 15 15"
                                                                                                    viewBox="0 0 15 15"
                                                                                                    x={0}
                                                                                                    y={0}
                                                                                                >
                                                                                                    <polygon
                                                                                                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeMiterlimit={10}
                                                                                                    ></polygon>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                                <svg
                                                                                                    className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                    enableBackground="new 0 0 15 15"
                                                                                                    viewBox="0 0 15 15"
                                                                                                    x={0}
                                                                                                    y={0}
                                                                                                >
                                                                                                    <polygon
                                                                                                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeMiterlimit={10}
                                                                                                    ></polygon>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                                <svg
                                                                                                    className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                    enableBackground="new 0 0 15 15"
                                                                                                    viewBox="0 0 15 15"
                                                                                                    x={0}
                                                                                                    y={0}
                                                                                                >
                                                                                                    <polygon
                                                                                                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeMiterlimit={10}
                                                                                                    ></polygon>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                                <svg
                                                                                                    className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                    enableBackground="new 0 0 15 15"
                                                                                                    viewBox="0 0 15 15"
                                                                                                    x={0}
                                                                                                    y={0}
                                                                                                >
                                                                                                    <polygon
                                                                                                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeMiterlimit={10}
                                                                                                    ></polygon>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="_18SLBt">{item.QuantitySold} đã bán</div>
                                                                            </div>
                                                                            <div className="_3amru2 flex">
                                                                                <span className="card__brand">{item.CategoryName}</span>
                                                                                <span className="card__made-in">{item.Madeby}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="cat-products__content-right">
                                            <div className="grid">
                                                {
                                                    products.map((item, index) => {
                                                        return (
                                                            <div className="card__wrapper">
                                                                <div className="card">
                                                                    <a
                                                                        href={'product?id=' + item.ID}
                                                                        className="card-link "
                                                                    >
                                                                        <div className="_1gkBDw">
                                                                            <div className="_3ZDC1p card-header">
                                                                                <div
                                                                                    className="_1T9dHf _3XaILN"
                                                                                    style={{
                                                                                        backgroundImage:
                                                                                        "url("+ Config.API_URL + item.Image  +")",
                                                                                        backgroundSize: "contain",
                                                                                        backgroundRepeat: "no-repeat"
                                                                                    }}
                                                                                ></div>
                                                                                <div className="_2N1Tif">
                                                                                    <div className="tickid-badge tickid-badge--fixed-width tickid-badge--promotion">
                                                                                        <div className="tickid-badge--promotion__label-wrapper tickid-badge--promotion__label-wrapper--vi-VN">
                                                                                            <span className="percent">{item.Discount}%</span>
                                                                                            <span className="tickid-badge--promotion__label-wrapper__off-label tickid-badge--promotion__label-wrapper__off-label--vi-VN">
                                                                                                giảm
                                              </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="card__cart-badge">
                                                                                    <div className="card__cart-badge-inner">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn btn-cart-badge js-btn-add-cart"
                                                                                            data-product={item.ID}
                                                                                        >
                                                                                            <span className="btn-cart-badge__inner">
                                                                                                <svg
                                                                                                    height="1rem"
                                                                                                    viewBox="0 -31 512.00033 512"
                                                                                                    width="1rem"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0" />
                                                                                                    <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0" />
                                                                                                    <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0" />
                                                                                                </svg>
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="_1Ewdcf card-content">
                                                                                <div className="_1JAmkB" data-sqe="name">
                                                                                    <div className="_1NoI8_ _2gr36I">
                                                                                        {item.ProductName}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_36zw98">
                                                                                    <div className="_1w9jLI QbH7Ig t-e-Bx">
                                                                                        {item.Price}đ
                                                                                </div>
                                                                                    <div
                                                                                        className="_1w9jLI _37ge-4 _2XtIUk"
                                                                                        style={{ maxWidth: "calc(100% - 22px)" }}
                                                                                    >
                                                                                        <span className="_341bF0">{item.Promote}đ</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_2-i6yP">
                                                                                    <div className="Yy_uTH card_favorite js-single-sign-on ">
                                                                                        <svg
                                                                                            width={16}
                                                                                            height={16}
                                                                                            viewBox="0 0 16 16"
                                                                                            version="1.1"
                                                                                            className="icon-favorite"
                                                                                        >
                                                                                            <path
                                                                                                fill="#f53d2f"
                                                                                                d="m7.5718913 3.830906l.0395416.0333051c.1397621.1194612.2698939.2494171.3885671.3886499.1186733-.1392328.2488051-.2691887.3885671-.3886499l.0395416-.0333051c.6252617-.5189518 1.4350848-.830906 2.2718913-.830906 1.848 0 3.3 1.4506812 3.3 3.2970027 0 2.2659401-2.04 4.1122616-5.13 6.9177112l-.87.7852861-.87-.7912807c-3.09-2.799455-5.13-4.6457765-5.13-6.9117166 0-1.8463215 1.452-3.2970027 3.3-3.2970027.8368065 0 1.6466296.3119542 2.2718913.830906z"
                                                                                            ></path>
                                                                                        </svg>
                                                                                        <svg
                                                                                            height={16}
                                                                                            viewBox="0 0 16 16"
                                                                                            width={16}
                                                                                            version="1.1"
                                                                                            className="icon-not-favorite"
                                                                                        >
                                                                                            <path
                                                                                                className="change_filter-favorite"
                                                                                                d="m7.251221 4.2145388c-.549143-.4552525-1.2488781-.7145388-1.951221-.7145388-1.5719593 0-2.8 1.2269253-2.8 2.7970027 0 .5878515.158291 1.1598348.483492 1.7618948.6414654 1.1875754 1.5644044 2.1358244 4.4829309 4.7799304l.5348542.4864596.5326254-.4807607c2.9306205-2.660747 3.8471674-3.6039919 4.486777-4.7931984.3223805-.5993922.4793205-1.1689848.4793205-1.7543257 0-1.5700774-1.2280407-2.7970027-2.8-2.7970027-.7029148 0-1.4032175.2597087-1.9497845.7133288l-.0367779.0309601c-.1203966.1029087-.2318185.2143106-.3329071.3329122l-.3805305.4464557-.3805305-.4464557c-.1010886-.1186016-.2125105-.2300035-.3301434-.3305672z"
                                                                                                fill="none"
                                                                                                stroke="#000"
                                                                                                strokeOpacity=".54"
                                                                                            ></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div className="_2bRB2L" data-sqe="rating">
                                                                                        <div className="tickid-rating-stars">
                                                                                            <div className="tickid-rating-stars__stars">
                                                                                                <div className="tickid-rating-stars__star-wrapper">
                                                                                                    <svg
                                                                                                        className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                        enableBackground="new 0 0 15 15"
                                                                                                        viewBox="0 0 15 15"
                                                                                                        x={0}
                                                                                                        y={0}
                                                                                                    >
                                                                                                        <polygon
                                                                                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeMiterlimit={10}
                                                                                                        ></polygon>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="tickid-rating-stars__star-wrapper">
                                                                                                    <svg
                                                                                                        className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                        enableBackground="new 0 0 15 15"
                                                                                                        viewBox="0 0 15 15"
                                                                                                        x={0}
                                                                                                        y={0}
                                                                                                    >
                                                                                                        <polygon
                                                                                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeMiterlimit={10}
                                                                                                        ></polygon>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="tickid-rating-stars__star-wrapper">
                                                                                                    <svg
                                                                                                        className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                        enableBackground="new 0 0 15 15"
                                                                                                        viewBox="0 0 15 15"
                                                                                                        x={0}
                                                                                                        y={0}
                                                                                                    >
                                                                                                        <polygon
                                                                                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeMiterlimit={10}
                                                                                                        ></polygon>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="tickid-rating-stars__star-wrapper">
                                                                                                    <svg
                                                                                                        className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                        enableBackground="new 0 0 15 15"
                                                                                                        viewBox="0 0 15 15"
                                                                                                        x={0}
                                                                                                        y={0}
                                                                                                    >
                                                                                                        <polygon
                                                                                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeMiterlimit={10}
                                                                                                        ></polygon>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="tickid-rating-stars__star-wrapper">
                                                                                                    <svg
                                                                                                        className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid"
                                                                                                        enableBackground="new 0 0 15 15"
                                                                                                        viewBox="0 0 15 15"
                                                                                                        x={0}
                                                                                                        y={0}
                                                                                                    >
                                                                                                        <polygon
                                                                                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeMiterlimit={10}
                                                                                                        ></polygon>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="_18SLBt">{item.QuantitySold} đã bán</div>
                                                                                </div>
                                                                                <div className="_3amru2 flex">
                                                                                    <span className="card__brand">{item.CategoryName}</span>
                                                                                    <span className="card__made-in">{item.Madeby}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default ProductsByCate;