import React from 'react'
import { Link } from 'react-router-dom';
import '../Home.css'

const CoursePage = () => {
  let coursename = '';
  return (
    <>
      <div className="service-course">
        <div className="course-menu">
          <Link to={`${coursename}/python`}>
            <a href="#" className="course-menu-item">Python</a>
          </Link>
          <Link to={`${coursename}/javascript`}>
          <a href="#" className="course-menu-item">JavaScript</a>
          </Link>
          <Link to={`${coursename}/web-dev`}>
          <a href="#" className="course-menu-item">Веб-разработка</a>
          </Link>
          <Link to={`${coursename}/excel`}>
          <a href="#" className="course-menu-item">Excel</a>
          </Link>
          <a href="#" className="course-menu-item">Обработкаи анализ данных</a>
          <a href="#" className="course-menu-item">Сертификация AWS</a>
          <a href="#" className="course-menu-item">Рисование</a>
        </div>
      </div>
      <div className='info-course'>
          
      </div>
    </>
  )
}

export default CoursePage