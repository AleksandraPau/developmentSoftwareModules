import React from 'react';

function ProfileCard() {
  const cardStyle = {
    border: '1px solid black',
    padding: '10px',
    width: '250px'
  };

    return (
        <div style={cardStyle}>
            <h2>Анна Иванова</h2>
            <h3>Веб-разработчик</h3>
            <p>Люблю писать чистый код и изучать новые технологии</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
        </div>
    )
};

export default ProfileCard;