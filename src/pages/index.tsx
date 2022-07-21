import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState, useEffect} from 'react'
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../back/db/ColecaoCliente"

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())


  useEffect(obterTodos, [])
  
  function obterTodos(){
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('formulario')
  }
  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  
  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('formulario')  
  }
  
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tr from-purple-500 to-black text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? ( 
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
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
          </>
        ) : (
            <Formulario 
            cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
            />
        ) }

      </Layout>
    </div>
  )
}
