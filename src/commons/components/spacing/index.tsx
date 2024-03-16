import styled from "styled-components/native";
import { SpacingProps } from "./types";
import { View } from "react-native";

export const Spacing = styled(View)<SpacingProps>`
    ${({fullWidth}) => fullWidth ? "width: 100%" : undefined};
    ${({mr}) => mr ? `margin-right: ${mr}px` : undefined};
    ${({ml}) => ml ? `margin-left: ${ml}px` : undefined};
    ${({mb}) => mb ? `margin-bottom: ${mb}px` : undefined};
    ${({mt}) => mt ? `margin-top: ${mt}px` : undefined};
    ${({pt}) => pt ? `padding-top: ${pt}px` : undefined};
    ${({pb}) => pb ? `padding-bottom: ${pb}px` : undefined};
    ${({pr}) => pr ? `padding-right: ${pr}px` : undefined};
    ${({pl}) => pl ? `padding-left: ${pl}px` : undefined};
    ${({mh}) => mh ? `margin-horizontal: ${mh}px` : undefined};
    ${({mv}) => mv ? `margin-vertical: ${mv}px` : undefined};
    ${({pv}) => pv ? `padding-vertical: ${pv}px` : undefined};
    ${({ph}) => ph ? `padding-horizontal: ${ph}px` : undefined};
    ${({p}) => p ? `padding: ${p}px` : undefined};
    ${({m}) => m ? `margin: ${m}px` : undefined};
    flex-direction: ${({row}) => row ? "row" : "column"};
`