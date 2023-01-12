import Link from 'next/link'
import { useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'

const Login = () => {

    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.loginContainer}>
                <img className={styles.image} src='login.webp'/>
                <form className={styles.formContainer}>
                    <div className={styles.title}>Login</div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Email...'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setEmail(e.target.value)}}
                        />
                        <input
                            placeholder='Password...'
                            className={styles.input}
                            onChange = {(e : any) => {e.preventDefault() ; setPassword(e.target.value)}}
                        />
                    </div>
                    <div>
                        <div style={{marginBottom : '10px'}}>You don't have an account ?</div>
                        <Link id={styles['Link']} href='/signup'>Sign up</Link>
                    </div>
                    <Button typeof = 'submit' type = 'primary' height = '35px' width = '120px' name = 'Login'/>
                </form>
            </div>
        </div>
    )
}
export default Login