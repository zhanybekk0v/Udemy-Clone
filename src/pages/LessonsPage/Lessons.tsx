import { Button, Typography } from '@mui/material';
import React from 'react';
import '../Home.css'

const Lessons = () => {
  return <>
    <div className="lessons">

      <div className="lessons-wrapper">
        <div className="lessons-title">
          <h2>Популярные темы по категориям</h2>
        </div>

        <div className="lessons-category">
          <div className="lessons-menu">
            <ul className='lessons-items'>
              <h3 className="items-title">Development</h3>
              <a href="#">
                <li className="lessons-item">
                  Python
                </li>
              </a>
              <p className='items-descr'>36,354,994 students</p>
              <a href="#">
                <li className="lessons-item">
                  Web Development
                </li>
              </a>
              <p className='items-descr'>11,415,615 students</p>
              <a href="#">
                <li className="lessons-item">
                  Machine learning
                </li>
              </a>
              <p className='items-descr'>7,070,015 students</p>
            </ul>

            <ul className='lessons-items'>
              <h3 className="items-title">Business</h3>
              <a href="#">
                <li className="lessons-item">
                  Financial Analysis
                </li>
              </a>
              <p className='items-descr'>1,195,282 students</p>
              <a href="#">
                <li className="lessons-item">
                  SQL
                </li>
              </a>
              <p className='items-descr'>5,977,561 students</p>
              <a href="#">
                <li className="lessons-item">
                  PMP
                </li>
              </a>
              <p className='items-descr'>1,733,398 students</p>
            </ul>


            <ul className='lessons-items'>
              <h3 className="items-title">IT and Software</h3>
              <a href="#">
                <li className="lessons-item">
                  AWS Certification
                </li>
              </a>
              <p className='items-descr'>6,078,244 students</p>
              <a href="#">
                <li className="lessons-item">
                  Ethical Hacking
                </li>
              </a>
              <p className='items-descr'>10,931,066 students</p>
              <a href="#">
                <li className="lessons-item">
                  Cyber Security
                </li>
              </a>
              <p className='items-descr'>3,998,037 students</p>
            </ul>

            <ul className='lessons-items'>
              <h3 className="items-title">Design</h3>
              <a href="#">
                <li className="lessons-item">
                  Drawing
                </li>
              </a>
              <p className='items-descr'>2,410,849 students</p>
              <a href="#">
                <li className="lessons-item">
                  Photoshop
                </li>
              </a>
              <p className='items-descr'>10,909,736 students</p>
              <a href="#">
                <li className="lessons-item">
                  Graphic Design
                </li>
              </a>
              <p className='items-descr'>3,381,052 students</p>
            </ul>
          </div>
        </div>
        <div className='btn'> 
        <Button >
          <Typography className='btnLesson'>
            Просмотреть другие темы
          </Typography>
        </Button>
        </div>
      </div>
    </div>
  </>;
};

export default Lessons;
