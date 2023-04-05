import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { theme, raisama, totalRai } from "./atoms/atoms";
import Main from "./routes/main"
import Nav from "./Nav"
import Footer from './Footer'
import Search from './routes/Search'
import './App.css'
import Meigen from './routes/Meigen';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
const AppRouter = () => {
    const url = 'https://api.fureweb.com/spreadsheets/1txzsWYmA86n7yrMtovgvI1arzblxUIG0DFLLcNi4lnU';
    const [rai, setRai] = useRecoilState(raisama);
    const [total, setTotal] = useRecoilState(totalRai);
    const id = 1;
    const getRai = async(url: string) => {
        const res = await fetch(url).then(res => res.json());
        setTotal(res.data.length);
        setRai(res.data);
    }
    useEffect(()=>{
        getRai(url);
    },[id])
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/meigen/:id' element={<Meigen />}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}
export default AppRouter;