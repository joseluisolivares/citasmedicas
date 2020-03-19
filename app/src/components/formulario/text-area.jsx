import React, {Fragment} from 'react'
const TextArea = ({className,name,label,handleChangeInput,noFillInput,errorText,value}) => {
    return ( 
        <Fragment>
            <div className="boxTextArea">
                <label htmlFor="">{label}</label>
                <textarea 
                    name={name} 
                    className={className}
                    onChange={handleChangeInput}
                    value={value}
                ></textarea>
                {noFillInput === name ? <p className="error"> El campo <strong>{name}</strong> {errorText}   </p> : null}
            </div>
        </Fragment>
     );
}
 
export default TextArea;