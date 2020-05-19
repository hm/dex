import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Grid = styled.div`
  display: grid;
`

export const Spacer = styled.span<{size: number}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;