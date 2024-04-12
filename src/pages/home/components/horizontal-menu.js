import paperIcon from '@/assets/icons/paper-icon.svg';

const menuItems = ['Strona', 'Inni', 'Indeksy', 'Poczta'];

export function HorizontalMenu() {
  return (
    <header className="horizontal-menu">
      {
        menuItems.map((item) => (
        <a href="#" className="horizontal-menu__item" key={item}>
        <span className="horizontal-menu__item-title">{item}</span>
        <img className="horizontal-menu__item-icon" src={paperIcon} alt="" />
        </a>
        ))
      }
    </header>
  );
}
