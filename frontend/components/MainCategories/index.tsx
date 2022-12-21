import styles from './styles.module.css'
import {Carousel} from 'react-responsive-carousel'
import { useState } from 'react'
import {GrNext , GrPrevious} from 'react-icons/gr'

const MainCategories = ({data} : any) => {

    const displayCount = 5
    const [currentIndex , setCurrentIndex] = useState(2)

    return(
        <div className={styles.container}>
            <h2>Main categories</h2>
            <div className={styles.categoriesContainer}>
                <button onClick={() => {currentIndex === 2 ? setCurrentIndex(6) :setCurrentIndex((currentIndex - 1) % data.length)}}>
                    <GrPrevious title = {'Previous'}/>
                </button>
                <Carousel 
                    centerMode
                    centerSlidePercentage={18}
                    selectedItem={currentIndex}
                    showArrows={false}
                    interval={2000} 
                    showIndicators={false}
                    transitionTime={700} 
                    infiniteLoop={false}
                    showStatus={false} 
                    showThumbs={false}
                >
                    {
                        data.map((element : any , index : number) => {
                            return(
                                <div className={styles.categoryContainer}>
                                    <img src={element.associatedImageUrl}/>
                                    <div id={styles['name']}>{element.name}</div>
                                    <div id={styles['quantity']}>{element.quantity}</div>
                                </div> 
                            )
                        })
                    }
                </Carousel>
                <button onClick={() => {currentIndex === 6 ? setCurrentIndex(2) : setCurrentIndex((currentIndex + 1) % (data.length - 2))}}>
                    <GrNext title='Next'/>
                </button>
            </div>
        </div>
    )
}
export default MainCategories