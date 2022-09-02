import { ReactElement, createElement, useState, useEffect } from "react";
import useEvent from "../customHooks/useEvent"
import { EditableValue} from "mendix"
import { Big } from "big.js";

export interface CompassProps {
    interval: number;
    rotation: EditableValue<Big>;
    timestamp: EditableValue<Big>;
    iOS: boolean;
}

export function CompassComponent({ interval, rotation, timestamp, iOS }: CompassProps): ReactElement {

    const [compass, setCompass] = useState<number>(0)
    const [secs, setSecs] = useState<number>(Math.round(Date.now() / 1000))

    if (iOS) {
      useEvent("deviceorientation", handler);
    }
    else {
      useEvent ("deviceorientationabsolute", handler)
    }

    //Call state within useEffect to keep loop
    useEffect (() => {
      console.log (secs)
      if (rotation.status === 'available' && timestamp.status === 'available') {
        window.setTimeout(() => setSecs (Math.round(Date.now() / 1000)), interval * 1000)
        window.setTimeout(() => rotation.setValue(new Big (compass)), interval * 1000);
        window.setTimeout(() => timestamp.setValue(new Big (secs)), interval * 1000)
      }

    }, [secs])

    function handler(e: DeviceOrientationEvent) {
        if (e.alpha) {
            setCompass (Math.abs(e.alpha - 360))
        }
      }

    return (
      <div className="compass">
        <div className="arrow" />
        <div className="compass-circle" style={{transform:  `translate(-50%, -50%) rotate(${compass?-compass:0}deg)`}}></div>
        <div className="my-point" />
      </div>
)
    }
