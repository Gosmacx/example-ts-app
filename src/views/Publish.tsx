import { useEffect, useState } from 'react'
import Post from '../components/Post'
import { PostType } from '../models'

function App() {

  let [timeline, setTimeLine] = useState<object[]>([])

  // The posts are called from the api when the page is rendered
  useEffect(() => {
    let cache: object[] = []

    // Get data from api
    fetch("https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee", {
      headers: {
        'Accept': '*/*',
        'X-ACCESS-KEY': '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW'
      }
    })
      .then(response => response.json())
      .then(data => {
        
        // Process posts_by_date data into timeline state ( 2021-06-17, 2021-07-01 ...) 
        for (let i in data.record.posts_by_date) {
          cache.push({ time: i, posts: data.record.posts_by_date[i] });
        }
        setTimeLine(cache)
      })

  }, [])

  return (
    <div className="grow h-full px-10 overflow-y-scroll">

      {/* Status Information */}
      <section className="w-full h-14 flex items-center gap-6 " >

        <div className="flex items-center justify-center gap-3" >
          <div className="w-3 h-3 bg-[#acacac] rounded-full " ></div>
          <span>Published</span>
        </div>

        <div className="flex items-center justify-center gap-3" >
          <div className="w-3 h-3 bg-[#3ac183] rounded-full " ></div>
          <span>Scheduled</span>
        </div>

        <div className="flex items-center justify-center gap-3" >
          <div className="w-3 h-3 bg-[#f7bf38] rounded-full " ></div>
          <span>Need Approval</span>
        </div>

        <div className="flex items-center justify-center gap-3" >
          <div className="w-3 h-3 bg-[#fb6450] rounded-full " ></div>
          <span>Error</span>
        </div>

        <div className="flex items-center justify-center gap-3" >
          <div className="w-3 h-3 bg-[#67b1f2] rounded-full " ></div>
          <span>Publishing</span>
        </div>

      </section>

      {/* Timeline */}
      <section className="h-full w-full flex items-center gap-20 flex-col " >

        {
          timeline.map((item: any, index: number) => {
            return (
              <div key={index} className='flex items-center flex-col gap-4 w-full ' >

                {/* Date of activities */}
                <span className='w-full self-start text-[#959595] font-semibold text-xl ' >{item.time}</span>

                {/* POSTS */}
                <div className='w-full flex items-start gap-4 flex-wrap' >
                  {item.posts.map((post: PostType, index: number) => {
                    return <Post post={post} key={index} />
                  })
                  }
                </div>

              </div>
            )
          })
        }

      </section>
      
    </div>
  )
}

export default App
