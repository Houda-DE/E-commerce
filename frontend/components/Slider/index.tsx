import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.css'
import Link from "next/link";


const Slider = ({data} : any) => {

    const color = "white"
    
    return(
        <Carousel 
            autoPlay 
            interval={3000} 
            transitionTime={700} 
            infiniteLoop 
            showStatus={false} 
            showThumbs={false}
        >
            {
                data.map((element : any , index : number) => {
                    return(
                        <div style={{backgroundImage: `url(${element.imageUrl})`,}} className={styles.slideContainer}>
                            <Link href={element.productUrl}>
                                <button style={{backgroundColor : `${element.buttonColor}` , color : `${element.buttonColor === color ? 'black' : 'white'}`}} className={styles.button}>Shop now</button>
                            </Link>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
export default Slider