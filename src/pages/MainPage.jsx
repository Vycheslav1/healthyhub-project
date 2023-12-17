import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logOut } from '../redux/auth/operations';

export const MainPage = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <h1>WELCOM TO YOUR DAIRY</h1>
      {name ? (
        <>
          <p> Your dairy: {name}</p>
          <button type="button" onClick={handleLogOut}>
            LogOut
          </button>
        </>
      ) : (
        <>
          <p>Email: tanya20@gmail.com</p>
          <p>Password: tanya2020</p>
        </>
      )}
    </>
  );
};
