import React, {Fragment} from 'react'
const InputText = ({placeholder,className,name,label,handleChangeInput,noFillInput,errorText}) => {
    console.log(typeof name);
    console.log(noFillInput);
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
                />
                {noFillInput === name ? <p className="error"> El campo <strong>{name}</strong> {errorText}   </p> : null}
            </div>
        </Fragment>
     );
}
 
export default InputText;