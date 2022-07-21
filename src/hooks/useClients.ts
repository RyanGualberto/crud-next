import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../back/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import { useState,useEffect } from 'react'
import useVisible from "./useVisible"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {tabelaVisivel, formularioVisivel, exibirFormulario,exibirTabela } = useVisible();
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  
  
    useEffect(obterTodos, [])
    
    function obterTodos(){
      repo.obterTodos().then(clientes => {
          setClientes(clientes)
          exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    
    function novoCliente(cliente: Cliente){
      setCliente(Cliente.vazio())
      exibirFormulario()  
    }
    
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
      tabelaVisivel,
      formularioVisivel,
      clientes,
      cliente,
      novoCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      exibirTabela
    }
}