import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../api/queries/continents";
import ListItem from "./ListItem";
import { AppContext } from "../context/AppContext";
import styled from 'styled-components';


const ListContainer = styled.ul`
   list-style-type: none;
   width: 500px;
   & ul {
    list-style-type: none;
  }
   & p {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  & p:hover {
    background-color: gray;
  }
  & ul p {
    padding-left: 10px;
    margin: 5px; 
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

export const List = () => {
  const { data, loading } = useQuery(GET_CONTINENTS);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { getItemCode } = useContext(AppContext);

  const handleSelect = (code) => {
    const continentCode = getItemCode(code, data.continents);

    if (selectedContinent === code) {
      setSelectedContinent(null);
    } else if (continentCode === code) {
      setSelectedContinent(code);
    }
    if (selectedCountry === code) {
      setSelectedCountry(null);
    } else if (continentCode !== code) {
      setSelectedCountry(code);
    }
  };
  return (
    <div>
      {!loading ? (
        <ListContainer>
          <ListItem
            items={data.continents}
            selectedItem={{ selectedContinent, selectedCountry }}
            handleSelect={handleSelect}
          />
        </ListContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default List;
