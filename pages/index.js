import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
export default function Home({ content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Glendower Parents Association Gala 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container p-0">
        <div className="row  info-container-no-anim p-0">
          <div
            className="col-lg-8 p-0"
            style={{ position: "relative", minHeight: 300 }}
          >
            <Image
              src={
                content.attributes.hero_image.data.attributes.formats.large.url
              }
              alt="Glendower"
              layout="fill"
            />
          </div>
          <div className="col-lg-4 p-4">
            <h1>{content.attributes.hero_title}</h1>
            <p>{content.attributes.hero_text}</p>
          </div>
        </div>
        <div className="row  info-container-no-anim mt-3 p-0">
          <div
            className="col-lg-12 p-0 d-flex align-items-center justify-content-center flex-column"
            style={{
              minHeight: 150,
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${content.attributes.buy_the_tickets_background.data.attributes.formats.medium.url})`,
            }}
          >
            <h2>Have you got your tickets?</h2>
            <a href="./tickets/" className="buttonka">
              Get them now
            </a>
          </div>
        </div>
        <div className="row justify-content-between mt-3">
          <div className="col-lg-7 p-4 info-container-no-anim d-flex flex-column justify-content-end">
            <h2>Silent Auction</h2>
            <p>{content.attributes.silent_auction_description}</p>
            <p className="golder">Start bidding</p>
          </div>
          <div className="col-lg-4 p-4 info-container-no-anim">
            <h2>Live Auction</h2>
            <p>{content.attributes.live_auction_description}</p>
            <p className="golder">See the items</p>
          </div>
        </div>
        <div className="row justify-content-between mt-3">
          <div className="col-lg-4 p-4 info-container-no-anim">
            <h2>See our sponsors</h2>
            <p>{content.attributes.silent_auction_description}</p>
            <p className="golder">See all of them</p>
          </div>
          <div className="col-lg-7 ">
            <div className="row ">
              <div className="col-lg-6 p-4 info-container-no-anim">
                <h2>Our main sponsor</h2>
                <p>
                  As the premier red carpet venue in Leicester Square this
                  year's theme will be red carpet glamour. The event, which will
                  take place on 6th May, will start with a champagne with
                  canapes followed by a sumptuous four course dinner then
                  dancing. During the evening there will be a chance to win and
                  bid on many exciting prizes a number of which are unique.
                </p>
              </div>
              <div className="col-lg-6 p-0" style={{ position: "relative" }}>
                <Image
                  src={
                    content.attributes.image_placeholder.data.attributes.formats
                      .large.url
                  }
                  alt="Glendower"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fetchit = await fetch("http://localhost:3000/api/front-page", {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const content = await fetchit.json();
  return {
    props: {
      content,
    },
  };
}
