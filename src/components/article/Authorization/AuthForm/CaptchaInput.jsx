import React from 'react'


const CaptchaInput = ({input, meta, ...props}) => {
    return (
        <div>
            <input  {...input} {...props}  type="text" placeholder={'Type the characters'}/>
        </div>
    )
}


export default CaptchaInput