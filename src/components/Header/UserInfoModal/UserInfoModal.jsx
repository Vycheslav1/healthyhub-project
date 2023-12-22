import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { logOutThunk } from '/src/redux/auth/operations.js';
import { clearWaterIntake } from '/src/redux/dailyWater/slice.js';
import { clearDailyCalories } from '/src/redux/dialyGoalCalories/slice.js';
import { clearDiary } from '/src/redux/diary/slice.js';
import { clearStatistic } from '/src/redux/statistic/slice.js';

import {
  Overlay,
  UserLayout,
  UserContainer,
  UserButton,
  Svg,
  CancelButton,
} from './UserInfoModal.styled';
import sprite from 'src/components/Header/images-for-header/icons.svg';

export default function UserInfoModal({ onClose }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSettings = () => {
    navigate('/settings');
    onClose();
  };

  const onShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const onLogout = async () => {
    await dispatch(logOutThunk());

    dispatch(clearWaterIntake());
    dispatch(clearDailyCalories());
    dispatch(clearDiary());
    dispatch(clearStatistic());

    onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <UserLayout>
        <UserContainer>
          {showConfirmation ? (
            <>
              <UserButton type="button" onClick={onLogout}>
                <Svg>
                  <use href={sprite + '#icon-logout'} />
                </Svg>
                Log out
              </UserButton>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
            </>
          ) : (
            <>
              <UserButton type="button" onClick={handleSettings}>
                <Svg>
                  <use href={sprite + '#icon-setting-2'} />
                </Svg>
                Setting
              </UserButton>
              <UserButton type="button" onClick={onShowConfirmation}>
                <Svg>
                  <use href={sprite + '#icon-logout'} />
                </Svg>
                Log out
              </UserButton>
            </>
          )}
        </UserContainer>
      </UserLayout>
    </Overlay>
  );
}
