import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                style={{marginTop: 10}}
                placeholder="search..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value })}
            />

            <MySelect 
                defaultValue='defaults filter'
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
                options={[
                {value: 'title', name: 'names'},
                {value: 'body', name: 'descriptions'},
                ]}
            />
        </div>
    );
};

export default PostFilter;