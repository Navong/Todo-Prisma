import prisma from '@/lib/prisma'

const GetDate = () => {
  const date = new Date()

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }

  return date.toLocaleString('en-US', options)
}

export default GetDate

