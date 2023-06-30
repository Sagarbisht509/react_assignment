import { useEffect, useState } from "react";
import { useList } from "../../Contexts/list-context";

export const Navbar = () => {

  const {ListData,updateList} = useList(); 

  const [userQuery, setUserQuery] = useState("");
  
  const searchboxHandler = (e) => {
    setUserQuery((prev) => e.target.value);
  };

  useEffect(() => {
    sendQuery();
  }, [userQuery,ListData]);



  const sendQuery = () => {
     let filteredList = ListData.filter(
       (item) => item.first_name.toLowerCase().search(userQuery.toLowerCase()) !== -1
     );
     filteredList.length===0 ? updateList(ListData) : updateList(filteredList);
  };


  return (
      <div className="navbar_container">
      <input className="searchbar" type="text" onChange={searchboxHandler} value={userQuery} placeholder="Enter First Name..."/>
    </div>
  );
};
