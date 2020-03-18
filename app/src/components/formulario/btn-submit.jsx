import React, {Fragment} from 'react';
const ButtonSubmit = ({type,className,btnText,handleSubmit}) => {
    return ( 
        <Fragment>
            <button
                type={type}
                className={className}
            >
                {btnText}
            </button> 
        </Fragment>
     );
}
 
export default ButtonSubmit;