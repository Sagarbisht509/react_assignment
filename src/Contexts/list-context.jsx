import { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/reducer";
import axios from "axios";
import { LIST_API } from "../utils/utils";

const ListContext = createContext(null);

const useList = () => useContext(ListContext);

const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { api: LIST_API });
  const [ListData, setListData] = useState([]);
  const [searchFirstNameList, setSearchFirstNameList] = useState([]);

  const updateList = (arr) => {
    setSearchFirstNameList((prev) => arr);
  }
  
  const getDataList = async (api) => {
    try {
      const response = await axios.get(api);
      const dataList = response.data.data;
      setListData(dataList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListContext.Provider
      value={{
        getDataList,
        state,
        dispatch,
        reducer,
        ListData,
        setListData,
        searchFirstNameList, 
        setSearchFirstNameList,
        updateList
      }}
    >
      {children}
    </ListContext.Provider>
  );
};



export { ListProvider, useList };