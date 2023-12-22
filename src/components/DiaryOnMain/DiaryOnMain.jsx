import breakfastImage from 'src/images/svg/breakfest.svg';
import lunchImage from 'src/images/svg/Lunch.svg';
import dinnerImage from 'src/images/svg/Dinner image.svg';
import snackImage from 'src/images/svg/Snack image.svg';
import {
  ContainerDiary,
  AddLink,
  SeeMore,
  Diary,
  DivBreakfast,
  DiaryMobile,
  BreakfastImage,
  DiaryBreakfast,
  Carbonohidrates,
  BreakfastProtein,
  OpenModal,
  LinkFood,
  BreakfastFet,
} from './DiaryOnMainStyled';

const DiaryOnMain = () => {
  return (
    <ContainerDiary>
      <AddLink>
        <Diary>Diary</Diary>
        <SeeMore>See More</SeeMore>
      </AddLink>

      <DivBreakfast>
        <DiaryMobile>
          <BreakfastImage src={breakfastImage} alt="Breakfast" />
          <DiaryBreakfast>Breakfast</DiaryBreakfast>
        </DiaryMobile>
        <span>
          <LinkFood>
            <Carbonohidrates> Carbonohidrates:</Carbonohidrates>
            <BreakfastProtein> Protein:</BreakfastProtein>{' '}
            <BreakfastFet> Fat: </BreakfastFet>
          </LinkFood>
          :
          <OpenModal
          //   onClick={() => openModal('lunch')}
          >
            {' '}
            + Record your meal
          </OpenModal>
        </span>
      </DivBreakfast>
      {/* <MealModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        onClose={closeModal}
        mealName={selectedMeal}
      /> */}

      <DivBreakfast>
        <DiaryMobile>
          <BreakfastImage src={lunchImage} alt="Lunch" />
          <DiaryBreakfast>Lunch</DiaryBreakfast>
        </DiaryMobile>
        <span>
          <LinkFood>
            <Carbonohidrates> Carbonohidrates:</Carbonohidrates>
            <BreakfastProtein> Protein:</BreakfastProtein>{' '}
            <BreakfastFet> Fat: </BreakfastFet>
          </LinkFood>
          :
          <OpenModal
          //   onClick={() => openModal('lunch')}
          >
            {' '}
            + Record your meal
          </OpenModal>
        </span>
      </DivBreakfast>

      <DivBreakfast>
        <DiaryMobile>
          <BreakfastImage src={dinnerImage} alt="Dinner" />
          <DiaryBreakfast>Dinner</DiaryBreakfast>
        </DiaryMobile>
        <span>
          <LinkFood>
            <Carbonohidrates>Carbonohidrates:</Carbonohidrates>
            <BreakfastProtein> Protein:</BreakfastProtein>{' '}
            <BreakfastFet> Fat: </BreakfastFet>
          </LinkFood>

          <OpenModal
          //   onClick={() => openModal('dinner')}
          >
            {' '}
            + Record your meal
          </OpenModal>
        </span>
      </DivBreakfast>

      <DivBreakfast>
        <DiaryMobile>
          <BreakfastImage src={snackImage} alt="Snack" />
          <DiaryBreakfast>Snack</DiaryBreakfast>
        </DiaryMobile>
        <span>
          <LinkFood>
            <Carbonohidrates>Carbonohidrates:</Carbonohidrates>
            <BreakfastProtein> Protein:</BreakfastProtein>{' '}
            <BreakfastFet> Fat: </BreakfastFet>
          </LinkFood>

          <OpenModal
          //   onClick={() => openModal('snack')}
          >
            {' '}
            + Record your meal
          </OpenModal>
        </span>
      </DivBreakfast>
    </ContainerDiary>
  );
};

export default DiaryOnMain;
