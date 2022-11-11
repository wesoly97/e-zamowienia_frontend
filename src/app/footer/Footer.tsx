import {
  Container,
  Menu,
  StyledLogo,
  Column,
  ColumnHeader,
  Item,
  BottomBar,
  Content,
  GlobalBottomPadding,
} from './Footer.styles';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Footer = () => {
  const { t } = useLocaleContext();

  return (
    <>
      <GlobalBottomPadding />
      <Container>
        <Content>
          <StyledLogo />
          <Menu>
            <Column>
              <ColumnHeader>{t('footer.headers.content')}</ColumnHeader>
              <Item>{t('footer.links.authors')}</Item>
            </Column>
            <Column>
              <ColumnHeader>{t('footer.headers.utilities')}</ColumnHeader>
              <Item>{t('footer.links.api')}</Item>
            </Column>
            <Column>
              <ColumnHeader>{t('footer.headers.help')}</ColumnHeader>
              <Item>{t('footer.links.faq')}</Item>
              <Item>{t('footer.links.contact')}</Item>
            </Column>
          </Menu>
        </Content>
        <BottomBar>2022</BottomBar>
      </Container>
    </>
  );
};
