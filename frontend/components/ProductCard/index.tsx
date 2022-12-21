import styles from './styles.module.css'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'

const ProductCard = ({name , imageUrl , price , reductionPercentage , addedToWishList , rating} : any) => {
    return(
        <div className={styles.container}>
            <img src={imageUrl}/>
            <div>
                <div>{name}</div>
                {
                    addedToWishList === false ? 
                        <AiOutlineHeart/>
                    :   
                        <AiFillHeart/>
                }
            </div>
            <div>{price}</div>
        </div>
    )
}
export default ProductCard