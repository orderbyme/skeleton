import { StyleProp, ViewStyle } from "react-native";

export interface IconProps {
    size?: number;
    color?: string;
    name: string;
    style?: StyleProp<ViewStyle>
    strokeWidth?: number
}