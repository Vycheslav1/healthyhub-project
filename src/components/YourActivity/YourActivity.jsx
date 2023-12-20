import activity from 'src/images/activity.png';
import {
  ActivityButtonBack,
  ActivityButtonSignUp,
  ActivityContainer,
  ActivityDescription,
  ActivityForm,
  ActivityImage,
  ActivityInput,
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
            <label>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.2 - if you do not have physical activity and sedentary work"
                onChange={formik.handleChange}
                // checked={
                //   formik.values.activity ===
                //   '1.2 - if you do not have physical activity and sedentary work'
                // }
              />
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.375 - if you do short runs or light gymnastics 1-3 times a week"
                onChange={formik.handleChange}
                // checked={
                //   formik.values.activity ===
                //   '1.375 - if you do short runs or light gymnastics 1-3 times a week'
                // }
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <label>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.55 - if you play sports with average loads 3-5 times a week"
                onChange={formik.handleChange}
                // checked={
                //   formik.values.activity ===
                //   '1.55 - if you play sports with average loads 3-5 times a week'
                // }
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <label>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.725 ​​- if you train fully 6-7 times a week"
                onChange={formik.handleChange}
                // checked={
                //   formik.values.activity ===
                //   '1.725 ​​- if you train fully 6-7 times a week'
                // }
              />
              1.725 ​- if you train fully 6-7 times a week
            </label>
            <label>
              <ActivityInput
                type="radio"
                name="activity"
                value="1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program"
                onChange={formik.handleChange}
                // checked={
                //   formik.values.activity ===
                //   '1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program'
                // }
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
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
            // disabled={!formik.isValid || !formik.values.activity}
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
