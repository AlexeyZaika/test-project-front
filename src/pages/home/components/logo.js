import logo from '@/assets/image/logo.png';

export function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" className="logo__image"/>

      <div className="logo__title">Analytix</div>
    </div>
  );
}
