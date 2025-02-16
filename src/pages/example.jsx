import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '../../styles/Home.module.css';
import Counter from '../common/components/Counter';
import { H1 } from '../common/styledComponents/Head';
import Navbar from '../common/components/navbar';

export default function Example() {
  const router = useRouter();
  const { t } = useTranslation(['common', 'counter']);

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Learn with Breatheco.de" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/example" locale={router.locale === 'en' ? 'es' : 'en'}>
          <button type="button">{t('change-locale')}</button>
        </Link>
        <H1 type="h1" className={styles.title}>
          {t('heading')}
          {' '}
          <a href="/example">Example!</a>
        </H1>

        <Counter title={t('counter:title')} resetText={t('counter:resetButton')} />
      </main>
      <Navbar
        menuList={[
          {
            icon: 'home',
            title: 'Dashboard',
            link: '/',
          },
          {
            icon: 'book',
            title: 'Learn',
            link: '/learn',
          },
          {
            icon: 'message',
            title: 'Mentoring',
            link: '/mentoring',
          },
          {
            icon: 'people',
            title: 'Community',
            link: '/community',
          },
        ]}
        user={{
          avatar: 'https://storage.googleapis.com/media-breathecode/639857ed0ceb0a5e5e0429e16f7e3a84365270a0977fb94727cc3b6450d1ea9a',
          handleUser: () => {},
          notifies: false,
        }}
      />

      <footer className={styles.footer}>
        <a href="/">
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'counter'])),
  },
});
