import React from "react";

interface InputInt {
    label?:string; 
    type?:string;
    placeholder?:string;
    value : string;
    Fn : React.Dispatch<React.SetStateAction<string>>;
    id: string;
}
const Input:React.FC<InputInt> = ({Fn , value , label , placeholder , type , id}) =>{

    const changeHandle = async(ev : React.ChangeEvent<HTMLInputElement>) =>{
    if(type === 'text'){
        Fn(ev.target.value)
    }else{
        return null
    }
}

    return(
        <div className={`flex flex-col gap-1 pb-2`}>
            <label htmlFor={id} className={`text-gray `}>{label}</label>
                <input type={type} placeholder={placeholder} value={type === 'text' ? value : ''} onChange={ev => changeHandle(ev)} id={id} className={`border border-gray/50 rounded-lg outline-none p-2 `} name={id} />  
        </div>
    )
}


export default Input ;