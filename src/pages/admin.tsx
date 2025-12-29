import '../index.css'
import { SignIn } from '@/components/sign_in.tsx';
import { MyEntryViewer } from '@/components/my_entry-viewer';

function Admin() {
  return (
    <div className = "flex flex-col items-center justify-center h-screen">
      <h1>
        <p className="mb-4">
          Noah Strasler</p>
        <p>
          Admin Page</p>
      </h1>
      <SignIn />
      <MyEntryViewer />
    </div>
  )
}

export default Admin