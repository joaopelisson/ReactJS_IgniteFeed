import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="João Pedro"
        content="Conteudo ......."
      />  
      <Post 
        author="Pedro João"
        content="Conteudo .......2"
      />  
    </div>
  );
}