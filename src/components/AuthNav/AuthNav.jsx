//import one from '../../images/one.png';

import {
  AuthContainer,
  ButtonWrapper,
  Description,
  ImageOne,
  ImageWrapper,
  Item,
  ListItems,
  SignIn,
  SignUp,
  TextWrapper,
  TitleOne,
} from './AuthNav_styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <ImageWrapper>
        <ImageOne
          src={'/healthyhub-project/src/images/one.png'}
          alt="Sport and fitness tracker"
        />
      </ImageWrapper>
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
