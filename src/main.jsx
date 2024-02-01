import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './globals.module.scss';
import classNames from 'classnames';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App className={classNames(styles)} />);
