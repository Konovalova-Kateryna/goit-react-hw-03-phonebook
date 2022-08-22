import { Title, Children } from './SectionTitle.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Children>{children}</Children>
    </>
  );
};
export default Section;
