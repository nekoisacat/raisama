import { Link, useLocation, useNavigate } from "react-router-dom";
import Content from "../comp/Content";
import { parseURL } from "../comp/hooks";
interface Props {
    "No."?: string,
    "リ　ン　ク"?: string,
    "名　言"?: string,
    "らいさまかわいい集"?: string
}
const Search = () => {
    const location = useLocation();
    const rst: Props[] = location.state?.rst;
    return (
        <>
            {rst ?
                
                <div className='index'>
                    {
                        rst.map((data, index) => (
                            <Content key={index}
                                title={data["名　言"] ? data["名　言"] : data["らいさまかわいい集"] ? data["らいさまかわいい集"] : 'Empty'}
                                url={data["リ　ン　ク"] ? parseURL(data["リ　ン　ク"]) : 'Empty'}
                            />
                        ))
                    }
                </div>
            : <div className="index">
                <Link className='links' to={`/meigen/1`}>
                メインへ
                </Link>
            </div>
            }
        </>
    )
}

export default Search;