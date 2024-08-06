import { Avatar, Typography } from '@mui/material';
import { StyledContainer } from './styles';

interface Props {
    avatarUrl: string;
    name: string;
}

const UserCard: React.FC<Props> = ({ avatarUrl, name }) => {
    return (
        <StyledContainer>
            <Avatar src={avatarUrl} />
            <Typography variant="body2">{name}</Typography>
        </StyledContainer>
    );
};

export default UserCard;
