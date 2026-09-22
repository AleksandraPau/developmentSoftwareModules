import React from 'react';

function ActionButton() {
    return (
        <div>
            <button onClick={() => alert('нажал)')}>Нажми меня</button>
            <p>Кнопка не нажата</p>
        </div>
    );
}

export default ActionButton;