import styled from '@emotion/styled';

export const Icon = ({ src, width, height }) => (
  <Wrapper width={width} height={height}>
    <Icon src={src} alt="category-icon" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;