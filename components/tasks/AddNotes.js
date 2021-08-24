import moment from "moment";
import React, { useState } from "react";
const AddNotes = () => {
  const [firstWeek, setFirstWeek] = useState({
    hours: 0,
  });
  function weekNumber() {
    const today = moment();
    // const week = today.startOf("week");
    // const endweek = today.endOf("week");
    // if (currentWeek !== week) setFirstWeek();
    let week = today.endOf("week").fromNow(0);
    if (week) return 0;
  }
  return weekNumber();
};
export default AddNotes;
