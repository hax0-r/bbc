import React, { useContext } from 'react'
import { CARDS, SUB_CARDS } from '../Data/Home'
import { pollData } from '../Data/PollVotes'
import Votes from '../components/Votes'
import { NavbarContext } from '../Context/Navbar'

const Home = () => {

  const pollDataFilter = pollData.filter((item, index) => (
    item.category === 'Business'
  ))

  const { navTabs } = useContext(NavbarContext)

  return (
    <>
      <div className="">
        <div className="md:px-10 px-5 fastFadeIn">
          <div className="max-w-7xl w-full pb-16 pt-5 mx-auto">
            <div className="mx-auto  flex items-start md:gap-5 gap-10 xl:flex-row flex-col">

              <div className="flex items-start md:gap-5 gap-10 w-full md:flex-row flex-col-reverse">
                <div className="md:max-w-[30%] w-full">
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6">
                    {
                      CARDS.map(({ id, img, title, description, time, country, link }) => (
                        <div key={id} className="group">
                          <a href={link}>
                            <img src={img} className="w-full rounded-sm" alt={title} />
                            <a href={link} className="pt-2 group-hover:underline block leading-tight font-semibold">
                              {title}
                            </a>
                            <p className="text-zinc-700 text-xs pt-3">{description}</p>
                            <p className="text-zinc-700 text-[10px] pt-3 flex items-center gap-2">
                              {time} <span className="text-zinc-500">|</span> {country}
                            </p>
                          </a>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="md:max-w-[70%] w-full">
                  <div className="group">
                    <a href="">
                      <img src="Images/Home/img2.webp" className="w-full rounded-sm" />
                      <a href="" className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> Israel says it killed Hezbollah commander in Beirut as air strikes continue</a>
                      <p className="text-zinc-700 text-xs pt-3">The IDF says it killed Suhail Hussein Husseini yesterday; meanwhile, rocket fire from Lebanon into Israel continues.</p>
                    </a>
                  </div>

                  <ul className=' space-y-1 md:mt-10 mt-5 list-disc pl-5'>
                    <li><a href="" className='text-sm hover:underline font-medium'> With the Middle East in flames, what will it take to end the conflict?</a></li>
                    <li><a href="" className='text-sm hover:underline font-medium'>Gaza in maps: How a year of war has drastically changed the territory</a></li>
                    <li><a href="" className='text-sm hover:underline font-medium'>Israel remembers victims of 7 October attack a year on</a></li>
                  </ul>
                </div>
              </div>

              <div className="xl:max-w-[25%] w-full">
                <div className="grid xl:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  {
                    SUB_CARDS.map(({ id, title, description, time, country, link }) => (
                      <div key={id} className="group">
                        <a href={link}>
                          <a href={link} className="pt-2 group-hover:underline block leading-tight font-semibold">
                            {title}
                          </a>
                          <p className="text-zinc-700 text-xs pt-3">{description}</p>
                          <p className="text-zinc-700 text-[10px] pt-3 flex items-center gap-2">
                            {time} <span className="text-zinc-500">|</span> {country}
                          </p>
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-7xl w-full pb-8 mx-auto">
            <div className="w-full h-0.5 bg-zinc-800 rounded-full"></div>
            <h2 className='font-semibold py-2'>Only from the BBC</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5">

              <div className="group">
                <a href="">
                  <img src="Images/Home/bbc1.webp" className="w-full rounded-sm" />
                  <a href="" className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> 'Why don't we build out of beer cans not trees?'</a>
                  <p className="text-zinc-700 text-xs pt-3">New Mexico's "Earthship" homes represent a 50-year-old "aha" moment in green design,
                    and they're still a novel way to stay in the desert where they withstand extreme heat and
                    cold.</p>
                </a>
              </div>
              <div className="group">
                <a href="">
                  <img src="Images/Home/bbc1.webp" className="w-full rounded-sm" />
                  <a href="" className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> Why Joker 2's mega budget spelled disaster</a>
                  <p className="text-zinc-700 text-xs pt-3">New Mexico's "Earthship" homes represent a 50-year-old "aha" moment in green design,
                    and they're still a novel way to stay in the desert where they withstand extreme heat and
                    cold.</p>
                </a>
              </div>

            </div>

          </div>

          {
            navTabs === "home" && (
              <div className="max-w-7xl pb-8 md:pt-8 w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {pollDataFilter.slice(0, 6).map((poll, index) => (
                  <Votes key={index} poll={poll} />
                ))}
              </div>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Home