import Head from 'next/head';

import styles from '../styles/home.module.scss';
import { Button } from '../components/button/Button';

export default function Home() {
  return (
    <>
      <Head>
          <title>To-do-list</title>
      </Head>
      <div className={styles.pageauth}>
        <aside>
          <img src="/images/illustration.svg" alt="Illustração" />
          <strong>Uma lista para você não esquecer de nada</strong>
          <p>O app do dia a dia</p>
        </aside>
        <main>
          <div className={styles.maincontent}>
            <img src="/images/logo.png" alt="To-do-List." />
            <button className={styles.login}>
              <img src="/images/google-icon.svg" alt="Logo do Google" />
              Login with Google
            </button>
            <div className={styles.separator}>or login with e-mail and pass</div>
            <form>
                <input type="text" placeholder="E-mail..." />
                <input type="text" placeholder="Pass..." />
                <Button type="submit"/>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
