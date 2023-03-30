import React from 'react'
import { images } from '../../helpers/images'
import '../Home.css'
import Lessons from '../LessonsPage/Lessons'
import CoursePage from './CoursePage'
import PartnerPage from './PartnerPage'
import PopularCategory from './PopularCategory'
import PopularVideo from './PopularVideo'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={images.header_background} alt="" className="header-logo-pic" />
          </div>
          <div className="header-title">
            <h1>Знания на всю жизнь</h1>
            <p>Инвестируйте в себя. Выполните вход, чтобы воспользоваться специальным предложением. Распродажа курсов заканчивается 30 марта.</p>
          </div>
          <div className="header-content">
            <h2>Большой выбор курсов</h2>
            <p>Выбирайте из 213 000 онлайн-видеокурсов; новые курсы добавляются на сайт каждый месяц</p>
          </div>
        </div>
        <CoursePage />
        <PopularVideo />
        <PopularCategory />
      </div>
      <Lessons />
      <PartnerPage />
    </>
  )
}

export default HomePage