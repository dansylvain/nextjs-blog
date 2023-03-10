import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Salut! Moi c'est Dan, j'apprends à utiliser <a target="_blank" href="https://nextjs.org/">Next.js</a> !</p> 

      </section>
    </Layout>
  );
}