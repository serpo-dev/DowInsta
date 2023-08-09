function get_file_name(extension = "txt") {
    const date = new Date();

    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const dateString = `${milliseconds}-${seconds}-${minutes}-${hours}-${day}-${month}-${year}`;

    const name = `DowInsta-${dateString}.${extension}`;
    return name;
}