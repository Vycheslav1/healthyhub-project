import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logOut } from '../redux/auth/operations';
import { DiaryOnMain } from '../components/DiaryOnMain/DiaryOnMain';

export const MainPage = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {/* <button type="button" onClick={handleLogOut}>
        LogOut
      </button> */}
      <DiaryOnMain />
    </>
  );
};
