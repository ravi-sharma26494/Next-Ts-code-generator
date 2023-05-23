import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

//Components  
import { BackgroundImage1, GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'


//Assets
import Clouds1 from '@/assets/Clouds1.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes Generator</title>
        <meta name="description" content="A fun website to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds1}
          height='300'
          alt='clouds'
        />
      </GradientBackgroundCon>
    </>
  )
}
