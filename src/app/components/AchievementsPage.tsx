import AchievementsListItem from "./AchievementsListItem";

export default function AchievementsPage() {
  return (
    <div id="experience" className=" min-h-screen flex flex-col justify-center items-center  ">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <p className="text-2xl max-[500px]:text-xl font-semibold mb-6 text-center">Achievements</p>
        <div className="grid grid-cols-1  gap-4 justify-evenly max-sm:w-11/12 max-[950px]:w-4/5 w-4/5 mx-auto">

          <div className="md:space-x-2 max-md:space-y-4  ">
            <ul>
              <AchievementsListItem text="Google Venkat Scholar 2022 - Selected as one of the 14 recipients of the Google Venkat Scholarship among 20,000 applicants across India." />
              <AchievementsListItem text="5-Star Golden badge in C++ and SQL on HackerRank." />
              <AchievementsListItem text="Secured Rank-1 in State Level Talent Search Examination – 2015." />
              <AchievementsListItem text="Foundation for Excellence Scholar, 2019 - 2023" />
              <AchievementsListItem text="Kashmir Education Initiative Scholar, 2014 - 2020." />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}