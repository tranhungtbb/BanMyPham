import React, { Component } from 'react';
import qs from 'query-string';

import Call from '../../utils/Call';
import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import MenuManin2 from '../../components/Menu/MenuMain2';
import Footer from '../../components/Footer/Footer';
import * as Config from '../../constants/Config';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    async componentDidMount() {
        const value = qs.parse(this.props.location.search);
        const key = value.key;
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        await Call('api/getListProductSearch?key=' + key, 'GET', headers).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div id="main" className="module--tickid">
                <div>
                    <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                    <div className="tickid-page-wrapper">
                        <div className="tickid-top container-wrapper js-header">
                            <MenuTop />
                            <SearchTop />
                        </div>
                        <div className="main">
                            <div className="main-content">
                                <div className="shop-search-page container">
                                    <div className="shop-search-page__body-section">
                                        <div className="shop-search-page__left-section">
                                            <MenuManin2 />
                                        </div>
                                        <div className="shop-search-page__right-section">
                                            <div className="shop-all-product-view">
                                                <div className="tickid-sort-bar hidden-sm tickid-filter">
                                                    <span className="tickid-sort-bar__label">Sắp xếp theo</span>
                                                    <div className="tickid-sort-by-options">
                                                        <a href="?sortBy=ordering" className="tickid-sort-by-options__option tickid-sort-by-options__option--selected">Phổ biến</a>
                                                        <a href="?sortBy=created" className="tickid-sort-by-options__option ">Mới nhất</a>
                                                        <a href="?sortBy=sales" className="tickid-sort-by-options__option ">Bán chạy</a>
                                                        <div className="select-with-status select-with-status--hover">
                                                            <div className="select-with-status__holder js-select">
                                                                <span className="select-with-status__placeholder js-current">Giá</span>
                                                                <svg className="tickid-svg-icon icon-arrow-down-small" viewBox="0 0 10 6">
                                                                    <path d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z" fillRule="nonzero" />
                                                                </svg>
                                                                <div className="select-with-status__dropdown tickid-modal__transition-enter-done">
                                                                    <a href="?sortBy=price&order=asc" className="select-with-status__dropdown-item select-with-status__dropdown-item--with-tick js-option">Giá:Thấp đến Cao</a>
                                                                    <a href="?sortBy=price&order=desc" className="select-with-status__dropdown-item select-with-status__dropdown-item--with-tick js-option">Giá:Cao đến Thấp</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tickid-mini-page-controller hidden-l">
                                                        <div className="tickid-mini-page-controller__state"><span className="tickid-mini-page-controller__current">1</span>/<span className="tickid-mini-page-controller__total">4</span></div>
                                                        <button className="tickid-button-outline tickid-mini-page-controller__prev-btn tickid-button-outline--disabled" disabled>
                                                            <svg className="tickid-svg-icon icon-arrow-left-small" viewBox="0 0 7 11">
                                                                <path d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z" fillRule="nonzero" />
                                                            </svg>
                                                        </button>
                                                        <a href="?page=2" className="tickid-button-outline tickid-mini-page-controller__next-btn">
                                                            <svg className="tickid-svg-icon icon-arrow-right-small" viewBox="0 0 7 11">
                                                                <path d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z" fillRule="nonzero" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="tickid-filter-mobile">
                                                    <div className="wrapper">
                                                        <div className="content">
                                                            <ul className="list">
                                                                <li className="item item--active">
                                                                    <a href="?sortBy=ordering" className="item-link">Phổ biến</a>
                                                                </li>
                                                                <li className="item ">
                                                                    <a href="?sortBy=created" className="item-link">Mới nhất</a>
                                                                </li>
                                                                <li className="item ">
                                                                    <a href="?sortBy=sales" className="item-link">Bán chạy</a>
                                                                </li>
                                                                <li className="item item--price  ">
                                                                    <a href="?sortBy=price&order=desc" className="item-link">Giá
                              <svg viewBox="0 0 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="tickid-svg-icon icon-arrow-up-down">
                                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                <g transform="translate(-345.000000, -97.000000)">
                                                                                    <g transform="translate(343.000000, 96.000000)">
                                                                                        <rect id="Rectangle" fill="#D8D8D8" opacity={0} x={0} y={0} width={12} height={12} />
                                                                                        <g strokeWidth={1} transform="translate(2.500000, 1.000000)" fill="#757575">
                                                                                            <g id="Group-11" fillRule="nonzero">
                                                                                                <path d="M3.13751228,3.74264069 L0.150147331,0.853553391 C-0.0500491103,0.658291245 -0.0500491103,0.341708755 0.150147331,0.146446609 C0.350343772,-0.0488155365 0.674926335,-0.0488155365 0.875122776,0.146446609 L3.5,2.68497122 L6.12487722,0.146446609 C6.32507367,-0.0488155365 6.64965623,-0.0488155365 6.84985267,0.146446609 C7.05004911,0.341708755 7.05004911,0.658291245 6.84985267,0.853553391 L3.86248772,3.74264069 C3.66229128,3.93790283 3.33770872,3.93790283 3.13751228,3.74264069 Z" transform="translate(3.500000, 1.944544) scale(1, -1) translate(-3.500000, -1.944544) ">
                                                                                                </path>
                                                                                            </g>
                                                                                            <g transform="translate(3.500000, 8.000000) scale(1, -1) translate(-3.500000, -8.000000) translate(0.000000, 6.000000)" fillRule="nonzero">
                                                                                                <path d="M3.13751228,3.74264069 L0.150147331,0.853553391 C-0.0500491103,0.658291245 -0.0500491103,0.341708755 0.150147331,0.146446609 C0.350343772,-0.0488155365 0.674926335,-0.0488155365 0.875122776,0.146446609 L3.5,2.68497122 L6.12487722,0.146446609 C6.32507367,-0.0488155365 6.64965623,-0.0488155365 6.84985267,0.146446609 C7.05004911,0.341708755 7.05004911,0.658291245 6.84985267,0.853553391 L3.86248772,3.74264069 C3.66229128,3.93790283 3.33770872,3.93790283 3.13751228,3.74264069 Z" transform="translate(3.500000, 1.944544) scale(1, -1) translate(-3.500000, -1.944544) ">
                                                                                                </path>
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                        <svg viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="tickid-svg-icon icon-arrow-down">
                                                                            <g strokeWidth={1} fillRule="evenodd">
                                                                                <g transform="translate(-344.000000, -97.000000)">
                                                                                    <g transform="translate(303.000000, 94.000000)">
                                                                                        <g transform="translate(40.000000, 2.000000)">
                                                                                            <rect fill="#D8D8D8" fillRule="evenodd" opacity={0} x={0} y={0} width={12} height={12} />
                                                                                            <path d="M6.37298892,10.8430734 C6.27951893,10.9396946 6.14701198,11 6.000064,11 C5.85438692,11 5.72290214,10.9407332 5.62957298,10.8455722 L1.65014733,6.96422851 C1.44995089,6.76896637 1.44995089,6.45238388 1.65014733,6.25712173 C1.85034377,6.06185959 2.17492633,6.06185959 2.37512278,6.25712173 L5.48742894,9.29271806 L5.48742894,1.5 C5.48742894,1.22385763 5.71694348,1 6.000064,1 C6.28318452,1 6.51269905,1.22385763 6.51269905,1.5 L6.51269905,9.29259322 L9.62487722,6.25712173 C9.82507367,6.06185959 10.1496562,6.06185959 10.3498527,6.25712173 C10.5500491,6.45238388 10.5500491,6.76896637 10.3498527,6.96422851 L6.37298892,10.8430734 Z" id="Combined-Shape" fillRule="nonzero" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="shop-search-result-view grid-card grid-card--four-up">
                                                    <div className="row">
                                                        {
                                                            products.map((item, index) => {
                                                                return (
                                                                    <div className="card__wrapper">
                                                                        <div className="card">
                                                                            <a href={'/product?id=' + item.ID} className="card-link ">
                                                                                <div className="_1gkBDw">
                                                                                    <div className="_3ZDC1p card-header">
                                                                                        <div className="_1T9dHf _3XaILN" style={{ backgroundImage: "url("+ Config.API_URL + item.Image  +")", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                                                                                        </div>
                                                                                        <div className="_2N1Tif">
                                                                                            <div className="tickid-badge tickid-badge--fixed-width tickid-badge--promotion">
                                                                                                <div className="tickid-badge--promotion__label-wrapper tickid-badge--promotion__label-wrapper--vi-VN">
                                                                                                    <span className="percent">{item.Discount}%</span>
                                                                                                    <span className="tickid-badge--promotion__label-wrapper__off-label tickid-badge--promotion__label-wrapper__off-label--vi-VN">giảm</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card__cart-badge">
                                                                                            <div className="card__cart-badge-inner">
                                                                                                <button type="button" className="btn btn-cart-badge js-btn-add-cart" data-product={item.ID}>
                                                                                                    <span className="btn-cart-badge__inner">
                                                                                                        <svg height="1rem" viewBox="0 -31 512.00033 512" width="1rem" xmlns="http://www.w3.org/2000/svg">
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
                                                                                            <div className="_1NoI8_ _2gr36I">{item.ProductName}</div>
                                                                                        </div>
                                                                                        <div className="_36zw98">
                                                                                            <div className="_1w9jLI QbH7Ig t-e-Bx">{item.Price}đ
                                  </div>
                                                                                            <div className="_1w9jLI _37ge-4 _2XtIUk" style={{ maxWidth: 'calc(100% - 22px)' }}><span className="_341bF0">{item.Promote}đ</span></div>
                                                                                        </div>
                                                                                        <div className="_2-i6yP">
                                                                                            <div className="Yy_uTH card_favorite js-single-sign-on ">
                                                                                                <svg width={16} height={16} viewBox="0 0 16 16" version="1.1" className="icon-favorite">
                                                                                                    <path fill="#f53d2f" d="m7.5718913 3.830906l.0395416.0333051c.1397621.1194612.2698939.2494171.3885671.3886499.1186733-.1392328.2488051-.2691887.3885671-.3886499l.0395416-.0333051c.6252617-.5189518 1.4350848-.830906 2.2718913-.830906 1.848 0 3.3 1.4506812 3.3 3.2970027 0 2.2659401-2.04 4.1122616-5.13 6.9177112l-.87.7852861-.87-.7912807c-3.09-2.799455-5.13-4.6457765-5.13-6.9117166 0-1.8463215 1.452-3.2970027 3.3-3.2970027.8368065 0 1.6466296.3119542 2.2718913.830906z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                                <svg height={16} viewBox="0 0 16 16" width={16} version="1.1" className="icon-not-favorite">
                                                                                                    <path className="change_filter-favorite" d="m7.251221 4.2145388c-.549143-.4552525-1.2488781-.7145388-1.951221-.7145388-1.5719593 0-2.8 1.2269253-2.8 2.7970027 0 .5878515.158291 1.1598348.483492 1.7618948.6414654 1.1875754 1.5644044 2.1358244 4.4829309 4.7799304l.5348542.4864596.5326254-.4807607c2.9306205-2.660747 3.8471674-3.6039919 4.486777-4.7931984.3223805-.5993922.4793205-1.1689848.4793205-1.7543257 0-1.5700774-1.2280407-2.7970027-2.8-2.7970027-.7029148 0-1.4032175.2597087-1.9497845.7133288l-.0367779.0309601c-.1203966.1029087-.2318185.2143106-.3329071.3329122l-.3805305.4464557-.3805305-.4464557c-.1010886-.1186016-.2125105-.2300035-.3301434-.3305672z" fill="none" stroke="#000" strokeOpacity=".54" />
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="_2bRB2L" data-sqe="rating">
                                                                                                <div className="tickid-rating-stars">
                                                                                                    <div className="tickid-rating-stars__stars">
                                                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                                                            <svg className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                                                                                                                </polygon>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                                                            <svg className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                                                                                                                </polygon>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                                                            <svg className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                                                                                                                </polygon>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                                                            <svg className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                                                                                                                </polygon>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div className="tickid-rating-stars__star-wrapper">
                                                                                                            <svg className="tickid-svg-icon tickid-rating-stars__gold-star icon-rating-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                                                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                                                                                                                </polygon>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
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
                                                <div className="tickid-page-controller tickid-page-controller--paginate">
                                                    <button className="tickid-icon-button tickid-icon-button--left tickid-button-prev">
                                                        <svg className="tickid-svg-icon icon-arrow-left" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                            <g>
                                                                <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </button><button className="tickid-button-solid tickid-button-solid--primary">1</button><a href="?page=2" className="tickid-button-no-outline">2</a><a href="?page=3" className="tickid-button-no-outline">3</a><a href="?page=4" className="tickid-button-no-outline">4</a><a href="?page=2" className="tickid-icon-button tickid-icon-button--right tickid-button-next active">
                                                        <svg className="tickid-svg-icon icon-arrow-right" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                                            </path>
                                                        </svg>
                                                    </a></div>
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
        );
    }
}

