 
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './HeaderSection.css'
function HeaderSection () {
    return (
        <div className='header__wrapper'>
            <h1 className='header-create__text'>Создание аккаунта</h1>
            <p className='header-create__text-under'>Введите свои данные, чтобы создать аккаунт в сервисе</p>
        </div>
    )
}

export default HeaderSection;