import { lazy } from "solid-js"

import logo from "./logo.svg"
import styles from './App.module.css'

const Products = lazy(() => import("./routes/Products"))
const Product = lazy(() => import("./routes/Product"))

export default function App() {
  return <>
    <div class={styles.navbar}>
      <img src={logo} alt="Logo"/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Tutorial</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">News</a></li>
      </ul>
    </div>
    <div class={styles.content}>
      <h1>I've no idea what I'm doing.</h1>
      <p>(At least I'm having fun...)</p>
    </div>
  </>
}
