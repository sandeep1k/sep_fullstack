import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ currentPage }) => {
    const [btnActive, setBtnActive] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <nav className='col-auto mx-auto'>
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>
                <li className="page-item"><a className="page-link" href="/#">1</a></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                <li className="page-item">
                    <Link className="page-link" to="">Next</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination