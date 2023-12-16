export const YourActivity = ({ formik, prev }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div>
      <div>
        <img />
      </div>
      <h2>Your Activity</h2>
      <p>To correctly calculate calorie and water intake</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.2 - if you do not have physical activity and sedentary work"
            onChange={formik.handleChange}
            checked={
              formik.values.activity ===
              '1.2 - if you do not have physical activity and sedentary work'
            }
          />
          1.2 - if you do not have physical activity and sedentary work
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.375 - if you do short runs or light gymnastics 1-3 times a week"
            onChange={formik.handleChange}
            checked={
              formik.values.activity ===
              '1.375 - if you do short runs or light gymnastics 1-3 times a week'
            }
          />
          1.375 - if you do short runs or light gymnastics 1-3 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.55 - if you play sports with average loads 3-5 times a week"
            onChange={formik.handleChange}
            checked={
              formik.values.activity ===
              '1.55 - if you play sports with average loads 3-5 times a week'
            }
          />
          1.55 - if you play sports with average loads 3-5 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.725 ​​- if you train fully 6-7 times a week"
            onChange={formik.handleChange}
            checked={
              formik.values.activity ===
              '1.725 ​​- if you train fully 6-7 times a week'
            }
          />
          1.725 ​- if you train fully 6-7 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.9 - if your work is related to physical labor, you train 2 times a
          day and include strength exercises in your training program"
            onChange={formik.handleChange}
            checked={
              formik.values.activity ===
              '1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program'
            }
          />
          1.9 - if your work is related to physical labor, you train 2 times a
          day and include strength exercises in your training program
        </label>
        {formik.errors.goal && <div>{formik.errors.goal}</div>}
        <button
          type="submit"
          // disabled={!formik.isValid || !formik.values.activity}
        >
          Sing up
        </button>
        <button type="button" onClick={prev}>
          Back
        </button>
      </form>
    </div>
  );
};
