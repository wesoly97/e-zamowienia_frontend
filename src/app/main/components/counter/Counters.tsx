import { Container, Stats, Description, StyledGroupsIcon, StyledCountUp, StyledNoteAddIcon } from './Counters.styles';

export const Counters = () => {
  return (
    <Container>
      <Stats>
        <StyledGroupsIcon />
        <StyledCountUp end={100} enableScrollSpy />
        <Description>Wykonawców</Description>
      </Stats>
      <Stats>
        <StyledGroupsIcon />
        <StyledCountUp end={100} enableScrollSpy />
        <Description>Zamawiających</Description>
      </Stats>
      <Stats>
        <StyledNoteAddIcon />
        <StyledCountUp end={100} enableScrollSpy />
        <Description>Dodanych zamówień</Description>
      </Stats>
    </Container>
  );
};
