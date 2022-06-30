import Head from "next/head";
import Date from "../../components/Date/date";

import { getAllBlogIds, getBlogData } from "../../lib/blogs";

import styles from './Blog.module.scss'

export default function Post({ blogData }) {
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article className={styles.article}>
        <h1 className={styles.blogtitle}>{blogData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={blogData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);

  return {
    props: {
      blogData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllBlogIds();

  return {
    paths,
    fallback: false,
  };
}