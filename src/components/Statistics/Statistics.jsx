import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  StatisticOption,
} from './statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticOption>Good:</StatisticOption>
        {good}
      </StatisticsItem>
      <StatisticsItem>
        <StatisticOption>Neutral:</StatisticOption>
        {neutral}
      </StatisticsItem>
      <StatisticsItem>
        <StatisticOption>Bad:</StatisticOption>
        {bad}
      </StatisticsItem>
      <StatisticsItem>
        <StatisticOption>Total:</StatisticOption>
        {total}
      </StatisticsItem>
      <StatisticsItem>
        <StatisticOption>Positive feedbacks:</StatisticOption>
        {positivePercentage}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
