import { useState, useEffect } from "react";

import GuestsList from "./guests/GuestsList";
import GuestDetails from "./guests/GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState();

  /**
   * Application
   */
  return (
    <>
      {!guestId ? (
        <GuestsList setGuestId={setGuestId} />
      ) : (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      )}
    </>
  );
}
