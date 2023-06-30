import styles from "./LandingPage.module.css";
import { useList } from "../../Contexts/list-context";
import { QuestionCard } from "../../Components/Card/Card";
import { useEffect } from "react";

export const LandingPage = () => {

  const {getDataList,state,searchFirstNameList,ListData,setSearchFirstNameList} = useList();

  useEffect(() => {
    getDataList(state.api);
  },[state.api])

  return (
    <div className={styles.landingPage}>
      {searchFirstNameList.map((item) => {
        return (
          <QuestionCard key={item.id} item={item}/>
        )
      })}
    </div>
  );
};
