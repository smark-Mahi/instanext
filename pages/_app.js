import '../styles/globals.css'
import {wrapper} from '../reduxtoolkit/Store'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
