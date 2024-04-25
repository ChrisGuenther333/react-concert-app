"use client";
import NavBar from "./Components/Elements/NavBar.jsx";
import Footer from "./Components/Elements/Footer.jsx";

import { redirect } from 'next/navigation'

function Home() {

  redirect('/pages/pastEvents')
 
  return null
}

export default Home;
