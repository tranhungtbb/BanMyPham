import React, {Component} from 'react';

import Call from '../utils/Call';

export const WatchedContext = React.createContext();
export class WatchedProvider extends Component{
    constructor(props){
        super(props);
        this.state= ({
            productsWatched :[]
        })
        this.addWatched = this.addWatched.bind(this);
    }

    async addWatched(product) {
        var productsWatched = this.state.productsWatched;
        // nếu mảng không rỗng
        if (productsWatched.length !== 0) {
            // biến kiểm tra trùng hay không?
            var status = false;
            this.state.productsWatched.forEach((element, index) => {
                if (element.ID === product.ID) {
                    status = true;
                }
            });
            // nếu không trùng thì push vào arr
            if (status === false) {
                var item = { ...product};
                productsWatched.push(item);
            }
        }
        // nếu mảng rỗng thì add luôn vào
        else{
            var item = { ...product};
            productsWatched.push(item);
        }
        await this.setState({
            productsWatched: productsWatched
        })
        var arrLocalStorage = productsWatched.map((item) => {
            return item.ID;
        })

        // ghi ra local
        localStorage.setItem('ProductsWatched', JSON.stringify(arrLocalStorage));
    }

    async componentDidMount(){
        // mảng data từ localStorage
        var dataLocalStorage = [];
        // mảng cần để push vào cartItems (có count)
        var result = [];
        var data = localStorage.getItem('ProductsWatched');
        
        if (data != null) {
            dataLocalStorage = JSON.parse(data);
            result = await this.setProductsWatched(dataLocalStorage);
        } else {
            localStorage.setItem('ProductsWatched', JSON.stringify(dataLocalStorage));
        }
        this.setState({
            productsWatched: this.state.productsWatched.concat(result)
        })

    }

    async setProductsWatched(dataLocalStorage) {
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
            products.filter((i) => {
                if (item == i.ID) {
                    result.push({ ...i});
                    return;
                }
            })
        })
        return result;
    }
    render(){
        return(
            <WatchedContext.Provider
                value={{
                    productsWatched: this.state.productsWatched,
                    addWatched: this.addWatched
                }}
            >
                {
                    this.props.children
                }
            </WatchedContext.Provider>
        );
    }
}

