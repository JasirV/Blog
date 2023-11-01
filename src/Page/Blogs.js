import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "./572-removebg-preview.png";
import { BlogContext } from "../App";
import { Link } from "react-router-dom";
import Blog from "./Blog";
const Blogs = () => {
  const { post } = useContext(BlogContext);
  return (
    <div>
      <Navbar
        className="shadow p-3 mb-5 bg-white rounded"
        style={{ height: "5.5rem" }}>
        <Navbar.Brand>
          <img src={logo} style={{ width: "8rem", height: "7rem" }} />
        </Navbar.Brand>
      </Navbar>
      <div style={{ textAlign: "center", fontFamily:"sans-serif",fontWeight:"900"}}>
        <h1 className="md-4" style={{ color: "red" }}>
          BLOG <span style={{ color: "blue" }}>TITLE</span>{" "}
        </h1>
        {post.map((x) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/blog/${x.id}`}>
            <Container className="border border-dark mt-3 rounded">
              <div key={x.id}>
                <h1>{x.title}</h1>
              </div>
            </Container>
          </Link>
        ))}
        <Link to="/"><button type="button" className="btn btn-primary mt-2 h-10 w-25">Add New</button></Link>
      </div>
    </div>
  );
};

export default Blogs;
