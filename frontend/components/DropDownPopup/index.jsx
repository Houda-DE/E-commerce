import styles from './styles.module.css'

const DropDownPopup = ({data}) => {
    return(
        <div className={styles.container}>
            {
                data.map((element , index) => {
                    return(
                        <div>
                            <div>
                                <div className={styles.titles}>{element.title.name}</div>
                                {
                                    element.elements.map((el , i) => {
                                        return(
                                            <div>{el.name}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DropDownPopup