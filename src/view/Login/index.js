import { useState, useEffect } from "react";
import Form from '../../components/Form';
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
               
                <Form label="Name"
                    type="text"
                    value={values.username}
                    name="username"
                    handleChange={handleChange} 
                    formErrors={formErrors.username}
                />

                <Form label="Email"
                type="text"
                value={values.email}
                name="email"
                handleChange={handleChange} 
                formErrors={formErrors.email}
                />

                 <Form label="Password"
                type="password"
                value={values.password}
                name="password"
                handleChange={handleChange} 
                formErrors={formErrors.password}
                />
            
            <button type="submit"> Submit </button>
            </form>
            </>
    )
} 
export default Login