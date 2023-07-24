const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Используем cookie-parser для парсинга cookies
app.use(cookieParser());

// Обработка GET-запроса на главную страницу
app.get("/", function (req, res) {
  // Получение значения cookie "посещения" (если оно существует)
  const visitCount = req.cookies.visitCount || 0;

  // Увеличение значения cookie "посещения" на 1
  res.cookie("visitCount", parseInt(visitCount) + 1);

  // Отправка HTML-страницы с информацией о посещении
  res.send(`
    <h1>Отслеживание действий пользователя</h1>
    <p>Вы посетили этот сайт ${visitCount} раз(а).</p>
  `);
});

// Запуск сервера на порту 3000
app.listen(3000, function () {
  console.log("Сервер запущен на порту 3000");
});
