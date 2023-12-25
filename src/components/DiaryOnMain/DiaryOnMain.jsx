// import { useState } from 'react';
// import RecordDiaryModal from '../RecordDiaryModal/RecordDairy';
// import breakfastImg from 'src/images/svg/breakfastImg.svg';
// import lunchImg from 'src/images/svg/lunchImg.svg';
// import dinnerImg from 'src/images/svg/dinnerImg.svg';
// import snackImg from 'src/images/svg/snackImg.svg';
// import {
//   ContainerDiary,
//   AddLink,
//   SeeMore,
//   Diary,
//   DivBreakfast,
//   DiaryMobile,
//   BreakfastImage,
//   DiaryBreakfast,
//   Carbonohidrates,
//   BreakfastProtein,
//   OpenModal,
//   LinkFood,
//   BreakfastFet,
//   WrapperOne,
//   TrashButton,
// } from './DiaryOnMainStyled';
// import trash from 'src/images/svg/trash-03.svg';

// export const DiaryOnMain = () => {
//   const [isModalOpen, setIsModalOpen] = useState({
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//     snack: false,
//   });

//   const openModal = (mealType) => {
//     setIsModalOpen({ ...isModalOpen, [mealType]: true });
//   };

//   return (
//     <ContainerDiary>
//       <AddLink>
//         <Diary>Diary</Diary>
//         <SeeMore to={'/diary'}>See More</SeeMore>
//       </AddLink>
//       <div>
//         <WrapperOne>
//           <DivBreakfast>
//             <DiaryMobile>
//               <BreakfastImage src={breakfastImg} alt="Breakfast" />
//               <DiaryBreakfast>Breakfast</DiaryBreakfast>
//             </DiaryMobile>
//             <div>
//               <LinkFood>
//                 <Carbonohidrates>
//                   Carbonohidrates:
//                   <span>20</span>
//                 </Carbonohidrates>
//                 <BreakfastProtein>
//                   Protein: <span>20</span>
//                 </BreakfastProtein>
//                 <BreakfastFet>
//                   Fat: <span>20</span>
//                 </BreakfastFet>
//                 <TrashButton type="button">
//                   <img src={trash} alt="trash basket" />
//                 </TrashButton>
//               </LinkFood>
//               <OpenModal onClick={() => openModal('breakfast')}>
//                 + Record your meal
//               </OpenModal>
//             </div>
//           </DivBreakfast>

//           <DivBreakfast>
//             <DiaryMobile>
//               <BreakfastImage src={lunchImg} alt="Lunch" />
//               <DiaryBreakfast>Lunch</DiaryBreakfast>
//             </DiaryMobile>
//             <div>
//               <LinkFood>
//                 <Carbonohidrates>
//                   Carbonohidrates:
//                   <span>20</span>
//                 </Carbonohidrates>
//                 <BreakfastProtein>
//                   Protein: <span>20</span>
//                 </BreakfastProtein>
//                 <BreakfastFet>
//                   Fat: <span>20</span>
//                 </BreakfastFet>
//                 <TrashButton type="button">
//                   <img src={trash} alt="trash basket" />
//                 </TrashButton>
//               </LinkFood>
//               <OpenModal onClick={() => openModal('lunch')}>
//                 + Record your meal
//               </OpenModal>
//             </div>
//           </DivBreakfast>

//           <DivBreakfast>
//             <DiaryMobile>
//               <BreakfastImage src={dinnerImg} alt="Dinner" />
//               <DiaryBreakfast>Dinner</DiaryBreakfast>
//             </DiaryMobile>
//             <div>
//               <LinkFood>
//                 <Carbonohidrates>
//                   Carbonohidrates:
//                   <span>20</span>
//                 </Carbonohidrates>
//                 <BreakfastProtein>
//                   Protein: <span>20</span>
//                 </BreakfastProtein>
//                 <BreakfastFet>
//                   Fat: <span>20</span>
//                 </BreakfastFet>
//                 <TrashButton type="button">
//                   <img src={trash} alt="trash basket" />
//                 </TrashButton>
//               </LinkFood>
//               <OpenModal onClick={() => openModal('dinner')}>
//                 + Record your meal
//               </OpenModal>
//             </div>
//           </DivBreakfast>

//           <DivBreakfast>
//             <DiaryMobile>
//               <BreakfastImage src={snackImg} alt="Snack" />
//               <DiaryBreakfast>Snack</DiaryBreakfast>
//             </DiaryMobile>
//             <div>
//               <LinkFood>
//                 <Carbonohidrates>
//                   Carbonohidrates:
//                   <span>20</span>
//                 </Carbonohidrates>
//                 <BreakfastProtein>
//                   Protein: <span>20</span>
//                 </BreakfastProtein>
//                 <BreakfastFet>
//                   Fat: <span>20</span>
//                 </BreakfastFet>
//                 <TrashButton type="button">
//                   <img src={trash} alt="trash basket" />
//                 </TrashButton>
//               </LinkFood>
//               <OpenModal onClick={() => openModal('snack')}>
//                 + Record your meal
//               </OpenModal>
//             </div>
//           </DivBreakfast>
//         </WrapperOne>
//       </div>

//       {isModalOpen.breakfast && (
//         <RecordDiaryModal
//           onClose={() => setIsModalOpen({ ...isModalOpen, breakfast: false })}
//           type="breakfast"
//         />
//       )}
//       {isModalOpen.lunch && (
//         <RecordDiaryModal
//           onClose={() => setIsModalOpen({ ...isModalOpen, lunch: false })}
//           type="lunch"
//         />
//       )}
//       {isModalOpen.dinner && (
//         <RecordDiaryModal
//           onClose={() => setIsModalOpen({ ...isModalOpen, dinner: false })}
//           type="dinner"
//         />
//       )}
//       {isModalOpen.snack && (
//         <RecordDiaryModal
//           onClose={() => setIsModalOpen({ ...isModalOpen, snack: false })}
//           type="snack"
//         />
//       )}
//     </ContainerDiary>
//   );
// };

// export default DiaryOnMain;
import { useState } from 'react';
import RecordDiaryModal from '../RecordDiaryModal/RecordDairy';
import breakfastImg from 'src/images/svg/breakfastImg.svg';
import lunchImg from 'src/images/svg/lunchImg.svg';
import dinnerImg from 'src/images/svg/dinnerImg.svg';
import snackImg from 'src/images/svg/snackImg.svg';
import {
  ContainerDiary,
  AddLink,
  SeeMore,
  Diary,
  DivBreakfast,
  DiaryMobile,
  BreakfastImage,
  DiaryBreakfast,
  OpenModal,
  LinkFood,
  WrapperOne,
  TrashButton,
} from './DiaryOnMainStyled';
import trash from 'src/images/svg/trash-03.svg';

export const DiaryOnMain = () => {
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
    console.log(`Data for ${mealType}:`, formData[mealType]);
    setIsModalOpen({ ...isModalOpen, [mealType]: false });
  };

  return (
    <ContainerDiary>
      <AddLink>
        <Diary>Diary</Diary>
        <SeeMore to={'/diary'}>See More</SeeMore>
      </AddLink>
      <div>
        <WrapperOne>
          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={breakfastImg} alt="Breakfast" />
              <DiaryBreakfast>Breakfast</DiaryBreakfast>
            </DiaryMobile>
            <div>
              {formData.breakfast.name ? (
                <LinkFood>
                  {/* ... */}
                  <TrashButton type="button">
                    <img src={trash} alt="trash basket" />
                  </TrashButton>
                </LinkFood>
              ) : (
                <OpenModal onClick={() => openModal('breakfast')}>
                  + Record your breakfast
                </OpenModal>
              )}
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={lunchImg} alt="Lunch" />
              <DiaryBreakfast>Lunch</DiaryBreakfast>
            </DiaryMobile>
            <div>
              {formData.lunch.name ? (
                <LinkFood>
                  {/* ... */}
                  <TrashButton type="button">
                    <img src={trash} alt="trash basket" />
                  </TrashButton>
                </LinkFood>
              ) : (
                <OpenModal onClick={() => openModal('lunch')}>
                  + Record your lunch
                </OpenModal>
              )}
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={dinnerImg} alt="Dinner" />
              <DiaryBreakfast>Dinner</DiaryBreakfast>
            </DiaryMobile>
            <div>
              {formData.dinner.name ? (
                <LinkFood>
                  {/* ... */}
                  <TrashButton type="button">
                    <img src={trash} alt="trash basket" />
                  </TrashButton>
                </LinkFood>
              ) : (
                <OpenModal onClick={() => openModal('dinner')}>
                  + Record your dinner
                </OpenModal>
              )}
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={snackImg} alt="Snack" />
              <DiaryBreakfast>Snack</DiaryBreakfast>
            </DiaryMobile>
            <div>
              {formData.snack.name ? (
                <LinkFood>
                  {/* ... */}
                  <TrashButton type="button">
                    <img src={trash} alt="trash basket" />
                  </TrashButton>
                </LinkFood>
              ) : (
                <OpenModal onClick={() => openModal('snack')}>
                  + Record your snack
                </OpenModal>
              )}
            </div>
          </DivBreakfast>
        </WrapperOne>
      </div>

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
    </ContainerDiary>
  );
};

export default DiaryOnMain;
