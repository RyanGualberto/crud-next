import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState} from 'react'

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 12, '2'),
    new Cliente('Marcos', 23, '3'),
    new Cliente('Ronaldo', 87, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome);
    
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome);
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente);
    
  }

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

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
                  className="mb-4"
                  onClick={() => setVisivel('formulario')}
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
            cliente={clientes[2]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
            />
        ) }

      </Layout>
    </div>
  )
}
