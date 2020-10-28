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
    const [breakpoint, setBreakpoint] = useState('md')

    useEffect(() => {
        const breakpoint = findBreakPoint()
        setBreakpoint(breakpoint)
    }, [windowWidth])

    const findBreakPoint = () => {
        switch (true) {
        case (windowWidth <= 575):
            return 'xs'
        case (windowWidth >= 576 && windowWidth <= 767):
            return 'sm'
        case (windowWidth >= 768 && windowWidth <= 991):
            return 'md'
        case (windowWidth >= 992 && windowWidth <= 1199):
            return 'lg'
        case (windowWidth >= 1200):
            return 'xl'
        default:
            return 'md'
        }
    }

    return (
        <TouchableOpacity
        style={{
            backgroundColor: theme[type],
            padding: size === 'sm' ? 10 : 15,
            borderRadius: 10,
            minWidth: breakpoint === 'xs' ? '100%' : undefined
        }}
        onPress={onPress}
        >
            <Text style={{
                color: theme.fontColorOnPrimary,
                fontSize: size === 'sm' ? 14 : 20,
                textAlign: 'center'
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button