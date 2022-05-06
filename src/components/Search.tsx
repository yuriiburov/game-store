import { FC } from 'react';
import { useRouter } from 'next/router';
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigation } from '../data/navigation';
import styles from '../../styles/content.module.scss';

type SearchProps = {
  searchValue: string;
  setSearchValue: Function;
  setSortBy: Function;
};

const Search: FC<SearchProps> = ({ searchValue, setSearchValue, setSortBy }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.content__head}>
      <h1 className={styles.content__title}>
        {navigation.find(({ title, path }) => pathname === path && title).title}
      </h1>
      <label>
        <span className={styles.content__sortText}>Sort by</span>
        <select
          onChange={e => setSortBy(e.target.value)}
          className={styles.content__sortSelector}
          id="sort"
          defaultValue="new"
        >
          <option value="new">Date: newer first</option>
          <option value="old">Date: older first</option>
          <option value="expensive">Price: first expensive</option>
          <option value="cheaper">Price: cheaper first</option>
          <option value="name">Name</option>
        </select>
      </label>
      <label className={styles.content__search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.content__icon} />
        <input
          type="text"
          className={styles.content__find}
          id="search"
          placeholder="Search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </label>
      <label htmlFor="sort" className={styles.content__iconSort_smallDevice}>
        <FontAwesomeIcon icon={faFilter} className={styles.content__iconSort} />
      </label>
      <label htmlFor="search" className={styles.content__iconSearch_smallDevice}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.content__iconSearch} />
      </label>
    </div>
  );
};

export default Search;
