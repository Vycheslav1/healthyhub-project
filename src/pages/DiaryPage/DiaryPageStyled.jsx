import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Diary = styled(Link)`
  display: flex;
`;

export const Title = styled.h1`
  display: flex;
  width: auto;
  align-items: center;
  margin-left: 27px;
  margin-top: 20px;
`;

export const SvgArrow = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  background: #000;
`;

export const SpanTitle = styled.span`
  display: flex;
  margin-left: 12px;
  color: #fff;
  font-family: 'Poppins';
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
`;
export const TablesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 20px;
  row-gap: 26px;

  padding-left: 27px;
  padding-right: 34px;
  padding-bottom: 52px;

  @media (min-width: 320px) and (max-width: 833px) {
    gap: 27px;
    width: 320px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    gap: 32px;
    width: 834px;
  }

  @media (min-width: 1200px) {
    row-gap: 26px;
    col-gap: 20px;
    width: 1372px;
  }
`;

export const Li = styled.li`
  display: flex;
`;

export const Table = styled.table`
  display: block;
  margin-top: 16px;
  background: #000;

  @media (min-width: 320px) and (max-width: 833px) {
    gap: 27px;
    width: 300px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    gap: 32px;
    width: 780px;
  }

  @media (min-width: 1200px) {
    row-gap: 26px;
    col-gap: 20px;
    width: 640px;
  }
`;

export const TableHead = styled.thead`
  display: flex;
`;

export const TableHeadRow = styled.tr`
  @media (min-width: 320px) and (max-width: 833px) {
    width: 178px;
    height: 52px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    width: 780px;
    display: flex;
  }

  @media (min-width: 1200px) {
    display: flex;
    width: 640px;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;
export const EventName = styled.p`
  display: flex;
  width: auto;
`;
export const TableHeadDataEvent = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.45;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 129px;
    height: 32px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 344px;
    height: 32px;
  }

  @media (min-width: 1200px) {
    width: 244px;
    height: 32px;
  }
`;

export const TableHeadDataCarbonohidrates = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 164px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 180px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 180px;
    height: 32px;
    padding-top: 10px;
  }
`;
export const TableHeadDataProtein = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 112px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 112px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 112px;
    height: 32px;
    padding-top: 10px;
  }
`;

export const TableHeadDataFat = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 66px;
    height: 20px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 86px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 86px;
    height: 32px;
    padding-top: 10px;
  }
`;
export const TableHeadDataEdit = styled.td`
  display: flex;
  padding-top: 10px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 43px;
    height: 20px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 49px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 49px;
    height: 32px;
    padding-top: 10px;
  }
`;

export const TableBody = styled.tbody`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;

  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #0f0f0f;
`;

export const TableBodyRow = styled.tr`
  @media (min-width: 320px) and (max-width: 833px) {
    width: 295px;
    height: 52px;
    display: flex;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    width: 780px;
    display: flex;
  }

  @media (min-width: 1200px) {
    display: flex;
    width: 640px;
  }
`;

export const TableBodyDataNumber = styled.td`
  display: flex;
  width: 46px;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
`;

export const TableBodyDataFood = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 150px;
    height: 32px;
    padding-top: 16px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 344px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 244px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const TableBodyDataCarbohidrates = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 164px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 180px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 180px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const TableBodyDataProtein = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 112px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 112px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 112px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const TableBodyDataFat = styled.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 66px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 86px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 86px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const TableBodyDataEdit = styled.td`
  display: flex;
  color: #b6b6b6;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 43px;
    height: 20px;
    padding-top: 16px;
    padding-right: 12px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 49px;
    height: 32px;
    padding-top: 16px;
    padding-right: 14px;
  }

  @media (min-width: 1200px) {
    width: 49px;
    height: 32px;
    padding-top: 16px;
    padding-right: 14px;
  }
`;

export const SvgEdit = styled.svg`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: grey;
`;

export const SpanEdit = styled.span`
  display: flex;
  color: #b6b6b6;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

export const SpanAdd = styled(Link)`
  display: flex;
  width: 146px;
  color: #e3ffa8;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
`;
