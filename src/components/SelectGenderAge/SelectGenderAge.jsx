import gender from '../../Images/gender.png';
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
        <GenderImage src={gender} alt="Select gender, Age" />
      </div>
      <GenresWrapper>
        <GenresTitle>Select gender, Age</GenresTitle>
        <GenderDescription>
          Choose a goal so that we can help you effectively
        </GenderDescription>
        <FormGenres>
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
            type="button"
            // disabled={!formik.isValid || !formik.values.gender}
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
