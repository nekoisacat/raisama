import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { theme, raisama } from "../atoms/atoms";
const Main = () => {
    const [dark,setDark] = useRecoilState(theme);
    return (
        <>
            <div className="index">
                <Link className='links' to={`/meigen/1`}>
                    らいさまちくちく集
                </Link>
            </div>
        </>
      )
};
//リ　ン　ク
export default Main;