export  const getDateString = (name) => {
    const date = new Date().toISOString().replace(/[^a-zA-Z0-9]/g, "");
    const newName = date+name;
    return newName.toLowerCase();
}