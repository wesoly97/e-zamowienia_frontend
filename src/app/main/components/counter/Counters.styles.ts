import styled from 'styled-components';
import GroupsIcon from '@mui/icons-material/Groups';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CountUp from 'react-countup';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Description = styled.span`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
`;

export const StyledGroupsIcon = styled(GroupsIcon)`
  width: 128px;
  height: 128px;
`;

export const StyledNoteAddIcon = styled(NoteAddIcon)`
  width: 128px;
  height: 128px;
`;

export const StyledCountUp = styled(CountUp)`
  font-size: 40px;
  line-height: 64px;
  font-weight: 700;
`;
