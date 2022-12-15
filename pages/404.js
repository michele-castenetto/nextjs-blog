import Layout from '../components/layout.js';
import { useRouter } from 'next/router';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';


export default function Custom404() {

    const router = useRouter();

    return (
        <Layout>
            <h1>404 - Page Not Found</h1>;

            <div 
                // className={styles.backToHome}
            >
                <a
                    onClick={ () => router.back() }
                >
                    ← Back to previous
                </a>
                
            </div>

        </Layout>
    )
}

