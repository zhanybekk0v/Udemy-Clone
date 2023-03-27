import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAuth } from '../../../contexts/AuthContextProvider'

const SecondQuation = () => {
  const { user, setUser, mentorRegister } = useAuth()
  const navigate = useNavigate()

  const handleSave = () => {
    let formData = new FormData()
    formData.append('email', user.email)
    formData.append('password', user.password)
    formData.append('password2', user.password2)
    formData.append('first_name', user.first_name)
    formData.append('last_name', user.last_name)
    formData.append('type', user.type)
    formData.append('experience', user.experience)
    formData.append('audience', user.audience)

    mentorRegister(formData)  
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Вы успешно зарегистрировались!',
     })
  }

  return (
    <div>
      <Container >
        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
          <h1>Расширяйте свою аудиторию</h1>
          <p style={{ width: '50vw' }}>Когда ваш курс опубликован, вы можете начать расширять свою аудиторию студентов, использовать возможности продвижения на торговой площадке Lans2K и рекламировать свои курсы самостоятельно. Все вместе это поможет заинтересованным студентам найти ваш курс. </p>

          <h2>Есть ли у вас аудитория, с которой вы хотите поделиться своим курсом?</h2>

          <div className='questions-block'>
            <RadioGroup className='questions-block' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({
              ...user, audience: e.target.value
            })} >

              <FormControlLabel className='questions-block__label' value={'no'} control={<Radio />} label={'В настоящий момент нет'} />
              <FormControlLabel className='questions-block__label' value={'a few'} control={<Radio />} label={'У меня маленькая аудитория'} />
              <FormControlLabel className='questions-block__label' value={'a lot'} control={<Radio />} label={'У меня достаточная аудитория'} />



            </RadioGroup>

            {!user.audience.trim() ? (<Button className='question__btn'
           onClick={() =>  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Пожалуйста заполните поля!',
           })}
            >Регистрация</Button>) : (<Button
              onClick={() => handleSave()}
            >Регистрация</Button>)}
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default SecondQuation