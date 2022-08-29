import React from 'react'
import "./App.css"
import Carros from './components/Carros/Carros'
import Carteirinha from './components/Carteirinha/Carteirinha'
import Semaforo from './components/Semaforo/Semaforo'
import Imagem from './img/fiaplogo.png'
import Foto from './img/joao.jpg'
import Foto2 from './img/ale.jpg'
import Foto3 from './img/gru.png'
import Foto4 from './img/babyyoda.webp'
import { useState } from 'react'

export default function App() {
  const colorPare = "red"
  const colorAtencao = "yellow"
  const colorSiga = "green"
  const carros = ["Corsa", "Voyage", "Monza", "Tiggo", "Kadett", "Fusca", "Fox", "Sandero", "Palio", "Corolla"]
  const nome1 = "João Victor Oliveira da Silva"
  const nome2 = "Alexandre"
  const nome3 = "Gruzinho"
  const turma = "1TDSR"
  const curso1 = "Análise e Desenvolvimento de sistemas"
  
  const [nome, setNome] = useState('')
  const [curso, setCurso] = useState('')
  const [turma1, setTurma] = useState('')
  
  return (
    <>
        <p>João Victor Oliveira da Silva - RM94231 - 1TDSR</p>
        <Semaforo colorPareProps = {colorPare} colorAtencaoProps = {colorAtencao} colorSigaProps = {colorSiga}/>
        <Carros carrosProps = {carros}/>
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          <Carteirinha
            logoProps = {Imagem} imgProps = {Foto} nomeProps = {nome1} turmaProps = {turma} cursoProps = {curso1}
          />
          <Carteirinha
            logoProps = {Imagem} imgProps = {Foto2} nomeProps = {nome2} turmaProps = {turma} cursoProps = {curso1}
          />
          <Carteirinha
            logoProps = {Imagem} imgProps = {Foto3} nomeProps = {nome3} turmaProps = {'Lua2'} cursoProps = {curso1}
          />
          <Carteirinha
            logoProps = {Imagem} imgProps = {Foto4} nomeProps = {nome} turmaProps = {turma1} cursoProps = {curso}
          />
        </div>

        <input type='text' name='nome' onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome"></input>
        <input type='text' name='turma' onChange={(e) => setTurma(e.target.value)} placeholder="Digite sua turma"></input>
        <input type='text' name='curso' onChange={(e) => setCurso(e.target.value)} placeholder="Digite seu curso"></input>
    </>
  )
}
