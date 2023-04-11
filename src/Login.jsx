import React from 'react'

const Login = () => {
  return (
    <div className='r-container'>
        <span className='title'>Plus Chat</span>
        <span className='sub-title'>Login</span>
        <form>
            <input type="email" placeholder='Digite o e-mail' />
            <input type="password" placeholder='Digite a senha' />
            <button>Acessar</button>
        </form>
        <p>Você ainda não registrou? Registrar</p>


    </div>
  )
}

export default Login