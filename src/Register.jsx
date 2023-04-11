import React from 'react'
import AddAvatar from './assets/img/images.png'
const Register = () => {
  return (
    <div className='r-container'>
        <span className='title'>Plus Chat</span>
        <span className='sub-title'>Registro</span>
        <form>
            <input type="text" placeholder='Digite o nome' />
            <input type="email" placeholder='Digite o e-mail' />
            <input type="password" placeholder='Digite a senha' />
            <input  type="file" id="file" style={{ display: 'none' }}  />
            <label htmlFor="file">
                <img src={AddAvatar} alt="avatar" />
                <span>Adiciona o avatar</span>
            </label>
            <button>Registrar</button>


        </form>
        <p>Você tem conta? Login</p>


    </div>
  )
}

export default Register