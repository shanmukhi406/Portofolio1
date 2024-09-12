
import React, { useState } from 'react'
import '../Styles/Main.scss'
import anu from '../assets/women.jpeg'
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@mui/icons-material'

const Main = () => {

    return (

        <div className='main'>

            <div className='main__container'>

                <div className="main__content">

                    <div className="text">

                            <p>Hey There !</p>

                            <h1>I am Shanmukhi</h1>

                            <p>I am learning webdevelopment</p>

                            <div className="icons">

                                <Instagram className='icon'/>

                                <Facebook className='icon'/>

                                <LinkedIn className='icon'/>

                            </div>

                    <div className="buttons">

                        <button>See Me</button>

                        <button>Hire Me</button>

                    </div>

                    </div>

                </div>

                <div className="main__img">

                    <img src={anu} width="300px" alt="" />

                </div>

            </div>

        </div>

    )

}

export default Main

