import React, { useState, useEffect } from 'react'
import { useWindowDimensions, Pressable, Text } from 'react-native'

import { useThemeContext } from '../../context/ThemeContext/ThemeContext'

interface Plan {
    id: string,
    title: string,
    description: string,
    notes?: string,
    project?: string,
    materials?: [string]
}

interface Props {
    plan: Plan
}

const PlanListView = ({ plan }: Props) => {
    const theme = useThemeContext()
    const windowWidth = useWindowDimensions().width;
    const [breakpoint, setBreakpoint] = useState('md')
    const [showDetails, setShowDetails] = useState(false)

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
    const trimDescription = (description: string): string => {
        if (description.length < 250) return description.substring(0, 250).concat('...')
        return description
    }

    return (
        <Pressable
            onPress={() => console.log('goes to plan detail page')}
            onLongPress={() => setShowDetails(!showDetails)}
            style={{
                backgroundColor: theme.cardBackground,
                padding: breakpoint === 'sm' ? 10 : 15,
                minWidth: '100%'
            }}
        >
            <Text style={{
                color: theme.primary,
                fontSize: breakpoint === 'sm' ? 16 : 20
                }}>
                {plan.title}
            </Text>
            <Text style={{
                color: theme.accent,
                fontSize: breakpoint === 'sm' ? 12 : 14
                }}>
                {showDetails ? plan.description : trimDescription(plan.description)}
            </Text>
            {showDetails && plan.notes && <Text style={{
                color: theme.fontColor,
                fontSize: breakpoint === 'sm' ? 12 : 14
                }}>
                {plan.notes}
            </Text>
            }
        </Pressable>
    )
}

export default PlanListView