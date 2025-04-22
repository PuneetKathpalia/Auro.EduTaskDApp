import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp; 