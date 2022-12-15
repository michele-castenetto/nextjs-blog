

export default function handler(req, res) {

    const profile = {
        username: "admin",
        role: "administrator",
        authorizations: []
    };

    res.status(200).json(profile)

}

