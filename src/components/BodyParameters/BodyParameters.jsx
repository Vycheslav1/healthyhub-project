//import parameters from '../../images/parameters.png';
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
} from './BodyParameters_styled';

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
        <ImageBodyParameters
          src={'images/parameters.png'}
          alt="Body parameters"
        />
      </div>
      <BodyParametersWrapper>
        <BodyParametersTitle>Body parameters</BodyParametersTitle>
        <BodyParametersDescr>
          Enter your parameters for correct performance tracking
        </BodyParametersDescr>
        <BodyParametersForm autoComplete="off">
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
            style={{
              boxShadow:
                !formik.isValid ||
                !formik.values.height ||
                !formik.values.weight
                  ? 'none'
                  : '0px 0px 5px #e3ffa8',
            }}
            type="button"
            onClick={validateAndMoveNext}
            disabled={
              !formik.isValid || !formik.values.height || !formik.values.weight
            }
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
