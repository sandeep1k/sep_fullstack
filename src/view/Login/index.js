import { useState, useEffect } from "react";

const Login = () => {
    const initialValues = {username: '', email:'', password:''}
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        setFormErrors(validate(values))
        setIsSubmit(true)
     }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setValues({username: '', email:'', password:''})
        }
    }, [formErrors, isSubmit]);
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!values.username ) {
            errors.username = "Username is required!"
        }
        if (!values.email ) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid Email!"
        }
        if (!values.password ) {
            errors.password = "Password is required!"
        }else if (values.password.length < 5) {
            errors.password = "Password must be more than 5 characters"
        }
        else if (values.password.length > 10) {
            errors.password = "Password connot exceed more than 10 characters"
        }
        return errors
    }

    return (
        <> 
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div style={{ color: 'green', paddingBottom:"20px", fontSize:'24px', }}> Login Success!</div>
            ) : (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            )}
           
        <form onSubmit={handleSubmit}>
            <label> Name : </label>
            <input type="text" value={values.username} name="username" onChange={handleChange} /> 
            <p style={{color:'red'}}>{formErrors.username}</p>
            <br />
           
            <label> Email : </label>
            <input type="text" value={values.email} name="email" onChange={handleChange} /> 
            <p style={{color:'red'}}>{ formErrors.email}</p>
            <br />
           
            <label> Password : </label>
            <input type="password" value={values.password} name="password" onChange={handleChange} />
            <p style={{color:'red'}}>{formErrors.password}</p>
            <br />
            
            <button type="submit"> Submit </button>
            </form>
            </>
    )
} 
export default Login