import React from 'react'
import useFetch from '../../Hooks/useFetch.jsx'
import useForm from '../../Hooks/useForm.jsx'
import { register } from '../../Services/auth.service.js'
const RegisterScreen = () => {

    //Guardamos los campos que tendra nuestro form
    const registerFormFields = {
        USERNAME: 'username',
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    //Que valor tendra inicialmente el estado de formulario
    const initialFormState = {
        [registerFormFields.USERNAME]: '',
        [registerFormFields.EMAIL]: '',
        [registerFormFields.PASSWORD]: ''
    }

    //Estados para manejar una consulta al servidor
    const { response, error, loading, sendRequest } = useFetch()

    function onRegister(formStateSent) {
        sendRequest(() => {
            return register(
                formStateSent[registerFormFields.USERNAME],
                formStateSent[registerFormFields.EMAIL],
                formStateSent[registerFormFields.PASSWORD],
            )
        })
    }

    /// Alternativa, usar react hook forms / react formik

    const { formState, onInputChange, handleSubmit, resetForm } = useForm(initialFormState, onRegister)



    return (
        <div>
            <h1>Registrate</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        placeholder='example'
                        value={formState[registerFormFields.USERNAME]}
                        name={registerFormFields.USERNAME}
                        id='username'
                        onChange={onInputChange}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        placeholder='example@mail.com'
                        value={formState[registerFormFields.EMAIL]}
                        name={registerFormFields.EMAIL}
                        onChange={onInputChange}
                        id={'email'}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="text"
                        placeholder='example-123'
                        value={formState[registerFormFields.PASSWORD]}
                        name={registerFormFields.PASSWORD}
                        onChange={onInputChange}
                        id={'password'}
                    />
                </div>
                {error && <span style={{ color: 'red' }}> {error} </span>}
                {response && <span style={{ color: 'green' }}> Usuario registrado con exito! </span>}
                {
                    loading
                        ? <button disabled>Registrando</button>
                        : <button>Registrarse</button>
                }

            </form>
        </div>
    )
}

export default RegisterScreen