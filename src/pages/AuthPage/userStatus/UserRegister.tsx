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
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useAuth } from '../../../contexts/AuthContextProvider'
import { user } from '../../../hooks/interfaces';
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


const UserRegister: React.FC = () => {
  const { error, userRegister } = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState<user>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',

  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleSave = () => {
    if (!user.email.trim() || !user.last_name || !user.password || !user.first_name || !user.password2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Пожалуйста заполните поля!',
      })
    } else if (!user.password != !user.password2) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Пароли не совпадают!',
        })
      } else {
      let formData = new FormData()
      formData.append("first_name", user.first_name)
      formData.append("last_name", user.last_name)
      formData.append("email", user.email)
      formData.append("password", user.password)
      formData.append("password2", user.password2)
      userRegister(formData)
      Swal.fire({
        icon: 'success',
        title: "Success",
        text: "Вы успешно зарегистрировались!"
      })
      navigate('/')
    }
  }
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ marginTop: '100px' }}>
        {error ? (<Alert severity='error'>{error}</Alert>) : (null)}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '29vw'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#03bafc' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }} spacing={2}>
              <Grid sx={{ display: 'flex', gap: '15px' }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    value={user.first_name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({
                      ...user,
                      first_name: event.target.value
                    })}
                    label="Имя"
                    className='mentor-reg__input'
                    autoFocus

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    value={user.last_name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({
                      ...user,
                      last_name: event.target.value
                    })}
                    label="Фамилия"
                    className='mentor-reg__input'
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  value={user.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({
                    ...user,
                    email: event.target.value
                  })}
                  fullWidth
                  label="Адрес электронной почты"
                  autoFocus
                  className='mentor-reg__input'
                />
              </Grid>
              <Grid sx={{ display: 'flex', gap: '15px' }}>
              <Grid item xs={12}>

                <TextField
                  required
                  fullWidth
                  id="Пароль"
                  value={user.password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({
                    ...user,
                    password: event.target.value
                  })}
                  label="Пароль"
                  type="password"
                  className='mentor-reg__input'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={user.password2}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({
                    ...user,
                    password2: event.target.value
                  })}
                  name="password"
                  label="Подтверждение пароля"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className='mentor-reg__input'
                />
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel className='mentor__reg__checkbox'
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Я хочу оставаться на высоте и получать рассылку с полезными советами, мотивирующими фактами, специальными новостями и промоакциями для преподавателей"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={handleSave}
              variant="contained"
              className='mentor-reg__btn'
              sx={{ mt: 3, mb: 2, background: '#1f2121', borderRadius: '20px' }}
            >
              Регистрация
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={() => navigate('/user-login')}
                  href="#" variant="body2" sx={{ color: 'black', textDecoration: 'none', borderBottom: '1px solid black' }}>
                  Есть аккаунт? Вход
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default UserRegister;