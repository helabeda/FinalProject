import React from 'react'
import "./List.css"
import { useHistory } from 'react-router-dom';
const OwnerCard = ({ Owner, setOpen, open, setBookId }) => {
  
  const history = useHistory();
  const handleCLick = (e) => {
    e.preventDefault();
    if (open.length < 0) {
      setOpen("");
    } else {
      setOpen("open");
    }
    setBookId(Owner._id);
    history.push(`/dashboard/booked/${Owner._id}`);
  };

  
  return (
    <tr>
      <td>
        {Owner && Owner.First_name}
        {Owner && Owner.Last_name}
      </td>
      <td>{Owner && Owner.Email}</td>
      <td className="select">
        <a className="button" href="#" onClick={handleCLick}>
          Select
        </a>
      </td>
    </tr>
  );
};

export default OwnerCard
