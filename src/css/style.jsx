import styled from "styled-components";

// inputTask
export const Button = styled.button`
  cursor: pointer;
  background-color: rgb(220, 220, 220);
  outline: none;
  border-radius: 5px;
  padding: 5 30px;
  height: 30px;
  display: block;
  width: 100px;
  color: rgb(37, 32, 32);
  border: none;
`;
// isFinished
export const Wrapper = styled.div`
  clear: both;
  margin-bottom: 30px;
`;
export const Title = styled.p`
  text-align: left;
  padding: 8px 0;
`;
export const Totalwrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;
export const TotalLeft = styled.div`
  text-align: left;
  flex: 1;
`;
export const TotalRight = styled.div`
  text-align: center;
`;
export const TotalItem = styled.span`
  margin: 0 30px;
  display: inline-block;
`;
