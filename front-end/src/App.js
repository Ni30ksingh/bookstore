import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Addbook from "./component/Addbook"
import Books from "./component/book/Books";
import About from "./component/About";
import BookDetail from "./component/book/Bookdetails";
function App() {
  return (<React.Fragment>
    <header>
      <Header/>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<Addbook/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    
  </React.Fragment>)
}

export default App;
