import { ReactElement, createElement } from "react";
import { PermissionComponent } from "./components/PermissionComponent";

import { CompassContainerProps } from "../typings/CompassProps";

import "./ui/Compass.css";

export function Compass({ interval, rotation, timestamp }: CompassContainerProps): ReactElement {

    return <PermissionComponent interval={interval} rotation={rotation} timestamp={timestamp} />;
}
