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
} from './BodyParametersStyled';
import parameters from 'src/images/parameters.png';

export const BodyParameters = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      next();
    }
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
        <BodyParametersForm autoComplete="off">
          <BodyParametersWrapperLabel>
            <BodyParametersLabel>
              Height
              <BodyParametersInput
                type="number"
                name="height"
                value={formik.values.height}
                onChange={formik.handleChange}
                placeholder="Enter your height"
                style={{
                  border:
                    formik.values.height === '' && !formik.touched.height
                      ? '1px solid #e3ffa8'
                      : '1px solid #3CBC81',
                }}
              />
            </BodyParametersLabel>
            <BodyParametersLabel>
              Weight
              <BodyParametersInput
                type="number"
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                placeholder="Enter your weight"
                style={{
                  border:
                    formik.values.weight === '' && !formik.touched.weight
                      ? '1px solid #e3ffa8'
                      : '1px solid #3CBC81',
                }}
              />
            </BodyParametersLabel>
          </BodyParametersWrapperLabel>
          <BodyParametersButtonNext
            style={{
              backgroundColor:
                !formik.isValid ||
                !formik.values.height ||
                !formik.values.weight ||
                !formik.dirty
                  ? 'lightgray'
                  : '#e3ffa8',
            }}
            type="button"
            onClick={validateAndMoveNext}
            // disabled={!formik.isValid || !formik.dirty || !formik.touched}
            // disabled={
            //   !formik.isValid || !formik.values.height || !formik.values.weight
            // }
            disabled={
              !formik.isValid ||
              !formik.values.height ||
              !formik.values.weight ||
              !formik.dirty
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
