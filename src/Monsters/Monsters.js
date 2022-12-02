import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './Monsters.scss';

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
    console.log(monsterList);
  };

  const searchMonster = monsterList.filter((monster) => {
    return monster.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" onChange={inputHandler} value={searchValue} />
      <CardList monsterList={searchMonster} />
    </div>
  );
}

export default Monsters;
