import React, { Component } from 'react';
import Slider from 'react-slick';

import { WatchedContext } from '../../contexts/ProductsWatched';
import { settingSlideProducs } from '../../constants/slides';
import Call from '../../utils/Call';



class Watched extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="Watched">
            <div className="_2Vb4g5 card promotion-combo">
                <div className="_3hEEfi promotion-combo__header">
                    <div className="_1ahGUN promotion-combo__header-left">
                        <div className="_2ti2Ft promotion-combo__title">Sản phẩm mới</div>
                    </div>
                    <div className="promotion-combo__header-right">
                        <a className="center _2NUz9G" href="/all?sortBy=sales">Xem tất cả<svg className="tickid-svg-icon icon-arrow-right" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg></a>
                    </div>
                </div>
                <Slider {...settingSlideProducs}>
                        <WatchedContext.Consumer>
                        {
                            ({ productsWatched }) => productsWatched.map((item, index) => {
                                return (
                                    <div className="_3cyAdE">
                                            {({ addWatched }) =>
                                                <a className="tickid-item-card--link tickid-item-card-padding"
                                                    title={item.ProductName}
                                                    href={'/product?id=' + item.ID}
                                                    onClick={() => addWatched(item)}
                                                >
                                                    <div className="tickid-item-card tickid-item-card--full">
                                                        <div className="tickid-item-card__cover-img">
                                                            <div className="_3ZDC1p">
                                                                <div className="tickid-item-card__cover-img-background _3XaILN" style={{ backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1588766379-myphamohui-lgvina.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                                                            </div>
                                                        </div>
                                                        <div className>
                                                            <div className="tickid-item-card__text-name">{item.ProductName}</div>
                                                            <div className="tickid-item-card__section-price">
                                                                <div className="tickid-item-card__original-price">{item.Price}đ</div>
                                                                <div className="tickid-item-card__price-gap" />
                                                                <div className="tickid-item-card__current-price tickid-item-card__current-price--free-shipping">{item.Promote}đ</div>
                                                                <div className="tickid-item-card__spacer" />
                                                            </div>
                                                            <div className="tickid-item-card__extra-badge-wrapper" />
                                                        </div>
                                                    </div>
                                                </a>
                                            }
                                    </div>
                                );
                            })
                        }
                        </WatchedContext.Consumer>
                </Slider>
            </div>
            </div>
        );
    }
}

export default Watched;