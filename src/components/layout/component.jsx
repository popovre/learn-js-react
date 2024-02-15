import Header from '../header/component';
import Footer from '../footer/component';
import styles from './style.module.scss';
import classNames from 'classnames';

const Layout = ({ children }) => {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      <main className={classNames(styles.main)}>
        <h1 className={classNames(styles.title)}>Main</h1>
        {children}
      </main>
      <Footer />
      <div id="modal-container"></div>
      <div id="popoverContainer" className={styles.popoverContainer} />
    </div>
  );
};

export default Layout;
