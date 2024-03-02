'use client'
const Button = ({title , sumbit}:{title:string , sumbit: ()=> void}) =>{
    const submitHandle = () =>{
        sumbit()
    }
    return(
        <button className="bg-blue-500 hover:bg-blue-400 transition duration-500 py-4 px-14 text-white  rounded-full" onClick={()=>submitHandle()} type="submit">{title}</button>
    )
}

export default Button;