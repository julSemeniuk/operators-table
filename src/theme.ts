import { Palette, Theme, createTheme } from '@mui/material/styles';

//todo: remove emotion and mui-icons

declare module '@mui/material/styles' {
    interface Theme {
        palette: Palette;
    }

    interface TypographyVariants {
        tableHeader: React.CSSProperties;
        inputValue: React.CSSProperties;
        inputLabel: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        tableHeader?: React.CSSProperties;
        inputValue?: React.CSSProperties;
        inputLabel?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        tableHeader: true;
        inputValue: true;
        inputLabel: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#F04259',
        },
        secondary: {
            light: '#CAE0ED',
            main: '#668099',
        },
        text: {
            primary: '#292424',
        },
    },
    typography: {
        h1: {
            fontSize: 34,
            fontWeight: 400,
            color: '#292424',
        },
        tableHeader: {
            fontSize: 14,
            fontWeight: 500,
            color: '#292424',
        },
        body2: {
            fontSize: 14,
            fontWeight: 400,
            color: '#292424',
        },
        inputValue: {
            fontSize: 16,
            fontWeight: 400,
            color: '#292424',
        },
        inputLabel: {
            fontSize: 12,
            fontWeight: 400,
            color: '#668099',
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            color: '#292424',
        },
    },
});

export default theme;
