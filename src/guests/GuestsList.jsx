import { getGuests } from "../api/api";
import { useState, useEffect } from "react";

const GuestsList = ({ setGuestId }) => {
  const [guests, setGuests] = useState([]);

  /**
   * Retrieve initial guests list
   */
  useEffect(() => {
    const fetchGuests = async () => {
      const data = await getGuests();
      setGuests(data);
    };

    fetchGuests();
  }, []);

  return (
    <div className="guestsList">
      <h1>Guest List</h1>
      <table className="guestsTable">
        <thead>
          <tr className="guestsTable_header">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => {
            return (
              <tr
                key={guest.id}
                className="guestsTable_data"
                onClick={() => setGuestId(guest.id)}
              >
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuestsList;
