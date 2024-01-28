const express=require('express')
const router=express.Router()
const axios=require('axios')


router.get('/article',async (req,res)=>{
    try {
        const apiKeyNews = 'eefa78a34c034fc38fe31f8e92c542cc';
        const response = await axios.get(`https://newsapi.org/v2/everything?q=travels&apiKey=${apiKeyNews}`);

        // Extract information from individual articles
        const articlesData = response.data.articles.slice(0, 5).map(article => ({
            author: article.author,
            title: article.title,
            description: article.description,
            content: article.content,
            url: article.url
        }));

        res.json(articlesData);
    } catch (error) {
        console.log('Error', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
;
})
module.exports=router