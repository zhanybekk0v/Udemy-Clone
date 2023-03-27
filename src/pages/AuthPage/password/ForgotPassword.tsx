import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Alert, Button, Container, TextField, Typography, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../../Auth.css'
import { useAuth } from '../../../contexts/AuthContextProvider';
import ReCAPTCHA from 'react-google-recaptcha';
import { emailT } from '../../../hooks/types';
import Swal from 'sweetalert2';





const ForgotPassword: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<emailT>('')
  const { forgotPassword, error, success } = useAuth()
  const [isRechapt, setIsRechapt] = useState<boolean>(false)

  const chapkey = '6LcVa4MkAAAAAGRZEt2zTBIumrqv5mgzAZsNrR4M'

  const handleSave = () => {
    if (!email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Пожалуйста заполните поля!',
      })
    }
    if (isRechapt) {
      let formData = new FormData()
      formData.append('email', email)
      forgotPassword(formData)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Пройдите проверку!',
      })
    }
  }


  const reChapt = () => {
    setIsRechapt(true)
  }

  return (
    <Container component='main' maxWidth='xs' sx={{ mt: 13, border:'1px dotted black', boxShadow: '1px -1px 13px #b6b2b2' , padding:"50px"}} >
      <Typography sx={{ fontWeight: 700, fontSize: '20px', paddingBottom: '15px', marginBottom: '40px', borderBottom:"1px solid black" }}>Забыли пароль? </Typography>
      <Typography sx={{ fontWeight: 700, fontSize: '20px', paddingBottom: '15px', marginBottom: '40px' }}> Вы можте сбросить пароль укажите свою почту и на почту отправим ссылку для сброса пароля!</Typography>
      <TextField
        required
        fullWidth
        sx={{ marginTop: '20px' }}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        label="Адрес электронной почты"
        type="text"
        className='mentor-reg__input'

      />
      <ReCAPTCHA
        style={{ marginTop: '20px', width:"500px" }}
        sitekey={chapkey}
        onChange={reChapt}
      />

      {success ? (<Button
        type="submit"
        onClick={() => navigate('/new-password')}
        fullWidth
        variant="contained"
        className='mentor-reg__btn'
        sx={{ mt: 3, mb: 2, background: 'black', borderRadius: '20px' }}
      >
        Сбросить пароль
      </Button>) : (<Button
        type="submit"
        onClick={() => handleSave()}
        fullWidth
        variant="contained"
        className='mentor-reg__btn'
        sx={{ mt: 3, mb: 2, background: 'black', borderRadius: '20px' }}
      >
        Отправить запрос
      </Button>)}

      <Typography sx={{ textAlign: 'center', fontSize: '17px', fontWeight: '600' }}>Или</Typography>
      <Button
        type="submit"
        onClick={() => navigate('/choose-status-login')}
        fullWidth
        variant="contained"
        className='forgot-password__btn'
        sx={{ mt: 2, mb: 2, borderRadius: '20px', background: "black" }}
      >
        Войти
      </Button>

    </Container>
  );
};

export default ForgotPassword;