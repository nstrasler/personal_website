
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export function MyEntryViewer() {

  const [entries, setEntries] = useState<Array<{ id: string;[key: string]: any }>>([]);

  useEffect(() => {

    async function fetchEntries() {
      const querySnapshot = await getDocs(collection(db, 'contactMessages'));
      setEntries(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchEntries();
  }, []);


  return (
    <div>    
      {entries.map(entry => (
        <div key={entry.id} >
          {JSON.stringify(entry)}
        </div>
      ))}
    </div>
  );
}
