
const Form = ({label, type, value, ...rest}) => {
    
 return (
        <>
            <label> {label} : </label>
            <input type={type} value={value}
                name={rest.name}
                onChange={rest.handleChange} /> 
            <p style={{color:'red'}}>{rest.formErrors}</p>
        </>
    )
}   

export default Form