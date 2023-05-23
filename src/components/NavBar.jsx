import { Outlet, Link } from 'react-router-dom';

export function NavBarLinks({ link }) {
  return (
    <Link
      className="me-3 py-2 link-body-emphasis text-decoration-none"
      to={link.path}
    >
      {link.name}
    </Link>
  );
}

export function NavBarHeader({ name, links }) {
  return (
    <div className="d-flex align-items-center pb-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">{name}</span>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-auto">
        {links.map((link) => (
          <NavBarLinks link={link} />
        ))}
      </nav>
    </div>
  );
}
//ToDo
//wrapper para header de navegação, mudar o nome depois talvez
export default function NavBar({ name, links }) {
  return (
    <div className="container">
      <header>
        <NavBarHeader name={name} links={links} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
