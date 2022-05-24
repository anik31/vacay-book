export function getCustomDate(createdAt){
    const monthNames = ["Jan", "Feb", "March", "Apr", "May", "June", "July", 
    "Aug", "Sept", "Oct", "Nov", "Dec"]; 
    const date = new Date(createdAt);
    const customDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return customDate;
};
