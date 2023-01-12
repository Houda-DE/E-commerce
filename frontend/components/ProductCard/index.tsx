import styles from './styles.module.css'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'
import { Rating } from '@mui/material'
import Link from 'next/link'
import {useState} from 'react'

const ProductCard = ({id ,  name , imageUrl , price , reductionPercentage , addedToWishList , rating , addToCart , setAddToCart , addToWish , setAddToWish} : any) => {

    const [isHovering , setIsHovering] = useState(false)

    return(
        <div className={styles.container} onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}>
            <Link style={{textDecoration : 'none' , color :  'transparent'}} href='/'>
                <img src={imageUrl}/>
                <div className={styles.nameAndWishListContainer}>
                    <div style={{color : '#222529'}}>{name}</div>
                    {
                        addedToWishList === false ? 
                            <button 
                                style={{backgroundColor : 'transparent' , 'outline' : 'none' , border : 'none' , cursor : 'pointer'}}
                                onClick = {(e : any) => {e.preventDefault() ; setAddToWish([...addToWish , id]) ; addedToWishList === true}}
                            >
                                <AiOutlineHeart 
                                    style={{color : '#222529'}} 
                                    title='Add to wishlist'
                                />
                            </button>
                        :   
                            <AiFillHeart style={{color : '#222529'}} title='Added to wishlist'/>
                    }
                </div>
                <Rating name="read-only" defaultValue={rating/20} precision={0.1} readOnly/>
                {
                    reductionPercentage !== 0 ? 
                        <div className={styles.reductionContainer}>
                            <div id={styles['oldPrice']}>${price}</div>
                            <div>${price*reductionPercentage/100}</div>
                        </div> 
                    :
                        <div className={styles.reductionContainer}>${price}</div>
                }
            </Link>
            {
                isHovering&&<button onClick={(e:any) => {e.preventDefault ; addToCart.includes(id) !== true ? setAddToCart([...addToCart , id]) : ""}} className={styles.button}>Add to cart</button>
            }
        </div>
    )
}
export default ProductCard