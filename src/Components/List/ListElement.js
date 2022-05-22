import Date from './Date/Date';
import styles from './ListElement.module.css';

const ListElement = (props) => {
  let { name, birthday, img } = props;
  return (
    <div className={styles.birthday_item}>
      <img src={img} alt='person' />
      <h2 className={styles.birthday_item__name}>{name}</h2>
      <div className={styles.birthday_item__date}>
        <Date date={birthday} />
      </div>
    </div>
  );
};

export default ListElement;
