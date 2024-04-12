import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/auth.slice.js';


const menuItems = [
  {
    title: 'Менеджер',
    path: '/',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z" fill="none" strokeWidth="1.25" strokeMiterlimit="10"/><path d="M2.4209 16.8743C3.1893 15.5442 4.29419 14.4398 5.62456 13.672C6.95493 12.9042 8.46393 12.5 9.99997 12.5C11.536 12.5 13.045 12.9043 14.3754 13.6721C15.7057 14.44 16.8106 15.5444 17.579 16.8744" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Користувачі',
    path: '/users',
    icon: <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.207C1 11.454 3.25306 9.22222 7.85714 9.22222C12.4612 9.22222 14.7143 11.454 14.7143 14.207C14.7143 14.645 14.4013 15 14.0151 15H1.69916C1.31302 15 1 14.645 1 14.207Z"/><path d="M10.4286 3.625C10.4286 5.07475 9.2773 6.25 7.85714 6.25C6.43698 6.25 5.28571 5.07475 5.28571 3.625C5.28571 2.17525 6.43698 1 7.85714 1C9.2773 1 10.4286 2.17525 10.4286 3.625Z"/><path d="M16.75 9.61328C17.9381 10.5195 19 12.8011 19 14.207C19 14.645 18.687 15 18.3008 15H17.875M13.375 5.89882C14.1436 5.44495 14.6607 4.59662 14.6607 3.625C14.6607 2.65338 14.1436 1.80505 13.375 1.35118M1.69916 15H14.0151C14.4013 15 14.7143 14.645 14.7143 14.207C14.7143 11.454 12.4612 9.22222 7.85714 9.22222C3.25306 9.22222 1 11.454 1 14.207C1 14.645 1.31302 15 1.69916 15ZM10.4286 3.625C10.4286 5.07475 9.2773 6.25 7.85714 6.25C6.43698 6.25 5.28571 5.07475 5.28571 3.625C5.28571 2.17525 6.43698 1 7.85714 1C9.2773 1 10.4286 2.17525 10.4286 3.625Z" fill="none" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Пропозиції',
    path: '/offers',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 10.6875H11.25" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.75 8.4375H11.25" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.2501 2.8125H14.0625C14.2117 2.8125 14.3548 2.87176 14.4602 2.97725C14.5657 3.08274 14.625 3.22582 14.625 3.375V15.1875C14.625 15.3367 14.5657 15.4798 14.4602 15.5852C14.3548 15.6907 14.2117 15.75 14.0625 15.75H3.9375C3.78832 15.75 3.64524 15.6907 3.53975 15.5852C3.43426 15.4798 3.375 15.3367 3.375 15.1875V3.375C3.375 3.22582 3.43426 3.08274 3.53975 2.97725C3.64524 2.87176 3.78832 2.8125 3.9375 2.8125H6.74985" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.1875 5.0625V4.5C6.1875 3.75408 6.48382 3.03871 7.01126 2.51126C7.53871 1.98382 8.25408 1.6875 9 1.6875C9.74592 1.6875 10.4613 1.98382 10.9887 2.51126C11.5162 3.03871 11.8125 3.75408 11.8125 4.5V5.0625H6.1875Z" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Профіль',
    path: '/profile',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.0498 14.4C4.39568 14.0126 6.01559 12.23 6.49031 12.23H11.5096C12.1975 12.23 13.6018 13.7077 13.9498 14.2286M16.1998 9C16.1998 12.9765 12.9763 16.2 8.9998 16.2C5.02335 16.2 1.7998 12.9765 1.7998 9C1.7998 5.02355 5.02335 1.8 8.9998 1.8C12.9763 1.8 16.1998 5.02355 16.1998 9ZM11.5789 6.54597C11.5789 5.17234 10.4193 4.05 9.00002 4.05C7.58074 4.05 6.42111 5.17234 6.42111 6.54597C6.42111 7.9196 7.58074 9.04194 9.00002 9.04194C10.4193 9.04194 11.5789 7.9196 11.5789 6.54597Z" fill="none"/></svg>,
  },
  {
    title: 'Баланс',
    path: '/balance',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.1245 13.125H15.6245" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.37451 13.125H10.6245" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.87451 7.56662H18.1245" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Технічна підтримка',
    path: '/support',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.25476 15.7452C3.53569 15.0262 4.01262 13.5165 3.64662 12.632C3.26722 11.715 1.875 10.9769 1.875 9.99997C1.875 9.02301 3.26722 8.285 3.64663 7.36803C4.01263 6.48346 3.5357 4.97382 4.25476 4.25476C4.97382 3.53569 6.48346 4.01262 7.36804 3.64662C8.28502 3.26722 9.02305 1.875 10 1.875C10.977 1.875 11.715 3.26722 12.632 3.64663C13.5165 4.01263 15.0262 3.5357 15.7452 4.25476C16.4643 4.97382 15.9874 6.48346 16.3534 7.36804C16.7328 8.28502 18.125 9.02305 18.125 10C18.125 10.977 16.7328 11.715 16.3534 12.632C15.9874 13.5165 16.4643 15.0262 15.7452 15.7452C15.0262 16.4643 13.5165 15.9874 12.632 16.3534C11.715 16.7328 10.9769 18.125 9.99997 18.125C9.02301 18.125 8.285 16.7328 7.36803 16.3534C6.48346 15.9874 4.97382 16.4643 4.25476 15.7452Z" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z"/><path d="M10 11.2504V10.6254C10.4326 10.6254 10.8556 10.4971 11.2153 10.2567C11.575 10.0163 11.8554 9.67469 12.021 9.27498C12.1866 8.87527 12.2299 8.43543 12.1455 8.0111C12.0611 7.58677 11.8527 7.19699 11.5468 6.89106C11.2409 6.58514 10.8511 6.3768 10.4268 6.29239C10.0024 6.20799 9.56259 6.25131 9.16288 6.41687C8.76317 6.58244 8.42153 6.86282 8.18116 7.22255C7.9408 7.58228 7.8125 8.00521 7.8125 8.43786" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export function VerticalMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="vertical-menu">
      {
        menuItems.map((item) => (
        <NavLink to={item.path} className={({ isActive }) => isActive ? 'vertical-menu__item active' : 'vertical-menu__item'} key={item.title}>
          <span className="vertical-menu__item-icon">{item.icon}</span>
          <span className="vertical-menu__item-title">{item.title}</span>
        </NavLink>
        ))
      }

      <div className="vertical-menu__footer">
        <button className="vertical-menu__item button" onClick={onLogout}>
          <span className="vertical-menu__item-title">Logout</span>
        </button>
      </div>
    </nav>
  );
}
