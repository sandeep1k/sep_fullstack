import mobile1 from "../../assets/images/mobile1.jpg"
import mobile2 from "../../assets/images/mobile2.jpg"

const Products = () => {
    return (
        <div className='row'>

            <div className='col-3'>
                <h2>Filters</h2>
            </div>
            <div className='col-9'>
                <div className='row'>
                    <h1> Products</h1>
                    <div className="col-3">
                        <div className='card card-body'>
                            <img src={mobile1} alt='' />
                            <h4> title</h4>
                            <p> description </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='card card-body'>
                            <img src={mobile2} alt='' />
                            <h4> title</h4>
                            <p> description </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='card card-body'>
                            <img src={mobile1} alt='' />
                            <h4> title</h4>
                            <p> description </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='card card-body'>
                            <img src={mobile2} alt='' />
                            <h4> title</h4>
                            <p> description </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Products