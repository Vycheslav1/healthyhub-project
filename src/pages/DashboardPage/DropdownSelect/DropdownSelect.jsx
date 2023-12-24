import {
  DropdownContainer,
  Select,
  Arrow,
} from '../DropdownSelect/DropdownSelect.styled';
import ArrowRightIcon from '../../../../src/assets/images/icons/arrow-right.svg';

const DropdownSelect = ({ onChange }) => {
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  return (
    <DropdownContainer>
      <Arrow>
        <img
          src={ArrowRightIcon}
          alt="Arrow Right Icon"
          style={{ transform: 'rotate(180deg)' }}
        />
      </Arrow>
      <Select
        className="Select"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Months
        </option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default DropdownSelect;
