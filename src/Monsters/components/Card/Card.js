import React from 'react';
import './Card.scss';

function Card({ monster }) {
  const { name, email, id } = monster; // 컴포넌트 내부에서 구조 분해 할당

  return (
    <div className="card">
      <img className="monsterImage" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
