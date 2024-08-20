 
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'

import './BIOInputs.css'

function BIOInputs () {
    const [user, setUser] = useState ({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        password_check: ''
    })

    const [form, setForm] = useState ({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        password_check: ''
    })


    const [isChecked, setIsChecked] = useState(false)

    
    function handleChangeInput (event) {
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleSetValueBtnClick (event) {
        if (!isChecked) {
            alert ('Подтвердите пароль')
            return
        }

        if(form.password !== form.password_check) {
            alert('Пошел нахуй')
            return;
        }

        setUser({
            name: form.name,
            surname:form.surname,
            phone: form.phone,
            email: form.email,
            password: form.password,
            password_check: form.password_check
        });

        console.log(user)
        alert('Успешная регистрация')
    }

    function handleCheckboxChecked (event) {
        setIsChecked(event.target.checked);
    }

    


    return (
        <div className='header__wrapper'>
            <input 
                className='firstname-inputs'
                type="text" 
                name='name'
                placeholder='Имя'
                value={form.name}
                onChange={handleChangeInput}/>

            <input 
                className='firstname-inputs'
                type="text" 
                name='surname'
                placeholder='Фамилия'
                value={form.surname}
                onChange={handleChangeInput}/>

            <input 
                type="text" 
                name='phone'
                placeholder='Номер телефона'
                value={form.phone}
                onChange={handleChangeInput}/>

            <input 
                type="text" 
                name='email'
                placeholder='Email'
                value={form.email}
                onChange={handleChangeInput}/>

            <input 
                type="text" 
                name='password'
                placeholder='Пароль'
                value={form.password}
                onChange={handleChangeInput}/>

            <input 
                type="text" 
                name='password_check'
                placeholder='Повторите пароль'
                value={form.password_check}
                onChange={handleChangeInput}/>

            <div className='btn-zone__wrapper'>
                <p>Подтвердите пароль</p>
                <input 
                    className='confirm-password-input'
                    type="checkbox" 
                    name="confirm-password"
                    onChange={handleCheckboxChecked}/>
            </div>

            <button 
                className='next-page-btn'
                onClick={handleSetValueBtnClick}>
                    Продолжить
            </button>

            
                
        </div>
    )
}

export default BIOInputs;