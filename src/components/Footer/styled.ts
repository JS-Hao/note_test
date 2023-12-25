import { styled } from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  height: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const CenterText = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateButton = styled(Button)`
  position: absolute;
  height: 30px;
  right: 30px;
  top: 10px;
  font-size: 12px;
`;
