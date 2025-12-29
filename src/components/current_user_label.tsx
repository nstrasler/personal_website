import { useEffect, useState } from "react";
import { auth } from "@/firebase";

function CurrentUserLabel() {
  const [userEmail, setUserEmail] = useState<string>("Anonymous");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUserEmail(user?.email || "Anonymous");
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="rounded-sm p-4 border border-border">
      <div className="text-sm text-white">Current User: {userEmail}
      </div>
    </div>
  );
}

export default CurrentUserLabel;