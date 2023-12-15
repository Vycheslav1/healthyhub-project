export const BodyParameters = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      next();
    }
    console.log(errors);
  };
  return (
    <div>
      <div>
        <img />
      </div>
      <h2>Body parameters</h2>
      <p>Enter your parameters for correct performance tracking</p>
      <form>
        <label>
          Height
          <input
            type="text"
            name="height"
            value={formik.values.height}
            onChange={formik.handleChange}
            placeholder="Enter your height"
          />
        </label>
        <label>
          Weight
          <input
            type="text"
            name="weight"
            value={formik.values.weight}
            onChange={formik.handleChange}
            placeholder="Enter your weight"
          />
        </label>
        <button
          type="button"
          onClick={validateAndMoveNext}
          // disabled={!formik.isValid || !formik.dirty || !formik.touched}
        >
          Next
        </button>
        <button type="button" onClick={prev}>
          Back
        </button>
      </form>
    </div>
  );
};
