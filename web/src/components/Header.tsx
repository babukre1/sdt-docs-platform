import {withBase} from '../lib/paths';

export type PageKey = 'home' | 'schedule' | 'materials' | 'not-found';

type Props = {
  active: PageKey;
};

export function Header({active}: Props) {
  const nav = [
    {key: 'home' as const, label: 'Home', href: withBase('/')},
    {key: 'schedule' as const, label: 'Schedule', href: withBase('/schedule/')},
    {key: 'materials' as const, label: 'Materials', href: withBase('/materials/')},
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href={withBase('/')} aria-label="SOMNOG9 home">
          <img src={withBase('/images/somnog9-logo.png')} alt="SomNOG9 Workshop and Conference" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item.key}
              className={active === item.key ? 'main-nav__link is-active' : 'main-nav__link'}
              href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
