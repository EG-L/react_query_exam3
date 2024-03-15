import {Fragment,useState,useEffect} from "react";
import axios from "axios";
function MovieList(){
    const [no,setNo] = useState(1)
    const [movieList,setMovieList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3355/movie/list_node',{
            params:{
                no:no
            }
        }).then(response=>{
            setMovieList(response.data)
        })
    }, [no]);
    const movieChange=(no)=>{
        setNo(no)
    }
    return(
        <Fragment>
            <div className={"row"}>
                <div className={"text-center"}>
                    <button className={"btn-sm btn-danger"} onClick={()=>movieChange(1)}>일일 박스오피스</button>&nbsp;
                    <button className={"btn-sm btn-success"}  onClick={()=>movieChange(2)}>실시간 예매율</button>&nbsp;
                    <button className={"btn-sm btn-info"}  onClick={()=>movieChange(3)}>좌석점유율순위</button>&nbsp;
                </div>
            </div>
            <div style={{"height":"20px"}}></div>
            <div className={"row"}>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th className={"text-center"}></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>장르</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movieList&&
                        movieList.map((movie, key) =>
                            <tr>
                                <td className={"text-center"}>{movie.rank}</td>
                                <td className={"text-center"}>
                                    <img src={"https://www.kobis.or.kr"+movie.thumbUrl} style={{"width":"30px","height":"30px"}}/>
                                </td>
                                <td>{movie.movieNm}</td>
                                <td>{movie.director}</td>
                                <td>{movie.genre}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default MovieList