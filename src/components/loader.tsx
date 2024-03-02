import { CircularProgress } from "@mui/material"

const LoaderIcon = () =>{
    return(
        <div className="w-full flex items-center justify-center mt-12" >
            <CircularProgress />
        </div>
    )
}
export default LoaderIcon;