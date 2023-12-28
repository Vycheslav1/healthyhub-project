import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFoodIntake } from 'src/redux/diary/selectors';
import { fetchFoodIntake } from 'src/redux/diary/operations';
import { RecordDiaryModal } from 'components/RecordDiaryModal/RecordDiaryModal';
import breakfest from 'src/images/svg/breakfest.svg';
import lunch from 'src/images/svg/LunchImage.svg';
import dinner from 'src/images/svg/DinnerImage.svg';
import snack from 'src/images/svg/SnackImage.svg';
import { nanoid } from 'nanoid';

import {
  Div,
  Title,
  SvgArrow,
  SpanTitle,
  Table,
  TableHead,
  TableHeadRow,
  Img,
  TableHeadDataEvent,
  TableHeadDataCarbonohidrates,
  TableHeadDataProtein,
  TableHeadDataFat,
  TableHeadDataEdit,
  TableBody,
  TableBodyRow,
  TableBodyDataNumber,
  TableBodyDataFood,
  TableBodyDataCarbohidrates,
  TableBodyDataProtein,
  TableBodyDataFat,
  TableBodyDataEdit,
  EventName,
  TablesList,
  Li,
  Diary,
  SvgEdit,
  SpanEdit,
  SpanAdd,
} from './DiaryPageStyled';

import sprite from 'src/images/sprite/icons1.svg';

const pictures = [breakfest, lunch, dinner, snack];

let indice = [1, 2, 3, 4];

export const DiaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodIntake);
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
  });

  const [formData, setFormData] = useState({
    breakfast: {
      name: '',
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
    lunch: {
      name: '',
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
    dinner: {
      name: '',
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
    snack: {
      name: '',
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
  });

  const openModal = (mealType) => {
    setIsModalOpen({ ...isModalOpen, [mealType]: true });
  };

  const handleFormChange = (mealType, fieldId, value) => {
    setFormData({
      ...formData,
      [mealType]: {
        ...formData[mealType],
        [fieldId]: value,
      },
    });
  };

  const handleSubmit = (mealType) => {
    // console.log(`Data for ${mealType}:`, formData[mealType]);
    setIsModalOpen({ ...isModalOpen, [mealType]: false });
  };

  const location = useLocation();

  const backLinkDiary = location.state?.from ?? `/main`;

  //const foodIntake = useSelector(getFoodIntake);
  const foodIntake = {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  };

  const dishes = Object.values(foodIntake);

  const meal = Object.keys(foodIntake);
  meal.forEach((word, index) => {
    meal[index] = word.replace(word[0], word[0].toUpperCase());
  });
  console.log(meal);
  const nutritionIndice = [];

  dishes.forEach((dish) => {
    const carbo = [];
    const prot = [];
    const fat = [];
    if (dish.length !== 0) {
      dish.forEach((item) => {
        carbo.push(item.nutrition.carbohidrates);
        prot.push(item.nutrition.protein);
        fat.push(item.nutrition.fat);

        let carboAmount = carbo.reduce((prevValue, amount) => {
          return prevValue + amount;
        }, 0);

        let protAmount = prot.reduce((prevValue, amount) => {
          return prevValue + amount;
        }, 0);

        let fatAmount = fat.reduce((prevValue, amount) => {
          return prevValue + amount;
        }, 0);

        const elementId = nanoid();
        const element = {
          id: elementId,
          carbohidrates: carboAmount,
          protein: protAmount,
          fat: fatAmount,
        };
        nutritionIndice.push(element);
      });
    } else {
      const elementId = nanoid();
      const element = {
        id: elementId,
        carbohidrates: 0,
        protein: 0,
        fat: 0,
      };
      nutritionIndice.push(element);
    }
  });

  //const Modal = () => {
  //  setShowModal(true);
  //};
  return (
    <Div>
      <Title>
        <Diary to={backLinkDiary}>
          <SvgArrow>
            <use href={sprite + '#icon-arrow-right'}></use>
          </SvgArrow>
        </Diary>
        <SpanTitle>Diary</SpanTitle>
      </Title>
      <TablesList>
        {meal.map((item, index) => (
          <Li>
            <Table>
              <TableHead>
                <TableHeadRow>
                  <TableHeadDataEvent>
                    <Img src={pictures[index]} alt={item} />
                    <EventName>{item}</EventName>
                  </TableHeadDataEvent>
                  <TableHeadDataCarbonohidrates>
                    Carbonohidrates:{nutritionIndice[index].carbohidrates}
                  </TableHeadDataCarbonohidrates>
                  <TableHeadDataProtein>
                    Protein:{nutritionIndice[index].protein}
                  </TableHeadDataProtein>
                  <TableHeadDataFat>
                    Fat:{nutritionIndice[index].fat}
                  </TableHeadDataFat>
                  <TableHeadDataEdit></TableHeadDataEdit>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                {indice.map((row) =>
                  dishes[index].length !== 0 && row <= dishes[index].length ? (
                    <TableBodyRow>
                      <TableBodyDataNumber>{row}</TableBodyDataNumber>
                      <TableBodyDataFood>
                        {dishes[index][row - 1].name}
                      </TableBodyDataFood>
                      <TableBodyDataCarbohidrates>
                        {dishes[index][row - 1].nutrition.carbohidrates}
                      </TableBodyDataCarbohidrates>
                      <TableBodyDataProtein>
                        {dishes[index][row - 1].nutrition.protein}
                      </TableBodyDataProtein>
                      <TableBodyDataFat>
                        {dishes[index][row - 1].nutrition.fat}
                      </TableBodyDataFat>
                      <TableBodyDataEdit>
                        <SvgEdit>
                          <use href={sprite + '#icon-edit-2'}></use>
                        </SvgEdit>
                        <SpanEdit onClick={() => openModal(item.toLowerCase())}>
                          Edit
                        </SpanEdit>
                      </TableBodyDataEdit>
                    </TableBodyRow>
                  ) : (
                    <TableBodyRow>
                      <TableBodyDataNumber>{row}</TableBodyDataNumber>
                      {row === dishes[index].length + 1 ? (
                        <TableBodyDataFood>
                          <SpanAdd
                            onClick={() => openModal(item.toLowerCase())}
                          >
                            + Record your meal
                          </SpanAdd>
                        </TableBodyDataFood>
                      ) : (
                        <TableBodyDataFood></TableBodyDataFood>
                      )}
                      <TableBodyDataCarbohidrates></TableBodyDataCarbohidrates>
                      <TableBodyDataProtein></TableBodyDataProtein>
                      <TableBodyDataFat></TableBodyDataFat>
                    </TableBodyRow>
                  )
                )}
              </TableBody>
            </Table>
          </Li>
        ))}
      </TablesList>
      {isModalOpen.breakfast && (
        <RecordDiaryModal
          onClose={() => setIsModalOpen({ ...isModalOpen, breakfast: false })}
          type="breakfast"
          formData={formData.breakfast}
          onChange={(fieldId, value) =>
            handleFormChange('breakfast', fieldId, value)
          }
          onSubmit={() => handleSubmit('breakfast')}
        />
      )}

      {isModalOpen.lunch && (
        <RecordDiaryModal
          onClose={() => setIsModalOpen({ ...isModalOpen, lunch: false })}
          type="lunch"
          formData={formData.lunch}
          onChange={(fieldId, value) =>
            handleFormChange('lunch', fieldId, value)
          }
          onSubmit={() => handleSubmit('lunch')}
        />
      )}

      {isModalOpen.dinner && (
        <RecordDiaryModal
          onClose={() => setIsModalOpen({ ...isModalOpen, dinner: false })}
          type="dinner"
          formData={formData.dinner}
          onChange={(fieldId, value) =>
            handleFormChange('dinner', fieldId, value)
          }
          onSubmit={() => handleSubmit('dinner')}
        />
      )}

      {isModalOpen.snack && (
        <RecordDiaryModal
          onClose={() => setIsModalOpen({ ...isModalOpen, snack: false })}
          type="snack"
          formData={formData.snack}
          onChange={(fieldId, value) =>
            handleFormChange('snack', fieldId, value)
          }
          onSubmit={() => handleSubmit('snack')}
        />
      )}
    </Div>
  );
};
