interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    onClick?: () => any
}

export default function Botao(props: BotaoProps ){
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-tr from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${props.className}
        `}>
            {props.children}
        </button>
    )
}