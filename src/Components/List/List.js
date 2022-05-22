import ListElement from './ListElement';
// import Card from '../UI/Card'
import styles from './List.module.css';
const List = () => {
  const datas = [
    {
      id: Math.random(),
      name: 'Hariom Chaurasia',
      birthday: new Date('9-8-2000'),
      img: 'https://ui-avatars.com/api/?name=Hariom+Chaurasia',
    },
    {
      id: Math.random(),
      name: 'Manish Yadav',
      birthday: new Date('5-4-1975'),
      img: 'https://ui-avatars.com/api/?name=Mainsh+Yadav',
    },
    {
      id: Math.random(),
      name: 'Mr Z',
      birthday: new Date('12-12-1993'),
      img: 'https://ui-avatars.com/api/?name=Mr+Z',
    },
  ];

  let today = new Date();
  const month = today.getUTCMonth() + 1;
  const day = today.getUTCDate();
  today = new Date(month + '/' + day);

  const upcomming = datas.filter((data) => {
    const month = data.birthday.getUTCMonth() + 1;
    const day = data.birthday.getUTCDate();
    const birthdate = new Date(day + '/' + month);

    if (birthdate > today) {
      return data;
    }
    return null;
  });

  console.log(upcomming);

  const pastbirthday = datas.filter((data) => {
    const month = data.birthday.getUTCMonth() + 1;
    const day = data.birthday.getUTCDate();
    const birthdate = new Date(day + '/' + month);

    if (birthdate < today) {
      return data;
    }
    return null;
  });

  console.log(pastbirthday);

  const todaybirthday = datas.filter((data) => {
    const month = data.birthday.getUTCMonth() + 1;
    const day = data.birthday.getUTCDate();
    const birthdate = new Date(day + '/' + month);

    if (birthdate === today) {
      return data;
    }
    return null;
  });
  console.log(todaybirthday);

  return (
    <div className={styles.birthday}>
      {datas.map((data) => {
        return (
          <ListElement
            key={data.id}
            name={data.name}
            birthday={data.birthday}
            img={data.img}
          />
        );
      })}
    </div>
  );
};
export default List;
