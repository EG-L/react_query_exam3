import {Fragment} from "react";
import {Link} from "react-router-dom";
import {AllGetData} from "../actions/AllGetData";
import {useState} from "react";
import Pagination from "react-js-pagination";

export const RecipeList=()=>{
    const [curpage,setCurpage] = useState(1)
    const {isLoading,data,isError,error} = AllGetData('http://localhost/recipe/list_react',{
        page:curpage
    },'recipe-key',curpage)

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
                    data.data.list.map((recipe) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="#">
                                    <img src={recipe.poster} alt="Lights" style={{"width": "100%"}}/>
                                    <div className="caption">
                                        <p>{recipe.title}</p>
                                    </div>
                                </a>
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
