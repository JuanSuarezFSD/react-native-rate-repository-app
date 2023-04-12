import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.font.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    colorAux: {
        color:theme.colors.aux
    }, 
    textAlignCenter: {
        textAlign: 'center'
    }
        
})

export default function StyledText ({color, align, fontSize, children, fontWeight, 
    style, ...restOfProps  }){
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        color === 'aux' && styles.colorAux,
        fontWeight === 'bold' && styles.bold
    ]
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}