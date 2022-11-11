import { Container, StyledGroupsIcon, StyledNoteAddIcon } from './Statistics.styles';
import { StatisticsProps } from './Statistics.types';
import { StatisticsGroup } from './statisticsGroup/StatisticsGroup';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Statistics = ({ data, isLoading }: StatisticsProps) => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <StatisticsGroup
        icon={<StyledGroupsIcon />}
        isLoading={isLoading}
        description={t('main.statistics.contractors')}
        number={data?.contractorsNumber}
      />
      <StatisticsGroup
        icon={<StyledGroupsIcon />}
        isLoading={isLoading}
        description={t('main.statistics.orderers')}
        number={data?.orderersNumber}
      />
      <StatisticsGroup
        icon={<StyledNoteAddIcon />}
        isLoading={isLoading}
        description={t('main.statistics.orders')}
        number={data?.ordersNumber}
      />
    </Container>
  );
};
