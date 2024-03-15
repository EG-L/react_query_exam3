import {useQuery} from "react-query";
import axios from "axios";
/*
        param={
            fno:10
        }
 */
const fetchAllData=(url,param)=>{
    return axios.get(url, {
        params: param
    })
}

export const AllGetData = (url,param,key,id) =>{
    return useQuery([key,id],()=>fetchAllData(url,param))
}