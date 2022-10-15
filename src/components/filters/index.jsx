const Filters = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <label className='mb-2'> Categories</label>
                <select className="form-select">
                    <option>Select Category</option>
                    <option value="1">One</option>

                </select>

            </div>
            <div className='mt-5 col-12'>
                <label className='mb-2'> Price </label>
                <select className="form-select mb-2">
                    <option>Min</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label className='mb-2'> To </label>
                <select className="form-select">
                    <option>Max</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    )
}

export default Filters