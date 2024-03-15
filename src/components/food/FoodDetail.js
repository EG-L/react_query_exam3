import {Fragment} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {AllGetData} from "../actions/AllGetData";

export const FoodDetail=()=>{
    const {fno} = useParams()
    const nav = useNavigate()
    const {isLoading,data,isError,error} = AllGetData('http://localhost/food/detail_react',{

        fno:fno

    },'food_detail',fno)
    if(isLoading) return <h3 className={"text-center"}>Loading</h3>
    if(isError) return <h3 className={"text-center"}>{error.message}</h3>
    return(
        <Fragment>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-center"} width={"30%"} rowSpan={"8"}>
                            <img src={'http://www.menupan.com' + data.data.poster}
                                 style={{"width": "280px", "height": "250px"}}/>
                        </td>
                        <td colSpan={"2"}>
                            <h3>{data.data.name}&nbsp;<span style={{"color": "orange"}}>{data.data.score}</span></h3>
                        </td>
                    </tr>
                    <tr>
                        <td width={"20%"} className={"text-center"}>주소</td>
                        <td width={"70%"}>{data.data.address}</td>
                    </tr>
                    <tr>
                        <td width={"20%"} className={"text-center"}>전화</td>
                        <td width={"70%"}>{data.data.phone}</td>
                    </tr>
                    <tr>
                        <td width={"20%"} className={"text-center"}>음식종류</td>
                        <td width={"70%"}>{data.data.type}</td>
                    </tr>

                    <tr>
                        <td width={"20%"} className={"text-center"}>가격</td>
                        <td width={"70%"}>{data.data.price}</td>
                    </tr>
                    <tr>
                        <td width={"20%"} className={"text-center"}>영업시간</td>
                        <td width={"70%"}>{data.data.time}</td>
                    </tr>
                    <tr>
                        <td width={"20%"} className={"text-center"}>좌석</td>
                        <td width={"70%"}>{data.data.seat}</td>
                    </tr>
                    <tr>
                        <td colSpan={"2"} className={"text-right"}>
                            <button className={"btn-sm btn-danger"} onClick={()=>nav(-1)}>목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}