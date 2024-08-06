import styled from 'styled-components';
import theme from '../../theme';

export const StyledContainer = styled('div')({
    display: 'flex',
    gap: theme.spacing(3),
    flexDirection: 'column',
    height: '100%',
    margin: theme.spacing(3),
});
