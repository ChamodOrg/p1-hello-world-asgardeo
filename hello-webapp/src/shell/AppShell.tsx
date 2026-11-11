import type { JSX } from "react";
import { Link, Outlet } from "react-router";
import { AppShell, ColorSchemeToggle, Footer, Header, Sidebar } from "@wso2/oxygen-ui";
import { Home } from "@wso2/oxygen-ui-icons-react";

export default function AppLayout(): JSX.Element {
  return (
    <AppShell>
      <AppShell.Navbar>
        <Header>
          <Header.Toggle />
          <Header.Brand>
            <Header.BrandTitle>Hello World</Header.BrandTitle>
          </Header.Brand>
          <Header.Spacer />
          <Header.Actions>
            <ColorSchemeToggle />
          </Header.Actions>
        </Header>
      </AppShell.Navbar>

      <AppShell.Sidebar>
        <Sidebar activeItem="greeting">
          <Sidebar.Nav>
            <Sidebar.Category>
              <Sidebar.Item id="greeting" link={<Link to="/" />}>
                <Sidebar.ItemIcon><Home /></Sidebar.ItemIcon>
                <Sidebar.ItemLabel>Greeting</Sidebar.ItemLabel>
              </Sidebar.Item>
            </Sidebar.Category>
          </Sidebar.Nav>
        </Sidebar>
      </AppShell.Sidebar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer><Footer.Copyright>© WSO2 LLC</Footer.Copyright></Footer>
      </AppShell.Footer>
    </AppShell>
  );
}
