import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sliders from '../../components/sliders'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
            setData(res.data);
            setLoading(false);
        }
        catch (err) {
            console.log('=>', err)
        }
    }

    return (
        <>
            <h1 className='text-center'> {loading ? ' Loading...' : ''}</h1>
            {loading ? '' : <Sliders />}

            <h1>{loading ? '' : 'Categories'}</h1>
            <div className='row'>
                {data && data.map(item => (
                    <div className='col-2' key={item.id}>
                        <Link to={`products/${item.name}`}>
                            <div className='card card-body text-center'>
                                <img src={item.image} alt={item.name} />
                                <h4 className='pt-3'> {item.name}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}
export default Home