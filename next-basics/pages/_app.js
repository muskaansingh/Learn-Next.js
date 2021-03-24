import '../styles/globals.css';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    // wrap the component inside the layout
    <Layout>
      <Component {...pageProps} />    
    </Layout>
  )}

export default MyApp
