// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';

// stylesheet
import "../assets/css/main.css";

export default function Mypage(props) {

    const [NFTInfo, setNFTInfo] = useState([])
    const navigate = useNavigate();

    const NFTClick = () => {
        navigate("/NFTdetail", { state: {} });
      };

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:")
    //       .then((result) => {
    //         setNFTInfo([....]);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);
    
    // 추후에 DB에서 데이터 받아서 map 으로 호출

    return(
    // <div className="">
    //     {/* {NFTInfo.map((post)=> (
    //         <div className="" key={NFTInfo}
    //     ))} */}
    //     <div className="mt-10 w-[340px] h-[270px] rounded-xl">
    //         <div className="">
    //         <img onClick={()=> NFTClick()} 
    //         className="rounded-xl" src="https://news.samsungdisplay.com/wp-content/uploads/2022/03/IT_tc00480001633_final-1024x449.jpg"></img>
    //             <p className="mt-10 flex flex-row justify-center items-center">{`가격 : 1,000,000 KRW`}</p>
    //             <p className="mt-5 flex flex-row justify-center items-center">{`임대 종류 : 전세 `}</p>    
    //         </div>
    //     </div>
    // </div>

    <div className="mt-5 w-[340px] h-[270px] rounded-xl mb-5">
        <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img className="w-full h-[200px] object-cover rounded-t-lg" onClick={()=> NFTClick()} 
            src="https://news.samsungdisplay.com/wp-content/uploads/2022/03/IT_tc00480001633_final-1024x449.jpg" alt=""></img>
            <div className="flex justify-between px-2 py-2">
                <div className="flex flex-col items-center">
                    <h3>가격</h3>
                    <h3>임대종류</h3>
                </div>
            </div>
        </div>
    </div>


    )
}