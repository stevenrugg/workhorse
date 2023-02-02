import mailchimp from '@mailchimp/mailchimp_marketing'
import { NextApiResponse, NextApiRequest } from 'next'

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: 'us11', // e.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    await mailchimp.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
