import { IconContext } from 'react-icons'
import styles from './styles.module.css'
import {BiSearch , BiUser , BiHeart , BiShoppingBag} from 'react-icons/bi'
import {AiOutlineDown} from 'react-icons/ai'
import {useState , useEffect} from 'react'
import DropDownPopup from '../DropDownPopup/index'
import data from '../../json/CategoriesData.json'
import Search from '../Search'
import Link from 'next/link'

const Navbar = () => {

    const [showCategories , setShowCategories] = useState(false)
    const [showProducts , setShowProducts] = useState(false)
    const [showPages , setShowPages] = useState(false)
    const [openSearch , setOpenSearch] = useState(false)
    const [scroll , setScroll] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        const hasWindow = typeof window !== 'undefined'
        
        if (hasWindow) {
            setScroll(window.scrollY)
        }
    
      }
      window.addEventListener("scroll" , handleScroll)
    
      return () => {
        window.removeEventListener("scroll" , handleScroll)
      }
    }, [scroll])
    

    const cat = Object.assign(data.categories)



    return(
        <div style={{backgroundColor : `${scroll > 500 ? 'white' : "transparent"}` , boxShadow :  `${scroll > 500 ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : ""}`}} className={styles.container}>
            {/*Logo container*/}
            <img src='vercel.svg' className={styles.logo}/>
            {/*Links container*/}
            <IconContext.Provider value={{size : '16px'}}>
                <div className={styles.buttonContainer}>
                    <button>Home</button>
                    <button onMouseOver={(e) => {e.preventDefault() ; setShowCategories(true)}} onMouseOut={(e) => {e.preventDefault() ; setShowCategories(false)}}>
                        <a>
                            <label>Categories</label>
                            <AiOutlineDown/>
                        </a>
                        {
                            showCategories === true ? 
                                <div>
                                    <DropDownPopup data = {cat}/>
                                </div> 
                                :''
                        }
                    </button>
                    <button onMouseOver={(e) => {e.preventDefault ; setShowProducts(true)}} onMouseOut={(e) => {e.preventDefault ; setShowProducts(false)}}>
                        <a>
                            <label>Products</label>
                            <AiOutlineDown/>
                        </a>
                        {
                            showProducts === true ? 
                                <div>
                                    <DropDownPopup data = {cat}/>
                                </div> 
                                :''
                        }
                    </button>
                    <button onMouseOver={(e) => {e.preventDefault ; setShowPages(true)}} onMouseOut={(e) => {e.preventDefault ; setShowPages(false)}}>
                        <a>
                            <label>Pages</label>
                            <AiOutlineDown/>
                        </a>
                        {
                            showPages === true ? 
                                <div>
                                    <DropDownPopup data = {cat}/>
                                </div> 
                                :''
                        }
                    </button>
                </div>
            </IconContext.Provider>
            {/*Icons container*/}
            <div className={styles.iconButton} style={{display : 'flex' , flexDirection : 'row' , gap : '15px'}}>
                <IconContext.Provider value={{size : '30px'}}>
                    <button onClick = {(e) => {e.preventDefault() ; setOpenSearch(!openSearch)}}>
                        <BiSearch title='Search'/>
                    </button>
                    <Link href='/login' style = {{color : 'black'}}>
                        <BiUser title='My account'/>
                    </Link>
                    <button>
                        <BiHeart title='Wishlist'/>
                    </button>
                    <button>
                        <BiShoppingBag/>
                    </button>
                </IconContext.Provider>
                {
                    openSearch === true ?
                        <Search/>
                    : ""
                }
            </div>
        </div>
    )
}
export default Navbar