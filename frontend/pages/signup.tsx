import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
import { Alert } from '@mui/material'

const Login = () => {

    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPass , setConfirmPass] = useState('')
    const [submit , setSubmit] = useState(false)
    const [validForm , setValidForm] = useState(false)

    const formSubmit = (e : any) => {
        e.preventDefault()
        setSubmit(true)
        if((userName === '' || email === '' || password === '' || confirmPass === '') === false || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) === false || (password !== confirmPass) === false){
            setValidForm(true)
        }
    }

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.alertContainer}>
                    {
                        submit&&(userName === '' || email === '' || password === '' || confirmPass === '' ? 
                            <Alert severity='error'>A required field is missing</Alert>
                        : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) !== true ? 
                            <Alert severity='error'>You have entered an invalid email address</Alert>
                        : password !== confirmPass ? 
                            <Alert>Password and it's confirmation are not identique</Alert>
                        : ''
                        )
                    }
                </div>
            <div className={styles.loginContainer}>
                <img style = {{paddingTop : '100px'}} src='signup.webp'/>
                <form onSubmit={(e : any) => formSubmit(e)} className={styles.formContainer}>
                    <div className={styles.title}>Sign up</div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='User Name...'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setUserName(e.target.value)}}
                        />
                        <input
                            placeholder='Email...'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setEmail(e.target.value)}}
                        />
                        <input
                            placeholder='Password...'
                            type='password'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setPassword(e.target.value)}}
                        />
                        <input
                            placeholder='Confirm Password...'
                            type='password'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setConfirmPass(e.target.value)}}
                        />
                    </div>
                    <div>
                        <div style={{marginBottom : '10px'}}>You have an account ?</div>
                        <Link id={styles['Link']} href='/login'>Login</Link>
                    </div>
                    <Button typeof = 'submit' type = 'primary' height = '35px' width = '120px' name = 'Sign up'/>
                </form>
            </div>
        </div>
    )
}
export default Login