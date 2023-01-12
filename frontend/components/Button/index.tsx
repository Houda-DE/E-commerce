import styles from './styles.module.css'

const Button = ({height , width , type , name , typeofButton} : any) => {
    return(
        <div>
            {
                type === '' ? 
                    <button className={styles.primary} type={typeofButton} style={{height : `${height}` , width : `${width}`}}>{name}</button>
                : type === 'second' ? 
                    <button type={typeofButton} style={{height : `${height}` , width : `${width}`}}>{name}</button>
                : 
                    <button type={typeofButton} style={{height : `${height}` , width : `${width}`}}>{name}</button>
            }
        </div>
    )
}
export default Button