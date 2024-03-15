import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={"/"}>ReactQuery</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to={"/"}>Home</Link></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">맛집
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/food/find"}>맛집검색</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">레시피
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/recipe/list"}>레시피목록</Link></li>
                            <li><Link to={"/recipe/chef"}>쉐프</Link></li>
                            <li><Link to={"/recipe/find"}>레시피 검색</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/news/find"}>뉴스</Link></li>
                    <li><Link to={"/movie/list"}>영화</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header