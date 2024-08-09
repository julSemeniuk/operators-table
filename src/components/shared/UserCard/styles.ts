import { styled } from 'styled-components';
import theme from 'theme';

export const StyledContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
    alignItems: 'center',
    marginTop: theme.spacing(0.75),
});
