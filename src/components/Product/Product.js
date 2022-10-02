// import React, { Component } from 'react';

// class Product extends Component{
//     constructor(props){
//         super(props);
//         this.state = ({
//             product : {},
//             productsRecomment : []
//         })
//     }
//     async componentDidMount() {
//         let headers = new Headers();
//         headers.append('Access-Control-Allow-Origin', '*');
//         headers.append('Access-Control-Allow-Credentials', 'true');
//         headers.append('Content-Type', 'application/json');
//         await Call('api/getProductByID?id=10', 'GET', headers).then(res => {
//             this.setState({
//                 detailProduct: res.data
//             })
//         })
//     }
//     render(){
//         return(
//             <div></div>
//         )
//     }
// }
// export default Product;