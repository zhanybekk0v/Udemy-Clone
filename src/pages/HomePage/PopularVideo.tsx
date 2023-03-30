import { url } from 'inspector'
import React from 'react'
import { images } from '../../helpers/images'
import { IpopVideo } from '../../hooks/interfaces'
import '../Home.css'



const POPULAR_COURSE: IpopVideo[] = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7_1-9Cp_4U2_XJb6dQpxG4Q-AYQlAZdqHQ&usqp=CAU',
    title: 'WEB- разработчик',
    avtor: 'Иван Петраченко',
    reiting: 4.8,
    watched: '11 200',
    price: '16,99',
    prev_price: '74,99',
    popular: 'Лидер продаж'
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA40QIDFh-zpxf5JAWIgpQfGF6c8Us1PppQ&usqp=CAU',
    title: 'Полный курс по JavaScript + React - с нуля до результата',
    avtor: 'Иван Петраченко',
    reiting: 4.8,
    watched: '17 799',
    price: '16,99',
    prev_price: '74,99',
    popular: 'Лидер продаж'
  },
  {
    id: 3,
    img: 'data:image/jpeg;base64,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',
    title: 'Data Science и Machine Learning на Python 3 с нуля',
    avtor: 'YouRa Allakhverdov',
    reiting: 4.7,
    watched: '10 503',
    price: '16,99',
    prev_price: '69,99',
    popular: 'Лидер продаж'
  },
  {
    id: 4,
    img: 'data:image/png;base64,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',
    title: 'Python - Полный Курс по Python',
    avtor: 'Bogdan Stashchuk| Software Enhineer',
    reiting: 4.8,
    watched: '437',
    price: '16,99',
    prev_price: '74,99',
    popular: 'Лидер продаж'
  },
]
const PopularVideo: React.FunctionComponent = () => {
  return (
    <>
      <div >
        <div className="video-wrapper">
          <h2>Студенты просматривают</h2>
          <div className="info-cards">
            {POPULAR_COURSE.map((item) => (
              <div className="info-card" key={item.id}>
                <div className="info-pic">
                  <img src={item.img} alt="" />
                </div>
                <h2 className='info-card_title'>{item.title}</h2>
                <span className='info-card_avtor'>{item.avtor}</span>
                <div className="info-card-reiting">
                  <span className='info-card_reiting-num'>{item.reiting}</span>
                  <img className='info-card_reit' src={images.reiting_logo} alt="" />
                  <span>({item.watched})</span>
                </div>
                <div className="info-card_price">{item.price} $
                  <span>{item.prev_price}</span>
                </div>
                <div className="info-card_genre">
                  {item.popular}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularVideo
