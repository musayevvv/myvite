import React from 'react'
import Header from '../header/Header'
import Layout from '../layout/Layout'
import Products from '../products/Product'

const Home = () => {
    return (
        <div>
            <Layout>
                <Header />
                <Products/>
            </Layout>
        </div>
    )
}



export default Home
