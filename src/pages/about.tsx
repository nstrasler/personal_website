import '../index.css'
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-20">
      <div className="my-20 bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-400 flex flex-col items-center mx-4 md:mx-32 lg:mx-64 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">About Me!</h1>
        <div className="text-center text-base leading-relaxed break-words whitespace-pre-line">
          You don’t have to read all this but if you’d like to know more about me feel free to press on.
          <br /><br />
          I am a current computer science student at Grand Valley University looking to graduate this May 2026.
          <br /><br />
          I personally value good people, good work, and ability to understand how things work under the surface. This rings true for me more and more as I get older and witness how technology and the world changes. (Looking at you AI revolution)
          <br /><br />
          Even in typing this bio I am being bombarded with gemini reeeeeally wanting to give me a hand.
          <br /><br />
          I love technology, the sphere around it, and the whole ecosystem of progress it's a part of. I hope that one day I’ll be in a position to contribute to that progress!
        </div>
      </div>
      <div className="mb-20 bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-400 flex flex-col items-center max-w-2xl w-full">
        <MyContactInfoInput />
      </div>
    </div>
  );
}

    export default About