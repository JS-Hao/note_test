import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: overlay;
  border-radius: 6px;
  background-color: #fff;
`;

export const ListItem = styled.div`
  margin: 15px;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  a {
    text-decoration: none;
    color: #000;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .updated-time {
    font-size: 12px;
    color: #ccc;
  }
`;
