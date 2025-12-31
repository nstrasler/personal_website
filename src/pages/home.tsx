import MyMenuBar from '@/components/my_menu_bar';
import '../index.css'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="bg-zinc-900/80 backdrop-blur-sm bg rounded-xl shadow-lg p-8 border 
      border-gray-400 flex flex-col items-center">
        <h1 className='text-3xl mb-10 text-center font-serif'>My name is Noah Strasler,
          <br />Welcome to My Personal Website!
          <br /><br /> May the force be with you!
        </h1>
        <MyMenuBar />
      </div>
    </div>
  );
}

export default Home
