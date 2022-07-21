import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

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

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tr from-purple-500 to-black text-white
    `}>
      <Layout titulo="Cadastro Simples">
          <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
          />
      </Layout>
    </div>
  )
}
