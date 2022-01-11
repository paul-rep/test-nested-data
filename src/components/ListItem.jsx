import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const ListItemContainer = styled.li`
    p {
        padding: 10px 25px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        transition: all 0.5s ease;
        cursor: pointer;
    }

    & p:hover {
        background-color: lightgrey;
    }

    & ul p {
    padding-left: 10px;
    margin: 5px; 
    border: 1px solid #ccc;
    border-radius: 5px;
    }
`;


const ListItem = ({ items, selectedItem, handleSelect }) => {
  const { getChildItems, getSelectedItem } = useContext(AppContext);

  return (
    <>
      {items.map((item) => (
        <ListItemContainer key={item.code}>
          <p onClick={() => handleSelect(item.code)}>{item.name}</p>
          {getSelectedItem(item.code, selectedItem) && (
            <ul>
              {" "}
              <ListItem
                items={getChildItems(item)}
                handleSelect={getChildItems(item) && handleSelect}
                selectedItem={getChildItems(item) && selectedItem}
              />
            </ul>
          )}
        </ListItemContainer>
      ))}
    </>
  );
}

export default ListItem;
