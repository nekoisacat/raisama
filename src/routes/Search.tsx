import { Link, useLocation } from "react-router-dom";
import { IRai } from "../atoms/atoms";
import Content from "../comp/Content";
import { parseURL } from "../comp/hooks";

const Search = () => {
    const location = useLocation();
    const rst: IRai[] = location.state?.rst;
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