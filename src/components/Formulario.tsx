import Entrada from './Entrada'
import { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')  
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)  

    return(
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto='ID' 
                    tipo='text' 
                    valor={id} 
                    className='mb-4'
                />
            ) : false }

            <Entrada 
                className='mb-4'
                texto='Nome' 
                tipo='text' 
                valor={nome}
                valorModificado={setNome}
            />

            <Entrada 
                texto='Idade' 
                tipo='number' 
                valor={idade}
                valorModificado={setIdade}
            />
            <div className='flex justify-end mt-3'>
                <Botao 
                    cor='blue' 
                    className='mr-2'
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'alterar' : 'salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>

            </div>
        </div>
    )
}