import Link from 'next/link'
import { useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
import { Alert } from '@mui/material'

const Login = () => {

    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPass , setConfirmPass] = useState('')

    const formSubmit = (e : any) => {
        e.preventDefault()
        if(userName === '' || email === '' || password === '' || confirmPass === ''){
            return alert('A required field is missing')
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            return alert('invalid email')
        }
        else if(password !== confirmPass){
            return alert ('password and confir pass are not identique')
        }
        else{
            return <Alert severity="success">Your account is created</Alert>
        }
    }

    return(
        <div className={styles.container}>
            <Navbar/>
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