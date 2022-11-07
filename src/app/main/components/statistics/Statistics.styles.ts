import styled, { css } from 'styled-components';
import GroupsIcon from '@mui/icons-material/Groups';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 500px;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
`;

export const statisticsIcon = css`
  width: 88px;
  height: auto;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 128px;
  }
`;

export const StyledGroupsIcon = styled(GroupsIcon)`
  ${statisticsIcon}
`;

export const StyledNoteAddIcon = styled(NoteAddIcon)`
  ${statisticsIcon}
`;
