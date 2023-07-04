import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta 
          name="description"
          content="A list of all programming-related tutorails and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
    // revalidate: 60
  }
}

export default AllPostsPage;