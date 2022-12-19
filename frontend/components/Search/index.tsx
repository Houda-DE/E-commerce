import styles from './styles.module.css'
import { useRef } from 'react'
import {BiSearch} from 'react-icons/bi'
import {IconContext} from 'react-icons'

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
            <IconContext.Provider value={{size : '25px' , color:'#999'}}>
                <button type='submit'>
                    <BiSearch title='Search'/>
                </button>
            </IconContext.Provider>
        </form>
    )
}
export default Search