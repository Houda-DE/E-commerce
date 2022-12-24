import Link from 'next/link'
import styles from './styles.module.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram , AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return(
        <div className={styles.container}>
            {/*Contact Info */}
            <div>
                <h3>Get in touch</h3>
                <div>
                    <div>
                        <div>Phone</div>
                        <div>+5555555555</div>
                    </div>
                    <div>
                        <div>Or</div>
                        <Link href='/'>send us an email</Link>
                    </div>
                    <div style={{color : 'white'}}>
                        <BsFacebook/>
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                    </div>
                </div>
            </div>
            {/*Quick links */}
            <div>
                <h3>Quick Links</h3>
                <div style = {{display : 'flex' , flexDirection : 'column' , color : 'white'}}>
                    <Link href='/'>My account</Link>
                    <Link href='/'>My wish list</Link>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Products</Link>
                    <Link href='/'>Categories</Link>
                </div>
            </div>
            {/*Stay Connected + About*/}
            <div>
                <h3>Stay Connected</h3>
                <div>
                    <input/>
                    <button>Join</button>
                </div>
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra consectetur sapien nec laoreet. Aliquam arcu velit, cursus non commodo quis, finibus eget mauris. Curabitur elementum, massa a condimentum hendrerit, lectus neque convallis odio, sit amet sodales diam nisl at lacus. Suspendisse quis massa imperdiet, eleifend leo non, tempus purus. Nulla at aliquet ante, quis hendrerit nunc. Integer eget velit ut ligula fringilla mollis. Maecenas laoreet cursus sem, eu pulvinar justo pellentesque ut.</p>
            </div>
        </div>
    )
}
export default Footer