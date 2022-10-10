const Filters = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <label className='mb-2'> Categories</label>
                <select class="form-select">
                    <option selected>Select Category</option>
                    <option value="1">One</option>

                </select>

            </div>
            <div className='mt-5 col-12'>
                <label className='mb-2'> Price</label>
                <select class="form-select mb-2">
                    <option selected>Min</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label className='mb-2'> To</label>
                <select class="form-select">
                    <option selected>Max</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    )
}

export default Filters