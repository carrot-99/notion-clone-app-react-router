import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import MemoIcon from "./images/memo.png"
import AppLayout from './components/layout/AppLayout';
import Memo from './components/Memo';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get(
                    'http://localhost:5500/api/products'
                );
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <BrowserRouter>
            {/* <Split className="flex" > */}
            <div className='App'>
                {/* <Link to="/">Home</Link>
                <br />
                <Link to="/login">Login</Link>
            br /> */}

                {/* <h1><GiAlienSkull /></h1> */}
                <header>
                    <img src={MemoIcon} />
                    <h1>App Title</h1>
                </header>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        {/* exactをつけたら完全一致になる */}
                        <Route exact path="/" element={<Home />} />
                        <Route path="/memo" element={<Memo />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
                {products.map((product) => {
                    return (
                        <div key={product._id}>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    );
                })}
            </div>
            {/* </Split> */}
        </BrowserRouter>
    );
}

export default App;
