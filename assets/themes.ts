export interface ThemeInterface {
    mainBackground: string,
    cardBackground: string,
    fontColor: string,
    fontColorOnPrimary: string,
    primary: string,
    lightPrimary: string,
    accent: string,
    lightAccent: string,
    warning: string,
    lightWarning: string,
    tertiary: string,
    lightTertiary: string,
    lightMidtone: string,
    midtone: string,
    darkMidtone: string
}

export const bright: ThemeInterface = {
    mainBackground: 'white',
    cardBackground: '#ebf2f2',
    fontColor: '#000a33',
    fontColorOnPrimary: 'white',
    primary: '#03dac4',
    lightPrimary: '#03dac4',
    accent: '#6200ee',
    lightAccent: '#d5beed',
    warning: '#ed004f',
    lightWarning: '#edb2c6',
    tertiary: '#2c4196',
    lightTertiary: '#a3aac7',
    lightMidtone: '#f6f6f6',
    midtone: '#b5b5b5',
    darkMidtone: '#595757'
}