import PropTypes from 'prop-types';

import { OptionList, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => onLeaveFeedback(option)}> {option}</Button>
          </li>
        );
      })}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
