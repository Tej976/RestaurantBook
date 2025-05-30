import React from 'react'
import { data } from '../restApi.json';

const Manu = () => {
  return (
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='heading_section'>
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci quis eum maiores maxime laboriosam ex aspernatur fugit esse, corrupti sequi nemo itaque iusto recusandae! Fuga fugit accusantium repudiandae beatae.</p>
        </div>
        <div className='dishes_container'>
            {
                data[0].dishes.map(element => {
                    return(
                        <div className='card' key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Manu
