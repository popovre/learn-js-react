import Header from '../header/component';
import Footer from '../footer/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { UserContext } from '../../contexts/user';
import { user as userDefault } from '../../constants/structures';

const Layout = ({ children }) => {
  const [user, setUser] = useState(userDefault);
  const loginUser = (userData) => {
    (userData.name === 'validName') & (userData.mail === 'validMail')
      ? setUser({ ...userDefault, name: 'validName', mail: 'validMail' })
      : setUser({ ...userDefault });
  };
  return (
    <UserContext.Provider value={user}>
      <div className={classNames(styles.root)}>
        <Header setUser={loginUser} />
        <main className={classNames(styles.main)}>
          <h1 className={classNames(styles.title)}>Main</h1>
          {children}
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
