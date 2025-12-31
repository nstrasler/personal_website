import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { ScrollArea } from "@/components/ui/scroll-area"

export function MyEntryViewer() {
  const [entries, setEntries] = useState<Array<{ id: string;[key: string]: any }>>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        getDocs(collection(db, 'contactMessages')).then(querySnapshot => {
          setEntries(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
      } else {
        setEntries([]);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h1 className='mb-8 text-2xl text-center'>Submissions</h1>
      <ScrollArea className="rounded-md border p-4 h-80 w-full max-w-xl sm:h-96 sm:max-w-2xl bg-zinc-900 dark:bg-zinc-900">
        {entries.length === 0 ? (
          <div>No entries found.</div>
       ) : (
        entries.map(entry => (
        <div key={entry.id} className="p-4 border border-border rounded-md w-full flex flex-col mb-4">
          <div><span className="font-semibold">{entry.name}</span></div>
          <div><span className="font-semibold">{entry.email}</span></div>
          <div className="font-semibold">Message:</div>
          <div className="break-all whitespace-pre-line w-full">{entry.message}</div>
        </div>
        ))
    )}
      </ScrollArea>
    </div>
  );
}
