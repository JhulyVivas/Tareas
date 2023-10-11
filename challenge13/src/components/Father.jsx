import React, { useCallback, useState } from 'react'
import { Son } from './Son'

export const Father = () => {

    const list = [2, 4, 6, 8, 10]
    const [valor, setValor] = useState(0)

    const increment =  useCallback (
        (num) => {
            console.log('calling setcounter')
            setValor( valor + num)
    },
    [],
    )

    return(
        <div>
            <h1> Father </h1>
            <p> Total: { valor } </p>
            <hr />

            {
                list.map( ( n , idx )=> {
                    return(
                    <Son 
                    numero={ n }
                    increment={ increment }
                    key={ idx }
                    />
                    )
                })
            }
        </div>
    )
}


