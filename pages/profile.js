import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../components/layout.js';
import utilStyles from '../styles/utils.module.scss';
import useSWR from 'swr'


export default function Profile() {

    let { data, error, isLoading } = useSWR('/api/profile', apiURL => fetch(apiURL).then(res => res.json()) );

    if (error) {
        return <div>failed to load</div>;
    }
    if (isLoading) {
        return <div>loading...</div>;
    }

    return (

        <Layout>
            <Head>
                <title> Profile </title>
            </Head>

            <main>

                <div>
                    {`Username: ${data.username}`}
                </div>

                <div>
                    {`Role: ${data.role}`}
                </div>

            </main>


        </Layout>
    );
}