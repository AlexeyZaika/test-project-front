import logo from '@/assets/image/logo.png';

export function LogoBlock() {
  return (
    <>
      <img className="logo-block__image" src={logo} />
      <div className="logo-block__title">Analytix</div>
    </>
  );
}
