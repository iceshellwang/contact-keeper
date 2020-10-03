import React, { useState } from 'react'

export const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = user
    return (
        <div className='form-container'>
            <h1>
                Account
    <span className='text-primary'>
                    Register
    </span>
            </h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' name='email' value={email} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Password2</label>
                    <input type='password2' name='password2' value={password2} onChange={onChange}></input>
                </div>
            </form>
        </div>
    )
}
