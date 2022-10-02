
function MenuChild(menus) {
    debugger
    var menuChilds = menus.map((item) => {
        return (
            <ul className="categories js-categories ">
                <li className="category js-category">
                    <a href="/danh-muc/ohui-thefirst-tai-sinh" className="category__link">
                        {item.Title}
                    </a>
                </li>
            </ul>
        )
    })
    return menuChilds;
}
export default MenuChild;