import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sliders from '../../components/sliders'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
            setData(res.data);
        }
        catch (err) {
            console.log('=>', err)
        }
    }

    return (
        <>
            <Sliders />
            <h1> Categories</h1>
            <div className='row'>
                {data && data.map(item => (
                    <div className='col-2' key={item.id}>
                        <Link to=''>
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