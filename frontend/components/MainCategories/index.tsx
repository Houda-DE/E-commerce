import styles from './styles.module.css'
import {Carousel} from 'react-responsive-carousel'
import { useState } from 'react'

const MainCategories = ({data} : any) => {

    const displayCount = 5

    const [currentIndex , setCurrentIndex] = useState(1)

    return(
        <div className={styles.container}>
            <h2>Main categories</h2>
            <div className={styles.categoriesContainer}>
                <button onClick={() => setCurrentIndex((currentIndex - 5 + data.length) % data.length)} style={{fontSize : '50px'}}>+</button>
                <Carousel 
                    centerMode
                    centerSlidePercentage={20}
                    selectedItem={currentIndex}
                    showArrows={false}
                    autoPlay 
                    interval={2000} 
                    transitionTime={700} 
                    infiniteLoop 
                    showStatus={false} 
                    showThumbs={false}
                >
                    {
                        data.map((element : any , index : number) => {
                            return(
                                <div className={styles.categoryContainer}>
                                    <img src={element.associatedImageUrl}/>
                                    <h4>{element.name}</h4>
                                    <div>{element.quantity}</div>
                                </div> 
                            )
                        })
                    }
                </Carousel>
                <button onClick={() => setCurrentIndex((currentIndex + 5 + data.length) % data.length)} style={{fontSize : '50px'}}>*</button>
            </div>
        </div>
    )
}
export default MainCategories