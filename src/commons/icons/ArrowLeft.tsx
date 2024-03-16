import { Path, Svg } from 'react-native-svg';
import { IconProps } from './types';

export const ArrowLeft = ({size, color, style}: IconProps) => (
    <Svg width={size} style={style} height={size} fill="none" viewBox={`0 0 24 24`}>
        <Path
            fill={color}
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
        />
    </Svg>
)