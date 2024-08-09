import { styled } from 'styled-components';
import theme from 'theme';

export const StyledContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
});
