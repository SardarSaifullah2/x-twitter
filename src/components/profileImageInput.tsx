import { ImageUpload } from "@/utils/imageUpload"
import { SetStateAction } from "react"
import { MdCloudUpload } from "react-icons/md"
interface ProfileImageInputInt{
    setProfileImg : React.Dispatch<SetStateAction<string>> ;
    ProfileImg : string ;
    setBannerImg : React.Dispatch<SetStateAction<string>> ;
    BannerImg : string ;
}
const ProfileBioImageInput: React.FC<ProfileImageInputInt> = ({setProfileImg , setBannerImg , ProfileImg , BannerImg}) =>{
    async function handleChange(ev : React.ChangeEvent<HTMLInputElement | null> , Fn: React.Dispatch<SetStateAction<string>>){
        const file = ev.target.files?.[0]
        if(file){
            const result = await ImageUpload(file)
            Fn(result)
        }
    }
    return(
        <div className="relative h-[360px] pb-6">
            <div style={{backgroundImage : `url(${BannerImg})`}} className="bg-gray bg-cover bg-no-repeat cursor-pointer">
                <label htmlFor="bannerImg" >
                    <div className="w-full h-[300px] bg-white/30 p-4 rounded-sm flex items-center justify-center cursor-pointer hover:bg-white/50 transition duration-500">
                        <MdCloudUpload size={30} color="white"/>
                        <input type="file" name="bannerImg" id="bannerImg" onChange={ev => handleChange(ev , setBannerImg)} className="hidden"/>
                    </div>
                </label>
            </div>
            <div className={`absolute bottom-0 left-8 border-[3px] border-white rounded-full bg-cover bg-center cursor-pointer`} >
                <label htmlFor="profileImage" className="" >
                    <div className="flex items-center justify-center   bg-white/30 hover:bg-white/50 transition duration-500 rounded-full cursor-pointer bg-cover bg-center w-[120px] h-[120px] overflow-hidden" style={{backgroundImage : `url(${ProfileImg})`}}>
                        <div className="w-full h-full flex items-center justify-center  bg-white/30 hover:bg-white/50 transition duration-500">
                            <MdCloudUpload size={30} color="white"/>
                            <input type="file" name="profileImage" id="profileImage"  className="hidden" onChange={ev => handleChange(ev , setProfileImg)}/>
                        </div>
                    </div>
                </label>
            </div>
        </div>

    )
}
export default ProfileBioImageInput;