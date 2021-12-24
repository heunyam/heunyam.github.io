import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './actions';
import { BrowserRouter, Route } from 'react-router-dom';
import  Home from './Pages';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
