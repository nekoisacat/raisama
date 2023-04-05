import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { raisama, totalRai } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import Content from "../comp/Content";
import Paging from './Pagination';
import { parseURL } from "../comp/hooks";
interface Props {
    "No."?: string,
    "リ　ン　ク"?: string,
    "名　言"?: string,
    "らいさまかわいい集"?: string
}
const Meigen = () => {
    const params = useParams();
    const id = params.id ? parseInt(params.id) : 1;
    const [rai, setRai] = useRecoilState(raisama);
    const [total,] = useRecoilState(totalRai);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(id);
    const offset = (page - 1) * limit;
    const [view, setView] = useState<Props[]>([]);
    const test = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        setPage(id);
        setView(rai.slice(offset, offset + limit));
        test.current?.scrollIntoView();
        return () => {
            setPage(id);
            setView(rai.slice(offset, offset + limit));
            test.current?.scrollIntoView();
        }
    },[page, offset, limit, rai, id])
    return (
        <>
        <div className='move' ref={test}></div>
            <div className='index'>
                {
                    view.map((data, index) => (
                        <Content key={index}
                            title={data["名　言"] ? data["名　言"] : 'Empty'}
                            url={data["リ　ン　ク"] ? parseURL(data["リ　ン　ク"]) : 'empty'} />
                    ))
                }
                <div className="paging">
                    <ul>
                        <Paging total={total} limit={limit} page={page} setPage={setPage} />
                    </ul>
                </div>
            </div>
        </>
      )
}

export default Meigen;