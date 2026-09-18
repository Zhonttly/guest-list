import { getGuest } from "../api/api";
import { useState, useEffect } from "react";

const GuestDetails = ({ guestId, setGuestId }) => {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      const data = await getGuest(guestId);
      setGuest(data);
    };

    fetchGuest();
  }, [guestId]);

  /**
   * If guest data is not currently retrieved
   */
  if (!guest) {
    return <p>Loading guest...</p>;
  }

  return (
    <div>
      <h1>Guest Details</h1>
      <div>
        <p>Name: {guest.name}</p>
        <p>Email: {guest.email}</p>
        <p>Phone: {guest.phone}</p>
        <p>Bio: {guest.bio}</p>
        <p>Job: {guest.job}</p>
        <button onClick={() => setGuestId(null)}>Return</button>
      </div>
    </div>
  );
};

export default GuestDetails;
