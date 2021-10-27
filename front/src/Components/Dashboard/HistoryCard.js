import React from 'react'
import { useHistory } from "react-router-dom";


const HistoryCard = ({history, setHistoryId,open,setOpen}) => {
  const his = useHistory();
  const handleCLick = (e) => {
    e.preventDefault();
    if (open.length < 0) {
      setOpen("");
    } else {
      setOpen("open");
    }
    setHistoryId(history._id);
    his.push(`/dashboard/history/${history._id}`);
  };
  return (
    <tr>
      <td>
        {history && history.First_name}{ " "}
        {history && history.Last_name}
      </td>
      <td>{history && history.Email}</td>
      <td class="select" onClick={handleCLick}>
        <a class="button" href="#">
          Select
        </a>
      </td>
    </tr>
  );
};

export default HistoryCard
