import { Container, Heading, Box } from './Header.styles';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Header = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <Box>
        <Heading>{t('main.title')}</Heading>
      </Box>
    </Container>
  );
};
