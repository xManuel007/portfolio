import React from 'react'

const TimelineContainer = ({children, year}) => {
  return (
    <div data-aos='fade-left' className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <time className="text-lg font-semibold text-gray-900 dark:text-white">{year}</time>
      <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        {children}
      </ol>
    </div>
  )
}

export default TimelineContainer
