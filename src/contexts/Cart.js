import React, { Component } from 'react';
import cookie from 'js-cookie';

import Call from '../utils/Call';
import * as constants from '../constants/Config';

export const CartContext = React.createContext();
export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {},
            cartItems: [], // nó là 1 cái mảng với item giống trong db
            status : true
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeToCart = this.removeToCart.bind(this);
        this.updateToCart = this.updateToCart.bind(this);
        this.count = this.count.bind(this);
    }

    async addToCart(id, count) {
        var checkCookie = cookie.get('jwt_access_token');
        debugger
        if(checkCookie != undefined){
            const { headers } = this.state;
            await Call('api/addToCart?id=' + id + '&&count='+ count, 'GET', headers).then(res => {
                if (res.code === 1) {
                    Call('api/carts', 'GET', headers).then(res => {
                        this.setState({
                            cards: res.data
                        })
                    })
                    alert(res.messages);
                } else {
                    alert(res.messages);
                }
            }).catch(err => alert(err));

        }else{
            var products;
            let headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Content-Type', 'application/json');

            await Call('api/getAllProduct', 'GET', headers)
            .then(res => {
                products = res.data
            })


            var cartItems = this.state.cartItems;
            // nếu mảng không rỗng
            if (cartItems.length !== 0) {
                // biến kiểm tra trùng hay không?
                var status = false;
                cartItems.forEach((element, index) => {
                    if (element.ProductID === id) {
                        status = true;
                        cartItems[index].Count = element.Count + count;
                        cartItems[index].TotalPrice = element.Price * cartItems[index].Count;
                    }
                });
                // nếu không trùng thì push vào arr
                if (status == false) {
                    products.filter((i,index) => {
                        if (id === i.ID) {
                            var card = {};
                            card.ID = index;
                            card.ProductID = i.ID;
                            card.ProductName = i.ProductName;
                            card.Price = i.Promote;
                            card.Count = count;
                            card.Image = i.Image;
                            card.TotalPrice = count * i.Promote;
                            cartItems.push(card);
                            return;
                        }
                    })
                }
            }
            // nếu mảng rỗng thì add luôn vào
            else{
                products.filter((i,index) => {
                    if (id === i.ID) {
                        var card = {};
                        card.ID = index;
                        card.ProductID = i.ID;
                        card.ProductName = i.ProductName;
                        card.Price = i.Promote;
                        card.Count = count;
                        card.Image = i.Image;
                        card.TotalPrice = count * i.Promote;
                        cartItems.push(card);
                        return;
                    }
                })
            }
            await this.setState({
                cartItems: cartItems
            })
            var arrLocalStorage = cartItems.map((item) => {
                var obj = {};
                obj.ID = item.ProductID;
                obj.Count = item.Count
                return obj;
            })
            localStorage.setItem('cartItems', JSON.stringify(arrLocalStorage));
            alert("Thêm giỏ hàng thành công!");
        }
        this.count();
    }

    async removeToCart(idProduct) {
        var checkCookie = cookie.get('jwt_access_token');
        if(checkCookie != undefined){
            const { headers } = this.state;
            await Call('api/removeToCart?productID=' + idProduct ,'GET', headers).then(res => {
                if (res.code === 1) {
                    Call('api/carts', 'GET', headers).then(response => {
                        this.setState({
                            cartItems: response.data
                        })
                    })
                    alert(res.messages);
                } else {
                    alert(res.messages);
                }
            }).catch(err => alert(err));
        }else{
            var cartItems = this.state.cartItems;
            cartItems = cartItems.filter((item)=>{
                return item.ProductID != idProduct;
            })
            await this.setState({
                cartItems : cartItems
            })
            var arrLocalStorage = cartItems.map((item) => {
                var obj = {};
                obj.ID = item.ProductID;
                obj.Count = item.Count
                return obj;
            })
            localStorage.setItem('cartItems', JSON.stringify(arrLocalStorage));
            alert("Xóa giỏ hàng thành công!");
        }
        this.count();
    }

    async updateToCart(idProduct,count) {
        var checkCookie = cookie.get('jwt_access_token');
        debugger
        if(checkCookie != undefined){
            const { headers } = this.state;
            await Call('api/updateToCart?productID=' + idProduct + '&&count='+ count, 'GET', headers).then(res => {
                if (res.code === 1) {
                    Call('api/carts', 'GET', headers).then(response => {
                        this.setState({
                            cartItems: response.data
                        })
                        this.count();
                    })
                } else {
                    alert(res.messages);
                }
            }).catch(err => alert(err));
        }else{
            var cartItems = this.state.cartItems;
            cartItems.forEach((item) => {
                if(item.ProductID == idProduct){
                    let check = item.Count + count;
                    if(check < 1){
                        alert("Số lượng sản phẩm phải > 1 !");
                    }else{
                        item.Count = check;
                        item.TotalPrice = item.Price * check;
                    }
                }
            })
            await this.setState({
                cartItems : cartItems
            })
            var arrLocalStorage = this.state.cartItems.map((item) => {
                var obj = {};
                obj.ID = item.ProductID;
                obj.Count = item.Count
                return obj;
            })
            localStorage.setItem('cartItems', JSON.stringify(arrLocalStorage));
        }

    }

    

    async componentDidMount() {
        var checkCookie = cookie.get('jwt_access_token');
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        if(checkCookie !== undefined){
            // có thể là đã đăng nhập
            var headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': constants.Author_Type +' ' + cookie.get('jwt_access_token')
            }
            this.setState({
                headers: headers
            })
    
            await Call('api/carts', 'GET', headers).then(res => {
                localStorage.setItem('cartItems',JSON.stringify([]));
                this.setState({
                    cartItems: res.data
                })
            })
        }
        else{
            // mảng data từ localStorage
            var dataLocalStorage = [];
            // mảng cần để push vào cartItems (có count)
            var result = [];
            var data = localStorage.getItem('cartItems');
            if (data != null) {
                dataLocalStorage = JSON.parse(data);
                result = await this.setCartItems(dataLocalStorage);
            } else {
                localStorage.setItem('cartItems', JSON.stringify(dataLocalStorage));
            }
            this.setState({
                cartItems: this.state.cartItems.concat(result)
            })
        }
        this.count();
    }

    // gán giá trị cho cardItems khi có thay đổi
    async setCartItems(dataLocalStorage) {
        var result = [];
        var products;
        
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');

        await Call('api/getAllProduct', 'GET', headers)
        .then(res => {
            products = res.data
        })
        dataLocalStorage.map((item, index) => {
            products.forEach((i) => {
                if (item.ID === i.ID) {
                    var card = {};
                    card.ID = index;
                    card.ProductID = i.ID;
                    card.ProductName = i.ProductName;
                    card.Price = i.Promote;
                    card.Count = item.Count;
                    card.Image = i.Image;
                    card.TotalPrice = item.Count * i.Promote;
                    result.push(card);
                }
            })
        })
        return result;
    }

    count(){
        const {cartItems} = this.state;
        debugger
        if(cartItems.length > 0){
            this.setState({
                status : true
            })
        }else{
            this.setState({
                status : false
            })
        }
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    cartItems: this.state.cartItems,
                    count : this.state.status,
                    addToCart: this.addToCart,
                    removeToCart : this.removeToCart,
                    updateToCart : this.updateToCart
                }}
            >
                {
                    this.props.children
                }
            </CartContext.Provider>
        )
    }
}