import type {ReactNode} from 'react';
import {Footer} from './Footer';
import {Header, type PageKey} from './Header';

type Props = {
  active: PageKey;
  children: ReactNode;
};

export function Layout({active, children}: Props) {
  return (
    <>
      <Header active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
