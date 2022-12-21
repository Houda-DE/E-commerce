import styles from './styles.module.css'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'

const ProductCard = ({name , imageUrl , price , reductionPercentage , addedToWishList , rating} : any) => {
    return(
        <div>
            <img src={imageUrl}/>
            <div>
                <div>{name}</div>
            </div>
            <div>{price}</div>
        </div>
    )
}
export default ProductCard