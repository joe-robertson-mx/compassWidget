import { useEffect} from "react";

export default function useEvent (event:any, handler:(e: DeviceOrientationEvent)=> void, passive=true) {
    useEffect (()=> {
        window.addEventListener (event, handler, passive)

        return function cleanup() {
            window.removeEventListener (event, handler, passive)
        }
    }, [])
}