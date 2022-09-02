/**
 * This file was generated from Compass.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface CompassContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    interval: number;
    rotation: EditableValue<Big>;
    timestamp: EditableValue<Big>;
}

export interface CompassPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    interval: number | null;
    rotation: string;
    timestamp: string;
    onRotationChange: {} | null;
}
