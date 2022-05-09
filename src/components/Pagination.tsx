import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ICartProduct, IHistoryProduct, IProduct } from '../../types';
import styles from '../../styles/pagination.module.scss';
import { useDispatch } from 'react-redux';
import { paginationAction } from '../redux/actions/paginationAction';

type PaginationPropsType = {
  products: IProduct[] | ICartProduct[] | IHistoryProduct[];
  // setStartValue: Function;
  // setLastValue: Function;
  itemsPerPage: number;
};

const Pagination: FC<PaginationPropsType> = ({
  products,
  // setStartValue,
  // setLastValue,
  itemsPerPage,
}) => {
  const dispatch = useDispatch(); //

  type dataType = {
    selected: number;
  };

  const handlePageClick = (data: dataType) => {
    const currentPage = data.selected + 1;
    // setStartValue(itemsPerPage * currentPage - itemsPerPage);
    // setLastValue(itemsPerPage * currentPage);
    dispatch(paginationAction(currentPage)); //
  };

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      // pageCount={Math.ceil(products.length / itemsPerPage)}
      pageCount={Math.ceil(products.length / itemsPerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      pageClassName={styles.pagination__btn}
      pageLinkClassName={styles.pagination__content}
      previousClassName={styles.pagination__btn}
      previousLinkClassName={styles.pagination__content}
      nextClassName={styles.pagination__btn}
      nextLinkClassName={styles.pagination__content}
      breakClassName={styles.pagination__btn}
      breakLinkClassName={styles.pagination__content}
      activeClassName={styles.pagination__active}
      disabledClassName={styles.pagination__disabled}
      initialPage={0}
    />
  );
};

export default Pagination;
