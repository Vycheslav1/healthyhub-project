import { useDispatch } from 'react-redux';
// import { selectUser } from '../redux/auth/selectors';
import { logOut } from '../redux/auth/operations';
import { AddWaterModal } from '../components/ModalAddWater/ModalAddWater';

export const MainPage = () => {
  // const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
      <AddWaterModal/>
    </>
  );
};
