import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadlesstTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';


const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        
        const fetchApi = async () =>{
            const result = await searchService.search(debounced);
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    }, [debounced])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleInputSpace = (e) => {
        if (e.target.value.startsWith(' ')) {
            setSearchValue('')
        }
        else {
            setSearchValue(e.target.value)
        }
    }



    const handleHideResult = () => {
        setShowResult(false)
    }

    
    return (
        <HeadlesstTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}> Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search account and videos'
                    spellCheck={false}
                    onChange={handleInputSpace}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlesstTippy>
    );
}

export default Search;