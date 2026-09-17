import {Layout} from '../components/Layout';
import {withBase} from '../lib/paths';

export function NotFoundPage() {
  return (
    <Layout active="not-found">
      <div className="content-width not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested is not available.</p>
        <a className="button button--primary" href={withBase('/')}>Return Home</a>
      </div>
    </Layout>
  );
}
