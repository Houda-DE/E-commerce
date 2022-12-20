import styles from './styles.module.css'
import { useRef } from 'react'
import {BiSearch} from 'react-icons/bi'
import {IconContext} from 'react-icons'
import {AiOutlineDown} from 'react-icons/ai'

const Search = () => {

    const searchInputRef = useRef<string>('')

    const onSubmit = (e : any) => {
        e.preventDefault()
    }

    return(
        <form className={styles.container} onSubmit={onSubmit}>
            <input
                ref = {searchInputRef} 
                placeholder='Search...'
            />
            <IconContext.Provider value={{size : '13px' , color:'#999'}}>
                <button style={{backgroundColor : '#f9fafb' , height : '40px'}} className={styles.filterButton}>
                        <label>Products</label>
                        <AiOutlineDown/>
                </button>
            </IconContext.Provider>
            <IconContext.Provider value={{size : '25px' , color:'#999'}}>
                <button type='submit'>
                    <BiSearch title='Search'/>
                </button>
            </IconContext.Provider>
        </form>
    )
}
export default Search