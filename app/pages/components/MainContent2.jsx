import React from 'react'
import WelcomeSection from './dashboard/WelcomeSection'
import FilterSection from './dashboard/FilterSection'
import StatsCards from './dashboard/StatsCards'
import ChartsSection from './dashboard/ChartsSection'
import TopPerformers from './dashboard/TopPerformers'
import AddQuestionSection from './dashboard/AddQuestionSection'

const MainContent2 = () => {
  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      <div className="flex gap-6">
        <div className="w-1/2">
          <WelcomeSection />
        </div>
        <div className="w-1/2">
          <FilterSection />
        </div>
      </div>
      <StatsCards />
      <ChartsSection hideRevenue={true} />
      <TopPerformers />
      <AddQuestionSection />
    </div>
  )
}

export default MainContent2