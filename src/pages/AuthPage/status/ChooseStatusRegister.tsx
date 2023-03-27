import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import '../../Auth.css'
import {useNavigate} from 'react-router-dom'

const ChooseStatusRegister = () => {
  const navigate = useNavigate()
  return (
    <div>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60vh', justifyContent: 'start', paddingTop:'7rem' }}>
          <h1>Выберите статус</h1>

          <div className='block__btn__login'>
            <Button sx={{width: '70vmin'}}
              onClick={() => navigate('/mentor-register')}>Ментор</Button>
            <Button
              onClick={() => navigate('/user-register')}>Пользователь</Button>
          </div>
        </Grid>
    </div>
  )
}

export default ChooseStatusRegister