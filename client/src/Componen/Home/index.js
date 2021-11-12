import React, { Component } from 'react'
import { Fragment } from 'react';
import Navbar from "./navbar";
import Content from "./content/content";
import CreateCV from "./createCV";
import Blog from "./blog/Blog";
import Header from "../Home/List-Job/header";
import Footer from "./Footer/footer"

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Header/>
                <Content/>
                <CreateCV/>
                <Blog/>
                <Footer/>
            </Fragment>
        )
    }
}
