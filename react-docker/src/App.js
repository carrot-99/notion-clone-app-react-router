import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemoIcon from "./images/memo.png"
import AppLayout from './components/layout/AppLayout';
import AuthLayout from './components/layout/AuthLayout';
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Memo from './components/pages/Memo';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get(
                    'http://localhost:5050/api/products'
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
                    <Route path="/" element={<AuthLayout />}>
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        {/* exactをつけたら完全一致になる */}
                        <Route exact path="/" element={<Home />} />
                        <Route path="memo" element={<Memo />} />
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
