import React, { Component } from 'react';
import Slider from "react-slick";
import qs from 'query-string';
import axios from 'axios';
import cookie from 'js-cookie';

import {settingSlideProducs} from '../../constants/slides';
import Call from '../../utils/Call';
import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import ProductsRecommend from '../../components/Product/ProductsRecommend';
import BestSale from '../../components/Product/BestSale';
import New from '../../components/Product/New2';
import Footer from '../../components/Footer/Footer';

import { CardContext, CartContext } from '../../contexts/Cart';
import { WatchedContext } from '../../contexts/ProductsWatched';
import Watched from '../../components/Product/Watched';
import * as Config from '../../constants/Config';
class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailProduct: {},
            count : 1
        }
        this.inCrease = this.inCrease.bind(this);
        this.deCrease = this.deCrease.bind(this);
    }
    async componentDidMount() {
        const value = qs.parse(this.props.location.search);
        const id = value.id;
        debugger
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getProductByID?id='+ id, 'GET', headers).then(res => {
            this.setState({
                detailProduct: res.data
            })
        })
        // axios.post('http://localhost:51466/token',
        //     qs.stringify({
        //             username: 'DinhHung', //gave the values directly for testing
        //             password: '123',
        //             grant_type: 'password'
        //     }), {
        //       headers: { 
        //         "Content-Type": "application/x-www-form-urlencoded"
        //       }
        //     }).then(function(response) {
        //         cookie.set("jwt_access_token", response.data.access_token, { expires: 30, signed: true });
        //     });
        
    }

    inCrease(){
        this.setState({
            count : this.state.count +1
        });
    }

    deCrease(){
        let count = this.state.count -1;
        if(count < 1){
            count = this.state.count;
        }
        this.setState({
            count : count
        });
    }



    render() {
        const { detailProduct, count } = this.state;
        return (
            <div className="DetailProduct">
                <div id="main" className="module--tickid">
                    <div>
                        <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                        <div className="tickid-page-wrapper">
                            <MenuTop />
                            <SearchTop />
                            <div className="main">
                                <div className="main-content">
                                    <div className="page-product js-product-cart js-product" data-product={7256}>
                                        <div role="main" className="container">
                                            <div className="flex items-center _1z1CEl breadcrumbs">
                                                <ul className="breadcrumbs__list">
                                                    <li className="breadcrumbs__item">
                                                        <a className="JFOy4z breadcrumbs__item-link" href="/">Trang chủ</a>
                                                        <svg className="tickid-svg-icon _3kIvpP icon-arrow-right" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                                        </svg>
                                                    </li>
                                                    <li className="breadcrumbs__item">
                                                        <a className="JFOy4z breadcrumbs__item-link" href="/danh-muc/set-whoo-mini">{detailProduct.CategoryName}</a>
                                                        <svg className="tickid-svg-icon _3kIvpP icon-arrow-right" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                                        </svg>
                                                    </li>
                                                    <li className="breadcrumbs__item">
                                                        <span className="OSgLcw">{detailProduct.ProductName}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-briefing flex _2cRTS4">
                                                <div className="_30iQ1- product-briefing__left">
                                                    <div className="qaNIZv block-l product-briefing__left-header">
                                                        {detailProduct.ProductName}
                                                    </div>
                                                    <div className="flex _32fuIU flex-l product-briefing__left-statistic">
                                                        <div className="flex M3KjhJ product-briefing__left-rating">
                                                            <div className="_3Oj5_n _2z6cUg value">{detailProduct.Star}</div>
                                                            <div className="_1_WXLA">
                                                                <div className="tickid-rating-stars">
                                                                    <div className="tickid-rating-stars__stars">
                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                            <div className="tickid-rating-stars__lit" style={{ width: '100%' }}>
                                                                                <svg className="tickid-svg-icon tickid-rating-stars__primary-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                                                                </svg>
                                                                            </div>
                                                                            <svg className="tickid-svg-icon tickid-rating-stars__hollow-star icon-rating" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex SbDIui product-briefing__left-sales">
                                                            <div className="_22sp0A value">{detailProduct.QuantitySold}</div>
                                                            <div className="ilat8W unit">đã bán</div>
                                                        </div>
                                                    </div>
                                                    <div className="block-l product-briefing__left-prices">
                                                        <div className="flex flex-column">
                                                            <div className="flex flex-column KHpkTU">
                                                                <div className="flex items-center">
                                                                    <div className="flex items-center _2n_9_X">
                                                                        <div className="_3_ISdg">{detailProduct.Price}đ</div>
                                                                        <div className="flex items-center">
                                                                            <div className="_3n5NQx">{detailProduct.Promote}đ</div>
                                                                            <div className="MITExd">{detailProduct.Discount}% giảm</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-column product-briefing__carousel">
                                                        <div className="_1eNVDM">
                                                            <div className="_1anaJP">
                                                                <div className="_24R4uR product-briefing__image-default" style={{ display: 'none' }}>
                                                                    <div className="tickid-image-placeholder _1bTOZs">
                                                                        <svg className="stardust-icon stardust-icon-tickid icon-tickid-tiny" enableBackground="new 0 0 54 61" viewBox="0 0 54 61">
                                                                            <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="center _1X5pEb">
                                                                        <video data-dashjs-player="true" className="_1KPtur" autoPlay />
                                                                    </div>
                                                                </div>
                                                                <div className="product-briefing__image-highlight hidden-sm js-product-briefing-image-highlight">
                                                                    <div className="_3ZDC1p">
                                                                        <div className="_2JMB9h _3XaILN" style={{ backgroundImage: 'url('+Config.API_URL + detailProduct.Image+')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                                                                    </div>
                                                                    <div className="_1RzplO">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="F3D_QV">
                                                            <div className="product-briefing-slider js-slider js-product-briefing-images">
                                                                <div className="_2MDwq_ product-briefing__image js-product-briefing-image js-slider-item">
                                                                    <div className="ZPN9uD product-briefing__image-inner">
                                                                        <div className="_3ZDC1p">
                                                                            <div className="_2Fw7Qu _3XaILN" style={{ backgroundImage: 'url('+Config.API_URL + detailProduct.Image+')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                                                                        </div>
                                                                        <div className="product-briefing__image-border Wrsd9N" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center _25DJo1 items-center product-briefing__left-footer">
                                                        <div className="flex items-center _3yHPog product-briefing__left-footer-item">
                                                            <div className="_1-aYcb " id="class-share">Chia sẻ:</div>
                                                            <a target="popup" onclick="window.open('http://www.facebook.com/sharer/sharer.php?u=http://demo.shop.tickid.vn/set-duong-trang-tri-nam-whoo-gong-jin-hyang-seol-5-mon','popup','width=600,height=600')" className="sprite-product-sharing sprite-product-sharing-fb _1CuuK_" aria-label="Share on Facebook" />
                                                            <a target="popup" onclick="window.open('http://www.facebook.com/dialog/send?app_id=2794644853896597&link=http://demo.shop.tickid.vn/set-duong-trang-tri-nam-whoo-gong-jin-hyang-seol-5-mon&redirect_uri=http://demo.shop.tickid.vn/set-duong-trang-tri-nam-whoo-gong-jin-hyang-seol-5-mon','popup','width=600,height=600'); return false;" className="sprite-product-sharing sprite-product-sharing-fm _1CuuK_" aria-label="Share on Messenger" />
                                                        </div>
                                                        <div className="flex items-center _25DJo1 product-briefing__left-footer-item  js-single-sign-on">
                                                            <svg width={24} height={20} className="_10K0Ee icon-not-favorite" viewBox="0 0 24 20">
                                                                <path className="change_filter-favorite" d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round" />
                                                            </svg>
                                                            <div className="_1-aYcb product-favorites-text--no-favorite">Yêu thích</div>
                                                            <div className="_1-aYcb product-favorites-text--has-favorite">Đã thích</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-auto k-mj2F product-briefing__right">
                                                    <div className="flex flex-auto flex-column _2TJgvU product-briefing__right-content" style={{}}>
                                                        <div className="qaNIZv hidden-l">
                                                            <div className="horizontal-badge tickid-preferred-seller-badge horizontal-badge--no-triangle _1hOh3l _1lhNV3 items-center">
                                                                <svg className="tickid-svg-icon icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                    <g>
                                                                        <path d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                                                    </g>
                                                                </svg>
                                                            Yêu thích
                                                        </div>
                                                            {detailProduct.ProductName}
                                                        </div>
                                                        <div className="flex _32fuIU hidden-l">
                                                            <div className="flex M3KjhJ">
                                                                <div className="_3Oj5_n _2z6cUg">{detailProduct.Star}</div>
                                                                <div className="_1_WXLA">
                                                                    <div className="tickid-rating-stars">
                                                                        <div className="tickid-rating-stars__stars">
                                                                            <div className="tickid-rating-stars__star-wrapper">
                                                                                <div className="tickid-rating-stars__lit" style={{ width: '90%' }}>
                                                                                    <svg className="tickid-svg-icon tickid-rating-stars__primary-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                                                                    </svg>
                                                                                </div>
                                                                                <svg className="tickid-svg-icon tickid-rating-stars__hollow-star icon-rating" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex SbDIui">
                                                                <div className="_22sp0A">{detailProduct.Quantity}</div>
                                                                <div className="ilat8W">Còn lại</div>
                                                            </div>
                                                        </div>
                                                        <div style={{ marginTop: 10 }} className="hidden-l">
                                                            <div className="flex flex-column">
                                                                <div className="flex flex-column KHpkTU">
                                                                    <div className="flex items-center">
                                                                        <div className="flex items-center _2n_9_X">
                                                                            <div className="_3_ISdg">{detailProduct.Price}đ</div>
                                                                            <div className="flex items-center">
                                                                                <div className="_3n5NQx">{detailProduct.Promote}đ</div>
                                                                                <div className="MITExd">{detailProduct.Discount}% giảm</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-column flex-auto _3DepLY hidden-sm">
                                                            <div className="flex flex-auto flex-column">
                                                                <div className="flex-auto hidden-l">
                                                                    <div className="product-briefing__summary">
                                                                        <div className="flex flex-column">
                                                                            <div className="flex items-center" style={{ alignItems: 'baseline' }}>
                                                                                <label className="_2iNrDS">Thông tin</label>
                                                                                <div className="crl7WW product-briefing__summary ">
                                                                                    <div className="wysiwyg "><p><strong>{detailProduct.ProductName}</strong></p>
                                                                                        {detailProduct.Content}
                                                                                    </div>
                                                                                    <a className="_2XtIUk" id="see-product-detail" href="#product-details">Xem chi tiết</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex _3dRJGI _3a2wD- product-briefing__quantity js-product-briefing-quantity">
                                                                    <div className="flex flex-column">
                                                                        <div className="flex items-center product-briefing__quantity-row">
                                                                            <div className="_2iNrDS">Số lượng</div>
                                                                            <div className="flex items-center cl-gray">
                                                                                <div style={{ marginRight: 15 }}>
                                                                                    <div className="_19lAw4 tickid-input-quantity" min={1} max={99}>
                                                                                        <button className="btn btn-quantity _1zT8xu" id= 'decrease'
                                                                                            onClick={this.deCrease}
                                                                                        >
                                                                                            <svg className="tickid-svg-icon " enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                                                                            </svg>
                                                                                        </button>
                                                                                        <input className="_1zT8xu _18Y8Ul" type="text" value={this.state.count}/>
                                                                                        <button className="btn btn-quantity _1zT8xu" id= 'increase'
                                                                                            onClick= {this.inCrease}
                                                                                        >
                                                                                            <svg className="tickid-svg-icon icon-plus-sign" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-center product-briefing__quantity-row">
                                                                            <div className="_2iNrDS">Đơn vị: &nbsp;</div>
                                                                            <div className="flex items-center cl-gray">
                                                                                <div style={{ marginRight: 15 }}>
                                                                                    set
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-briefing__quantity-error product-briefing__quantity-row js-product-briefing-quantity-error" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-briefing__action hidden-sm">
                                                            <div className="OJJX3D">
                                                                <div className="_2O0llP">
                                                                    <CartContext.Consumer>
                                                                    {
                                                                        ({addToCart})=>
                                                                        <button type="button"
                                                                            className="btn btn-tinted btn--l YtgjXY _3a6p6c js-product-add-cart"
                                                                            aria-disabled="false"
                                                                            onClick={()=> addToCart(detailProduct.ID, this.state.count)}
                                                                        >
                                                                            <svg className="tickid-svg-icon _343Jzb icon-add-to-cart" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                <g>
                                                                                    <g>
                                                                                        <polyline fill="none" points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                                                                        <circle cx={6} cy="13.5" r={1} stroke="none" />
                                                                                        <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                                                                                    </g>
                                                                                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1="7.5" x2="10.5" y1={7} y2={7} />
                                                                                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1={9} x2={9} y1="8.5" y2="5.5" />
                                                                                </g>
                                                                            </svg>
                                                                            <span>Thêm vào giỏ hàng</span>
                                                                        </button>
                                                                    }
                                                                    </CartContext.Consumer>
                                                                    <a type="button" href="/cart" className="btn btn-solid-primary btn--l YtgjXY js-product-buy-now" aria-disabled="false">Giỏ hàng của bạn</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-briefing__footer">
                                                            <a rel="noopener noreferrer" className="_13C8_x flex items-center product-briefing__footer-link" href="#"><img src="./assets/images/shiled.png" className="_110HpJ" /><span className="XNBuk1">Gian Hàng Đảm Bảo</span><span>3 Ngày Hoàn Tiền</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="page-product__content">
                                                <div className="page-product__content--left">
                                                    <div className="product-detail product-details" id="product-details">
                                                        <div className="_2C2YFD product-details__item">
                                                            <div className="kP-bM3 product-details__item-title">CHI TIẾT SẢN PHẨM</div>
                                                            <div className="_2aZyWI product-details__item-content">
                                                                <div className="kIo6pj">
                                                                    <label className="_1ymsZN">Danh Mục</label>
                                                                    <div className="flex items-center _1z1CEl">
                                                                        <a className="JFOy4z _20XOUy" href="/danh-muc/set-whoo-mini">{detailProduct.CategoryName}</a>
                                                                    </div>
                                                                </div>
                                                                <div className="kIo6pj">
                                                                    <label className="_1ymsZN">Xuất Xứ</label>
                                                                    <div>{detailProduct.Madeby}</div>
                                                                </div>
                                                                <div className="kIo6pj">
                                                                    <label className="_1ymsZN">Thương Hiệu</label><a className="_2H-513" href="/product/information/brand?name=Whoo">{detailProduct.CategoryName}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="_2C2YFD product-details__item">
                                                            <div className="kP-bM3 product-details__item-title">MÔ TẢ SẢN PHẨM</div>
                                                            <div className="_2aZyWI product-details__item-content product__details__item_content__mobile">
                                                                <div className="_2u0jt9 wysiwyg"><p><strong>{detailProduct.ProductName}</strong></p>
                                                                    {detailProduct.Content}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ProductsRecommend />
                                                    <New />
                                                    <Watched/>
                                                </div>
                                                <BestSale />
                                            </div>
                                            <div className="product-action">
                                                <div className="product-action__wrapper">
                                                    <div className="product-action__inner">
                                                        <div className="product-action__cart">
                                                            <div className="product-action__form">
                                                                <div className="_19lAw4 tickid-input-quantity js-plus-minus" min={1} max={99}>
                                                                    <button className="btn btn-quantity _1zT8xu js-minus" type="button">
                                                                        <svg className="tickid-svg-icon " enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                                                        </svg>
                                                                    </button>
                                                                    <input className="_1zT8xu _18Y8Ul js-current" type="number" defaultValue={1} />
                                                                    <button className="btn btn-quantity _1zT8xu js-plus" type="button">
                                                                        <svg className="tickid-svg-icon icon-plus-sign" enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0}>
                                                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                                                        </svg>
                                                                    </button>
                                                                    {/* <span class="product-action__max-quantity">99 sản phẩm có </span> */}
                                                                </div>
                                                                <div className="product-action__buttons">
                                                                    <button type="button" className="btn btn-solid-success btn--l YtgjXY  js-product-add-cart" aria-disabled="false">Thêm vào giỏ</button>
                                                                    <button type="button" className="btn btn-solid-primary btn--l YtgjXY js-product-buy-now" aria-disabled="false">Mua ngay</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="site-social">
                                        <a href="tel:0965866851" title="Gọi cho chúng tôi qua điện thoại" className="btn-call btn-social">
                                            <strong>0965866851</strong>
                                            <span><svg className="tickid-svg-icon" viewBox="0 0 513.64 513.64">
                                                <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" data-original="#000000" className="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF" />
                                            </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.messenger.com/t/MyphamOhuiLGvina" target="_blank" className="btn btn-social btn-social--messenger" title="Chat với chúng tôi qua facebook messenger">
                                            <svg className="tickid-svg-icon" viewBox="0 0 44 44" fill="none">
                                                <circle cx={22} cy={22} r={22} fill="url(#paint0_linear)" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.0026 7.70215C14.1041 7.70215 7.70117 13.6308 7.70117 20.9442C7.70117 25.1115 9.78083 28.8286 13.0309 31.256V36.305L17.9004 33.6325C19.2 33.9922 20.5767 34.1863 22.0026 34.1863C29.9011 34.1863 36.304 28.2576 36.304 20.9442C36.304 13.6308 29.9011 7.70215 22.0026 7.70215ZM23.4221 25.5314L19.7801 21.6471L12.6738 25.5314L20.4908 17.2331L24.2216 21.1174L31.239 17.2331L23.4221 25.5314Z" fill="white" />
                                                <defs>
                                                    <linearGradient id="paint0_linear" x1="21.6426" y1="43.3555" x2="21.6426" y2="0.428639" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#1168CF" />
                                                        <stop offset={1} stopColor="#2CB7FF" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href="https://zalo.me/0965866851" target="_blank" className="btn btn-social btn-social--zalo" title="Chat với chúng tôi qua zalo">
                                            <svg x="0px" y="0px" viewBox="0 0 44 44" fill="none">
                                                <circle cx={22} cy={22} r={20} fill="url(#paint0_linear)" />
                                                <g clipPath="url(#clip0)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.274 34.0907C15.7773 34.0856 16.2805 34.0804 16.783 34.0804C16.7806 34.0636 16.7769 34.0479 16.7722 34.0333C16.777 34.0477 16.7808 34.0632 16.7832 34.0798C16.8978 34.0798 17.0124 34.0854 17.127 34.0965H25.4058C26.0934 34.0965 26.7809 34.0977 27.4684 34.0989C28.8434 34.1014 30.2185 34.1039 31.5935 34.0965H31.6222C33.5357 34.0798 35.0712 32.5722 35.0597 30.7209V27.4784C35.0597 27.4582 35.0612 27.4333 35.0628 27.4071C35.0676 27.3257 35.0731 27.2325 35.0368 27.2345C34.9337 27.2401 34.7711 27.2757 34.7138 27.3311C34.2744 27.6145 33.8483 27.924 33.4222 28.2335C32.57 28.8525 31.7179 29.4715 30.7592 29.8817C27.0284 31.0993 23.7287 31.157 20.2265 30.3385C20.0349 30.271 19.9436 30.2786 19.7816 30.292C19.6773 30.3007 19.5436 30.3118 19.3347 30.3068C19.3093 30.3077 19.2829 30.3085 19.2554 30.3093C18.9099 30.3197 18.4083 30.3348 17.8088 30.6877C16.4051 31.1034 14.5013 31.157 13.5175 31.0147C13.522 31.0245 13.5247 31.0329 13.5269 31.0407C13.5236 31.0341 13.5204 31.0275 13.5173 31.0208C13.5036 31.0059 13.4864 30.9927 13.4696 30.98C13.4163 30.9393 13.3684 30.9028 13.46 30.8268C13.4867 30.8102 13.5135 30.7929 13.5402 30.7757C13.5937 30.7412 13.6472 30.7067 13.7006 30.6771C14.4512 30.206 15.1559 29.6905 15.6199 28.9311C16.2508 28.1911 15.9584 27.9025 15.4009 27.3524L15.3799 27.3317C12.6639 24.6504 11.8647 21.8054 12.148 17.9785C12.486 15.8778 13.4829 14.0708 14.921 12.4967C15.7918 11.5433 16.8288 10.7729 17.9632 10.1299C17.9796 10.1198 17.9987 10.1116 18.0182 10.1032C18.0736 10.0793 18.1324 10.0541 18.1408 9.98023C18.1475 9.92191 18.0507 9.90264 18.0163 9.90264C17.3698 9.90264 16.7316 9.89705 16.0964 9.89148C14.8346 9.88043 13.5845 9.86947 12.3041 9.90265C10.465 9.95254 8.78889 11.1779 8.81925 13.3614C8.82689 17.2194 8.82435 21.0749 8.8218 24.9296C8.82053 26.8567 8.81925 28.7835 8.81925 30.7104C8.81925 32.5007 10.2344 34.0028 12.085 34.0749C13.1465 34.1125 14.2107 34.1016 15.274 34.0907ZM13.5888 31.1403C13.5935 31.1467 13.5983 31.153 13.6032 31.1594C13.7036 31.2455 13.8031 31.3325 13.9021 31.4202C13.8063 31.3312 13.7072 31.2423 13.6035 31.1533C13.5982 31.1487 13.5933 31.1444 13.5888 31.1403ZM16.5336 33.8108C16.4979 33.7885 16.4634 33.7649 16.4337 33.7362C16.4311 33.7358 16.4283 33.7352 16.4254 33.7345C16.4281 33.7371 16.4308 33.7397 16.4335 33.7423C16.4632 33.7683 16.4978 33.79 16.5336 33.8108Z" fill="white" />
                                                    <path d="M17.6768 21.6754C18.5419 21.6754 19.3555 21.6698 20.1633 21.6754C20.6159 21.6809 20.8623 21.8638 20.9081 22.213C20.9597 22.6509 20.6961 22.9447 20.2034 22.9502C19.2753 22.9613 18.3528 22.9558 17.4247 22.9558C17.1554 22.9558 16.8919 22.9669 16.6226 22.9502C16.2903 22.9336 15.9637 22.8671 15.8033 22.5345C15.6429 22.2019 15.7575 21.9026 15.9752 21.631C16.8575 20.5447 17.7455 19.4527 18.6336 18.3663C18.6851 18.2998 18.7367 18.2333 18.7883 18.1723C18.731 18.0781 18.6508 18.1224 18.582 18.1169C17.9633 18.1114 17.3388 18.1169 16.72 18.1114C16.5768 18.1114 16.4335 18.0947 16.296 18.067C15.9695 17.995 15.7689 17.679 15.8434 17.3686C15.895 17.158 16.0669 16.9862 16.2846 16.9363C16.4221 16.903 16.5653 16.8864 16.7085 16.8864C17.7284 16.8809 18.7539 16.8809 19.7737 16.8864C19.9571 16.8809 20.1347 16.903 20.3123 16.9474C20.7019 17.0749 20.868 17.4241 20.7133 17.7899C20.5758 18.1058 20.3581 18.3774 20.1404 18.649C19.3899 19.5747 18.6393 20.4948 17.8888 21.4093C17.8258 21.4814 17.7685 21.5534 17.6768 21.6754Z" fill="white" />
                                                    <path d="M24.3229 18.7604C24.4604 18.5886 24.6036 18.4279 24.8385 18.3835C25.2911 18.2948 25.7151 18.5775 25.7208 19.021C25.738 20.1295 25.7323 21.2381 25.7208 22.3467C25.7208 22.6349 25.526 22.8899 25.2453 22.973C24.9588 23.0783 24.6322 22.9952 24.4432 22.7568C24.3458 22.6404 24.3057 22.6183 24.1682 22.7236C23.6468 23.1338 23.0567 23.2058 22.4207 23.0063C21.4009 22.6848 20.9827 21.9143 20.8681 20.9776C20.7478 19.9632 21.0973 19.0986 22.0369 18.5664C22.816 18.1175 23.6067 18.1563 24.3229 18.7604ZM22.2947 20.7836C22.3061 21.0275 22.3863 21.2603 22.5353 21.4543C22.8447 21.8534 23.4348 21.9365 23.8531 21.6372C23.9218 21.5873 23.9848 21.5263 24.0421 21.4543C24.363 21.033 24.363 20.3402 24.0421 19.9189C23.8817 19.7027 23.6296 19.5752 23.3603 19.5697C22.7301 19.5309 22.289 20.002 22.2947 20.7836ZM28.2933 20.8168C28.2474 19.3923 29.2157 18.3281 30.5907 18.2893C32.0517 18.245 33.1174 19.1928 33.1632 20.5785C33.209 21.9808 32.321 22.973 30.9517 23.106C29.4563 23.2502 28.2704 22.2026 28.2933 20.8168ZM29.7313 20.6838C29.7199 20.961 29.8058 21.2326 29.9777 21.4598C30.2928 21.8589 30.8829 21.9365 31.2955 21.6261C31.3585 21.5818 31.41 21.5263 31.4616 21.4709C31.7939 21.0496 31.7939 20.3402 31.4673 19.9189C31.3069 19.7083 31.0548 19.5752 30.7855 19.5697C30.1668 19.5364 29.7313 19.991 29.7313 20.6838ZM27.7891 19.7138C27.7891 20.573 27.7948 21.4321 27.7891 22.2912C27.7948 22.6848 27.474 23.0118 27.0672 23.0229C26.9985 23.0229 26.924 23.0174 26.8552 23.0007C26.5688 22.9287 26.351 22.6349 26.351 22.2857V17.8791C26.351 17.6186 26.3453 17.3636 26.351 17.1031C26.3568 16.6763 26.6375 16.3992 27.0615 16.3992C27.4969 16.3936 27.7891 16.6708 27.7891 17.1142C27.7948 17.9789 27.7891 18.8491 27.7891 19.7138Z" fill="white" />
                                                    <path d="M22.2947 20.7828C22.289 20.0013 22.7302 19.5302 23.3547 19.5634C23.6239 19.5745 23.876 19.702 24.0364 19.9181C24.3573 20.3339 24.3573 21.0322 24.0364 21.4535C23.7271 21.8526 23.1369 21.9357 22.7187 21.6364C22.65 21.5865 22.5869 21.5255 22.5296 21.4535C22.3864 21.2595 22.3062 21.0267 22.2947 20.7828ZM29.7314 20.683C29.7314 19.9957 30.1668 19.5357 30.7856 19.569C31.0549 19.5745 31.307 19.7075 31.4674 19.9181C31.794 20.3394 31.794 21.0544 31.4617 21.4701C31.1408 21.8636 30.545 21.9302 30.1382 21.6198C30.0752 21.5754 30.0236 21.52 29.9778 21.459C29.8059 21.2318 29.7257 20.9602 29.7314 20.683Z" fill="#0068FF" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear" x1={22} y1={0} x2={22} y2={44} gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#5FA0FF" />
                                                        <stop offset={1} stopColor="#035ADA" />
                                                    </linearGradient>
                                                    <clipPath id="clip0">
                                                        <rect width="26.3641" height="24.2" fill="white" transform="translate(8.78906 9.90234)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="chat js-chat ">
                                        <div className="chat__wrapper">
                                            <div className="chat__inner">
                                                <div className="chat__header js-chat-header">
                                                    <div className="chat__header-icon">
                                                        <svg className="tickid-svg-icon" viewBox="0 -26 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 100c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0" /><path d="m90 280c5.519531 0 10-4.480469 10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0" /><path d="m336 0c-90.027344 0-163.917969 62.070312-169.632812 140.253906-85.738282 4.300782-166.367188 66.125-166.367188 149.746094 0 34.945312 13.828125 68.804688 39 95.632812 4.980469 20.53125-1.066406 42.292969-16.070312 57.296876-2.859376 2.859374-3.714844 7.160156-2.167969 10.898437 1.546875 3.734375 5.191406 6.171875 9.238281 6.171875 28.519531 0 56.003906-11.183594 76.425781-30.890625 19.894531 6.78125 45.851563 10.890625 69.574219 10.890625 90.015625 0 163.898438-62.054688 169.628906-140.222656 20.9375-.929688 42.714844-4.796875 59.945313-10.667969 20.421875 19.707031 47.90625 30.890625 76.425781 30.890625 4.046875 0 7.691406-2.4375 9.238281-6.171875 1.546875-3.738281.691407-8.039063-2.167969-10.898437-15.003906-15.003907-21.050781-36.765626-16.070312-57.296876 25.171875-26.828124 39-60.6875 39-95.632812 0-86.886719-86.839844-150-176-150zm-160 420c-23.601562 0-50.496094-4.632812-68.511719-11.800781-3.859375-1.539063-8.269531-.527344-11.078125 2.539062-12.074218 13.199219-27.773437 22.402344-44.878906 26.632813 9.425781-18.058594 11.832031-39.347656 6.097656-59.519532-.453125-1.589843-1.292968-3.042968-2.445312-4.226562-22.6875-23.367188-35.183594-53.066406-35.183594-83.625 0-70.46875 71.4375-130 156-130 79.851562 0 150 55.527344 150 130 0 71.683594-67.289062 130-150 130zm280.816406-186.375c-1.152344 1.1875-1.992187 2.640625-2.445312 4.226562-5.734375 20.171876-3.328125 41.460938 6.097656 59.519532-17.105469-4.226563-32.804688-13.433594-44.878906-26.632813-2.808594-3.0625-7.21875-4.078125-11.078125-2.539062-15.613281 6.210937-37.886719 10.511719-58.914063 11.550781-2.921875-37.816406-21.785156-73.359375-54.035156-99.75h130.4375c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-161.160156c-22.699219-11.554688-48.1875-18.292969-74.421875-19.707031 5.746093-67.164063 70.640625-120.292969 149.582031-120.292969 84.5625 0 156 59.53125 156 130 0 30.558594-12.496094 60.257812-35.183594 83.625zm0 0" /><path d="m256 260h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" /><path d="m256 320h-166c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h166c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" /><path d="m422 100h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" /></svg>
                                                    </div>
                                                    <div className="chat__header-title">Chat</div>
                                                    <div className="chat__header-action">
                                                        <button className="btn chat__header-collapse js-chat-header-collapse">
                                                            <svg className="tickid-svg-icon" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M506.157,132.386c-7.803-7.819-20.465-7.831-28.285-0.029l-207.73,207.299c-7.799,7.798-20.486,7.797-28.299-0.015L34.128,132.357c-7.819-7.803-20.481-7.79-28.285,0.029c-7.802,7.819-7.789,20.482,0.029,28.284l207.701,207.27c11.701,11.699,27.066,17.547,42.433,17.547c15.358,0,30.719-5.846,42.405-17.533L506.128,160.67C513.946,152.868,513.959,140.205,506.157,132.386z" /></g></g></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="chat__body">
                                                    <div className="conversation">
                                                        <div className="conversation__header" />
                                                        <div className="conversation__body">
                                                            <div className="conversation__chat">
                                                                <div className="conversation__chat-wrapper">
                                                                    <div className="conversation__chat-inner">
                                                                        <div className="conversation__chat-list js-chat-list">
                                                                            <div className="conversation__chat-list-login">
                                                                                <p>Bạn cần đăng nhập để chat với shop</p>
                                                                                <a href="/auth/login" className="btn btn-solid-primary btn--s">Đăng nhập ngay</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="conversation__footer">
                                                            <div className="conversation__form-box">
                                                                <form action="/message/store" method="GET" className="conversation__form js-conversation-form">
                                                                    <div className="conversation__textarea-wrapper">
                                                                        <textarea className="conversation__textarea js-conversation-form-textarea" placeholder="Gửi tin nhắn" defaultValue={""} />
                                                                    </div>
                                                                    <button type="button" className="btn conversation__form-submit">
                                                                        <svg className="tickid-svg-icon" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M481.508,210.335L68.414,38.926c-17.403-7.222-37.063-4.045-51.309,8.287C2.859,59.547-3.099,78.55,1.557,96.808 L42.151,256L1.557,415.192c-4.656,18.258,1.301,37.261,15.547,49.595c14.273,12.358,33.938,15.495,51.31,8.287l413.094-171.409 C500.316,293.861,512,276.363,512,256C512,235.637,500.316,218.139,481.508,210.335z M470.009,273.955L56.916,445.364 c-6.947,2.881-14.488,1.665-20.175-3.259c-5.686-4.923-7.971-12.212-6.113-19.501L69.287,271h149.065 c8.285,0,15.001-6.716,15.001-15.001c0-8.285-6.716-15.001-15.001-15.001H69.288L30.628,89.396 c-1.858-7.288,0.427-14.578,6.113-19.501c5.686-4.923,13.225-6.141,20.174-3.259l413.094,171.409 c11.125,4.616,11.99,14.91,11.99,17.955S481.134,269.339,470.009,273.955z" /></g></g></svg>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                            <div className="conversation__actions">
                                                                <div className="conversation__send-image">
                                                                    <form className="conversation__send-image-form js-form-send-image" action="/message/store" encType="multipart/form-data">
                                                                        <input type="file" name="image" className="hidden js-input-get-image" />
                                                                        <button type="button" className="btn conversation__send-image-get js-btn-get-image">
                                                                            <svg className="tickid-svg-icon" x="0px" y="0px" viewBox="0 0 352 352"><g><g><g><path d="M332,16.4C321.6,6,307.6,0,292,0H60C44.4,0,30.4,6.4,20,16.4C9.6,26.8,3.6,40.8,3.6,56.4v184.4V258v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h232v0.4c15.6,0,29.6-6.4,40-16.4c10.4-10.4,16.4-24.4,16.4-40v-37.2v-51.2V56.4C348.4,40.8,342,26.8,332,16.4z M327.2,258.4v37.2c0,9.6-4,18.4-10.4,24.8c-6.4,6.4-15.2,10.4-24.8,10.4H60c-9.6,0-18.4-4-24.8-10.4c-6.4-6.8-10-15.2-10-24.8v-37.2v-12.8L96,174.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l66.4,66.4V258.4z M327.2,181.6l-58.8-59.2c-4-4-10.8-4.4-15.2,0L164,212l-60.4-60.4c-4-4-10.8-4.4-15.2,0l-63.2,63.6V56.4c0-9.6,3.6-18,10-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8V181.6z" /><circle cx={162} cy="120.4" r="28.8" /></g></g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div id="modal-message" className="modal-message js-modal">
                                        <div className="modal-message__wrapper">
                                            <div className="modal-message__content js-message-content" />
                                        </div>
                                    </div><div id="modal-confirm" className="modal modal--confirm js-modal-confirm">
                                        <div className="modal__overlay" />
                                        <div className="modal__wrapper">
                                            <div className="modal__inner">
                                                <button className="btn modal__action js-btn-close"><svg className="tickid-svg-icon" x="0px" y="0px" viewBox="0 0 512.001 512.001"><g><g><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z" /></g></g></svg></button>
                                                <div className="modal__header">
                                                    <div className="modal__title js-title">Bạn có muốn huỷ bỏ đơn hàng này không ?</div>
                                                </div>
                                                <div className="modal__body">
                                                    <div className="modal__message js-content">Đơn hàng bị huỷ bỏ sẽ không được </div>
                                                </div>
                                                <div className="modal__footer">
                                                    <div className="modal__buttons">
                                                        <button className="tickid-button-outline tickid-button-outline--fill tickid-button-outline--primary js-btn-cancel">Huỷ bỏ</button>
                                                        <button className="tickid-button-outline tickid-button-outline--fill tickid-button-outline--danger js-btn-accept">Đồng ý</button>
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
export default DetailProduct;