import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.css'


const Slider = ({data} : any) => {
    
    return(
        <Carousel>
            {
                data.map((element : any , index : number) => {
                    return(
                        <div>
                            <img src={element.imageUrl}/>
                            <button>Shop now</button>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
export default Slider