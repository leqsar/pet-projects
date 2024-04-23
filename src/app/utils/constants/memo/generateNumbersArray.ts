import { CardType, Theme } from "./types";

export default function generateNumbersArray(size: number, theme: Theme) : CardType[] {
  const arr = [];
  for (let i = 1; i < size/2+1; i++) {
    arr.push({
      number: i,
      content: theme === 'Numbers' ? `${i}` : `/memo/icons/${i}.svg`,
      isOpen: false,
      isLocked: false,
    }, {
      number: size/2+i,
      content: theme === 'Numbers' ? `${i}` : `/memo/icons/${i}.svg`,
      isOpen: false,
      isLocked: false,
    })
  }

  return arr;
}


// import React, { useState } from 'react';
// import CryptoJS from 'crypto-js';

// const MemoGame = () => {
//   const [cards, setCards] = useState([
//     { id: 1, value: encrypt('A'), flipped: false, matched: false },
//     { id: 2, value: encrypt('A'), flipped: false, matched: false },
//     { id: 3, value: encrypt('B'), flipped: false, matched: false },
//     { id: 4, value: encrypt('B'), flipped: false, matched: false }
//     // Добавьте остальные карты...
//   ]);

//   const handleCardClick = (clickedCard) => {
//     // Переворачиваем карту, если она не совпадает
//     setCards(prevCards =>
//       prevCards.map(card =>
//         card.id === clickedCard.id && !card.matched
//           ? { ...card, flipped: true }
//           : card
//       )
//     );
//   };

//   const decryptValue = (encryptedValue) => {
//     // В этом примере используется статический ключ для шифрования и расшифрования
//     const bytes  = CryptoJS.AES.decrypt(encryptedValue, 'secret_key');
//     return bytes.toString(CryptoJS.enc.Utf8);
//   };

//   return (
//     <div className="memo-game">
//       <div className="cards-grid">
//         {cards.map(card => (
//           <div
//             key={card.id}
//             className={`card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
//             onClick={() => handleCardClick(card)}
//           >
//             {card.flipped ? decryptValue(card.value) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MemoGame;