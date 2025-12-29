import '../index.css'
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';
import { SignIn } from '@/components/sign_in.tsx';

function Home() {
  return (
    <div className='flex flex-col items-center mb-20'>
      <h1 className='text-3xl mt-10 mb-4'>Welcome to My Personal Website!</h1>
      <div>
        <MyContactInfoInput />
      </div>
      <div className='flex w-full justify-center mt-10'>
        <SignIn />
      </div>
    </div>
  )

}

export default Home
