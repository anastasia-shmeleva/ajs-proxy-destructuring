/* eslint-disable no-undef */
import destructur from '../index';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

test('destruct properties', () => {
  expect(destructur(character.special[0])).toEqual({
    id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
  });
});

test('destruct unset properties', () => {
  expect(destructur(character.special[1])).toEqual({
    id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
  });
});
