import '../index.css'
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center h-screen my-20'>
      <div className="my-40 bg-zinc-900/80 backdrop-blur-sm bg rounded-xl shadow-lg p-8 
      border border-gray-400 flex flex-col items-center mx-4 md:mx-32 lg:mx-64">
        <h1 className = "text-3xl font-bold text-center mb-6">
            Projects Page
        </h1>
        <p className="text-center text-base leading-relaxed break-words whitespace-pre-line">
            Current project is to make the background of this cursor image transparent. 
            <br/>(it really shouldn't be this hard to do without photoshop)
            <br/><br/>
            "YOUR PROJECT HERE".
            <br/>(Seriously, give me a project to work on!)
        </p>
      </div>
      <div className="mb-20 bg-zinc-900/80 backdrop-blur-sm bg rounded-xl shadow-lg p-8 border border-gray-400 flex flex-col items-center">
        <MyContactInfoInput />
      </div>
    </div>
  )
}

export default Projects