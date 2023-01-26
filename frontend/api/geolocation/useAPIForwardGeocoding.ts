// https://positionstack.com/documentation

// http://api.positionstack.com/v1/forward
//     ? access_key = YOUR_ACCESS_KEY
//     & query = 1600 Pennsylvania Ave NW, Washington DC

interface Args {
    city: string;
    street: string;
}

export const fetchAPIForwardGeocoding = async ({ city, street }: Args) => {
    try {
        const data = await fetch(
            `http://api.positionstack.com/v1/reverse?access_key=${process.env.STICKPOINT_ACCESS_KEY}&query=${city}, ${street}`
        );

        return data.json();
    } catch (err) {
        throw err;
    }
};
