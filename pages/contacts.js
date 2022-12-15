import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../components/layout.js';
import utilStyles from '../styles/utils.module.scss';


export async function getServerSideProps(context) {

    console.log("[contact page] getServerSideProps");

    // console.log("Object.keys(context)", Object.keys(context));

    const contacts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'John Boe' },
        { id: 3, name: 'John Moe' }
    ];

    return {
        props: {
            contacts: contacts
        },
    };
}


export default function Contacts({ contacts }) {
    return (
        <Layout>
            <Head>
                <title>Contacts</title>
            </Head>

            <ul className={utilStyles.list}>
                {contacts.map(({ id, name, surname, phone }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {name}
                        <br />
                        {surname}
                        <br />
                        {phone}
                    </li>
                ))}
            </ul>


        </Layout>
    );
}