import React, { Component } from 'react';

import { WatchedContext } from '../../contexts/ProductsWatched';
import {CartContext } from '../../contexts/Cart';
import Call from '../../utils/Call';
import * as Config from '../../constants/Config';

class ProductsSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productOne: {},
            productTwo: {},
            productThree: {},
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListProductSale', 'GET', headers).then(res => {
            this.setState({
                productOne: res.data[0],
                productTwo: res.data[1],
                productThree: res.data[2],
            })
        })
    }

    render() {
        const { productOne, productTwo, productThree } = this.state;
        return (
            <div className="offers ProductSale">
                <div className="offers__wrapper">
                    <div className="offers__inner">
                        <div className="offers__head">
                            <div className="offers__title">Flash Sales</div>
                        </div>
                        <div className="offers__body">
                            <div className="offers__body-left">
                                <div className="offers__item offers__item--primary">
                                    <div className="offers__item-image">
                                        <a href={'/product?id=' + productOne.ID} className="link">
                                            <figure className="figure">
                                                <img
                                                    src={Config.API_URL + productOne.Image}
                                                    alt
                                                />
                                            </figure>
                                        </a>
                                        <span className="offers__item-sale-value">-{productOne.Discount}%</span>
                                        <div className="offers__item-button-group">
                                            <a
                                                href={'/product?id=' + productOne.ID}
                                                className="btn btn--reset offers__item-button offers__item-button--addcart"
                                            >
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
                                            </a>
                                            <button
                                                className="btn btn--reset offers__item-button offers__item-button--favorite js-card-favorite"
                                                product-id={productOne.ID}
                                            >
                                                <svg viewBox="0 0 24 20">
                                                    <path
                                                        className="change_filter-favorite"
                                                        d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                        stroke="#FF424F"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="offers__item-content">
                                        <a
                                            href={'/product?id=' + productOne.ID}
                                            className="offers__item-title"
                                        >
                                            {productOne.ProductName}
                                        </a>
                                        <div className="offers__item-rating">
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>{" "}
                                        </div>
                                        <div className="offers__item-price">
                                            <div className="offers__item-price-sale">{productOne.Promote}đ</div>
                                            <div className="offers__item-price-cost">{productOne.Price}đ</div>
                                        </div>
                                        <div className="offers__item-sales">
                                            <div className="offers__item-sales-head">
                                                <div className="offers__item-sales-available">
                                                    Còn lại: <span className="value">{productOne.Quantity}</span>
                                                </div>
                                                <div className="offers__item-sales-sold">
                                                    Đã bán: <span className="value">{productOne.QuantitySold}</span>
                                                </div>
                                            </div>
                                            <div className="offers__item-sales-ranger">
                                                <div
                                                    className="offers__item-sales-value"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="offers__item-times">
                                            <div className="offers__item-times-title">
                                                Thời gian còn lại:
                                            </div>
                                            <div
                                                className="countdown offers__item-countdown js-countdown"
                                                end-in="2020-08-31 09:55:00"
                                            >
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-days">00</div>
                                                    <div className="countdown__item-title">Ngày</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-hours">00</div>
                                                    <div className="countdown__item-title">Giờ</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-minutes">00</div>
                                                    <div className="countdown__item-title">Phút</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-seconds">00</div>
                                                    <div className="countdown__item-title">Giây</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offers__body-right">
                                <div className="offers__item offers__item--secondary">
                                    <div className="offers__item-image">
                                        <a
                                            href={'/product?id=' + productTwo.ID}
                                            className="link"
                                        >
                                            <figure className="figure">
                                                <img
                                                    src={Config.API_URL + productTwo.Image}
                                                    alt
                                                />
                                            </figure>
                                        </a>
                                        <span className="offers__item-sale-value">-{productTwo.Discount}%</span>
                                        <div className="offers__item-button-group">
                                            <a
                                                href={'/product?id=' + productTwo.ID}
                                                className="btn btn--reset offers__item-button offers__item-button--addcart"
                                            >
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
                                            </a>
                                            <button
                                                className="btn btn--reset offers__item-button offers__item-button--favorite js-card-favorite"
                                                product-id={productTwo.ID}
                                            >
                                                <svg viewBox="0 0 24 20">
                                                    <path
                                                        className="change_filter-favorite"
                                                        d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                        stroke="#FF424F"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="offers__item-content">
                                        <a
                                            href={'/product?id=' + productTwo.ID}
                                            className="offers__item-title"
                                        >
                                            {productTwo.ProductName}
                                        </a>
                                        <div className="offers__item-rating">
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>{" "}
                                        </div>
                                        <div className="offers__item-price">
                                            <div className="offers__item-price-sale">{productTwo.Promote}đ</div>
                                            <div className="offers__item-price-cost">{productTwo.Price}đ</div>
                                        </div>
                                        <div className="offers__item-sales">
                                            <div className="offers__item-sales-head">
                                                <div className="offers__item-sales-available">
                                                    Còn lại: <span className="value">{productTwo.Quantity}</span>
                                                </div>
                                                <div className="offers__item-sales-sold">
                                                    Đã bán: <span className="value">{productTwo.QuantitySold}</span>
                                                </div>
                                            </div>
                                            <div className="offers__item-sales-ranger">
                                                <div
                                                    className="offers__item-sales-value"
                                                    style={{ width: "74%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="offers__item-times">
                                            <div className="offers__item-times-title">
                                                Thời gian còn lại:
                                            </div>
                                            <div
                                                className="countdown offers__item-countdown js-countdown"
                                                end-in="2020-08-31 12:31:00"
                                            >
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-days">00</div>
                                                    <div className="countdown__item-title">Ngày</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-hours">00</div>
                                                    <div className="countdown__item-title">Giờ</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-minutes">00</div>
                                                    <div className="countdown__item-title">Phút</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-seconds">00</div>
                                                    <div className="countdown__item-title">Giây</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offers__item offers__item--tertiary">
                                    <div className="offers__item-image">
                                        <a
                                            href={'/product?id=' + productThree.ID}
                                            className="link"
                                        >
                                            <figure className="figure">
                                                <img
                                                    src={Config.API_URL + productThree.Image}
                                                    alt
                                                />
                                            </figure>
                                        </a>
                                        <span className="offers__item-sale-value">-{productThree.Discount}%</span>
                                        <div className="offers__item-button-group">
                                            <a
                                                href={'/product?id=' + productThree.ID}
                                                className="btn btn--reset offers__item-button offers__item-button--addcart"
                                            >
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
                                            </a>
                                            <button
                                                className="btn btn--reset offers__item-button offers__item-button--favorite js-card-favorite"
                                                product-id={productThree.ID}
                                            >
                                                <svg viewBox="0 0 24 20">
                                                    <path
                                                        className="change_filter-favorite"
                                                        d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                        stroke="#FF424F"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="offers__item-content">
                                        <a
                                            href={'/product?id=' + productThree.ID}
                                            className="offers__item-title"
                                        >
                                            {productThree.ProductName}
                                        </a>
                                        <div className="offers__item-rating">
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>
                                            <span className="fa fa-stack">
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
                                                    />
                                                </svg>
                                            </span>{" "}
                                        </div>
                                        <div className="offers__item-price">
                                            <div className="offers__item-price-sale">{productThree.Promote}đ</div>
                                            <div className="offers__item-price-cost">{productThree.Price}đ</div>
                                        </div>
                                        <div className="offers__item-sales">
                                            <div className="offers__item-sales-head">
                                                <div className="offers__item-sales-available">
                                                    Còn lại: <span className="value">{productThree.Quantity}</span>
                                                </div>
                                                <div className="offers__item-sales-sold">
                                                    Đã bán: <span className="value">{productThree.QuantitySold}</span>
                                                </div>
                                            </div>
                                            <div className="offers__item-sales-ranger">
                                                <div
                                                    className="offers__item-sales-value"
                                                    style={{ width: "90%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="offers__item-times">
                                            <div className="offers__item-times-title">
                                                Thời gian còn lại:
                                            </div>
                                            <div
                                                className="countdown offers__item-countdown js-countdown"
                                                end-in="2020-08-31 17:36:00"
                                            >
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-days">00</div>
                                                    <div className="countdown__item-title">Ngày</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-hours">00</div>
                                                    <div className="countdown__item-title">Giờ</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-minutes">00</div>
                                                    <div className="countdown__item-title">Phút</div>
                                                </div>
                                                <div className="countdown__item">
                                                    <div className="countdown__item-value js-seconds">00</div>
                                                    <div className="countdown__item-title">Giây</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsSale;