// https://positionstack.com/documentation

// http://api.positionstack.com/v1/reverse
//     ? access_key = YOUR_ACCESS_KEY
//     & query = 40.7638435,-73.9729691

interface Args {
    lat: string;
    long: string;
}

export const fetchAPIReverseGeocoding = async ({ lat, long }: Args) => {
    try {
        const data = await fetch(
            `http://api.positionstack.com/v1/reverse?access_key=${process.env.STICKPOINT_ACCESS_KEY}&query=${lat},${long}`
        );

        return data.json();
    } catch (err) {
        throw err;
    }
};
