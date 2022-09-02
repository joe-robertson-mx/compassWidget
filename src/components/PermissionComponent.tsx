import { ReactElement, createElement, useState} from "react";
import { EditableValue} from "mendix"
import { CompassComponent } from "./CompassComponent";
import { Big } from "big.js";

export interface PermissionProps {
    interval: number;
    timestamp: EditableValue<Big>;
    rotation: EditableValue<Big>;
}

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}


export function PermissionComponent({ interval, timestamp, rotation }: PermissionProps): ReactElement {

    const [permission, setPermission] = useState(false)
    
    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
    const isIOS = typeof requestPermission === 'function';

    const addHandler = async () => {
      if (isIOS) {
        const response = await requestPermission();
        if (response === 'granted') {
              setPermission (true)
              
            } else {
              alert("has to be allowed!");
            }
      } else {
        setPermission (true)
      }  
    }

    return (
    <div>
      {permission &&  <CompassComponent interval={interval} timestamp={timestamp} rotation={rotation} iOS={isIOS}/>}
      {!permission && <button className="mx-button" onClick={()=>addHandler()}>Activate Compass</button>}
    </div>
)
    }
