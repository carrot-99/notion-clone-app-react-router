import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import { GiAlienSkull } from "react-icons/gi";

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
            <div className='App'>
                <Link to="/">Home</Link>
                <br />
                <Link to="/login">Login</Link>
                <br />

                <Routes>
                    {/* exactをつけたら完全一致になる */}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <h1><GiAlienSkull /></h1>
                <h1>Notion App 2</h1>
                {products.map((product) => {
                    return (
                        <div key={product._id}>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    );
                })}
            </div>
        </BrowserRouter>
    );
}

export default App;
