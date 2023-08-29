// Создаем контекст
const MyContext = React.createContext();

// Поставщик
function MyProvider({ children }) {
  const value = "Это значение из контекста";
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

// Потребитель
function MyConsumer() {
  return (
    <MyContext.Consumer>
      {value => <p>{value}</p>}
    </MyContext.Consumer>
  );
}

// Использование внутри компонентов
function App() {
  return (
    <MyProvider>
      <div>
        <h1>Пример использования контекста</h1>
        <MyConsumer />
      </div>
    </MyProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
