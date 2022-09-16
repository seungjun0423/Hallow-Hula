import 'semantic-ui-css/semantic.min.css';

import Layout from '../src/components/Layout';
import Seo from '../src/components/Seo';
import Footer from '../src/components/Footer';


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Seo></Seo>
        <Component {...pageProps} />
        <Footer></Footer>
      </Layout>
    </div>
  );
}
