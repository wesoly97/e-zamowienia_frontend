import { Container, Menu, StyledLogo, Column, ColumnHeader, Item, BottomBar } from './Footer.styles';

export const Footer = () => {
  return (
    <>
      <Container>
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
      </Container>
      <BottomBar>2022</BottomBar>
    </>
  );
};
