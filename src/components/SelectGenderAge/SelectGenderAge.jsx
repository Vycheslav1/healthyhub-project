//import gender from '../../images/gender.png';
import {
  AgeInput,
  AgeLabel,
  ButtonGenderBack,
  ButtonGenderNext,
  FormGenres,
  GenderContainer,
  GenderDescription,
  GenderImage,
  GenderRadioWrapper,
  GenresText,
  GenresTitle,
  GenresWrapper,
  InputGenres,
  Label,
} from './SelectGenderAge.styled';

export const SelectGenderAge = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      next();
    }
    console.log(errors);
  };
  return (
    <GenderContainer>
      <div>
        <GenderImage src={'images/gender.png'} alt="Select gender, Age" />
      </div>
      <GenresWrapper>
        <GenresTitle>Select gender, Age</GenresTitle>
        <GenderDescription>
          Choose a goal so that we can help you effectively
        </GenderDescription>
        <FormGenres autoComplete="off">
          <GenresText>Gender</GenresText>
          <GenderRadioWrapper>
            <Label>
              <InputGenres
                type="radio"
                name="gender"
                value="Male"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'Male'}
              />
              Male
            </Label>
            <Label>
              <InputGenres
                type="radio"
                name="gender"
                value="Female"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'Female'}
              />
              Female
            </Label>
          </GenderRadioWrapper>
          <AgeLabel>
            Your age
            <AgeInput
              type="text"
              name="age"
              placeholder="Enter your age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </AgeLabel>
          <ButtonGenderNext
            style={{
              boxShadow:
                !formik.isValid || !formik.values.gender
                  ? 'none'
                  : '0px 0px 5px #e3ffa8',
            }}
            type="button"
            disabled={!formik.isValid || !formik.values.gender}
            onClick={validateAndMoveNext}
            // onClick={next}
          >
            Next
          </ButtonGenderNext>
          <ButtonGenderBack type="button" onClick={prev}>
            Back
          </ButtonGenderBack>
        </FormGenres>
      </GenresWrapper>
    </GenderContainer>
  );
};
