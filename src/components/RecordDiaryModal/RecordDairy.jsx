import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { postFoodIntake } from '../../redux/diary/operations';

import {
  RecordModalOverl,
  RecordModalDiv,
  RecordNameField,
  RecordField,
  RecordTitle,
  RecordFormDiv,
  RecordSubtitle,
  RecordSubtitleContainer,
  RecordButtonSubmit,
  RecordButtonStyle,
  RecordButtonContainer,
} from './RecordDiaryModal.styled';

import breakfastImg from '../../images/svg/breakfastImg.svg';
import lunchImg from '../../images/svg/lunchImg.svg';
import dinnerImg from '../../images/svg/dinnerImg.svg';
import snackImg from '../../images/svg/snackImg.svg';

const RecordDiaryModal = ({ onClose, type }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fields: [
      {
        ident: '1',
        name: '',
        carbonohidrates: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
  });

  const handleAddMore = (e) => {
    e.preventDefault();

    if (formData.fields[formData.fields.length - 1].name === '') {
      return;
    }

    setFormData({
      fields: [
        ...formData.fields,
        {
          ident: Date.now(),
          name: '',
          carbonohidrates: null,
          protein: null,
          fat: null,
          calories: null,
        },
      ],
    });
  };

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

  const handleChange = (ident, fieldId, newValue) => {
    const updatedFields = formData.fields.map((field) =>
      field.ident === ident ? { ...field, [fieldId]: newValue } : field
    );
    setFormData({ fields: updatedFields });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postFoodIntake({ type, products: formData.fields }));
    onClose();
  };

  return (
    <RecordModalOverl onClick={handleOverlayClick}>
      <RecordModalDiv>
        <RecordTitle>Record your meal</RecordTitle>
        {type === 'breakfast' && (
          <RecordSubtitleContainer>
            <img src={breakfastImg} alt="breakfast" width="32" height="32" />
            <RecordSubtitle>Breakfast</RecordSubtitle>
          </RecordSubtitleContainer>
        )}
        {type === 'lunch' && (
          <RecordSubtitleContainer>
            <img src={lunchImg} alt="lunch" width="32" height="32" />
            <RecordSubtitle>Lunch</RecordSubtitle>
          </RecordSubtitleContainer>
        )}
        {type === 'dinner' && (
          <RecordSubtitleContainer>
            <img src={dinnerImg} alt="dinner" width="32" height="32" />
            <RecordSubtitle>Dinner</RecordSubtitle>
          </RecordSubtitleContainer>
        )}
        {type === 'snack' && (
          <RecordSubtitleContainer>
            <img src={snackImg} alt="snack" width="32" height="32" />
            <RecordSubtitle>Snack</RecordSubtitle>
          </RecordSubtitleContainer>
        )}
        <form onSubmit={handleSubmit}>
          {formData.fields.map((field) => (
            <RecordFormDiv key={field.ident}>
              <RecordNameField
                id="name"
                type="string"
                required={true}
                value={field.name || ''}
                onChange={(e) =>
                  handleChange(field.ident, 'name', e.target.value)
                }
                placeholder="The name of the product or dish"
              />
              <RecordField
                id="carbonohidrates"
                type="number"
                min={0}
                required={true}
                value={field.carbonohidrates || ''}
                onChange={(e) =>
                  handleChange(field.ident, 'carbonohidrates', e.target.value)
                }
                placeholder="Carbonoh."
              />
              <RecordField
                id="protein"
                type="number"
                min={0}
                required={true}
                value={field.protein || ''}
                onChange={(e) =>
                  handleChange(field.ident, 'protein', e.target.value)
                }
                placeholder="Protein"
              />
              <RecordField
                id="fat"
                type="number"
                min={0}
                required={true}
                value={field.fat || ''}
                onChange={(e) =>
                  handleChange(field.ident, 'fat', e.target.value)
                }
                placeholder="Fat"
              />
              <RecordField
                id="calories"
                type="number"
                min={0}
                required={true}
                value={field.calories || ''}
                onChange={(e) =>
                  handleChange(field.ident, 'calories', e.target.value)
                }
                placeholder="Calories"
              />
            </RecordFormDiv>
          ))}

          <RecordButtonStyle onClick={handleAddMore}>
            + Add more
          </RecordButtonStyle>
          <RecordButtonContainer>
            <RecordButtonSubmit
              onClick={onClose}
              style={{
                background: 'transparent',
                color: 'rgba(182, 182, 182, 1)',
              }}
            >
              Cancel
            </RecordButtonSubmit>
            <RecordButtonSubmit type="submit">Confirm</RecordButtonSubmit>
          </RecordButtonContainer>
        </form>
      </RecordModalDiv>
    </RecordModalOverl>
  );
};

export default RecordDiaryModal;
