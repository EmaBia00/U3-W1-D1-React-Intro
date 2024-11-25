import "./App.css";
import logo from "./logo.svg";
import Header from "./components/Header";
import ButtonComponent from "./components/Button";
import ImageComponent from "./components/Image";

function App() {
  return (
    <div className="App">
      <Header logo={logo} style={{ backgroundColor: "coral" }} className="border-md p-5 shadow mb-5" />
      <ButtonComponent
        title="Button01"
        text="Cliccami"
        containerStyle={{ backgroundColor: "gray", border: "none", padding: "0.5rem 1rem", color: "white", borderRadius: "6px", margin: "10px 100px" }}
        titleStyle={{ color: "black", fontWeight: 700 }}
        buttonStyle={{ backgroundColor: "green", border: "2px solid lightgray", padding: "0.5rem 1rem", color: "white", borderRadius: "6px" }}
      />
      <ButtonComponent
        title="Button02"
        text="Invia"
        containerStyle={{ backgroundColor: "gray", border: "none", padding: "0.5rem 1rem", color: "white", borderRadius: "6px", margin: "10px 100px" }}
        titleStyle={{ color: "black", fontWeight: 700 }}
        buttonStyle={{ backgroundColor: "lightblue", border: "2px solid lightgray", padding: "0.5rem 1rem", color: "black", borderRadius: "6px" }}
      />
      <ImageComponent
        src="https://images.unsplash.com/photo-1732493669483-d36c907d0a3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image01"
        width="300px"
      ></ImageComponent>
    </div>
  );
}

export default App;
