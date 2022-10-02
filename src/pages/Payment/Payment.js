import React, { Component } from 'react';
import cookie from 'js-cookie';

import Call from '../../utils/Call';
import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import Footer from '../../components/Footer/Footer';
import * as Config from '../../constants/Config';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            products: []
        }
    }

    async componentDidMount() {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': Config.Author_Type + ' ' + cookie.get('jwt_access_token')
        }
        await Call('api/Payment', 'GET', headers).then(res => {
            debugger
            this.setState({
                products: res.data,
                status: true
            })
        }).catch((err) => {
            alert("Vui lòng đăng nhập để được mua hàng!");
        })
    }

    render() {
        const { status, products } = this.state;
        // var checkCookie = cookie.get('jwt_access_token');
        // if(checkCookie != undefined){
        if (status == false) {
            return (
                <div className="Payment">
                    <div id="main" className="module--tickid">
                        <div>
                            <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                            <div className="tickid-page-wrapper">
                                <MenuTop />
                                <SearchTop />
                                <div className="main">
                                    <div className="main-content">
                                        <div className="cart-success cart-success--page">
                                            <div className="container">
                                                <div className="cart-success__content">
                                                    <div className="cart-success__header">
                                                        <div className="cart-success__title">
                                                            <h4>Đặt hàng không thành công!</h4>
                                                            <p>Vui lòng xem xem lại đơn hàng của bạn!</p>
                                                        </div>
                                                    </div>
                                                    <div className="cart-success__footer">

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
        else {
            return (
                <div className="Payment">
                    <div id="main" className="module--tickid">
                        <div>
                            <div className="tickid-progress-bar tickid-progress-bar--reset" style={{ willChange: 'auto' }} />
                            <div className="tickid-page-wrapper">
                                <MenuTop />
                                <SearchTop />
                                <div className="main">
                                    <div className="main-content">
                                        <div className="cart-success cart-success--page">
                                            <div className="container">
                                                <div className="cart-success__content">
                                                    <div className="cart-success__header">
                                                        <div className="cart-success__title">
                                                            <h4>Đặt hàng thành công!</h4>
                                                            <p>Cảm ơn bạn đã đặt mua hàng tại Mỹ Phẩm Ohui - LG Vina</p>
                                                            <p>Đơn hàng của bạn hiện đang được xử lý. Chúng tôi sẽ sớm liên hệ để giao hàng.</p>
                                                        </div>
                                                        <div className="cart-success__subtitle">Mã đơn hàng của bạn: <b>00000015563</b> -14:19 12/11/2020</div>
                                                    </div>
                                                    <div className="cart-success__body">
                                                        <div className="cart-success__box">
                                                            <div className="cart-success__box-title">Thông tin đơn hàng:</div>
                                                            <div className="cart-success__list">
                                                                <div className="cart-success__item cart-success__item--label">
                                                                    <div className="cart-success__item-image">Ảnh</div>
                                                                    <div className="cart-success__item-name">Tên sản phẩm</div>
                                                                    <div className="cart-success__item-quantity">Số lượng</div>
                                                                    <div className="cart-success__item-attribute">Thuộc tính</div>
                                                                    <div className="cart-success__item-price">Đơn giá</div>
                                                                </div>
                                                                {
                                                                    products.map((item, index) => {
                                                                        return (
                                                                            <div className="cart-success__item">
                                                                                <div className="cart-success__item-image">
                                                                                    <figure className="figure">
                                                                                        <img src={Config.API_URL + item.Image} alt />
                                                                                    </figure>
                                                                                </div>
                                                                                <div className="cart-success__item-name">{item.ProductName}</div>
                                                                                <div className="cart-success__item-quantity">{item.Count}</div>
                                                                                <div className="cart-success__item-attribute" />
                                                                                <div className="cart-success__item-price">{item.TotalPrice}đ</div>
                                                                            </div>

                                                                        );
                                                                    })
                                                                }
                                                                <div className="cart-success__item cart-success__item--label">
                                                                    <div className="cart-success__item-title">Tổng giá trị sản phẩm</div>
                                                                    <div className="cart-success__item-value">
                                                                        {
                                                                            products.reduce((sum, item) => {
                                                                                return sum += item.TotalPrice
                                                                            }, 0)
                                                                        }đ
                                                                    </div>
                                                                </div>
                                                                <div className="cart-success__item cart-success__item--label">
                                                                    <div className="cart-success__item-title">Phí Ship</div>
                                                                    <div className="cart-success__item-value">Chưa tính</div>
                                                                </div>
                                                                <div className="cart-success__item cart-success__item--label">
                                                                    <div className="cart-success__item-title">Tổng thanh toán</div>
                                                                    <div className="cart-success__item-value">
                                                                        {
                                                                            products.reduce((sum, item) => {
                                                                                return sum += item.TotalPrice
                                                                            }, 0)
                                                                        }đ
                                                                        đ</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cart-success__box">
                                                            <div className="cart-success__box-title">Thông tin nhận hàng:</div>
                                                            <div className="cart-success__address">
                                                                <div className="cart-success__address-group">
                                                                    <label className="cart-success__address-label">Người nhận : </label>
                                                                    <p className="cart-success__address-content">Tran dinh hung</p>
                                                                </div>
                                                                <div className="cart-success__address-group">
                                                                    <label className="cart-success__address-label">Số điện thoại : </label>
                                                                    <p className="cart-success__address-content">0329920043</p>
                                                                </div>
                                                                <div className="cart-success__address-group">
                                                                    <label className="cart-success__address-label">Địa chỉ : </label>
                                                                    <p className="cart-success__address-content">123f</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-success__footer">

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
export default Payment;