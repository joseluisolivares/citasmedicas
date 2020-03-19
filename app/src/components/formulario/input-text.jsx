import React, {Fragment} from 'react'
const InputText = ({placeholder,className,name,label,handleChangeInput,noFillInput,errorText,value}) => {
    return ( 
        <Fragment>
            <div className="boxInputText">
                <label htmlFor="">{label}</label>
                <input 
                    type="text"
                    placeholder={placeholder}
                    className={className}
                    name={name}
                    onChange={handleChangeInput}
                    value={value}
                />
                {noFillInput === name ? <p className="error"> El campo <strong>{name}</strong> {errorText}   </p> : null}
            </div>
        </Fragment>
     );
}
 
export default InputText;