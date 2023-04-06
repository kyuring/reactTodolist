import React from 'react';

function InputTemplate({inputs, onChange, onCreate, value}) {
    return(
        <>
            <input name='inputValue' type='text' className='InputField' placeholder='todo title..' onChange={onChange} value={inputs.inputValue || ''}/>
            <button className='BtnAdd' onClick={onCreate} onKeyDown={ e => e.key === 'Enter' && onCreate }>{value ? value : "ADD"}</button>
        </>
    )
}

export default InputTemplate;