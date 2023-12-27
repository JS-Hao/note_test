import { styled } from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';
import { Editor } from '../../components/Editor';

export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: overlay;
  height: 100%;
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-size: 14px;
  padding-bottom: 15px;
`;

export const Content = styled.div`
  padding: 15px;
  padding-top: 50px;
`;

export const TitleEditor = styled(Editor)`
  font-size: 22px;
  font-weight: bold;
`;

export const ContentEditor = styled(Editor)`
  font-size: 14px;
  margin-top: 10px;
`;

export const BackToHome = styled(LeftOutlined)`
  font-size: 20px;
  margin-left: 10px;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;
