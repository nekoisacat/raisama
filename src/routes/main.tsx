import { Link } from "react-router-dom";
import Titlelist from "../comp/Titelist";

const Main = () => {
    return (
        <>
            <div className="index">
                <Link className='links' to={`/meigen/1`}>
                    らいさまちくちく集 1ページへ
                </Link>
            </div>
            <Titlelist />
        </>
      )
};

export default Main;