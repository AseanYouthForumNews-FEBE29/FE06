import  NewsCard  from '../components/NewsCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

function News({news}) {
    // const [isLoading, setIsLoading] = useState(true);
    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     axios("https://ayfnfebe29.up.railway.app/news/all").then((res) => {
    //       setNews(res.data);
    //       setIsLoading(false);
    //     });
    //   }, []);

    //   console.log(news);

return(
    <>
    <div className='container my-3'>
        <div className='row'>
            {news.map((article, id) => {
                return <div className='col-md-4 mt-2' >
                    <NewsCard
                        key={id}
                        id={article.id}
                        image={article.image}
                        title={article.title}
                        summary={article.summary}
                    />
                </div>
            })}
        </div>
    </div>
    </>
)
}

export default News;