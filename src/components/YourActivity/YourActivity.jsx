import activity from 'src/images/activity.png';
import {
  ActivityButtonBack,
  ActivityButtonSignUp,
  ActivityContainer,
  ActivityDescription,
  ActivityForm,
  ActivityImage,
  ActivityInput,
  ActivityLabel,
  ActivityLabelWrapper,
  ActivityTitle,
  ActivityWrapper,
} from './YourActivityStyled';

export const YourActivity = ({ formik, prev }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <ActivityContainer>
      <div>
        <ActivityImage src={activity} alt="Your Activity" />
      </div>
      <ActivityWrapper>
        <ActivityTitle>Your Activity</ActivityTitle>
        <ActivityDescription>
          To correctly calculate calorie and water intake
        </ActivityDescription>
        <ActivityForm onSubmit={handleSubmit}>
          <ActivityLabelWrapper>
            <ActivityLabel>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.2"
                onChange={formik.handleChange}
              />
              1.2 - if you do not have physical activity and sedentary work
            </ActivityLabel>
            <ActivityLabel>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.375"
                onChange={formik.handleChange}
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </ActivityLabel>
            <ActivityLabel>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.55 "
                onChange={formik.handleChange}
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </ActivityLabel>
            <ActivityLabel>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.725"
                onChange={formik.handleChange}
              />
              1.725 - if you train fully 6-7 times a week
            </ActivityLabel>
            <ActivityLabel>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.9"
                onChange={formik.handleChange}
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </ActivityLabel>
            {formik.errors.goal && <div>{formik.errors.goal}</div>}
          </ActivityLabelWrapper>
          <ActivityButtonSignUp
            style={{
              boxShadow:
                !formik.isValid || !formik.values.activity
                  ? 'none'
                  : '0px 0px 5px #e3ffa8',
            }}
            type="submit"
          >
            Sing up
          </ActivityButtonSignUp>
          <ActivityButtonBack type="button" onClick={prev}>
            Back
          </ActivityButtonBack>
        </ActivityForm>
      </ActivityWrapper>
    </ActivityContainer>
  );
};
