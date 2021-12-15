import React from 'react';
import {Select} from 'antd';

const { Option } = Select;

const MySelect = ({options, defaultValue, value, onChange }) => {
    return (
        <Select  
        value={value}
        onChange={e => onChange(e)}
        style={{marginTop: 10}}
        >
            <Option disabled value="">{defaultValue}</Option>
            { options.map(option =>
                <Option key={option.value} value={option.value}>
                    { option.name }
                </Option>    
            )}
        </Select>
    );
};

export default MySelect;