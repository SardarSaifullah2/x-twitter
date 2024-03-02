import { Roboto } from "next/font/google";
import { LoginComponent } from "@/components/login";
import TwitterIcon from '../../../../public/twitter.svg'
import Image from "next/image";
const roboto = Roboto(
    { 
        subsets: ["latin"] ,
        weight: ["100", "300", "400", "500", "700", "900"]
    }
    
    );

export default async function Login() {
    return(
        <div className={`${roboto.className} overflow-hidden`}>
            <div className="w-[100vw] min-h-screen ">
                <div className="z-[99] flex gap-[35px] h-full">
                    <div className="hidden  min-h-screen lg:w-[60%] bg-cover bg-[url('https://s3-bucket-saifullah.s3.ap-south-1.amazonaws.com/12flt8hf3sp.png')] bg-no-repeat md:flex items-center justify-center" >
                    </div>
                    <div  className="w-[95%]  lg:w-[40%] bg-white min-h-screen items-center lg:items-start justify-center flex flex-col gap-[41px] p-2">
                        <Image width={40} height={40} src={TwitterIcon} alt="twitter-logo"/>
                        <div className="flex flex-col gap-[46px]">   
                            <div className="flex flex-col gap-[15px] items-center lg:items-start">
                                <h3 className="text-black text-[45px] md:text-[10vw] lg:text-[5vw] font-bold">Happining Now </h3>
                                <h6 className="text-black text-[20px] md:text-[5vw] lg:text-[3vw] font-bold">Join Twitter Today!</h6>
                            </div>
                            <div className="flex flex-col gap-2 items-center lg:items-start">
                                <LoginComponent/>
                            </div>
                            <div className="flex items-center justify-center ">
                                <h5 className="text-sm md:text-[2vw] lg:text-[1.5vw] w-fit md:w-[60%] lg:w-fit md:pr-[50px] leading-8 text-center">
                                    By singing up you agree to the <span className="text-[#1E97E1]"> Terms of Service </span>and <span className="text-[#1E97E1]">Privacy Policy</span> , including <span className="text-[#1E97E1]">Cookie Use</span>.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}