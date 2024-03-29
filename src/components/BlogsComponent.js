import React, {useRef, useEffect} from "react";

// blogs BlogsComponent.js
function RenderBlogs({blog}){
    const testRef = useRef();
    useEffect(() => {
        testRef.current.scrollIntoView({behavior: "smooth"});
    });
    return(
        <a className="text-decoration-none" target="_blank" rel="noopener noreferrer" href={blog.link}>
        <div ref={testRef} className="row featurette">
        <div className="col-md-7">
            <small><span className="text-muted">{new Intl.DateTimeFormat('en-US', {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                }).format(new Date(blog.date))}</span></small>
            <h2 className="featurette-heading text-dark">{blog.title}</h2>
            <p className="lead">{blog.description}</p>
        </div>
        <div className="mt-4 d-none d-md-block col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{height: "200px", width:"100%"}} src={blog.image} alt={blog.title}/>

      </div>
        </div>
    </a>
    );
} 


const Blogs = (props) =>{
    const blogs = props.blogs;
    console.log(blogs);
    const blog = props.blogs.map((blog) => {
        return(
            <div key={blog.id} className="col-12 mt-2 mb-2">
                <RenderBlogs blog={blog}/>
            </div>
        );
    })
    return (
        <section id="blogs">
            <div className="container">
                <div className="row">
                    {blog}
                </div>    
            </div>
        </section>
    );

}


export default Blogs;