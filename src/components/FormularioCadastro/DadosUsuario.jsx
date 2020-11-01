import React,  { useState, useContext } from 'react'
import { TextField, Button } from "@material-ui/core"

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form 
      onSubmit={(event) => { 
        event.preventDefault()
        if(possoEnviar()) {
          aoEnviar({email, senha})
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="Senha"
        name="senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario