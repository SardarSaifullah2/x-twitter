'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { user } from '@/type/type'
import { BioState } from '@/models/modelsState/Bio'
import { FollowBtn } from '../followbtn'
import { SwrData } from '@/hooks/swr'
import { ProfileMenu } from './ProfileMenu'
import { CiLocationOn } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'
import LoaderIcon from '../loader'

export const ProfileComponent=({ currentUser , username}:{currentUser:user , username : string})=>{
   const {data :userdata, isLoading} = SwrData(`/api/users/${username}`)
    const editModel = BioState()
    if(isLoading){
        return(
            <div className='hidden'><LoaderIcon/></div>
        )
    }
    const EditPopUp = () =>{
        if(!currentUser){
            return
        }
        editModel.onOpen()
    }
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const date: Date = new Date(userdata.dob)
      const month = monthNames[date.getUTCMonth()]
      const year = date.getFullYear()
      
     
    return(
        <main>
            {/* {user detail} */}
            <div className=" text-white bg-white pb-4 md:pb-8 border-b border-gray-100 mb-2 md:mb-4">
            {/* image container */}
            <div className="bg-white w-full h-fit relative text-black p-2" >
                <div className="bg-gray-200 min-h-[300px] w-full rounded-xl bg-no-repeat bg-cover bg-center bg-gray/40" style={{backgroundImage : `url(${userdata?.profileBanner})`}}>
                    {/* TODO ADD IMAGE */}
                </div>
                <div className="flex flex-row justify-end px-6 py-4 md:p-3 md:pb-2">     
                {
                    userdata?.image && <Image src={userdata?.image!} width={150} height={150} className="rounded-full border-white border-[4px] absolute bottom-[3px] left-4 w-[150px] h-[150px] object-cover" alt={"user-banner-image"}></Image>
                }
                {currentUser?.username === userdata?.username ? <button className="text-black text-lg font-bold border border-black/30 bg-transparent hover:bg-black hover:text-white transition duration-500 px-6 py-2 rounded-full" onClick={()=>EditPopUp()}>Edit Profile</button> : <FollowBtn profileUser={userdata} currentUser={currentUser}/>
                }
                
                </div>
            </div>
            <div className="px-4 flex flex-col gap-2">
                    <div>
                        <h4 className="text-[#0F1419] font-semibold text-[24px] capitalize">{userdata?.name}</h4>
                        <h6 className="text-[#5B7083]  text-[20px] font-semibold">@{userdata?.username}</h6>
                    </div>
                    {/* {passion} */}
            {/* following  */}
                    <div className='text-[16px] text-[#0F1419] font-semibold'>{userdata?.passion}</div>
                    <div className='text-[16px] text-gray font-normal'>{userdata?.bio}</div>
            <div className='flex flex-row gap-2 *:flex *:gap-1 *:text-[#5B7083] *:items-center *:text-[16px] *:font-medium  '>
                <div className=''>
                    <CiLocationOn strokeWidth={2}/>
                    {userdata?.location}
                </div>
                    <div className=''>
                        <SlCalender strokeWidth={2}/>
                        Joined at {month} - {year}
                    </div>
            </div>
                    <div className="">
                        <div className="flex flex-row gap-6 text-black">
                                <h3 className="font-semibold flex gap-1 text-[#5B7083]">
                                    <span className="font-semibold text-black">
                                        
                                        {userdata?.followingId.length < 9 ?"0": "" }{userdata?.followingId.length}
                                    </span>          
                                    Followers 
                                </h3>
                                <h3 className="font-semibold flex gap-1 text-[#5B7083]">
                                    <span className="font-semibold text-[#0F1419]">
                                    {userdata?.followedId?.length < 9 ?"0": "" }{userdata?.followedId?.length}
                                        </span>          
                                    Following 
                                </h3>
                        </div>
                    </div>               
            </div>
            
            </div>


        { 
        !isLoading &&    
        <div>
        <ul className="flex justify-between items-center list-none gap-2">
              <ProfileMenu link={`/${username}`}>Post</ProfileMenu>
              <ProfileMenu link={`/${username}/replies`}>Replies</ProfileMenu>
        </ul>
        </div>}
            


            {/* {UserPost} */}

        </main>
    )
}








{/* {
    userdata &&  <ProfileFeed currentUser={currentUser} userId={userdata?._id!}/>
} */}