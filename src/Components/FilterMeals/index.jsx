import React from 'react'
import '@icon-park/react/styles/index.css'
import { Search } from '@icon-park/react'
import styles from './FilterMeals.module.css'

const FilterMeals = (props) => {

    const inputChangeHandler = e => {
        const keyword = e.target.value;
        props.onFilter(keyword);
    }

    return (
        <>
            <div className={styles.FilterMeals}>

                <div className={styles.InputOuter}>

                    <input className={styles.searchInput} onChange={inputChangeHandler}
                        type="text" placeholder='请输入关键字' />
                    <Search
                        className={styles.searchIcon} theme="outline" size="20" fill="#aaa" />
                </div>
            </div>
        </>
    )
}

export default FilterMeals;

