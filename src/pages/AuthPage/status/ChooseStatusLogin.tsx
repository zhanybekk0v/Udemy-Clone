import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import '../../Auth.css'
import { useNavigate } from 'react-router-dom'


const ChooseStatusLogin = () => {
  const navigate = useNavigate()
  return (
    <div style={{paddingTop: '5rem'}}> 
        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60vh', justifyContent: 'start', marginTop: '30px' }}>
          <h1>Кем вы являетесь?</h1>

          <div className='block__btn__login'>
            <Button sx={{width: '70vmin'}}
              onClick={() => navigate('/mentor-login')}>Ментор</Button>
            <Button
              onClick={() => navigate('/user-login')}>Пользователь</Button>
          </div>
        </Grid>
      </div>

  );
};

export default ChooseStatusLogin;