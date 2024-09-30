import Searchbar from '@/components/mollecules/Searchbar'
import BlogList from '@/components/organism/BlogList'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import { getBlog } from '@/helpers'
import { useSearchBlogQuery } from '@/hooks'

import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'

const meta = {
  title: 'Blog',
  description: `I write about technology, frontend development, AI, and anything else that interests me. I also blog about technology news, current events, quantum computing and the state of computation. Use the search below to filter by title, or find a specific topic.`
}

interface BlogPageProps {
  latestPost: Array<Blog>
  allPost: Array<Blog>
}

const BlogPage: NextPage<BlogPageProps> = ({ latestPost = [], allPost = [] }) => {
  const { query, handleChange, filteredBlog } = useSearchBlogQuery(allPost)

  return (
    <Layout as='main' {...meta}>
      <Hero {...meta} />

      <Searchbar onChange={handleChange} value={query} placeholder='Search Posts..' />

      {query.length === 0 && <BlogList blogs={latestPost} title='Latest Post' className='mb-20' layout='column' />}
      {query.length === 0 && <BlogList blogs={allPost} title='All Post' layout='column' />}

      {query.length > 0 && filteredBlog.length > 0 ? (
        <BlogList blogs={filteredBlog} title='Search Result' layout='column' />
      ) : null}

      {query.length > 0 && filteredBlog.length === 0 ? <p>No result found</p> : null}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlog()

  return {
    props: {
      latestPost: blogs
        // map the blogs and add slug property,
        .map((b) => ({ ...b.data, slug: b.slug }))
        // sort descending by date
        .sort((a, b) =>
          new Date(a.published) > new Date(a.published) ? 1 : new Date(a.published) < new Date(b.published) ? -1 : 0
        )
        // cut the first 3 and so on, leave only 2 latest post
        .slice(0, 2),
      allPost: blogs.map((b) => ({ ...b.data, slug: b.slug }))
    }
  }
}

export default BlogPage