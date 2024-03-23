/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getNews } from "../service/api";

export default function Cards() {
    const [news, setNews] = useState([]);

    const dailyNews = async () => {
        try {
            const res = await getNews();
            setNews(res.data.data);
        } catch (err) {
            console.log('Error while displaying cards ', err.message);
        }
    }

    useEffect(() => {
        dailyNews();
    }, []);

    return (
        <div>
            {news.map((data) => (
                <Card key={data._id} data={data} />
            ))}
        </div>
    );
}

function Card({ data }) {
    return (
        <div className="card mb-3 d-flex mt-5" style={{ width: '900px', margin: '0 auto', padding: '8px', fontWeight: '300' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.url} className="img-fluid rounded-start" alt="News" style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }} />
                </div>

                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text text-muted">Author: {data.author}</p>
                        <p className="card-text text-muted">Publisher: {data.publisher}</p>
                        <p className="card-text text-muted">Timestamp: {new Date(data.timestamp).toLocaleString()}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href={data.link} target="_blank" rel="noopener noreferrer" >Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


// title: 'Man stabs TN Police sub-inspector over month-old fine for drunk driving',
// author: 'Shreyasi Banerjee',
// description: 'A female Tamil Nadu Police sub-inspector was injured after she was stabbed by a man while on duty in Tirunelveli. Police reportedly claimed the accused was enraged as the sub-inspector had booked him one month ago for drunk driving. The accused has been arrested, CM MK Stalin said, adding that he has ordered a high-quality medical treatment for the sub-inspector.',
// url: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/04_apr/24_sun/img_1650785523938_962.jpg',
// timestamp: '2022-04-24T07:54:25.000Z',
// link: 'https://www.thequint.com/amp/story/news/india/man-stabs-tamil-nadu-cop-over-month-old-fine-drunk-driving-sub-inspector?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts',
// publisher: 'The Quint'