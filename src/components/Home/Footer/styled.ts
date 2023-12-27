import { styled } from 'styled-components';
import { EditOutlined } from '@ant-design/icons';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border-top: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

export const CenterText = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateButton = styled(EditOutlined)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #daa520;
`;
