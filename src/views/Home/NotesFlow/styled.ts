import { styled } from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons';

export const DeleteIcon = styled(DeleteOutlined)`
  font-size: 18px;
  color: #d3d3d3;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: overlay;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 15px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #d3d3d3;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #000;
    overflow: hidden;
    margin-right: 5px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 25px;
  }
`;

export const GroupContainer = styled.div`
  .date {
    font-size: 24px;
    padding: 20px 0 10px 5px;
  }

  .list-wrapper {
    background-color: #fff;
    border-radius: 16px;
  }

  .list-item:last-child {
    border-bottom: none;
  }
`;
