import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { selectRai, totalRai, IRai } from "../atoms/atoms";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import Content from "../comp/Content";
import Paging from '../comp/Pagination';
import { parseURL } from "../comp/hooks";

const Meigen = () => {
    const params = useParams();
    const id = params.id ? parseInt(params.id) : 1;
    const rai = useRecoilValue(selectRai);
    const raiLoadable = useRecoilValueLoadable(selectRai);
    const total = useRecoilValue(totalRai);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(id);
    const offset = (page - 1) * limit;
    const [view, setView] = useState<IRai[]>([]);
    const test = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        setPage(id);
        if(raiLoadable.state === 'hasValue') {
            setView(raiLoadable.contents.slice(offset, offset + limit));
        }
        test.current?.scrollIntoView();
    },[page, offset, limit, rai, id])
    useEffect(()=>{
        return() => {
            setPage(1);
            setView([])
        }
    },[])
    return (
        <>
        <div className='move' ref={test}></div>
            <div className='index'>
                {
                    view.map((data, index) => (
                        <Content key={index}
                            title={data["名　言"] ? data["名　言"] : data["らいさまかわいい集"] ? data["らいさまかわいい集"] : 'Empty'}
                            url={data["リ　ン　ク"] ? parseURL(data["リ　ン　ク"]) : 'Empty'}
                        />
                    ))
                }
            </div>
                <div className="paging">
                    <ul>
                        <Paging total={total} limit={limit} page={page} isMeign={true} />
                    </ul>
                </div>
        </>
      )
}

export default Meigen;