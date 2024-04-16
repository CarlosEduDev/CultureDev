import './global.css'
import style from './App.module.css'

import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Post } from "./components/Post"



const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/maria.png",
          name: "Maria",
          role: "Web Designer"
      },
      content: [
          {type: 'paragraph', content:'Fala galeraa 👋' },
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz em React.js. O nome do projeto é CultureDev 🚀' },
      ],
      publishedAt: new Date('2024-04-11 14:24:07'), 
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/John.png",
          name: "John Doe",
          role: "Software Engineer"
      },
      content: [
          {type: 'paragraph', content:'Fala galeraa 👋' },
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz em React.js. O nome do projeto é CultureDev 🚀' },
      ],
      publishedAt: new Date('2024-04-11 15:44:46'), 
  },
]

function App() {

  //iteração - repetição(map)


  return (
    <>
    <Header/>
    <div className={style.wrapper}>
      <Sidebar/>
    
      <main>
        {posts.map(post => {
          return (
          <Post
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
        })}
      </main>
    </div>
    </>
  )
}

export default App
