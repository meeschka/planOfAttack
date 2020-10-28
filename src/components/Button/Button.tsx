import React, { useState, useEffect } from 'react'
import { useWindowDimensions, TouchableOpacity, Text, GestureResponderEvent } from 'react-native'

import { useThemeContext } from '../../context/ThemeContext/ThemeContext'

type Props = {
    type: "primary" | "accent" | "warning",
    size: "sm" | "lg",
    text: string,
    onPress: (event: GestureResponderEvent) => void
}

const Button = ({ type, size, text, onPress}: Props) => {
    const theme = useThemeContext()
    const windowWidth = useWindowDimensions().width;
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const isMobile = windowWidth <= 768 ? true : false
        setIsMobile(isMobile)
    }, [windowWidth])

    return (
        <TouchableOpacity
        style={{
            backgroundColor: theme[type],
            padding: isMobile ? 10 : 15,
            borderRadius: 10,
            minWidth: isMobile ? '100%' : undefined
        }}
        onPress={onPress}
        >
            <Text style={{
                color: theme.fontColorOnPrimary,
                fontSize: isMobile ? 14 : 20,
                textAlign: 'center'
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button