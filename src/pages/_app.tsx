import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';
import Head from 'next/head';
import { Fragment } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#191847'
            },
            secondary: {
                main: '#F5850B'
            },
            text: {
                primary: '#151516'
            }
        },
        typography: {
            fontFamily: ['"DM Sans"', 'sans-serif'].join(',')
        },
        shape: {
            borderRadius: 5
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        lineHeight: '1.25'
                    }
                }
            },
            MuiInputLabel: {
                defaultProps: {
                    shrink: true
                },
                styleOverrides: {
                    root: {
                        color: '#666173'
                    }
                }
            },
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 5,
                        textTransform: 'none'
                    }
                }
            },
            MuiLoadingButton: {
                defaultProps: {
                    variant: 'contained'
                }
            },
            MuiFormControl: {
                defaultProps: {
                    fullWidth: true,
                    variant: 'standard'
                }
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'standard',
                    fullWidth: true
                }
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        ':before': {
                            borderColor: '#F4F3F6'
                        }
                    }
                }
            },
            MuiSelect: {
                defaultProps: {
                    variant: 'standard'
                }
            }
        }
    });

    return (
        <Fragment>
            <Head>
                <title>Whitebook</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
