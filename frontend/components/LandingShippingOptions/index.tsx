import styles from './styles.module.css'
import {FaShippingFast} from 'react-icons/fa'
import {MdOutlinePayment} from 'react-icons/md'
import {IoArrowUndoSharp} from 'react-icons/io5'

const LandingShippingOptions = () => {

    const data = [
        {
            icon : <MdOutlinePayment/>,
            title : "Secured Payment",
            subtitle : "Safe&Fast",
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra consectetur sapien nec laoreet. Aliquam arcu velit, cursus non commodo quis, finibus eget mauris.'
        },
        {
            icon : <IoArrowUndoSharp/>,
            title : "Free returns",
            subtitle : "Easy&Free",
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra consectetur sapien nec laoreet. Aliquam arcu velit, cursus non commodo quis, finibus eget mauris.'
        },
        {
            icon : <FaShippingFast/>,
            title : 'Free shipping',
            subtitle : "Order Over $129",
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra consectetur sapien nec laoreet. Aliquam arcu velit, cursus non commodo quis, finibus eget mauris.'
        }
    ]

    return(
        <div className={styles.container}>
            {
                data.map((element : any , index : number) => {
                    return(
                        <div className={styles.elementContainer}>
                            <div className={styles.icon}>{element.icon}</div>
                            <div style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center' , flexDirection : 'column'}}>
                                <div className={styles.title}>{element.title}</div>
                                <div className={styles.subtitle}>{element.subtitle}</div>
                                <p style={{fontWeight : '100' , fontSize : '13px' , width : '75%'}}>{element.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default LandingShippingOptions