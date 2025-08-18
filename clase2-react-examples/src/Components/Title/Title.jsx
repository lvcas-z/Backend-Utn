import React from 'react'


/* children es una prop reservada que sera igual a 
el contenido anidado del componente */


const Title = ({children}) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default Title