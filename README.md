# Лабы по вебу

## Лабораторная работа №1

Личное дело №1:
- **ФИО:** Сагалов Никита Денисович
- **Группа:** 6404-010302D
- **Научный руководитель:** Лезина Ирина Викторовна
- **Тема диплома:** Алгоритмы колоризации изображний при помощи нейронных сетей (?)
- **Цитата великих:** Ты не ты, когда голоден! — Не тормози, сникерсни.

## Лабораторная работа №2

В ходе работы реализован четырёхстраничный сайт с резюме. nav и footer копируются между страницами (bruh), в основном используются стили из styles.css, но стили для таблицы в технологиях и оформление about вынесены в отдельные файлы, чтобы не засорять основной файл.

- **О себе** - страница с кратким описанием личности.
- **Технологии** - страница с описанием изученых технологий.
- **Опыт работы** - страница со списком предыдущих мест работы (их нет).
- **About** - страница с источниками вдохновения и поиска полезной информации при вёрстке сайта.

## Лабораторная работа №3

В ходе работы реализованы функции на javascript, выполняющие требуемый функционал.

В ходе работы использовались следующие команды:
- Установка зависимостей
```
npm install 
```
- Форматирование кода
```
npm run prettier
```
- Запуск тестов
```
npm run test
```

## Лабораторная работа №4

1) Произведено слияние веток lab2 и lab3 в master с их последующим удалением.
2) Произведено изменение README.md таким образом, чтобы в нём хранилась информация обо всех трёх лабораторных работах.
3) Создана ветка lab4 и в ней папка с таким же названием.
4) Все страницы изначально сделаны при помощи flexbox - header, content и footer являются его элементами. Сделано для того, чтобы footer находился внизу страницы, даже если на странице мало контента. Также в том или ином виде ```display: flex``` используется на каждой странице.
5) На странице "Опыт работы" карточки с потенциальным описанием предыдущих трудоустройств расположены на странице при помощи grid (при отключённом сервере их будет 11, при включённом - 8 и они будут в порядке убывания).
6) Для карточек добавлена анимация, которая "поднимает" их с поверхности при наведении мыши.
7) Сделана форма с проверкой ФИО (минимум три знака) и email (на соответсвие шаблону).
8) Также для формы реализована кастомная реализация отправки запроса "POST" на сервер, которая предотвращает перезагрузку страницы, выводит пользователю состояние отправки (успех или ошибка (При включённом сервере всегда успех)), а также очищает поля ввода в случае успеха.