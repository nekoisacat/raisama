import { useNavigate } from "react-router-dom";

interface Props {
    page: number,
    total: number,
    limit: number,
    isMeign: boolean,
    setPage?: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FunctionComponent<Props> = ({total, limit, page, isMeign, setPage}) => {
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
    function upPage(i: number) {
        if(setPage) setPage(i);
    }
    function Paging() {
        let rst = [];
        for(let i = firstPage; i <= lastPage; i++) {
            if(isMeign) {
                rst.push(
                    <li key={i} onClick={()=>move(i)}className={page === i ? 'view' : ''}>{i}</li>
                )
            } else {
                rst.push(
                    <li key={i} onClick={()=>upPage(i)}className={page === i ? 'view' : ''}>{i}</li>
                )
            }
        }
        return rst;
    }
    return (
        <>
        {page === 1 ? null
            : (
                isMeign
                    ? <li onClick={()=>move(1)}>first</li>
                    : <li onClick={()=>upPage(1)}>first</li>
            )
        }
        {next < 6 ? null :
            page === prev ? null : (
                isMeign
                    ? <li onClick={()=>move(prev)}>{'<'}</li>
                    : <li onClick={()=>upPage(prev)}>{'<'}</li>
            )
        }
        {Paging()}
        {next < 6 ? null :
            page === next ? null : (
                isMeign
                    ? <li onClick={()=>move(next)}>{'>'}</li>
                    : <li onClick={()=>upPage(next)}>{'>'}</li>
            )
        }
        {page === totalPage ? null 
            : (
                isMeign
                    ? <li onClick={()=>move(totalPage)}>last</li>
                    : <li onClick={()=>upPage(totalPage)}>last</li>
            )
        }
        </>
      );
}

export default Pagination;