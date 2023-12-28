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
import avatar from 'src/images/avatar.png';
import { updateUser } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

export const SettingForm = () => {
  const user = useSelector(selectUser);
  // console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: user.username || '',
      gender: user.gender || '',
      age: user.age || '',
      height: user.height || '',
      weight: user.weight || '',
      // activity: user.activity || '',
      activity: parseFloat(user.activity) || 0,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(2, 'Too short').required('Name is required'),
      gender: Yup.string().required('Please select your gender'),
      age: Yup.number().required('Required'),
      height: Yup.number().min(
        130,
        'Height must be greater than or equal to 130'
      ),
      weight: Yup.number().min(
        40,
        'Weight must be greater than or equal to 40'
      ),
      activity: Yup.number().required('Please select your activity'),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      dispatch(
        updateUser({
          username: values.username,
          gender: values.gender,
          age: values.age,
          height: values.height,
          weight: values.weight,
          activity: values.activity,
        }),
        Notiflix.Notify.success('Your data has been successfully updated!')
        // navigate('/main')
      );
    },
  });

  const handleCancel = () => {
    formik.resetForm();
  };

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
            {formik.errors.username && (
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
              type="number"
              name="age"
              placeholder="Enter your age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age && (
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
              type="number"
              name="height"
              value={formik.values.height}
              onChange={formik.handleChange}
              placeholder="Enter your height"
            />
            {formik.errors.height && (
              <ErrorsMessage>{formik.errors.height}</ErrorsMessage>
            )}
          </LabelSettings>
          <LabelSettings>
            Weight
            <InputSettings
              type="number"
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              placeholder="Enter your weight"
            />
            {formik.errors.weight && (
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
                // value={1.2}
                onChange={formik.handleChange}
                checked={formik.values.activity === '1.2'}
                // checked={formik.values.activity === 1.2}
              />
              1.2 - if you do not have physical activity and sedentary work
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.375"
                // value={1.375}
                onChange={formik.handleChange}
                checked={formik.values.activity === '1.375'}
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.55 "
                // value={1.55}
                onChange={formik.handleChange}
                checked={formik.values.activity === '1.55'}
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.725"
                // value={1.725}
                onChange={formik.handleChange}
                checked={formik.values.activity === '1.725'}
              />
              1.725 - if you train fully 6-7 times a week
            </LabelSettingsRadio>
            <LabelSettingsRadio>
              <InputActivity
                type="radio"
                name="activity"
                value="1.9"
                // value={1.9}
                onChange={formik.handleChange}
                checked={formik.values.activity === '1.9'}
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </LabelSettingsRadio>
          </WrapperActivity>
        </div>
        <ButtonWrapper>
          <ButtonSave type="submit">Save</ButtonSave>
          <ButtonCancel onClick={handleCancel} type="button">
            Cancel
          </ButtonCancel>
        </ButtonWrapper>
      </FormWrapper>
    </SettingsFormWrapper>
  );
};
