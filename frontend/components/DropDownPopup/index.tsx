import Link from 'next/link'
import styles from './styles.module.css'

const DropDownPopup = ({data}:any) => {
    return(
        <div className={styles.container}>
            {
                data.map((element : any , index : number) => {
                    return(
                        <div className={styles.sectionContainer}>
                            <Link style={{textDecoration : 'none' , color : 'black'}} href={element.title.link}><div className={styles.titles}>{element.title.name}</div></Link>
                            {
                                element.elements.map((el : any , i : number) => {
                                    return(
                                        <Link style={{textDecoration : 'none' , color : 'black'}} href={el.link}><div className={styles.subtitles}>{el.name}</div></Link>
                                    )
                                })
                            }
                        </div> 
                    )
                })
            }
        </div>
    )
}
export default DropDownPopup