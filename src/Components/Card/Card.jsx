import styles from "./Card.module.css";
export const QuestionCard = ({ item }) => {
  
  const { id, avatar, first_name } = item;

  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <div className={styles.card_id}>{id}</div>
        <img className={styles.card_image} src={avatar} alt={first_name} />
      </div>
      <div className={styles.card_name} >{first_name}</div>
    </div>

  );
};
