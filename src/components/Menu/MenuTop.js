import React, { Component } from 'react';

import Call from '../../utils/Call';

class MenuTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            news: []
        }
    }
    async componentDidMount() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        await Call('api/getDetailCompany', 'GET', headers).then(res => {
            this.setState({
                company: res.data
            })
        })
        // await Call('api/getlistNews', 'GET', headers).then(res => {
        //     this.setState({
        //         news: res.data
        //     })
        // })

    }

    render() {
        const { company, news } = this.state;
        return (
            <div className="navbar-wrapper container-wrapper header__top">
                <div className="container navbar">
                    <div className="flex v-center QFNh9Y header__top-navbar--left">
                        <div className="_3yPx2v header__top-gotoapp">
                            <div className="tickid-drawer ">
                                {company.Name}
                            </div>
                        </div>
                        <div className="flex _3yPx2v _1_jwND header__top-phone">
                            <a href={'tel:'+company.Tel} className="navbar__header-phone">
                                <img className="img" src="assets/images/telephone.png" /> {company.Tel}
                            </a>
                        </div>
                        <div className="flex _3yPx2v _1_jwND header__top-mail">
                            <a
                                href={'mailto:'+company.Email}
                                target="_blank"
                                className="navbar__header-mail"
                            >
                                <img className="img" src="assets/images/envelope.png" />{" "}
                                {company.Email}
                            </a>
                        </div>
                    </div>
                    <div className="navbar__spacer header__top-navbar__spacer" />
                    <ul className="navbar__links">
                        <li className="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
                            <div className="stardust-popover popover js-popover">
                                <div className="stardust-popover__target js-popover-toggle">
                                    <a className="_1PcKuZ" href="/tin-tuc">
                                        <svg
                                            className="tickid-svg-icon icon-notification-2"
                                            viewBox="3 2.5 14 14"
                                            x={0}
                                            y={0}
                                        >
                                            <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                                            <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
                                        </svg>
                                        {/* <div class="_1fDuYN _28wDUe _3wDwWs navbar__link-badge-number">1</div> */}
                                        <span className="iMlhAT fw500">Tin tức</span>
                                    </a>
                                </div>
                                <div
                                    role="tooltip"
                                    aria-hidden="false"
                                    className="stardust-popover__popover stardust-popover__popover--border popover-content js-popover-content"
                                    style={{ right: 0, transformOrigin: "362.75px top" }}
                                >
                                    <div
                                        className="stardust-popover__arrow"
                                        style={{
                                            top: 1,
                                            left: "362.75px",
                                            transform: "translate(-50%, -100%)",
                                            borderBottom: "10px solid rgba(0, 0, 0, 0.09)",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent"
                                        }}
                                    >
                                        <div
                                            className="stardust-popover__arrow--inner"
                                            style={{
                                                borderBottom: "10px solid rgb(255, 255, 255)",
                                                borderLeft: "14px solid transparent",
                                                borderRight: "14px solid transparent",
                                                bottom: "-10px"
                                            }}
                                        />
                                    </div>
                                    </div>
                            </div>
                        </li>
                        <li className="navbar__link navbar__link--tappable navbar__link--hoverable">
                            <a className="_1PcKuZ" href="/tin-tuc/trung-tam-tro-giup">
                                <div className="navbar__help-center-icon">
                                    <svg
                                        className="tickid-svg-icon icon-help-center"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        width={16}
                                    >
                                        <g fill="none" fillRule="evenodd" transform="translate(1)">
                                            <circle cx={7} cy={8} r={7} stroke="currentColor" />
                                            <path
                                                fill="currentColor"
                                                d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                                            />
                                        </g>
                                    </svg>
                                    <span className="navbar__link-text navbar__link--tappable navbar__link--hoverable fw500">
                                        Liên hệ
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="navbar__link navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium">
                            <a href="/regist" className="link">
                                Đăng ký
                            </a>
                        </li>
                        <li className="navbar__link navbar__link--separator">
                            <div className="navbar__link-separator" />
                        </li>
                        <li className="navbar__link navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium">
                            <a href="/login" className="link">
                                Đăng nhập
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default MenuTop;
