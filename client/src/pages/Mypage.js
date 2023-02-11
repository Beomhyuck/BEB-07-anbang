// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import MyNFT from "../hooks/MyNFT";
import MyContract from "../hooks/MyContract";

// stylesheet
import "../assets/css/main.css";

export default function Mypage() {

    const [MyNFTInfo, setMyNFTInfo] = useState([])

      useEffect(()=>{
        if(localStorage.getItem('account') === null) {
            window.location.replace('http://localhost:3000/login')
        }
      }, []);
    

    return(

        <div>
            
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="flex items-center font-bold mr-5">진행중인 계약</div>
            <div>
                {/* <MyContract /> */}
            </div>
        </div>  
        <div className="flex flex-col items-center mb-30 ">
            <div className="flex flex-col mt-20">
                <div className="flex flex-col justify-center items-center font-bold text-3xl mr-5">보유 NFT 리스트</div>
                <div className="mb-30">
                    <MyNFT />
                </div>
            </div>
        </div>      
    </div>
    )
}