import "./App.css";

// BEM - Block Element Modifier

function App() {
  const name = "dong";
  const isMale = "true";

  function getGreeting(user) {
    if (user) {
      return <h1>Hello {user}</h1>;
    }
    return <h1>Hello, Ngan</h1>;
  }

  return (
    <div className="AppCONCAC">
      {getGreeting()}
      <h2>you are a {isMale ? "Đàn ông" : "Phụ nữ"}</h2>
    </div>
  );
}

export default App;
