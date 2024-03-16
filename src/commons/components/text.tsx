import { useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
    semiBold?: boolean;
    regular?: boolean;
    medium?: boolean;
    bold?: boolean;
    light?: boolean;
    poppins?: boolean;
    openSans?: boolean;
    Inter?: boolean;
    color?: string;
    size?: string | number;
}

const regularStyle =  (fontName: string) => ({
  fontFamily: `${fontName}_400Regular`
})

const mediumStyle =  (fontName: string) => ({
  fontFamily: `${fontName}_500Medium`
})

const boldStyle =  (fontName: string) => ({
  fontFamily: `${fontName}_700Bold`
})

const semiBoldStyle =  (fontName: string) => ({
  fontFamily: `${fontName}_600SemiBold`
})

const lightStyle = (fontName: string) => ({
  fontFamily: `${fontName}_300Light`
})

const FirstLetterInUppercase = (word: string) => (
  word.charAt(0).toUpperCase() + word.slice(1)
)

const Text = ({
children, 
semiBold, 
regular, 
bold, 
medium, 
light, 
style, 
poppins,
openSans,
Inter,
color,
size,
...props
}: TextProps) => {
  const fontName = useMemo(() =>
    FirstLetterInUppercase(
      Object.entries(
        {poppins, openSans, Inter}
      )
    .filter(([_, value]) => value === true)
    .map((value) => value[0])[0] || "Poppins")
    ,[poppins, openSans]
  )

  const fontStyle = [
    semiBold && semiBoldStyle(fontName),
    regular && regularStyle(fontName),
    light && lightStyle(fontName),
    medium && mediumStyle(fontName),
    bold && boldStyle(fontName),
    { color: color ? color: "white"},
    { fontSize: size ? size : 14}
  ]

  return(
    <RNText {...props} style={[...fontStyle, style]}>{children}</RNText>
  )
}

export {Text}