
const Form = ({label, type, value, name, handleChange, formErrors}) => {
    


    return (
        <>
            <label> {label} : </label>
            <input type={type} value={value}
                name={name}
                onChange={handleChange} /> 
            <p style={{color:'red'}}>{formErrors}</p>
        </>
    )
}   

export default Form