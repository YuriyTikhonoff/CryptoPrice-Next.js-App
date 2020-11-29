import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'


const Index = (props) => (
    <Layout>
        <div className='px-5'>
            <h1>Welcome to CryptoPrice</h1>
            <p>Check current bitcoin rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
)

Index.getInitialProps = async function(){
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const resp = await fetch(url)
    const data = await resp.json()

    return {
        bpi: data.bpi
    }
}

export default Index