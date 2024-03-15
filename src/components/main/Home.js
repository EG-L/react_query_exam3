import {Fragment} from "react";
import {Link} from "react-router-dom";
import {AllGetData} from "../actions/AllGetData";
import {useState} from "react";
import Pagination from "react-js-pagination";

export const Home=()=>{
    const [curpage,setCurpage] = useState(1)
    const {isLoading,data,isError,error} = AllGetData('http://localhost/food/list_react',{
        page:curpage
    },'food-key',curpage)

    if(isLoading) return <h3 className={"text-center"}>Loading..</h3>
    if(isError) return <h3 className={"text-center"}>{error.message}</h3>

    console.log(data)
    const handleChange=(page)=>{
        setCurpage(page)
    }

    return(
        <Fragment>
            <div className={"row"}>
                {
                    data.data.food_list.map((food) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <Link to={'/food/detail/'+food.fno}>
                                    <img src={'http://www.menupan.com' + food.poster} alt="Lights"
                                         style={{"width": "100%"}}/>
                                    <div className="caption">
                                        <p>{food.name}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div style={{"height": "10px"}}></div>
            <div>
                <div className={"text-center"}>
                    <Pagination activePage={curpage} itemsCountPerPage={12} totalItemsCount={data.data.totalpage}
                                pageRangeDisplayed={10} prevPageText={"<"} nextPageText={">"} onChange={handleChange}
                                style={{"width": "100%"}}/>
                </div>
            </div>
        </Fragment>
    )
}