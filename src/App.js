
import './App.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar';
import {Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';





export default function App() {
  return (
    <Container >
      <AppBar />

      
      
      <Route path="/"exact>
        <HomeView />
      </Route>

      <Route path="/authors">
        <AuthorsView/>
      </Route>
      <Route path="/books">
        <BooksView/>
      </Route>
    </Container>
  );

}


