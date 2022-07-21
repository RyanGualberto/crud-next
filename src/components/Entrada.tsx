interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorModificado?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className={`mb-2`}>
                {props.texto}
            </label>
            <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorModificado?.(e.target.value)}
            className={`
                border-purple-500 border 
                rounded-lg focus:outline-none 
                bg-gray-50 px-4 py2
                ${props.somenteLeitura? '' : 'focus:bg-white'}
            `}
            />
        </div>
    )
}