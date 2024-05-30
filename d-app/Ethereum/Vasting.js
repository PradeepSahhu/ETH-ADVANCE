import ToNumber from "./dateToNumber";
function CurrentVasting() {
  let dateObj = new Date();

  var year = dateObj.getFullYear();
  var month = dateObj.getMonth() + 1;
  var date = dateObj.getDate();

  const properCurrentDate = year + "-" + month + "-" + date;

  console.log(properCurrentDate);

  const res = ToNumber(properCurrentDate);
  console.log(res);
  return res;
}

export default CurrentVasting;
