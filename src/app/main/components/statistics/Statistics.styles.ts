import styled from 'styled-components';
import GroupsIcon from '@mui/icons-material/Groups';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
`;

export const StyledGroupsIcon = styled(GroupsIcon)`
  width: 128px;
  height: 128px;
`;

export const StyledNoteAddIcon = styled(NoteAddIcon)`
  width: 128px;
  height: 128px;
`;
