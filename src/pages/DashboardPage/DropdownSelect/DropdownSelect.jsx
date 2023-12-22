import {
  DropdownContainer,
  Select,
} from '../DropdownSelect/DropdownSelect.styled';
const DropdownSelect = ({ options, onChange }) => {
  return (
    <DropdownContainer>
      <Select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default DropdownSelect;
