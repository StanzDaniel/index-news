import { NavItem, NavList, Navbar } from '@/components';
import { PrivateRoutes, PublicRoutes } from '@/models';
import { useNavigate } from 'react-router-dom';

export function NavbarPrivate({currentPage}: {currentPage: string}) {
  const navigate = useNavigate();
  return (
    <Navbar>
      <NavList>
        <NavItem
          className={`nav-item`}
          click={() => navigate(`../../${PublicRoutes.HOME}`, { replace: true })}
          value={'home'}>
          {'NewsPage'}
        </NavItem>
        <NavItem
          className={`nav-item ${currentPage === PrivateRoutes.DASHBOARD ? 'active': ''}`}
          click={() => navigate(`../${PrivateRoutes.DASHBOARD}`, { replace: true })}
          value={'dashboard'}>
          {'Dashboard'}
        </NavItem>
        <NavItem
          className={`nav-item ${currentPage === PrivateRoutes.HISTORY ? 'active': ''}`}
          click={() => navigate(`../${PrivateRoutes.HISTORY}`)}
          value={'history'}>
          {'History'}
        </NavItem>
        <NavItem
          className={`nav-item ${currentPage === PrivateRoutes.READLATER ? 'active': ''}`}
          click={() => navigate(`../${PrivateRoutes.READLATER}`)}
          value={'starred'}>
          {'Read Later'}
        </NavItem>
        <NavItem
          className={`nav-item ${currentPage === PrivateRoutes.SETTINGS ? 'active': ''}`}
          click={() => navigate(`../${PrivateRoutes.SETTINGS}`)} 
          value='settings'>
          {'Settings'}
        </NavItem>
      </NavList>
    </Navbar>
  );
}
