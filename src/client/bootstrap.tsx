import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// eslint-disable-next-line import/no-named-as-default
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
