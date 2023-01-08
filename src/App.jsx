import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { Post } from "./components/Post";
import "./global.css";
import styles from './App.module.css';

const postsMock = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaopelisson.png',
      name: 'João Pedro',
      role: "Developer web | frontend"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 😁'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'link', content: 'joao.pelisson/ignitefeed'},
    ],
    publishedAt: new Date('2023-01-05 19:43:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joaopnk.png',
      name: 'Pedro',
      role: "Developer web | frontend"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 😁'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'link', content: 'joao.pelisson/ignitefeed'},
    ],
    publishedAt: new Date('2023-01-08 19:43:00')
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            postsMock.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  );
}