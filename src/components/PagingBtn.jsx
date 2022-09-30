import Pagination from 'react-js-pagination';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const PagingBtn = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={6}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={<MdKeyboardArrowLeft />}
      nextPageText={<MdKeyboardArrowRight />}
      onChange={setPage}
    />
  );
};