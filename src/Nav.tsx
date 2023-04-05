import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { raisama } from './atoms/atoms';

const Nav = () => {
    const navigate = useNavigate();
    const [composing, setComposing] = useState(false);
    const startComp = () => setComposing(true);
    const endComp = () => setComposing(false);
    const [rai, setRai] = useRecoilState(raisama);
    const [inputs,setInputs] = useState({
        title: '',
    })
    const {title} = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const test = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { code } = e;
        if(composing) return;
        if(code !== 'Enter') return;
        if(title.length <= 2) {
            alert('２文字以上！');
            return;
        }
        const rst = rai.filter((el) => el["名　言"]?.includes(title) || el["らいさまかわいい集"]?.includes(title));
        if(rst.length === 0) {
            alert('ありません！');
            setInputs({
                title: '',
            })
            return;
        }
        setInputs({
            title: '',
        })
        navigate('/search',{state:{rst: rst}});
    }
    return (
        <div className='nav'>
            <h1>らいさまちくちく集</h1>
            <input onCompositionStart={startComp} onCompositionEnd={endComp}
                    name="title"
                    onChange={onChange}
                    value={title}
                    placeholder='kensaku'
                    onKeyDown={(e)=>test(e)}>
            </input>
            <div className='toMain'>
                <Link to={'/meigen/1'}>
                    メインへ
                </Link>
            </div>
        </div>
    )
}

export default Nav;