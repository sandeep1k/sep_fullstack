import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const param = useParams();
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${param.catId}`);
            setData(res.data);
            setLoading(false);

        }
        catch (err) {
            console.log('=>', err)
        }
    }


    return (
        <div className='row'>

            <h1 className='text-center'> {loading ? ' Loading...' : ''}</h1>

            <div className='col-9 mx-auto'>
                <div className='row'>
                    <h2> {loading ? '' : `Products`} </h2>
                    <div className="col-4 mb-4" key={data.id}>
                        <div className='card card-body'>
                            <img src={data?.images} alt='' />
                            <p className='text-success mt-2'>{data?.category?.name}</p>
                            <h4> {data.title}</h4>
                            <p> {data.description}</p>
                            <p className='text-success'>${data.price}</p>
                            <button className='btn btn-primary'> Add to card</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default SingleProduct;