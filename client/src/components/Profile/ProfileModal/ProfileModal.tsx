import { COLORS, PrivateRoutes, PublicRoutes } from '@/models';
import styled from 'styled-components';
import ProfileImage from '../ProfileImage/ProfileImage';
import { useRef } from 'react';
import { useClickOutside } from '@/hooks';
import { NavItem } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux';

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${COLORS.PRIMARY_COLOR};
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding-top: 20px;
  gap: 30px;
  list-style: none;

  @media (min-width: 768px) {
    background-color: ${COLORS.PRIMARY_COLOR_ALPHA};
    backdrop-filter: blur(1px);
    width: 25%;
  }
`;
interface Props {
  onClick: () => void;
}

function ProfileModal({ onClick }: Props) {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();

  useClickOutside(modalRef, onClick);

  return (
    <ModalContainer ref={modalRef}>
      <ProfileImage showName={true} onClick={onClick} />
      {user.name ? (
        <>
          <NavItem
            click={() =>
              navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`, {
                replace: true,
              })
            }
            value='settings'>
            {'history'}
          </NavItem>
          <NavItem
            click={() =>
              navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.READLATER}`, {
                replace: true,
              })
            }
            value='saved'>
            {'read later'}
          </NavItem>
          <NavItem
            click={() =>
              navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SETTINGS}`, {
                replace: true,
              })
            }
            value='settings'>
            {'settings'}
          </NavItem>
          <NavItem
            click={() => {
              dispatch(logoutUser());
              navigate(`/${PublicRoutes.HOME}`, { replace: true });
            }}
            value='logout'>
            {'logout'}
          </NavItem>
        </>
      ) : (
        <NavItem
          click={() => navigate(`/${PublicRoutes.LOGIN}`, { replace: true })}
          value='login'>
          {'login or register'}
        </NavItem>
      )}
    </ModalContainer>
  );
}
export default ProfileModal;
