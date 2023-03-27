import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAuth } from '../../../contexts/AuthContextProvider'
import '../../Auth.css'

const FirstQuation = () => {
  const {user , setUser} = useAuth()
  const navigate = useNavigate()
  return (
    <div>
      <Container >
        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'center', paddingTop:'7rem' }}>
          <h1>Поделитесь своими навыками</h1>
          <h4 style={{ width: '50vw' }}>Курсы Lans2k - это обучение на основе видеоматериалов, которые помогают студентам преорести практические навыки. Вне вне зависимости от того, какой опыт преподавания у вас есть, мы поможем вам организовать ваши материалы в виде онлайн-курса, чтобы студентам было интересно и полезно их изучать. </h4>

          <h2>Каким видом преподавания вы занимались раньше?</h2>

          <div className='questions-block'>
            <RadioGroup className='questions-block' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({
              ...user, type: e.target.value
            })} >

              <FormControlLabel className='questions-block__label' value={'individual not oficial'} control={<Radio />} label={'Лично, частным образом'} />
              <FormControlLabel className='questions-block__label' value={'individual prof'} control={<Radio />} label={'Лично, профессионально'} />
              <FormControlLabel className='questions-block__label' value={'online'} control={<Radio />} label={'Онлайн'} />
              <FormControlLabel className='questions-block__label' value={'other'} control={<Radio />} label={'Другое'} />
            </RadioGroup>

            {!user.type.trim() ? (
            <Button className='question__btn'
           onClick={() =>  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Пожалуйста заполните поля!',
           })}
            >Дальше</Button>) : (<Button
              onClick={() => navigate('/question-2')}
            >Дальше</Button>)}
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default FirstQuation