import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export function MyEntryViewer() {
  const [entries, setEntries] = useState<Array<{ id: string; [key: string]: any }>>([]);

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
      {entries.map(entry => (
        <div key={entry.id}>{JSON.stringify(entry)}</div>
      ))}
    </div>
  );
}
