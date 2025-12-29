import '../index.css'
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl mt-10 mb-40 text-center'>My name is Noah Strasler, <br/>Welcome to My Personal Website!</h1>
      <div className= 'flex  '>
        <MyContactInfoInput />
      </div>
    </div>
  )

}

export default Home
