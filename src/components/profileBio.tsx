'use client'
import { useState } from "react";
import Input from "./ui/input";
import { Model } from "./ui/model";
import { BioState } from "@/models/modelsState/Bio";
import { user } from "@/type/type";
import Button from "./ui/button";
import { ProfileData } from "@/actions/profileData";
import toast from "react-hot-toast";
import ProfileBioImageInput from "./profileImageInput";
import { SlCalender } from "react-icons/sl";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { SwrData } from "@/hooks/swr";
const ProfileBio = ({cUser}:{cUser:user}) =>{
    const [Name , setName] = useState<string>(cUser?.name||'')
    const [Location , setLocation] = useState<string>(cUser?.location||'')
    const [Bio , setBio] = useState<string>(cUser?.bio||'')
    const [Passion , setPassion] = useState<string>(cUser?.passion ||'')
    const [ProfileImg , setProfileImg] = useState<string>(cUser?.image || '')
    const [BannerImg , setBannerImg] = useState<string>(cUser?.profileBanner || '')
    const [startDate , setStartDate] = useState(cUser?.dob)
    const {mutate:userMutate} = SwrData(`/api/users/${cUser?.username}`)

    console.log(startDate , 'this is start date')

    const input = [
        {
            label : 'Name' ,
            value : Name ,
            Fn : setName ,
            placeholder : 'e.g Sardar Saif',
            type : 'text' ,
            id : 'name' ,
        } ,
        {
            label : 'Location' ,
            value : Location ,
            Fn : setLocation ,
            placeholder : 'e.g London , Paris',
            type : 'text' ,
            id : 'location',

        } ,
        {
            label : 'Passion' ,
            value : Passion ,
            Fn : setPassion ,
            placeholder : 'e.g Full stack Developer',
            type : 'text' ,
            id : 'passion',
            
        } ,
        {
            label : 'Bio' ,
            value : Bio ,
            Fn : setBio ,
            placeholder : 'e.g I am Saif....',
            type : 'text' ,
            id : 'bio',

        } ,
    ]
    const {isOpen , onClose }=BioState()
    const submit = async(formData: any)=>{
        await formData.set('image' ,ProfileImg )
        await formData.set('profileBanner' ,BannerImg )
        await formData.set('bod' ,startDate )
        const result = await ProfileData(formData)
        toast.success(`Profile updated!`)
        userMutate()
        onClose()
    }



    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const formatedDate = day + '/' + month + '/' + year


    return(
        <div>
            <Model title="Update Profile" isOpen={isOpen} onClose={onClose} closeAble={true}>
                <form action={submit}>
                    <div>
                        <ProfileBioImageInput setProfileImg={setProfileImg} ProfileImg = {ProfileImg} BannerImg={BannerImg} setBannerImg={setBannerImg}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        {
                            input?.map((item , index) =>{
                                const { value , id , Fn, type , placeholder , label } = item
                            
                                return(
                                    <main key={index}>
                                        <Input value={value} id={id} Fn={Fn} type={type} placeholder={placeholder} label={label}/>
                                    </main>
                                )
                            })
                        }
                         <div className="py-2 flex gap-2 items-center w-fit">
                            <DatePicker selected={startDate} onChange={(date)=> setStartDate(date!)} placeholderText={`${formatedDate}`} showIcon icon={<SlCalender/>} className="border border-gray/50 rounded-lg outline-blue-900/50"
                            />
                        </div>
                            <Button title="Submit" sumbit={()=> null }/>
                    </div>
                </form>
            </Model>
        </div>
    )   
}
export default ProfileBio;