import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';


const Navigation = () => (
    <nav>
        <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
        >
            Главная
        </NavLink>

        <NavLink
            to="/authors"
            className={s.link}
            activeClassName={s.activeLink}
        >
            Авторы
        </NavLink>

        <NavLink
            to="/books"
            className={s.link}
            activeClassName={s.activeLink}
        >
            Книги
        </NavLink>
    </nav>
);

   
export default Navigation;