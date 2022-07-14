import Link from 'next/link'
import Date from '../../components/Date/Date';

import { getSortedBlogsData } from '../../lib/blogs';

import styles from './Blogs.module.scss'

import { useState } from 'react';
import TagButton from '../../components/TagButton/TagButton';

export default function Blogs({ allBlogsData }) {
  const [category, setCategory] = useState('Tech');

  return (
    <>
      <div className={styles.blogs}>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => setCategory("All")} ><TagButton name='All' selected={category === 'All'} /></div>
          <div className={styles.button} onClick={() => setCategory("Tech")} ><TagButton name='Tech' selected={category === 'Tech'} /></div>
          <div className={styles.button} onClick={() => setCategory("Other")} ><TagButton name='Other' selected={category === 'Other'} /></div>
        </div>
        {allBlogsData.filter((blog) => {
          if (category === "All") {
            return blog
          } else if (blog.category === category) {
            return blog
          }
        }).map(({ id, date, title, description }) => (
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
      </div>
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
