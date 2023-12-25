// import { useSelector } from 'react-redux';

// import { getUserInfo } from '../../redux/auth/selectors';

// import UserInfoModal from '../../components/Header/UserInfoModal/UserInfoModal';
// import {
//   SettingContainer,
//   Container,
//   Title,
//   StyledImg,
// } from './SettingsPage.styled';

// import ProfileSettingPhoto from '../../components/Header/images-for-header/interactive-learning-experience.png';
// import ProfileSettingPhoto2x from '../../components/Header/images-for-header/interactive-learning-experience-2x.png';

// export const SettingPage = () => {
//   const user = useSelector(getUserInfo);

//   return (
//     <SettingContainer>
//       <Title>Profile setting</Title>
//       <Container>
//         <StyledImg
//           srcSet={`${ProfileSettingPhoto} 1x, ${ProfileSettingPhoto2x} 2x`}
//           src={ProfileSettingPhoto}
//           alt="Profile Setting Photo"
//         />
// <UserInfoModal user={user} />
//       </Container>
//     </SettingContainer>
//   );
// };
import { SettingForm } from '../../components/SettingForm/SettingForm';

export const SettingPage = () => {
  return <SettingForm />;
};
