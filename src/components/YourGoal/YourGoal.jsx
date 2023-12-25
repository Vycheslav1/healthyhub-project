import goal from 'src/images/goals.png';
import {
  ButtonBackGoals,
  ButtonNextGoals,
  FormGoals,
  FormRadioWrapper,
  GoalContainer,
  GoalsDescription,
  GoalsWrapper,
  ImageGoals,
  InputGoal,
  Label,
  TitleGoals,
} from './YourGoalStyled';

export const YourGoal = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      next();
    }
  };
  return (
    <GoalContainer>
      <div>
        <ImageGoals src={goal} alt="Your goal" />
      </div>
      <GoalsWrapper>
        <TitleGoals>Your goal</TitleGoals>
        <GoalsDescription>
          Choose a goal so that we can help you effectively
        </GoalsDescription>
        <FormGoals onSubmit={formik.handleSubmit}>
          <FormRadioWrapper>
            <Label>
              <InputGoal
                type="radio"
                name="goal"
                value="Lose Fat"
                onChange={formik.handleChange}
                checked={formik.values.goal === 'Lose Fat'}
              />
              Lose Fat
            </Label>
            <Label>
              <InputGoal
                type="radio"
                name="goal"
                value="Maintain"
                onChange={formik.handleChange}
                checked={formik.values.goal === 'Maintain'}
              />
              Maintain
            </Label>
            <Label>
              <InputGoal
                type="radio"
                name="goal"
                value="Gain Muscle"
                onChange={formik.handleChange}
                checked={formik.values.goal === 'Gain Muscle'}
              />
              Gain Muscle
            </Label>
          </FormRadioWrapper>
          <ButtonNextGoals
            style={{
              boxShadow:
                !formik.isValid || !formik.values.goal
                  ? 'none'
                  : '0px 0px 5px #e3ffa8',
            }}
            type="button"
            onClick={validateAndMoveNext}
            disabled={!formik.isValid || !formik.values.goal}
          >
            Next
          </ButtonNextGoals>
          <ButtonBackGoals type="button" onClick={prev}>
            Back
          </ButtonBackGoals>
        </FormGoals>
      </GoalsWrapper>
    </GoalContainer>
  );
};
