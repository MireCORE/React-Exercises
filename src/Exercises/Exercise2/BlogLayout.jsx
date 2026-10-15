
const Header = ()=>{
    return <h1>Dugsiiye Blog Post</h1>
};

const Post = ()=>{
    return(
        <>
        <h3>Full Stuck Engineering</h3>
        <p>This Post is the Post for Dugsiiye Mentorship and it's only for practical my Lesson.</p>
        </>
    )
};

const Footer = ()=>{
    return <h2>2026 &copy; For Dugsiiye Mentroship </h2>
};

const Blog = ()=>{
    return(
        <>
            <Header/>
            <Post/>
            <Footer/>
        </>
    )
};

export default Blog;