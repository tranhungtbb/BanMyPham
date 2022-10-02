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
            products: []
        }
    }

    async componentDidMount() {

    }

    render() {
        const { products } = this.state;
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
                                                        <h4>Đăng kí</h4>
                                                    </div>
                                                </div>
                                                <div className="form_login" style={{ maxWidth: 300, margin: '0px auto' }}>
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="InputUserName">Họ tên</label>
                                                            <input type="text" className="form-control" id="InputUserName" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Gender</label>
                                                            <input type="text" className="form-control" id="InputPass" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Address</label>
                                                            <input type="text" className="form-control" id="InputPass" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Email</label>
                                                            <input type="text" className="form-control" id="InputPass" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Tên đăng nhập</label>
                                                            <input type="text" className="form-control" id="InputPass" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Mật khẩu</label>
                                                            <input type="password" className="form-control" id="InputPass" required />
                                                        </div>
                                                        <button type="submit" className="btn btn-solid-primary button_login">Đăng kí</button>
                                                    </form>
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
export default Payment;