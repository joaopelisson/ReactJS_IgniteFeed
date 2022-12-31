import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="João Pedro"
        content="Conteudo ......."
      />  
      <Post 
        author="Pedro João"
        content="Conteudo .......2"
      />  
    </>
  )
}