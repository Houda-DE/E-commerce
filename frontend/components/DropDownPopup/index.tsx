import styles from './styles.module.css'

const DropDownPopup = ({data}:any) => {
    return(
        <div className={styles.container}>
            {
                data.map((element : any , index : number) => {
                    return(
                        <div>
                            <div>
                                <div className={styles.titles}>{element.title.name}</div>
                                {
                                    element.elements.map((el : any , i : number) => {
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