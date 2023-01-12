import Link from 'next/link'
import styles from './styles.module.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram , AiFillTwitterCircle} from 'react-icons/ai'
import { useState } from 'react'

const Footer = () => {

    const [email , setEmail] = useState()

    return(
        <div className={styles.container}>
            {/*Contact Info */}
            <div>
                <h3>Get in touch</h3>   
                <div style={{display : 'flex' , flexDirection : 'column' , 'gap' : '10px'}}>
                    <div id={styles['Contact']}>
                        <div>Phone</div>
                        <div>+5555555555</div>
                    </div>
                    <div id={styles['Contact']}>
                        <div>Or</div>
                        <Link id={styles['Link']} href='/'>send us an email</Link>
                    </div>
                    <div className={styles.iconsContainer}>
                        <Link style={{color : 'white'}} href='/'>
                            <FaFacebook title='Facebook'/>
                        </Link>
                        <Link style={{color : 'white'}} href='/'>
                            <AiFillInstagram title='Instagram'/>
                        </Link>
                        <Link style={{color : 'white'}} href='/'>
                            <AiFillTwitterCircle title='Twitter'/>
                        </Link>
                    </div>
                </div>
            </div>
            {/*Quick links */}
            <div>
                <h3>Quick Links</h3>
                <div className={styles.quickLinks}>
                    <Link id={styles['Link']} href='/'>My account</Link>
                    <Link id={styles['Link']} href='/'>My wish list</Link>
                    <Link id={styles['Link']} href='/'>Home</Link>
                    <Link id={styles['Link']} href='/'>Products</Link>
                    <Link id={styles['Link']} href='/'>Categories</Link>
                    <Link id={styles['Link']} href='/'>Order history</Link>
                </div>
            </div>
            {/*Stay Connected + About*/}
            <div className={styles.stayConnectedAndAbout}>
                <h3>Stay Connected</h3>
                <form style={{display : 'flex' , flexDirection : 'row' , alignItems : 'center' , justifyContent: 'center'}}>
                    <input
                        onChange={(e : any) => {e.preventDefault() ;setEmail(e.target.value)}}
                        className = {styles.input}
                        placeholder = 'Email...'
                    />
                    <button className={styles.button} type='submit'>Subscribe</button>
                </form>
                <h3>About us</h3>
                <div style={{textAlign : 'justify' , color : '#f9f9f9' , marginLeft : '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra consectetur sapien nec laoreet. Aliquam arcu velit, cursus non commodo quis, finibus eget mauris. Curabitur elementum, massa a condimentum hendrerit, lectus neque convallis odio, sit amet sodales diam nisl at lacus. Suspendisse quis massa imperdiet, eleifend leo non, tempus purus. Nulla at aliquet ante, quis hendrerit nunc.</div>
            </div>
        </div>
    )
}
export default Footer