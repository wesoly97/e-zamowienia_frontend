import { Container, StyledGroupsIcon, StyledNoteAddIcon } from './Statistics.styles';
import { StatisticsProps } from './Statistics.types';
import { StatisticsGroup } from './statisticsGroup/StatisticsGroup';

export const Statistics = ({ data, isLoading }: StatisticsProps) => {
  return (
    <Container>
      <StatisticsGroup
        icon={<StyledGroupsIcon />}
        isLoading={!data || isLoading}
        description={'Wykonawców'}
        number={data?.contractorsNumber}
      />
      <StatisticsGroup
        icon={<StyledGroupsIcon />}
        isLoading={!data || isLoading}
        description={'Zamawiających'}
        number={data?.orderersNumber}
      />
      <StatisticsGroup
        icon={<StyledNoteAddIcon />}
        isLoading={!data || isLoading}
        description={'Dodanych zamówień'}
        number={data?.ordersNumber}
      />
    </Container>
  );
};
