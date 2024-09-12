import React from 'react'

import './Styles/Section.scss'

import logo from './assets/image.png'

const Section = () => {

    return (

        <div className='section'>

            <div className="section__container">

                <div className="section__img">

                    <img src={logo} alt="" />

                </div>

                <div className="section__content">

                    <h1>Shanmukhi</h1>

                    <p>JavaScript development</p>

                    <p>Java </p>

                    <p>Python</p>


                </div>

            </div>

        </div>

    )

}

export default Section

