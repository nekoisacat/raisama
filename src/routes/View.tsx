import { Link, useLocation, useNavigate } from "react-router-dom";
import { IRai } from "../atoms/atoms";
import Content from "../comp/Content";
import { parseURL } from "../comp/hooks";

const View = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const rst: IRai = location.state?.rst;
    const page: number = location.state?.page;
    const toBack = (page: number) => {
        navigate('/', {state:{prevPage: page}});
    };
    return (
        <>
        <div className="raiList">
            {   rst
                ?
                <>
                    <Content
                        title={rst["名　言"] ? rst["名　言"] : rst["らいさまかわいい集"] ? rst["らいさまかわいい集"] : 'Empty'}
                        url={rst["リ　ン　ク"] ? parseURL(rst["リ　ン　ク"]) : 'Empty'}
                    />
                    <p onClick={()=>toBack(page)} className="meigen">一覧へ</p>
                </>
                :
                <Link className="links" to={`/`}>
                    メインへ
                </Link>
            }
        </div>
        </>
    )
};

export default View;