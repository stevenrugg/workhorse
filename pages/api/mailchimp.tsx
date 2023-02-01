import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      },
    ],
  }
  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID as string
    const URL = `https://us11.api.mailchimp.com/3.0/lists/${audienceId}`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`,
      },
      body: JSON.stringify(mailChimpData),
    })
    const data = await response.json()
    if (data.errors[0]?.error) {
      return res.status(401).json({ error: data.errors[0].error })
    } else {
      res.status(200).json({ success: true })
    }
  } catch (e) {
    res.status(401).json({ error: 'Something went wrong, please try again later.' })
  }
}
