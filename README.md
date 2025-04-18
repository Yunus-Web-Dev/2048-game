# 2048 Game - Полное руководство по проекту

## Game Preview
Классическая игра 2048 с реализацией на чистом JavaScript. Проект включает в себя все необходимые файлы, подробную документацию и инструкции по запуску.

## 📌 Содержание
- [Особенности](#%D0%9E%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8)
- [Как играть](#%D0%9A%D0%B0%D0%BA-%D0%B8%D0%B3%D1%80%D0%B0%D1%82%D1%8C)
- [Установка и запуск](#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA)
- [Структура проекта](#%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0)
- [Технологии](#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8)
- [Кастомизация](#%D0%9A%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F)
- [Планы по развитию](#%D0%9F%D0%BB%D0%B0%D0%BD%D1%8B-%D0%BF%D0%BE-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D1%8E)
- [Как внести вклад](#%D0%9A%D0%B0%D0%BA-%D0%B2%D0%BD%D0%B5%D1%81%D1%82%D0%B8-%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4)
- [Автор и лицензия](#%D0%90%D0%B2%D1%82%D0%BE%D1%80-%D0%B8-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F)

## 🎮 Особенности
- ✅ Классический геймплей – объединяйте плитки, чтобы получить 2048!
- ✅ Адаптивный дизайн – игра работает на ПК и мобильных устройствах
- ✅ Красивая анимация – плавные движения плиток
- ✅ Система очков – подсчёт и отображение текущего счёта
- ✅ Эффект проигрыша – затемнение поля с надписью "Game Over!"
- ✅ Кнопка "New Game" – перезапуск в один клик

## 🕹️ Как играть
Цель игры: Достичь плитки 2048, объединяя одинаковые числа.

### Управление:
- Стрелки (↑ ↓ ← →) – двигайте плитки в нужном направлении.
- Плитки сливаются, если сталкиваются одинаковые числа.

### Конец игры:
Если поле заполнено и ходов больше нет.

## ⚙️ Установка и запуск
### Способ 1: Просто открыть в браузере
1. Скачайте архив проекта.
2. Откройте файл `index.html` в любом браузере.

### Способ 2: Через Git
```bash
git clone https://github.com/ваш-ник/2048-game.git
cd 2048-game
open index.html  # или просто откройте файл в браузере
```

Для разработчиков: Если хотите изменять код, можно использовать Live Server в VS Code или любой другой локальный сервер.

## 📂 Структура проекта
```plaintext
2048-game/  
├── index.html          # Основной HTML-файл  
├── style.css           # Стили игры  
├── script.js           # Логика игры  
├── images/             # Графика  
│   └── 2048logo.png    # Иконка игры  
└── README.md           # Документация  
```

## 🛠️ Технологии
- **HTML5** – структура игры
- **CSS3 (Flexbox, Grid)** – адаптивный дизайн
- **JavaScript (ES6)** – игровая логика
- **Vanilla JS** – без зависимостей

## 🎨 Кастомизация
Хотите изменить игру? Легко!

### 1. Изменить цвета плиток
В файле `script.js` обновите функцию `getTileColor()`:

```js
function getTileColor(value) {
    if (value === 2) return "#eee4da";
    if (value === 4) return "#ede0c8";
    // ... и так далее
}
```

### 2. Изменить размер поля
В `style.css` поменяйте размеры сетки:

```css
.grid {
    grid-template-columns: repeat(4, 100px);  /* 4x4 */
    grid-template-rows: repeat(4, 100px);
}
```

### 3. Добавить новые плитки
В `generateRandomTile()` можно изменить вероятность появления 2 и 4:

```js
board[row][col] = Math.random() < 0.9 ? 2 : 4;  // 90% - двойка, 10% - четверка
```

## 🚀 Планы по развитию
- Мобильная версия (поддержка свайпов)
- Таблица рекордов (localStorage)
- Анимация слияния плиток
- Режимы сложности
- Звуковые эффекты

## 🤝 Как внести вклад
1. Форкните репозиторий
2. Создайте ветку (git checkout -b feature/new-feature)
3. Зафиксируйте изменения (git commit -m "Add new feature")
4. Запушьте в репозиторий (git push origin feature/new-feature)
5. Откройте Pull Request

## 👨‍💻 Автор и лицензия
- **Автор:** [Ваше имя]
- **Лицензия:** MIT (свободное использование)

🔗 Оригинальная игра: Gabriele Cirulli's 2048

Приятной игры! 🎉🔥

## 📌 Примечание
Если у вас есть идеи по улучшению – пишите в Issues или делайте Pull Request!
```
