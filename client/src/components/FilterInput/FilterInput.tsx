import React from 'react';
import '../Filter/filter.scss';

function FilterInput(props: any) {
        return (
                <label className='filter-field'>
                        {props.label}:
                        <input type={props.type} onChange={props.onChange} value={props.value} />
                </label>
        );
}

export default FilterInput;