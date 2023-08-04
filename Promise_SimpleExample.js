// Asynchronous function for loading data from the server returning a promise
function fetchDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

// We call the function and process the result using a promise
fetchDataFromServer()
  .then((data) => {
    console.log("Получены данные:", data);
    console.log("Дальнейшая обработка данных...");
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });
