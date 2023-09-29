'use client'

import styles from './page.module.css'
import {CldUploadButton} from 'next-cloudinary';
import {useState} from 'react'

export default function Home() {
    const [imageId, setImageId] = useState('')
    type uploadResult = {
        info: {
            public_id: string;
        };
        event: 'success';
    }

    return (
        <main className={styles.main}>
            <CldUploadButton
                
                uploadPreset="ecnqmisc"
                className={styles.upload}/>
        </main>
    )
}
