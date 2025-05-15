import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is food.😊</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum in vitae, quas iste sed quasi ipsam itaque sunt hic labore magnam facilis suscipit doloremque molestias exercitationem at distinctio sit sequi illo tempore. Eum, qui quidem! Atque, debitis! Sequi doloremque voluptatibus amet incidunt labore. Quia voluptates eos dolores ut architecto.
                </p>
                <Link to={"/menu"}>
                  Explore Menu
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </Link>
            </div>
            <div className='banner'>
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  );
}

export default About;