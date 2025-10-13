import { useState } from "react"

//Tiene la responsabilidad de manejar el estado de formulario a lo largo de mi app
const useForm = (initialFormState, onSubmit) =>  {
    //Estado con los valores del formulario
    const [ formState, setFormState ] = useState(initialFormState)
    

    const onInputChange = (event) =>{
        //Que campo estamos modificando 
        const field = event.target

        //Nombre del campo del formulario
        const fieldName =  field.name

        //Valor del campo de formulario
        const fieldValue = field.value

        //Modifico el estado del formulario
        setFormState(
            (prevFormState) => {
                return { ...prevFormState, [fieldName]: fieldValue }
            }
        )
    }

    const handleSubmit = (event) => {
        //Evitamos que la pagina se recargue
        event.preventDefault()

        onSubmit(formState)
        
    }

    const resetForm = () => {
        setFormState(initialFormState)
    }

    return {
        formState,
        onInputChange,
        handleSubmit,
        resetForm
    }

}

export default useForm