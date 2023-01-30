import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const path = 'https://emailoctopus.com/api/1.6/lists/:12ba7324-9fc6-11ed-8233-e7039aa74475/contacts'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email_address } = req.body

  if (!email_address) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID
    const API_KEY = process.env.EMAILOCTOPUS_API_KEY
    const API_URL = process.env.EMAILOCTOPUS_URL

    // Send request to emailoctopus
    const data = { api_key: API_KEY, email_address }

    const response = await fetch(`${API_URL}lists/:${LIST_ID}/contacts`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
