import one from 'src/images/one.png';

import {
  AuthContainer,
  ButtonWrapper,
  Description,
  ImageOne,
  Item,
  ListItems,
  SignIn,
  SignUp,
  TextWrapper,
  TitleOne,
} from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <ImageOne src={one} alt="Sport and fitness tracker" />
      <TextWrapper>
        <TitleOne>Set goals and achieve them</TitleOne>
        <Description>
          The service will help you set goals and follow them.
        </Description>
        <ButtonWrapper>
          <SignIn to={'/signin'}>Sing in</SignIn>
          <SignUp to={'/signup'}>Sing up</SignUp>
        </ButtonWrapper>
        <ListItems>
          <Item>Set goals</Item>
          <Item>Watch your calories</Item>
          <Item>Keep track of your water intake</Item>
          <Item>Control your weight</Item>
        </ListItems>
      </TextWrapper>
    </AuthContainer>
  );
};
