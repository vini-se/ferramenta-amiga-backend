import app from "./app";

app.listen(process.env.HTTP_PORT, () => {
    console.log("Server is running on port: ", process.env.HTTP_PORT);
}).on('error', (e) => {
    console.error('Error happened: ', e.message);
});