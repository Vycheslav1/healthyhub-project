import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';

export const Dairy = () => {
  const { name, email } = useSelector(selectUser);
  // console.log(user);
  return (
    <>
      <h1>WELCOM TO YOUR DAIRY</h1>
      {name ? (
        <p> Your dairy: {name}</p>
      ) : (
        <>
          <p>Email: tanya20@gmail.com</p>
          <p>Password: tanya2020</p>
        </>
      )}
    </>
  );
};
