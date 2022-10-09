import { useState, useEffect } from "react";
import axios from 'axios';


const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://api.escuelajs.co/api/v1/products");
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
            <div className='col-3'>
                <h2>{loading ? '' : 'Filters'}</h2>
            </div>
            <div className='col-9'>
                <div className='row'>
                    <h1>  {loading ? '' : 'Products'}</h1>

                    {data && data.map(item => (
                        <div className="col-3 mb-4" key={item.id}>
                            <div className='card card-body'>
                                <img src={item.category.image} alt='' />
                                <p className='text-success mt-2'>{item?.category?.name}</p>
                                <h4> {item.title.slice(0, 18)}...</h4>
                                <p> {item.description.slice(0, 55)}... </p>
                                <p className='text-success'>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}
export default Products