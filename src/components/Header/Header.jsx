import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/auth/selectors';
import { getCurrentDate } from '../../utils/currentDate';
import { useAuth } from '../../hooks/useAuth';
import HeaderModalButton from './HeaderModalButton/HeaderModalButton';
import MobileMenu from './MobileMenu/MobileMenu';
import TargetSelectionModal from './TargetSelectionModal/TargetSelectionModal';
import CurrentWeightModal from './CurrentWeightModal/CurrentWeightModal';
import UserInfoModal from './UserInfoModal/UserInfoModal';
import {
  HeaderContainer,
  LogoNavContainer,
  Logo,
  Container,
  Navigation,
  StyledNavLink,
  ProfileSvg,
  AuthContainer,
  MenuButton,
  MenuSvg,
  HeaderButtonContainer,
  UserName,
  UserInfoButton,
  UserSvg,
  UserAvatar,
  Span,
  List,
} from './HeaderStyled';

import sprite from './images-for-header/icons.svg';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const user = useSelector(getUserInfo);

  const avatar = user?.avatarURL;
  const gender = user?.gender?.toLowerCase() || '';
  const goal = user?.goal?.toLowerCase() || '';
  const weight = user?.weight !== undefined ? user.weight : '';
  const name = user?.username || '';

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showTargetModal, setShowTargetModal] = useState(false);
  const [showWeightModal, setShowWeightModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [today, setToday] = useState(null);

  useEffect(() => {
    const bodyOverflow =
      showMobileMenu || showTargetModal || showWeightModal || showUserModal
        ? 'hidden'
        : '';
    document.body.style.overflow = bodyOverflow;

    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileMenu, showTargetModal, showWeightModal, showUserModal]);

  const openMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowUserModal(false);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const openTargetModal = () => {
    setShowTargetModal(!showTargetModal);
    setShowMobileMenu(false);
    setShowWeightModal(false);
    setShowUserModal(false);
  };

  const closeTargetModal = () => {
    setShowTargetModal(false);
  };

  const openWeightModal = () => {
    setToday(getCurrentDate());
    setShowWeightModal(!showWeightModal);
    setShowMobileMenu(false);
    setShowTargetModal(false);
    setShowUserModal(false);
  };

  const closeWeightModal = () => {
    setShowWeightModal(false);
  };

  const openUserModal = () => {
    setShowUserModal(!showUserModal);
    setShowWeightModal(false);
    setShowMobileMenu(false);
    setShowTargetModal(false);
  };

  const closeUserModal = () => {
    setShowUserModal(false);
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="container">
          <Navigation>
            <Logo to="/">HealthyHub</Logo>
            <List>
              <StyledNavLink exact="true" to="/signin">
                Sign in
              </StyledNavLink>
              <Span>/</Span>
              <StyledNavLink exact="true" to="/signup">
                Sign up
              </StyledNavLink>
              <ProfileSvg>
                <use href={sprite + '#icon-profile-circle'} />
              </ProfileSvg>
            </List>
          </Navigation>
        </div>
      )}
      {isLoggedIn && (
        <HeaderContainer>
          <Container className="container">
            <LogoNavContainer>
              <Logo to="/">HealthyHub</Logo>
              <MenuButton type="button" onClick={openMobileMenu}>
                <MenuSvg>
                  <use href={sprite + '#icon-menu'} />
                </MenuSvg>
              </MenuButton>
            </LogoNavContainer>

            <AuthContainer>
              <HeaderButtonContainer>
                <HeaderModalButton
                  gender={gender}
                  goal={goal}
                  buttonType="goal"
                  onClick={openTargetModal}
                />
                <HeaderModalButton
                  buttonType="weight"
                  weight={weight}
                  onClick={openWeightModal}
                />
              </HeaderButtonContainer>

              <UserInfoButton type="button" onClick={openUserModal}>
                <UserName>{name}</UserName>
                {avatar ? (
                  <UserAvatar src={avatar} alt="user avatar" />
                ) : (
                  <UserSvg>
                    <use href={sprite + '#icon-profile-circle'} />
                  </UserSvg>
                )}

                {showUserModal ? (
                  <svg
                    width="14"
                    height="14"
                    stroke="rgba(227, 255, 168, 1)"
                    style={{ transform: 'rotate(180deg)' }}
                  >
                    <use href={sprite + '#icon-arrow-down'} />
                  </svg>
                ) : (
                  <svg width="14" height="14" stroke="rgba(227, 255, 168, 1)">
                    <use href={sprite + '#icon-arrow-down'} />
                  </svg>
                )}
              </UserInfoButton>
            </AuthContainer>
          </Container>
        </HeaderContainer>
      )}

      {/* Додано перевірку showUserModal для показу UserInfoModal */}
      {showUserModal && <UserInfoModal onClose={closeUserModal} />}
      {showMobileMenu && (
        <MobileMenu
          onClose={closeMobileMenu}
          gender={gender}
          goal={goal}
          weight={weight}
          openTarget={openTargetModal}
          openWeight={openWeightModal}
        />
      )}
      {showTargetModal && (
        <TargetSelectionModal
          gender={gender}
          onClose={closeTargetModal}
          target={goal}
        />
      )}
      {showWeightModal && (
        <CurrentWeightModal onClose={closeWeightModal} date={today} />
      )}
    </>
  );
};
