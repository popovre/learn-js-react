import React from 'react';
import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';

const root = ReactDOM.createRoot(document.getElementById('root'));

// На jsx
// root.render(
//   <div className='restaurantsList'>
//     <div className='restaurant'>
//       <h1>{restaurants[0].name}</h1>
//       <h3>Menu</h3>
//       <ul>
//         <li>{restaurants[0].menu[0].name}</li>
//         <li>{restaurants[0].menu[1].name}</li>
//         <li>{restaurants[0].menu[2].name}</li>
//       </ul>
//       <h3>Reviews</h3>
//       <ul>
//         <li>{restaurants[0].reviews[0].text}</li>
//         <li>{restaurants[0].reviews[1].text}</li>
//       </ul>
//     </div>
//     <div className='restaurant'>
//       <h1>{restaurants[1].name}</h1>
//       <h3>Menu</h3>
//       <ul>
//         <li>{restaurants[1].menu[0].name}</li>
//         <li>{restaurants[1].menu[1].name}</li>
//       </ul>
//       <h3>Reviews</h3>
//       <ul>
//         <li>{restaurants[1].reviews[0].text}</li>
//         <li>{restaurants[1].reviews[1].text}</li>
//         <li>{restaurants[1].reviews[2].text}</li>
//       </ul>
//     </div>
//     <div className='restaurant'>
//       <h1>{restaurants[2].name}</h1>
//       <h3>Menu</h3>
//       <ul>
//         <li>{restaurants[2].menu[0].name}</li>
//         <li>{restaurants[2].menu[1].name}</li>
//         <li>{restaurants[2].menu[1].name}</li>
//       </ul>
//       <h3>Reviews</h3>
//       <ul>
//         <li>{restaurants[2].reviews[0].text}</li>
//       </ul>
//     </div>
//     <div className='restaurant'>
//       <h1>{restaurants[3].name}</h1>
//       <h3>Menu</h3>
//       <ul>
//         <li>{restaurants[3].menu[0].name}</li>
//         <li>{restaurants[3].menu[1].name}</li>
//       </ul>
//       <h3>Reviews</h3>
//       <ul>
//         <li>{restaurants[3].reviews[0].text}</li>
//         <li>{restaurants[3].reviews[1].text}</li>
//       </ul>
//     </div>
//   </div>
// )

// На createElement(доп)

export function Restaurant(name, menuNames, reviews) {
  function ListItem(item) {
    if (item) {
      return item.name? createElement('li', null, item.name) : item.text? createElement('li', null, item.text) : ''
    }
  }

  return createElement('div', { className: 'restaurant' }, [
    createElement('h1', null, name),
    createElement('h3', null, 'Menu'),
    createElement('ul', null, [
      ListItem(menuNames[0]),
      ListItem(menuNames[1]),
      ListItem(menuNames[2]),
    ]),
    createElement('h3', null, 'Reviews'),
    createElement('ul', null, [
      ListItem(reviews[0]),
      ListItem(reviews[1]),
      ListItem(reviews[2]),
    ]),
  ]);
}

root.render(
  React.createElement(
    'div',
    { className: 'restaurantsList' }, [
      Restaurant(restaurants[0].name, restaurants[0].menu, restaurants[0].reviews),
      Restaurant(restaurants[1].name, restaurants[1].menu, restaurants[1].reviews),
      Restaurant(restaurants[2].name, restaurants[2].menu, restaurants[2].reviews),
      Restaurant(restaurants[3].name, restaurants[3].menu, restaurants[3].reviews),
    ]
  )
);

// Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом. Логику отрисовку массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
// Название ресторана
// Заголовок - Меню (h3)
// Список названий блюд (используем тег ul и li)
// Заголовок - Отзывы (h3)
// Список текстов отзывов (используем тег ul и li)
// (Доп) сделать все это на React.createElement.
// Сделать коммит
// Запушить
// Открыть ПР из ветки с дз в ветку main
// Отправить ссылку на ПР в ветку дз 1 в Discord
