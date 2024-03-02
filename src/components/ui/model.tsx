'use client'
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


export type ModelInt = {
    isOpen : boolean ;
    title ? : string ;
    onClose : () => void;
    closeAble? : boolean;
    children : React.ReactNode;
}

export const Model: React.FC<ModelInt> = ({isOpen  , title, onClose , closeAble  , children}) =>{
    if(!isOpen){
        return null
    }
    const closeHandle = () =>{
        if(closeAble){
            onClose()
        }
        return null
    }


 
    return(
        <main className="bg-black/15 fixed z-[999] w-[100vw] h-[100vh] inset-0 flex items-center justify-center ">
            <div className="w-[650px] max-h-[80vh]  my-4 bg-white rounded-xl p-6 overflow-y-scroll scrollbar">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between sticky">
                        <h4 className="font-normal">{title}</h4>
                        <div className="p-3 rounded-full hover:bg-blue-950/5 transition duration-500 cursor-pointer w-fit" onClick={closeHandle}>
                            <RxCross1 className="w-[15px] h-[15px]"/>
                        </div>
                    </div>
                    <div>
                         {children}
                    </div>
                </div>
            </div>
        </main>
    )
}