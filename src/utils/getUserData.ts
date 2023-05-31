function getUserData() {
  const data = JSON.parse(localStorage.getItem('data') || '');
  console.log(data);
  return data;
}

export default getUserData;
