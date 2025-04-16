import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../layout/Layout'
import Cards from '../cards/Cards'


const Home = () => {
    return (
   
            <Layout>
         <Cards/>
         <ToastContainer />
            </Layout>
     
    )
}



export default Home