import Cliente from '../core/Cliente'

interface TabelaProps{
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps){

    function renderHeader(){
        return(
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderData(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>
                        {cliente.id}
                    </td>
                    <td>
                        {cliente.nome}
                    </td>
                    <td>
                        {cliente.idade}
                    </td>
                </tr>
            )
        }) 
    }
    return (
        <table>
            <thead>
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