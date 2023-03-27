import axios from 'axios'
import React, { useContext, useState } from 'react'
import { createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../helpers/const'
import { mentor } from '../hooks/interfaces'
import { contextT, errorT, successT } from '../hooks/types'

const authContext = createContext<contextT>(undefined)

export const useAuth = () => {
  return useContext(authContext)
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [error, setError] = useState<errorT>('')
  const [success, setSuccess] = useState<successT>('')
  const [nickName, setNickName] = useState<any>('')
  const [user, setUser] = useState<mentor>({
    first_name: "",
    last_name: '',
    email: '',
    password: '',
    password2: '',
    type: "",
    experience: '',
    audience: '',
  })

  async function refreshToken() {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens') || '{}')
      const res = await axios.post(`${API}api/token/refresh/`, {
          refresh: tokens.refresh
        });
        localStorage.setItem('tokens' , JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh
        }))
        const email = localStorage.getItem('email')
        setNickName(email)
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }

  async function userLogin(formData: object, email: string) {
    try {
      let res = await axios.post(`${API}login/`, formData)
      console.log(res.data)

      localStorage.setItem('tokens', JSON.stringify(res.data))
      localStorage.setItem('email', email)
      setNickName(email)
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
      setError(Object.values(error.response.data).flat(2))
    }
  };

  function logOut() {
    localStorage.removeItem('tokens')
    localStorage.removeItem('user')
    setNickName(false)
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Вы вышли из аккаунта',
      footer: '<a href="/choose-status-login">Войдите в аккаунт снова?</a>'
    })
  }

  async function userRegister(formData: object) {
    try {
      let res = await axios.post(`${API}register/`, formData);
      console.log(res)
      navigate('/')
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
      setError(Object.values(error.response.data).flat(2));
    }
  }

  async function mentorRegister(formData: object) {
    try {
      let res = await axios.post(`${API}register/mentor/`, formData)
      navigate('/choose-status-login')
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
      setError(Object.values(error.response.data).flat(2));
    }
  }

  async function forgotPassword(formData: object) {
    try {
      let res = await axios.post(`${API}forgot_password/`, formData)
      setSuccess(res.data)
      setError('')
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
      setError(Object.values(error.response.data).flat(2));
    }
  }

  async function forgotPasswordConfirm(formData: object) {
    try {
      let res = await axios.post(`${API}forgot_password_confirm/`, formData)
      navigate('/page-not-found')
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
      setError(Object.values(error.response.data).flat(2));
    }
  }

  async function activeCode(code: any) {
    try {
      let res = await axios(`${API}activete/${code}/`)
      console.log(res)
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }

  async function changePassword(formData: object) {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens') || "")
      const Authorization = `Bearer ${tokens.access}`
      const config = {
        headers: {
          Authorization
        }
      }
      let res = await axios.post(`${API}change_password/`, formData, config)
      console.log(res);
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }

  const values = {
    refreshToken,
    userLogin,
    userRegister,
    mentorRegister,
    nickName,
    error,
    setError,
    setSuccess,
    logOut,
    forgotPassword,
    forgotPasswordConfirm,
    changePassword,
    setUser,
    user,
    activeCode,
    success
  }
  return (
    <authContext.Provider value={values}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider