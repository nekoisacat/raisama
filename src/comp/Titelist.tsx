import { useEffect, useState } from "react";
import { selectRai, totalRai, IRai } from "../atoms/atoms";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import Paging from '../comp/Pagination';
import { useLocation, useNavigate } from "react-router-dom";

const Titlelist = () => {
    const location = useLocation();
    const prevPage = location.state?.prevPage || 1;
    const raiLoadable = useRecoilValueLoadable(selectRai);
    const [view, setView] = useState<IRai[]>([]);
    const [page, setPage] = useState(prevPage);
    const total = useRecoilValue(totalRai);
    const limit = 6;
    const offset = (page -1) * limit;
    const navigate = useNavigate();
    function viewMeign(rst: IRai) {
        navigate('/view', {state:{rst: rst, page: page}});
    }

    useEffect(()=>{
        if(raiLoadable.state === 'hasValue') {
            setView(raiLoadable.contents.slice(offset, offset + limit));
        }
    },[page, offset]);
    useEffect(()=>{
        return () => {
            setPage(1);
            setView([]);
        }
    },[])
    return (
        <div className="raiList">
            <p>ちくちく集一覧</p>
            {view.map((data: IRai, index:number) => (
                <p className="meigen" key={index} onClick={()=>viewMeign(data)}>
                    {data["名　言"] &&
                    data["名　言"]?.length >= 20
                        ? `${data["名　言"].slice(0,19)}...`
                        : data["名　言"]}
                </p>
            ))}
            <div className="paging">
                <ul>
                    <Paging total={total} limit={limit} page={page} isMeign={false} setPage={setPage} />
                </ul>
            </div>
        </div>
    )
}

export default Titlelist;