import React, {useContext,useEffect} from 'react';
import newsContext from '../../context/News/NewsContext';

const NewsList = ()=>{
    const context = useContext(newsContext);
    useEffect(()=>{
        context.getNews();
    },[])

    return (
        <>
        <div className='list-group h-100'>
            {
                context.news.length
                ?context.news.map((news)=>(
                    <a 
                    key={news.id}
                    href ="#!"
                    onClick={()=>context.getDescription(news.id)}
                    className="list-group-item list-group-item-action text-truncate"
                    >
                        {news.title}
                    </a>
                )):null
            }
        </div>
        </>
    );
}
export default NewsList;