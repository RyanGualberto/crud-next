import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClients"

export default function Home() {

  const {
     tabelaVisivel,
     formularioVisivel,
     cliente,
     clientes,
     novoCliente,
     salvarCliente,
     selecionarCliente, 
     excluirCliente,
     exibirTabela
    } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tr from-purple-500 to-black text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? ( 
          <>
              <div className={`flex justify-end`}>
                  <Botao 
                  cor="green" 
                  onClick={novoCliente}
                  className="mb-4"
                  > Novo Cliente
                  </Botao>
              </div>
                
              <Tabela 
                clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
          </>
        ) : (
            <Formulario 
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
            />
        ) }

      </Layout>
    </div>
  )
}
