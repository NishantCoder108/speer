export const formatDateTime = (originalDateString) => {
    const formatDate = (dateString) => {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = ("0" + date.getMinutes()).slice(-2);

        return `${day} ${month} ${year} ${hours}:${minutes}`;
    };

    const formattedDate = formatDate(originalDateString);
    return formattedDate;
};

export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
    ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    return formattedTime;
};
