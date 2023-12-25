import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useSelector } from 'react-redux';
// import { getUserInfo } from '../../redux/auth/selectors';
// import UserInfoModal from '../../components/Header/UserInfoModal/UserInfoModal';
import {
  FormWrapper,
  ImageWrapper,
  LabelSettings,
  SettingsFormWrapper,
  TitleSettings,
  LabelSettingsRadio,
  LabelSettingsGender,
  InputSettings,
  WrapperOne,
  WrapperTwo,
  WrapperBody,
  WrapperActivity,
  DownloadWrapper,
  InputActivity,
  ButtonSave,
  ButtonCancel,
  ButtonWrapper,
  AvatarImage,
  PhotoWrapper,
  Text,
  WrapperGenres,
  TextActivity,
  TitleImage,
  TextLabel,
  ErrorsMessage,
} from './SettingFormStyled';
import settings from 'src/images/settings.png';
import inbox from 'src/images/svg/inbox.svg';
import avatar from 'src/images/svg/avatar.svg';

export const SettingForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(2, 'Too short').required('Name is required'),
      gender: Yup.string().required('Please select your gender'),
      age: Yup.string().required('Required'),
      height: Yup.string().required('Required'),
      weight: Yup.string().required('Required'),
      activity: Yup.string().required('Please select your activity'),
    }),

    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(values);
      // dispatch(
      // );
    },
  });

  return (
    <SettingsFormWrapper>
      <ImageWrapper>
        <TitleSettings>Profile setting</TitleSettings>
        <TitleImage src={settings} alt="" />
      </ImageWrapper>
      <FormWrapper autoComplete="off" onSubmit={formik.handleSubmit}>
        <WrapperOne>
          <LabelSettings>
            Your name
            <InputSettings
              id="username"
              name="username"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username && (
              <ErrorsMessage>{formik.errors.username}</ErrorsMessage>
            )}
          </LabelSettings>

          <div>
            <TextLabel>Your photo</TextLabel>
            <DownloadWrapper>
              <AvatarImage src={avatar} alt="photo" width={36} height={36} />
              <PhotoWrapper>
                <img src={inbox} alt="inbox" width={16} height={16} />
                <Text>Download new photo</Text>
              </PhotoWrapper>
            </DownloadWrapper>
          </div>
        </WrapperOne>
        <WrapperTwo>
          <LabelSettings>
            Your age
            <InputSettings
              type="text"
              name="age"
              placeholder="Enter your age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
            {formik.errors.age && formik.touched.age && (
              <ErrorsMessage>{formik.errors.age}</ErrorsMessage>
            )}
          </LabelSettings>
          <div>
            <TextLabel>Gender</TextLabel>
            <WrapperGenres>
              <LabelSettingsGender>
                <InputActivity
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'Male'}
                />
                Male
              </LabelSettingsGender>
              <LabelSettingsGender>
                <InputActivity
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'Female'}
                />
                Female
              </LabelSettingsGender>
            </WrapperGenres>
          </div>
        </WrapperTwo>
        <WrapperBody>
          <LabelSettings>
            Height
            <InputSettings
              type="text"
              name="height"
              value={formik.values.height}
              onChange={formik.handleChange}
              placeholder="Enter your height"
            />
            {formik.errors.height && formik.touched.height && (
              <ErrorsMessage>{formik.errors.height}</ErrorsMessage>
            )}
          </LabelSettings>
          <LabelSettings>
            Weight
            <InputSettings
              type="text"
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              placeholder="Enter your weight"
            />
            {formik.errors.weight && formik.touched.weight && (
              <ErrorsMessage>{formik.errors.weight}</ErrorsMessage>
            )}
          </LabelSettings>
        </WrapperBody>
        <div>
          <TextActivity>Your activity</TextActivity>
          <WrapperActivity>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.2"
                onChange={formik.handleChange}
              />
              1.2 - if you do not have physical activity and sedentary work
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.375"
                onChange={formik.handleChange}
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.55 "
                onChange={formik.handleChange}
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.725"
                onChange={formik.handleChange}
              />
              1.725 - if you train fully 6-7 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.9"
                onChange={formik.handleChange}
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </LabelSettingsRadio>
          </WrapperActivity>
        </div>
        <ButtonWrapper>
          <ButtonSave type="submit">Save</ButtonSave>
          <ButtonCancel to={'/'}>Cancel</ButtonCancel>
        </ButtonWrapper>
      </FormWrapper>
    </SettingsFormWrapper>
  );
};
