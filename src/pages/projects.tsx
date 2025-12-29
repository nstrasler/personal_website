import '../index.css'
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>
        <p className="mb-4">
          Noah Strasler</p>
        <p>
          Projects Page</p>
      </h1>
      <div className='flex'>
        <MyContactInfoInput />
      </div>
    </div>
  )
}

export default Projects