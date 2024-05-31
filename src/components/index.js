// This file is required because you can't import all the components from this folder directly in an outside file.
// index.js exports all the .jsx file from this components folder.
// Otherwise it throws an error
import About from "./About";
import Contact from "./Contact";
import Body from "./Body";
import PodCustom from "./PodCustom/index.jsx";
import Footer from "./Footer";

export { About, Contact, Body, PodCustom, Footer };
