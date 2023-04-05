import { useNavigate } from "react-router-dom";

interface Props {
    page: number,
    total: number,
    limit: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FunctionComponent<Props> = ({total, limit, page, setPage}) => {
    const Navigate = useNavigate();
    const pageCount = 5;
    let totalPage = Math.ceil(total / limit);
    let pageGroup = Math.ceil(page / pageCount);

    let lastPage = pageGroup * pageCount;
    if(lastPage > totalPage) {
        lastPage = totalPage
    }
    let firstPage = lastPage - (pageCount - 1);
    const next = lastPage + 1 > totalPage ? lastPage : lastPage +1;
    const prev = firstPage - 1 <= 0 ? 1 : firstPage -1;
    const move = (i: number) => {
        Navigate(`/meigen/${i}`);
    }
    function Paging() {
        let rst = [];
        for(let i = firstPage; i <= lastPage; i++) {
            rst.push(
                <li key={i} onClick={()=>move(i)}className={page === i ? 'view' : ''}>{i}</li>
            )
        }
        return rst;
    }
    return (
        <>
        {next < 6 ? null :
            page === prev ? null : (
                <li onClick={()=>move(prev)}>{'<'}</li>
            )
        }
        {Paging()}
        {next < 6 ? null :
            page === next ? null : (
                <li onClick={()=>move(next)}>{'>'}</li>
            )
        }
        </>
      );
}

export default Pagination;