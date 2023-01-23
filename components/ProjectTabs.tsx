import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
  '3': ' from-pink-500 via-red-500 to-yellow-500',
  '4': ' from-yellow-100 via-yellow-300 to-yellow-500',
  '5': ' from-indigo-200 via-red-200 to-yellow-100',
  '6': ' from-green-200 via-green-400 to-purple-700',
  '7': ' from-red-200 to-red-600',
  '8': ' from-green-300 via-yellow-300 to-pink-300',
  '9': ' from-pink-400 to-pink-600',
  '10': ' from-sky-400 via-rose-400 to-lime-400',
}

import Container from './Container'
import projectsData from '@/data/projectsData'
const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: '/static/images/screenshots/payroll.png',
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: '/static/images/screenshots/expenses.png',
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: '/static/images/screenshots/vat-returns.png',
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: '/static/images/screenshots/reporting.png',
  },
]

export default function ProjectTabs() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  function onMediaQueryChange({ matches }) {
    setTabOrientation(matches ? 'vertical' : 'horizontal')
  }
  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-white pb-28 dark:bg-background-color"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={'/static/images/primary-features-background.jpg'}
          alt=""
          width={2245}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="text-3xl font-extrabold tracking-tight text-background-color dark:text-white sm:text-4xl md:text-6xl"
          >
            Domains I have worked on in the past
          </h2>
          <p className="mt-6 text-lg tracking-tight text-background-color dark:text-white">
            Things I have made in the past... Mostly for Startups and small businesses.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {projectsData.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-background-color text-background-color dark:bg-white lg:bg-background-color/10 lg:ring-1 lg:ring-inset lg:ring-white/10 lg:dark:bg-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-white/10 lg:hover:bg-white/5': selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            {
                              ' font-bold text-white dark:text-background-color lg:text-background-color lg:dark:text-white':
                                selectedIndex === featureIndex,
                              'text-background-color dark:text-white lg:text-background-color lg:dark:text-white':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm dark:text-white lg:block', {
                          'text-background-color dark:text-white': selectedIndex === featureIndex,
                          'text-background-color ': selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-background-color/10 ring-1 ring-inset ring-white/10 dark:bg-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        layout="fill"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
