import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void

}

export default function Tabela(props: TabelaProps){

    const showActions = props.clienteExcluido || props.clienteSelecionado
    function renderHeader(){
        return(
            <tr>
                <th className={`text-left p-4`}>Codigo</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {showActions ? <th className={`p-4`}>Acoes</th> : false}  
            </tr>
        )
    }
    
    function renderActions(cliente: Cliente){
        return(
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button 
                    onClick={() => props.clienteSelecionado?.(cliente) } 
                    className={`flex justify-center items-center rounded-full p-2 m-1 text-green-600 hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button 
                    onClick={() => props.clienteExcluido?.(cliente) } 
                    className={`flex justify-center items-center rounded-full p-2 m-1 text-red-500 hover:bg-purple-50`}>
                        {IconeLixo}
                    </button>   
                ) : false}
            </td>
        )
    }

    function renderData(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={`text-left p-4`}>
                        {cliente.id}
                    </td>
                    <td className={`text-left p-4`}>
                        {cliente.nome}
                    </td>
                    <td className={`text-left p-4`}>
                        {cliente.idade}
                    </td>
                    {showActions ?  renderActions(cliente) : false}
                </tr>
            )
        }) 
    }
    return (
        <table className={`
            rounded-xl
            overflow-hidden
            w-full
        `}>
            <thead className={`
              text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}> 
                {
                    renderHeader()
                }
            </thead>
            <tbody>
                {
                    renderData()
                }
            </tbody>
        </table>
    )
}