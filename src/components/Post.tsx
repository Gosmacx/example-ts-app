import logo1 from '../assets/logo1.png'
import defaultImage from '../assets/no-post-image.png'
import { PostType } from '../models'
import {
    Block,
    Copy,
    Edit,
    Image,
    Like,
    More,
    Remove,
    Video,
    Comment,
    Share,
    Eye
} from '../assets/icons/index'

function App({ post }: { post: PostType }) {

    const imageErrorHandler = (e: any) => {
        e.target.src = defaultImage
    }

    const PostMode = ({ mode }: { mode: string }) => {

        if (mode === 'photo') return <img src={Image} />

        if (mode === 'video') return <img src={Video} />

        return <></>
    }

    const StatusController = ({ type, mode }: { type: number, mode: 'photo' | 'video' }) => {

        let classNames: string = 'h-full w-10 flex items-center justify-center rounded-l-lg'

        switch (type) {
            case 0:
                classNames += ' bg-[#f7bf38] '
                break;

            case 1:
                classNames += ' bg-[#3ac183]'
                break
            case 2:
                classNames += ' bg-[#acacac]'
                break
            case 3:
                classNames += ' bg-[#67b1f2] '
                break
            case 4:
                classNames += ' bg-[#fb6450]'
                break

            default:
                return <></>
                break;
        }

        return (
            <div className={classNames} >
                <PostMode mode={mode} />
            </div>
        )

    }

    return (
        <div className='post mb-5 '  >
            <StatusController type={post.status} mode={post.entry.type} />

            <div className='content' >

                {/* Post info section */}
                <div className='post-info' >
                    <div className='user' >
                        <div className='img' >
                            <img src={logo1} />
                        </div>
                        <div className='info' >
                            <span className='leading-4 font-semibold' >Social Orientation</span>
    
                            <span className='text-sm text-gray-500' > { new Date(post.published_at).toDateString() } </span>
                        </div>
                    </div>

                    <button className='edit-menu' >
                        <img src={More} />
                        <div className='menu' >
                            <div className='link' >
                                <span className='text-sm text-[#797979] ' >Remove</span>
                                <img src={Remove} />
                            </div>
                            <div className='link' >
                                <span className='text-sm text-[#959595] ' >Edit</span>
                                <img src={Edit} />
                            </div>
                            <div className='link' >
                                <span className='text-sm text-[#959595] ' >Block</span>
                                <img src={Block} />
                            </div>
                            <div className='link' >
                                <span className='text-sm text-[#959595] ' >Repost</span>
                                <img src={Copy} />
                            </div>

                        </div>
                    </button>
                </div>

                {/* Post message */}
                <div className='w-full' >
                    <span className='text-[#959595] font-semibold ' >{post.entry.message} </span>
                </div>

                {/* Post image */}
                <div className='h-80 w-full flex items-center justify-center' >
                    <img src={post.entry.image[0]} onError={imageErrorHandler} className='h-full w-full object-cover' />
                </div>

                {/* Post actions */}
                <div className='activities' >

                    <div>
                        <img src={Like}/>
                        <span className='text-current' >0</span>
                    </div>

                    <div>
                        <img src={Comment} />
                        <span className='text-current' >0</span>
                    </div>

                    <div>
                        <img src={Share}/>
                        <span className='text-current' >0</span>
                    </div>

                    <div>
                        <img src={Eye}/>
                        <span className='text-current' >0</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default App