export const eventTypeOptions = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Rabbit", value: "rabbit" },
    { label: "Mouse", value: "mouse" },
    { label: "Snake", value: "snake" },
    { label: "Bird", value: "bird" },
    { label: "Other", value: "other" },
];

export function formatDateTimeDisplay(datetime) {
    const now = new Date();
    const diffTime = Math.abs(now - datetime);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const hours = datetime.getHours().toString().padStart(2, '0');
    const minutes = datetime.getMinutes().toString().padStart(2, '0');
    const day = datetime.getDate().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;

    var date = null;
    if (diffDays === 0) {
        date = "Today";
    } else if (diffDays === 1) {
        date = "Yesterday";
    } else if (diffDays < 4) {
        date = `${diffDays} days ago`;
    } else {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Dec"];

        const monthIndex = datetime.getMonth();
        const year = datetime.getFullYear().toString();

        date = `${day} ${months[monthIndex]} ${year}`;
    }
    
    return `${date} at ${time}`
}