import Header from '../header/component';
import Footer from '../footer/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { UserContext } from '../../contexts/user';
import { user as USER_DEFAULT } from '../../constants/structures';

const Layout = ({ children }) => {
  const [user, setUser] = useState(USER_DEFAULT);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={classNames(styles.root)}>
        <Header />
        <main className={classNames(styles.main)}>
          <h1 className={classNames(styles.title)}>Main</h1>
          {children}
        </main>
        <Footer />
        <div id="modal-container"></div>
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
