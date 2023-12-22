import { useState } from "react"

const useOfflineStatus = ()=>{
    const [status,setStatus] = useState(false);

    window.addEventListener("offline",()=>{
        setStatus(true);
    })

    window.addEventListener("online" , ()=>{
        setStatus(false);
    })

    return status;
}

export default useOfflineStatus;