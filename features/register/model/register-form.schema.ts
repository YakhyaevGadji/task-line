import * as yup from 'yup';
const RegisterSchema = yup
    .object({
        login: yup.string().required('Login is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();
export default RegisterSchema;
