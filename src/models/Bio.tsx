import ProfileBio from "@/components/profileBio";
import serverAuth from "@/libs/serverAuth";

const BioModel = async() =>{
    const currentUser = await serverAuth()
    return(
        <div>
            <ProfileBio cUser={currentUser!} />
        </div>
    )
}
export default BioModel;