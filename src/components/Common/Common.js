import axios from "axios"

export const social_media = [
    {
        _id: 'd1',
        Symbol: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/abhishek-mishra-342494237/',
        name: "LINKEDIN"
    },
    {
        _id: 'd2',
        Symbol: "logo-github",
        link: 'https://github.com/Abhishek-Mishra-77',
        name: "GITHUB"
    },
    {
        _id: 'd3',
        Symbol: "logo-whatsapp",
        link: 'https://wa.me/8577887978',
        name: "WHATSAPP"
    },
]

export const getUserDetails = async () => {
    try {
        const token = JSON.parse(localStorage.getItem('token'));
        const res = await axios.get(`${process.env.REACT_APP_SERVER_IP}/auth/singleuser`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

