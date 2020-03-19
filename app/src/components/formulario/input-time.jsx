import React, {Fragment} from 'react'
const InputTime = ({type,className,name,label,handleChangeInput,noFillInput,errorText,value}) => {

    return ( 
        <Fragment>
            <div className="boxInputTime">
                <label htmlFor="">{label}</label>
                <input 
                    type={type}
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
 
export default InputTime;