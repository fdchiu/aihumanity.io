import { useEffect, useState } from "react";
import useQuery from "./useQuery";


export default function useIsMobile() {
    const [isNotMobile, useQueryCall] = useQuery('(min-width: 768px)')
    //const [isMobile, setIsMobile] = useState(false)
    //let flag = useQueryCall('(min-width: 768px)')

    useEffect(() => {
        //setIsMobile(flag)
    }, []);

    return !isNotMobile;
} 
