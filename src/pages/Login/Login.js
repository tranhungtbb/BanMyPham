import React, { Component } from 'react';
import cookie from 'js-cookie';
import axios from 'axios';
import qs from 'query-string';
import  { Redirect } from 'react-router-dom';

import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import Footer from '../../components/Footer/Footer';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            username : 'DinhHung',
            password : '123'
        }
        this.authentication = this.authentication.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateUsername(event){
        this.setState({username : event.target.value})
    }

    updatePassword(event){
        this.setState({password : event.target.value})
    }

    

    async authentication() {
        const { history } = this.props;
        axios.post('http://localhost:51466/token',
            qs.stringify({
                    username: this.state.username, //gave the values directly for testing
                    password: this.state.password,
                    grant_type: 'password'
            }), {
                headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
                }
            }
            ).then(function(response) {
                cookie.set("jwt_access_token", response.data.access_token, { expires: 30, signed: true });
                cookie.set("jwt_refresh_token", response.data.refresh_token, { expires: 60, signed: true });
                
            }).then(() => this.setState({ redirect: true }))
            .catch(function(err){
                alert(err + "Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!");
            });
    }

    

    render() {
        const { redirect } = this.state;
        debugger
        if(redirect){
            return <Redirect push to="/" />
        }else{
            return (
                <div className="Login">
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
                                                            <h4>Đăng nhập</h4>
                                                        </div>
                                                    </div>
                                                    <div className="form_login" style={{ maxWidth: 300, margin: '0px auto' }}>
                                                        
                                                        <div className="form-group">
                                                            <label htmlFor="InputUserName">Tên đăng nhập</label>
                                                            <input type="text" className="form-control" id="InputUserName" 
                                                                onChange={this.updateUsername}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="InputPass">Mật khẩu</label>
                                                            <input type="password" className="form-control" id="InputPass"
                                                                onChange={this.updatePassword}
                                                            />
                                                        </div>
                                                        <button
                                                            className="btn btn-solid-primary button_login"
                                                            onClick={this.authentication}
                                                            >Đăng nhập</button>
                                                        
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
export default Login;