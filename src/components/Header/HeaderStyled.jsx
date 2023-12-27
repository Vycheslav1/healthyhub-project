import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 834px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled(Link)`
  padding: 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: #b6b6b6;

  @media (min-width: 834px) {
    font-size: 22px;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Span = styled.span`
  padding: 22px 0;
  text-decoration: none;
  color: var(--color-primary-white, #fff);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 834px) {
    height: 100px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  line-height: 1.43;
  color: #ffffff;

  &.active {
    color: #e3ffa8;
  }

  @media (min-width: 834px) {
    font-size: 14px;
  }
`;

export const ProfileSvg = styled.svg`
  width: 26px;
  height: 26px;
  stroke: #ffffff;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 834px) {
    gap: 72px;
  }

  @media (min-width: 1440px) {
    gap: 124px;
  }
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  background: transparent;
`;

export const MenuSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: white;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 80px;
  }
`;

export const UserInfoButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  background: transparent;
`;

export const UserName = styled.p`
  font-size: 12px;
  line-height: 1.43;
  color: #ffffff;
  margin-right: 6px;

  @media (min-width: 834px) {
    font-size: 14px;
  }
`;

export const UserSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #ffffff;
  margin-right: 4px;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
  object-fit: cover;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;
