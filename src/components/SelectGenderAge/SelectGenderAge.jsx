export const SelectGenderAge = ({ formik, next, prev }) => {
  const validateAndMoveNext = async () => {
    const errors = await formik.validateForm(); // Виконати валідацію всіх полів форми

    if (Object.keys(errors).length === 0) {
      // Якщо помилок немає, переходимо на наступну сторінку
      next();
    }
    console.log(errors);
    // Якщо є помилки валідації, formik автоматично відображає їх
  };
  return (
    <div>
      <div>
        <img />
      </div>
      <h2>Select gender, Age</h2>
      <p>Choose a goal so that we can help you effectively</p>
      <form>
        <p>Gender</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
            checked={formik.values.gender === 'Male'}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
            checked={formik.values.gender === 'Female'}
          />
          Female
        </label>
        <label>
          <input
            type="text"
            name="age"
            placeholder="Enter your age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          Your age
        </label>
        <button
          type="button"
          // disabled={!formik.isValid || !formik.values.gender}
          onClick={validateAndMoveNext}
          // onClick={next}
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
