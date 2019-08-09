import { render } from 'react-dom';
import './index.css';
import ApolloApp from './apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(ApolloApp(App), document.getElementById('root'));
serviceWorker.unregister();