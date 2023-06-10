function getUserData() {
  const data = JSON.parse(localStorage.getItem('data') || '{}');
  return data;
}

export default getUserData;
