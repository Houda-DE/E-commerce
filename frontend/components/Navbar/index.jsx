import { IconContext } from 'react-icons'
import styles from './styles.module.css'
import {BiSearch , BiUser , BiHeart , BiShoppingBag} from 'react-icons/bi'
import {AiOutlineDown} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {

    const [showCategories , setShowCategories] = useState(false)
    const [showProducts , setShowProducts] = useState(false)
    const [showPages , setShowPages] = useState(false)

    return(
        <div className={styles.container}>
            {/*Logo container*/}
            <img src='vercel.svg' className={styles.logo}/>
            {/*Links container*/}
            <IconContext.Provider value={{size : '16px'}}>
                <div className={styles.buttonContainer}>
                    <button>Home</button>
                    <button onMouseOver={(e) => {e.preventDefault ; setShowCategories(true)}} onMouseOut={(e) => {e.preventDefault ; setShowCategories(false)}}>
                        <a>
                            <label>Categories</label>
                            <AiOutlineDown/>
                        </a>
                        {showCategories === true ? <div>coucou</div> :''}
                    </button>
                    <button onMouseOver={(e) => {e.preventDefault ; setShowProducts(true)}} onMouseOut={(e) => {e.preventDefault ; setShowProducts(false)}}>
                        <a>
                            <label>Products</label>
                            <AiOutlineDown/>
                        </a>
                    </button>
                    <button onMouseOver={(e) => {e.preventDefault ; setShowPages(true)}} onMouseOut={(e) => {e.preventDefault ; setShowPages(false)}}>
                        <a>
                            <label>Pages</label>
                            <AiOutlineDown/>
                        </a>
                    </button>
                </div>
            </IconContext.Provider>
            {/*Icons container*/}
            <div style={{display : 'flex' , flexDirection : 'row' , gap : '15px'}}>
                <IconContext.Provider value={{size : '30px'}}>
                    <a>
                        <BiSearch title='Search'/>
                    </a>
                    <a>
                        <BiUser title='My account'/>
                    </a>
                    <a>
                        <BiHeart title='Wishlist'/>
                    </a>
                    <a>
                        <BiShoppingBag/>
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    )
}
export default Navbar