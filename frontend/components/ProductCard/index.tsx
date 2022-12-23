import styles from './styles.module.css'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'
import { Rating } from '@mui/material'
import Link from 'next/link'
import {useState} from 'react'

const ProductCard = ({name , imageUrl , price , reductionPercentage , addedToWishList , rating} : any) => {

    const [isHovering , setIsHovering] = useState(false)

    return(
        <div className={styles.container} onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}>
            <Link style={{textDecoration : 'none' , color :  'transparent'}} href='/'>
                <img src={imageUrl}/>
                <div className={styles.nameAndWishListContainer}>
                    <div style={{color : '#222529'}}>{name}</div>
                    {
                        addedToWishList === false ? 
                            <AiOutlineHeart style={{color : '#222529'}} title='Add to wishlist'/>
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
                isHovering&&<button className={styles.button}>Add to cart</button>
            }
        </div>
    )
}
export default ProductCard