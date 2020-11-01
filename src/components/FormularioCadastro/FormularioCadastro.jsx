import React, { useState, useEffect } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'

function FormularioCadastro({aoEnviar, validacoes}) {
const [etapaAtual, setEtapaAtual] = useState(0)
const [dadosColetados, setDadosColetados] = useState({})

useEffect(() => {
  if(etapaAtual === (formulario.length - 1)){
    aoEnviar(dadosColetados)
  }
})

const formulario = [
  <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
  <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
  <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
  <Typography varint="h5">Obrigado pelo cadastro!</Typography>
]

function coletarDados(dados) {
  setDadosColetados({ ...dadosColetados, ...dados })
  proximo()
}

function proximo() {
  setEtapaAtual(etapaAtual+1)
}

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  )
}

export default FormularioCadastro
