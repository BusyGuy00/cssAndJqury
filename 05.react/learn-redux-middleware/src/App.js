
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';


function App() {
  return (
    <div className="App">
     <Counter/>
     {/* 라우터를 넣기 때문에 삭제 <PostList/> */}
     <Routes>
      {/* url 파라미터로 전달 하는 방법 */}
        <Route path="/" element={<PostListPage/>}/>
        <Route path="/:id" element={<PostPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
