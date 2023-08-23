import { NavItem, NavList, Navbar } from '@/components';

function NavbarDashboard() {
  return (
    <Navbar>
      <NavList>
        <NavItem
          className='nav-item'
          click={() => console.log('click')}
          value={'home'}>
          {'NewsPage'}
        </NavItem>
        <NavItem
          className='nav-item'
          click={() => console.log('click')}
          value={'dashboard'}>
          {'Dashboard'}
        </NavItem>
        <NavItem
          className='nav-item'
          click={() => console.log('click')}
          value={'history'}>
          {'History'}
        </NavItem>
        <NavItem
          className='nav-item'
          click={() => console.log('click')}
          value={'starred'}>
          {'Starred'}
        </NavItem>
      </NavList>
    </Navbar>
  );
}
export default NavbarDashboard;
