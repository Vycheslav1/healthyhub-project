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
  WrapperOne,
  RecommendedWrapper,
  RecommendedListWrapper,
  TrashButton,
  SpanDate,
} from './DiaryOnMainStyled';
import { RecommendedList } from '../RecommendedList/RecommendedList';
import { NavLink } from 'react-router-dom';
import trash from '../../images/svg/trash-03.svg';

export const DiaryOnMain = () => {
  return (
    <ContainerDiary>
      <WrapperOne></WrapperOne>
      <AddLink>
        <Diary>Diary</Diary>
        <SeeMore>See More</SeeMore>
      </AddLink>
      <div>
        <div>
          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={breakfastImage} alt="Breakfast" />
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
              <BreakfastImage src={lunchImage} alt="Lunch" />
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
              :
              <OpenModal
              //   onClick={() => openModal('lunch')}
              >
                + Record your meal
              </OpenModal>
            </div>
          </DivBreakfast>

          <DivBreakfast>
            <DiaryMobile>
              <BreakfastImage src={dinnerImage} alt="Dinner" />
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
              <BreakfastImage src={snackImage} alt="Snack" />
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
        </div>
      </div>
    </ContainerDiary>
  );
};

export default DiaryOnMain;
