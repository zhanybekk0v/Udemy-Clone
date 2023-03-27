import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../Auth.css'
import { useAuth } from '../../../contexts/AuthContextProvider';
import { emailT, passwordT } from '../../../hooks/types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const MentorStatusLogin: React.FC = () => {
  const { userLogin, error, user } = useAuth()
  const [email, setEmail] = useState<emailT>('')
  const [password, setPassword] = useState<passwordT>('')
  const navigate = useNavigate()


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  const handleSave = () => {
if(!email.trim() || !password.trim()){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Пожалуйста заполните поля!',
      })
    } else  {
      let formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      userLogin(formData, email)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Вы успешно вошли в свой аккаунт!',
      })
      navigate('/')
    } 
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" sx={{ width: '35vw' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 9,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#03bafc', marginBottom: '20px' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography style={{ marginBottom: '15px' }} className='mentor-log__p' component="h1" variant="h5"  >
              Вход в учетную запись
            </Typography>


            <Box component="form" onSubmit={handleSubmit} noValidate sx={{
              mt: 1, width: '100%'
            }}>
              <div className='social-media__btn'>
                <Button> <div
                  style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png)` }}
                  className='social-media__logo'></div> Войти через Facebook
                </Button>
                <Button><div
                  style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png)` }}
                  className='social-media__logo'></div> Войти через Google
                </Button>
                <Button
                  sx={{ marginBottom: '12px' }}
                ><div
                  style={{ backgroundImage: `url(https://svgsilh.com/svg/2962084.svg)`, width: '40px' }}
                  className='social-media__logo'></div> Войти через ICloud
                </Button>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  id="email"
                  label="Адрес электронной почты"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className='mentor-reg__input'

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className='mentor-reg__input'

                />
              </div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить аккаунт"
              />
              <Button
                type="submit"
                fullWidth
                onClick={handleSave}
                variant="contained"
                sx={{ mt: 3, mb: 2, background: '#17191b', borderRadius: '20px' }}
                className='mentor-reg__btn'
              >
                Вход
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={() => navigate('/forgot-password')}
                    href="#" variant="body2" className='mentor-link-footer' sx={{textDecoration:'none' , color:'black'}}>
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => navigate('/mentor-register')}
                    className='mentor-link-footer' href="#" variant="body2" sx={{textDecoration:"none" , color:'black'}}>
                    {"Нет аккаунта? Зарегистрируйтесь"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default MentorStatusLogin