import React, { Component } from 'react';

import Call from '../../utils/Call';
import * as MenuLocation from '../../constants/MenuLocation';


class MenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }

    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        await Call('api/getMenuByLocation?location=' + MenuLocation.MenuMain, 'GET', headers).then(res => {
            this.setState({
                menus: res.data
            })
        })
    }


    render() {
        const { menus } = this.state;
        var menuParent = menus.filter(item => {
            return item.ParentID === 0;
        })
        return (
            <div className="hero__categories js-categories-menu">
                <div className="shop-search-page__filter-wrapper shop-search-page__filter-wrapper--categories">
                    <div className="tickid-shop-collection-filter">
                        <div className="tickid-shop-collection-filter__header">Danh mục</div>
                        <div className="tickid-shop-collection-filter__body">
                            <ul className="categories js-categories ">
                                {
                                    menuParent.map((item, index) => {
                                        var menuChild = menus.filter(itemChild => {
                                            return itemChild.ParentID === item.ID;
                                        })
                                        if (menuChild.length > 0) {
                                            return (
                                                <li className="category js-category category--has-children" key={index}>
                                                    <a href={"/" + item.Alias} className="category__link">
                                                        {item.Title}
                                                        <svg
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            className="tickid-svg-icon category__link-icon js-category-link-icon"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284 l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284 c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701 C391.333,275.032,391.333,236.967,367.954,213.588z" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="categories js-categories">
                                                        {
                                                            menuChild.map((item2, index2) => {
                                                                return (
                                                                    <li className="category js-category" key={"child"+index2}>
                                                                        <a href={"/" + item.Alias +"/"+ item2.Alias} className="category__link">
                                                                            {item2.Title}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })
                                                        }


                                                    </ul>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li className="category js-category" key={index}>
                                                    <a href="/danh-muc/2644-ohui" className="category__link">
                                                        {item.Title}

                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuMain;