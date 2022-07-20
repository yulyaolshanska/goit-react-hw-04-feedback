import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle, Container } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle>{title}</SectionTitle>

        {children}
      </Container>
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
