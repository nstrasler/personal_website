import '../index.css'
import { useEffect, useState } from 'react';
import { SignIn } from '@/components/sign_in.tsx';
import { MyEntryViewer } from '@/components/my_entry-viewer';
import { auth } from '@/firebase';

function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div></div>
      </div>
    );
  }

  return (

    <div className='flex flex-col justify-center items-center my-20 min-h-screen'>
      <div className="bg-zinc-900/80 backdrop-blur-sm bg rounded-xl shadow-lg p-8 border 
      border-gray-400 flex flex-col items-center justify-center h-[600px] max-h-[90vh] w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {!user && (
            <>
              <h1 className='mb-10 text-3xl'>Sign In to View Entries</h1>
              <SignIn />
            </>
          )}
          {user && (
            <div >
              <MyEntryViewer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin