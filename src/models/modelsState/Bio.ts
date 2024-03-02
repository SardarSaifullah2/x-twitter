'use client'
import { ModelStateInt } from "@/type/type";
import { create } from "zustand";

export const BioState = create<ModelStateInt>((set) =>({
    isOpen: false ,
    onOpen : () => set({isOpen : true}) ,
    onClose : () => set({isOpen : false}) ,
}))