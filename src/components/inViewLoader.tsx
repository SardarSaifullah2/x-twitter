import React, { useEffect } from "react";
import { LoaderIcon } from "react-hot-toast"
import {useInView} from 'react-intersection-observer';
import Loader from "./loader";
interface InViewLoaderInt {
    size : number ;
    setSize : any ;
}
const InViewLoader: React.FC<InViewLoaderInt>= ({setSize , size}) =>{
    const {ref , inView} = useInView()
    useEffect(()=>{
        if(inView){
            setTimeout(()=>{
                setSize((prev: any) => prev + 1)
            },2000)
        }
    },[inView , setSize])
    return(
        <div ref={ref}>
            <Loader/>
        </div>
    )
}
export default InViewLoader;