import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { posts } from "../../blogPosts/posts";

import styles from "../../blogStyles/Blog.module.css";

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Mike&apos;s Carpet Cleaning LTD Blog</title>
            <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="canonical" href="https://www.mikescarpetcleaningltd.com/blog" />
            <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta property="og:title" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta
            property="og:url"
            content="https://mikescarpetcleaningltd.com"
            />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="1500" />
            <meta property="og:image:height" content="195" />
            <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta itemProp="url" content="https://mikescarpetcleaningltd.com" />
            <meta name="twitter:title" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta name="twitter:image" content="/logo.webp" />
            <meta
            name="twitter:url"
            content="https://mikescarpetcleaningltd.com"
            />
            <meta name="twitter:card" content="summary" />
            <meta
            name="description"
            content="A collection of the best tips, tricks and more surrounding carpet cleaning. Come check out all of the articles we've got and learn all about carpet cleaning."
            />
        </Head>
        <section className={styles.header}>
            <h1>Mike&apos;s Carpet Cleaning Blog</h1>
        </section>
        <main className={styles.feed}>
          <div className={styles.maxWidth}>
            <h2>Featured Articles</h2>
            <div className={styles.feedGrid}>
              {posts && posts.map((post, index) => <Link key={index} href={`/blog/${post.title.replaceAll(" ", "-")}`}>
                  <div className={styles.post}>
                    <div 
                      className={styles.featuredImage} 
                      dangerouslySetInnerHTML={post.featured_image ? 
                        { __html: post.featured_image } : 
                        { __html: '<img alt="no image found" />'}}></div>
                    <a>{post.title}</a>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </div>
                </Link>
                )}
            </div>
          </div>
        </main>
    </>
  );
};

export default Home;
