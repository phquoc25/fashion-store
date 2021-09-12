export interface Color {
    name: string;
    code: string;
}

export const COLORS = {
    BLACK: { name: 'black', code: '#020203' },
    BROWN: { name: 'brown', code: '#984D32' },
    BEIGE: { name: 'beige', code: '#D59D80' },
    DARK_ORANGE: { name: 'darkorange', code: '#FF5D00' },
    ORANGE: { name: 'orange', code: '#FF9900' },
    YELLOW: { name: 'yellow', code: '#F5C621' },
    RED: { name: 'red', code: '#E20907' },
    PRUNE: { name: 'prune', code: '#A7004E' },
    DARK_PINK: { name: 'darkpink', code: '#E6397C' },
    PINK: { name: 'pink', code: '#FF79C9' },
    PURPLE: { name: 'purple', code: '#D551EE' },
    DARK_PURPLE: { name: 'darkpurple', code: '#7B61FF' },
    DARK_BLUE: { name: 'darkblue', code: '#2D54A2' },
    BLUE: { name: 'blue', code: '#438ECC' },
    BLUE_LIGHT: { name: 'bluelight', code: '#5CC5EB' },
    GREEN_LIGHT: { name: 'greenlight', code: '#9EC75F' },
    GREEN: { name: 'green', code: '#4DAF50' },
    DARK_GREEN: { name: 'darkgreen', code: '#00887B' },
} as const;
