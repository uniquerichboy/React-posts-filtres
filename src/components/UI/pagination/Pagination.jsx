import React from 'react';
import MyButton from '../button/MyButton';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div>
        {pagesArray.map(p => 
            <MyButton key={p} style={{margin: 10}} onClick={() => changePage(p)}>
                {p}
            </MyButton>  
        )}
        </div>
    );
};

export default Pagination;