import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./routes/main"
import Nav from "./Nav"
import Footer from './Footer'
import Search from './routes/Search'
import './App.css'
import Meigen from './routes/Meigen';
import View from './routes/View';
const AppRouter = () => {
    return (
        <Router> 
            <Nav />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/meigen/:id' element={<Meigen />}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/view' element={<View/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}
export default AppRouter;