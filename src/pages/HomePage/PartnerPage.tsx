import React from 'react'
import { images } from '../../helpers/images'
import '../Home.css'

const PartnerPage = () => {
  return (
    <>
      <div className="container">
        <div className='partner-wrapper' >
          <div className="partner-title">
            <h2>
              Нам доверяют более 13 400 отличных команд
            </h2>
            <p>Ведущие компании пользуются нашими курсами, чтобы поддерживать актуальность навыков своих сотрудников.
            </p>
          </div>
          <div className="partner-cards">
            <div className="partner-card">
              <img src={images.nasdaqDark_logo} alt="" />
            </div>
            <div className="partner-card">
              <img src={images.volkswagenDark_logo} alt="" />
            </div>
            <div className="partner-card">
              <img src={images.boxDark_logo} alt="" />
            </div>
            <div className="partner-card">
              <img src={images.netappDark_logo} alt="" />
            </div>
            <div className="partner-card">
              <img src={images.eventbriteDark_logo} alt="" />
            </div>
            <div className="partner-card">
              <img src={images.tcsDark_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnerPage