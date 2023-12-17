import parameters from '../../Images/parameters.png';
import {
  BodyParametersContainer,
  BodyParametersTitle,
  BodyParametersWrapper,
  ImageBodyParameters,
  BodyParametersDescr,
  BodyParametersForm,
  BodyParametersLabel,
  BodyParametersWrapperLabel,
  BodyParametersInput,
  BodyParametersButtonNext,
  BodyParametersButtonBack,
} from './BodyParameters.styled';

export const BodyParameters = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      next();
    }
    console.log(errors);
  };
  return (
    <BodyParametersContainer>
      <div>
        <ImageBodyParameters src={parameters} alt="Body parameters" />
      </div>
      <BodyParametersWrapper>
        <BodyParametersTitle>Body parameters</BodyParametersTitle>
        <BodyParametersDescr>
          Enter your parameters for correct performance tracking
        </BodyParametersDescr>
        <BodyParametersForm>
          <BodyParametersWrapperLabel>
            <BodyParametersLabel>
              Height
              <BodyParametersInput
                type="text"
                name="height"
                value={formik.values.height}
                onChange={formik.handleChange}
                placeholder="Enter your height"
              />
            </BodyParametersLabel>
            <BodyParametersLabel>
              Weight
              <BodyParametersInput
                type="text"
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                placeholder="Enter your weight"
              />
            </BodyParametersLabel>
          </BodyParametersWrapperLabel>
          <BodyParametersButtonNext
            type="button"
            onClick={validateAndMoveNext}
            // disabled={!formik.isValid || !formik.dirty || !formik.touched}
          >
            Next
          </BodyParametersButtonNext>
          <BodyParametersButtonBack type="button" onClick={prev}>
            Back
          </BodyParametersButtonBack>
        </BodyParametersForm>
      </BodyParametersWrapper>
    </BodyParametersContainer>
  );
};
