import Link from 'next/link'
import Date from '../../components/Date/Date';

import { getSortedBlogsData } from '../../lib/blogs';

import styles from './Blogs.module.scss'

export default function Blogs({ allBlogsData }) {
  return (
    <>
      {allBlogsData.map(({ id, date, title, description }) => (
        <article className={styles.article} key={id}>
          <Link href={`/blogs/${id}`}>
            <a className={styles.blogtitle}>{title}</a>
          </Link>
          <p className={styles.lightText}>
            <Date dateString={date} />
          </p>
          <p className={styles.description}>{description}</p>
        </article>
      ))
      }
    </>
  )
}

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();

  return {
    props: {
      allBlogsData,
    },
  };
}
