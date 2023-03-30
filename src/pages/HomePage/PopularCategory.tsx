import React from 'react'
import { POPULAR_KATEGORY } from '../../helpers/data'


const PopularCategory = () => {
  return (
    <>
      <div className="kategory-wrapper">
        <h2 className="kategory-title">
          Популярные категории
        </h2>
        <div className="kategory_cards">
          {POPULAR_KATEGORY.map((item) => (
            <div className='kategory-card' key={item.id}>
              <div className="kategory-pic">
                <img src={item.image} alt="" />
              </div>
              <div className="kategory-descr">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PopularCategory