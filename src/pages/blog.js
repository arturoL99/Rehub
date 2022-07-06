import React from "react";
import ArticleContainer from "../components/blog/article-container";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";    
import Style from "../components/blog/artStyle.scss"

function Blog(){
    return(
        <>
            <Navbar />
            <section id="content">
                <ArticleContainer />
            </section>            
            <Footer />
        </>
    )
}

export default Blog;