import React, { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({
  title = 'Stay updated, receive the latest post straight to your mailbox',
}) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successful! 🎉 You are now subscribed.')
  }

  return (
    <div className="group relative">
      <div className="animate-tilt absolute -inset-px animate-pulse rounded-2xl bg-gradient-to-r from-primary-500 via-[#3B82F6] to-[#9333EA] blur-md transition duration-1000 group-hover:-inset-1 group-hover:animate-none group-hover:opacity-100 group-hover:duration-1000"></div>
      <div className="relative h-full w-full rounded-2xl bg-white px-6 py-6 dark:bg-background-color sm:py-8 sm:px-12">
        <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
        <form className="relative flex flex-col" onSubmit={subscribe}>
          <div>
            <label className="sr-only" htmlFor="email-input">
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-xl px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="email-input"
              name="email"
              placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
              ref={inputEl}
              required
              type="email"
              disabled={subscribed}
            />
          </div>
          <div className="mt-2 flex w-full rounded-xl shadow-sm">
            <button
              className={`w-full rounded-xl bg-background-color py-2 px-4 font-medium text-white dark:bg-gray-100 dark:text-black ${
                subscribed ? 'cursor-default' : 'hover:bg-gray-800 dark:hover:bg-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Thank you!' : 'Sign up'}
            </button>
          </div>
        </form>

        {error && <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400">{message}</div>}
      </div>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800">
      <NewsletterForm title={title} />
    </div>
  </div>
)
