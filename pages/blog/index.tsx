import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { posts } from "../../blogPosts/posts";

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Mike&apos;s Carpet Cleaning LTD</title>
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
            <link rel="canonical" href="https://www.excelcarpetcleaningwa.com" />
            <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta property="og:title" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta
            property="og:url"
            content="https://www.excelcarpetcleaningwa.com"
            />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="1500" />
            <meta property="og:image:height" content="195" />
            <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com" />
            <meta name="twitter:title" content="Mike&apos;s Carpet Cleaning LTD" />
            <meta name="twitter:image" content="/logo.webp" />
            <meta
            name="twitter:url"
            content="https://www.excelcarpetcleaningwa.com"
            />
            <meta name="twitter:card" content="summary" />
            <meta
            name="description"
            content="Carpet, tile, and upholstery cleaning service company serving the Washington plateau area from Maple Valley to Sammamish and beyond!"
            />
        </Head>
        <section>
            <h1>Mike&apos;s Carpet Cleaning Blog</h1>
        </section>
        <main>
            {posts && posts.map((post, index) => <Link key={index} href={`/blog/${post.title.replaceAll(" ", "-")}`}>{post.title}</Link>)}
        </main>
    </>
  );
};

export default Home;
