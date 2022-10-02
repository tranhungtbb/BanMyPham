import React, { Component } from 'react';

import Call from '../../utils/Call';
// components
import MenuTop from '../../components/Menu/MenuTop';
import SearchTop from '../../components/Menu/SearchTop';
import MenuMain2 from '../../components/Menu/MenuMain2';
import SlideMain from '../../components/Slide/SlideMain';
import ProductsSale from '../../components/Index/ProductsSale';
import Banner from '../../components/Slide/Banner';
import ProductsNew from '../../components/Index/ProdustsNew';
import ProductsBestSale from '../../components/Index/ProductsBestSale';
import ProductsByCate from '../../components/Index/ProductsByCate';
import Footer from '../../components/Footer/Footer';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = ({
            Categories : []
        });
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getListTrademark', 'GET', headers).then(res => {
            this.setState({
                Categories: res.data
            })
        })
    }

    render() {
        const { Categories } = this.state;
        return (
            <div className="Home">
                <div id="main" className="module--tickid">
                    <div>
                        <div
                            className="tickid-progress-bar tickid-progress-bar--reset"
                            style={{ willChange: "auto" }}
                        >
                            <div className="tickid-page-wrapper">
                                <div className="tickid-top container-wrapper js-header">
                                    <MenuTop />
                                    <SearchTop />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="main-content">
                        <div className="home-page container">
                            <div className="home-page__body">
                                <div className="hero">
                                    <div className="hero__inner">
                                        <MenuMain2 />
                                        <SlideMain />
                                    </div>
                                </div>
                                <ProductsSale />
                                <Banner />
                                <ProductsNew />
                                <ProductsBestSale />
                                {
                                    Categories.map((item)=>{
                                        return <ProductsByCate IdCategory = {item.ID} CategoryName = {item.TrademarkName}/>
                                    })
                                }
                                
                                <Footer/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
