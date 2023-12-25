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
  Carbonohidrates,
  BreakfastProtein,
  OpenModal,
  LinkFood,
  BreakfastFet,
  WrapperOne,
  TrashButton,
} from './DiaryOnMainStyled';
import trash from 'src/images/svg/trash-03.svg';

export const DiaryOnMain = () => {
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
              <LinkFood>
                <Carbonohidrates>
                  Carbonohidrates:
                  <span>20</span>
                </Carbonohidrates>
                <BreakfastProtein>
                  Protein: <span>20</span>
                </BreakfastProtein>
                <BreakfastFet>
                  Fat: <span>20</span>
                </BreakfastFet>
                <TrashButton type="button">
                  <img src={trash} alt="trash basket" />
                </TrashButton>
              </LinkFood>
              <OpenModal
              //   onClick={() => openModal('lunch')}
              >
                + Record your meal
              </OpenModal>
            </div>
          </DivBreakfast>
          {/* <MealModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        onClose={closeModal}
        mealName={selectedMeal}
      /> */}

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={lunchImg} alt="Lunch" />
              <DiaryBreakfast>Lunch</DiaryBreakfast>
            </DiaryMobile>
            <div>
              <LinkFood>
                <Carbonohidrates>
                  Carbonohidrates:
                  <span>20</span>
                </Carbonohidrates>
                <BreakfastProtein>
                  Protein: <span>20</span>
                </BreakfastProtein>
                <BreakfastFet>
                  Fat: <span>20</span>
                </BreakfastFet>
                <TrashButton type="button">
                  <img src={trash} alt="trash basket" />
                </TrashButton>
              </LinkFood>

              <OpenModal
              //   onClick={() => openModal('lunch')}
              >
                + Record your meal
              </OpenModal>
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={dinnerImg} alt="Dinner" />
              <DiaryBreakfast>Dinner</DiaryBreakfast>
            </DiaryMobile>
            <div>
              <LinkFood>
                <Carbonohidrates>
                  Carbonohidrates:
                  <span>20</span>
                </Carbonohidrates>
                <BreakfastProtein>
                  Protein: <span>20</span>
                </BreakfastProtein>
                <BreakfastFet>
                  Fat: <span>20</span>
                </BreakfastFet>
                <TrashButton type="button">
                  <img src={trash} alt="trash basket" />
                </TrashButton>
              </LinkFood>

              <OpenModal
              //   onClick={() => openModal('dinner')}
              >
                + Record your meal
              </OpenModal>
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={snackImg} alt="Snack" />
              <DiaryBreakfast>Snack</DiaryBreakfast>
            </DiaryMobile>
            <div>
              <LinkFood>
                <Carbonohidrates>
                  Carbonohidrates:
                  <span>20</span>
                </Carbonohidrates>
                <BreakfastProtein>
                  Protein: <span>20</span>
                </BreakfastProtein>
                <BreakfastFet>
                  Fat: <span>20</span>
                </BreakfastFet>
                <TrashButton type="button">
                  <img src={trash} alt="trash basket" />
                </TrashButton>
              </LinkFood>
              <OpenModal
              //   onClick={() => openModal('snack')}
              >
                + Record your meal
              </OpenModal>
            </div>
          </DivBreakfast>
        </WrapperOne>
      </div>
    </ContainerDiary>
  );
};

export default DiaryOnMain;
