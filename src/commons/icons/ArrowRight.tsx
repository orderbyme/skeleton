import { Path, Svg } from 'react-native-svg';
import { IconProps } from './types';

export const ArrowRightIcon = ({size, color, strokeWidth, style}: IconProps) => (
    <Svg width={size} style={style} height={size} fill="none" viewBox={`0 0 24 24`}>
        <Path 
            d="M4 12H20M20 12L14 6M20 12L14 18" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeWidth={strokeWidth} 
        />
    </Svg>
)

export const ArrowRightRoundIcon = ({size, color, strokeWidth, style}: IconProps) => (
    <Svg width={size} style={style} height={size} fill="none" viewBox={`0 0 24 24`}>
        <Path 
            d="M9 5L15 12L9 19" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeWidth={strokeWidth} 
        />
    </Svg>
)
