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

export const Footer = () => {
  return (
    <>
      <GlobalBottomPadding />
      <Container>
        <Content>
          <StyledLogo />
          <Menu>
            <Column>
              <ColumnHeader>Zawartość</ColumnHeader>
              <Item>Autorzy</Item>
            </Column>
            <Column>
              <ColumnHeader>Narzędzia</ColumnHeader>
              <Item>API</Item>
            </Column>
            <Column>
              <ColumnHeader>Pomoc</ColumnHeader>
              <Item>FAQ</Item>
              <Item>Kontakt</Item>
            </Column>
          </Menu>
        </Content>
        <BottomBar>2022</BottomBar>
      </Container>
    </>
  );
};
