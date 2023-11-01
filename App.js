import { StyleSheet } from 'react-native';
import { store } from './store/store'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar';

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
