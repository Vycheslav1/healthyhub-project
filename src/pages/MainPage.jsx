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
      <h1 style={{ color: 'white' }}>WELCOM TO YOUR DAIRY</h1>
      {name ? (
        <>
          <p style={{ color: 'white' }}> Your dairy: {name}</p>
          <button type="button" onClick={handleLogOut}>
            LogOut
          </button>
        </>
      ) : (
        <>
          <p style={{ color: 'white' }}>Email: tanya30@gmail.com</p>
          <p style={{ color: 'white' }}>Password: Tanya3030</p>
        </>
      )}
    </>
  );
};
