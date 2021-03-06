import React from "react";
import Image from "next/image";

export default function Home({ content }) {
  return (
    <div className="container p-0">
      <div className="row info-container-no-anim p-0">
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
            objectFit="cover"
          />
        </div>
        <div className="col-lg-4 p-4">
          <h1>{content.attributes.hero_title}</h1>
          <p>{content.attributes.hero_text}</p>
        </div>
      </div>

      <div className="row info-container-no-anim mt-3 p-0">
        <div
          className="col-lg-12 p-0 d-flex align-items-center justify-content-center flex-column shadow"
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
          <h2>Auctions</h2>
          <p>{content.attributes.silent_auction_description}</p>
          <div>
            <a
              className="buttonka"
              href="https://ww1.emma-live.com/glendowerspringgala2022"
              style={{ width: 200 }}
            >
              Visit the auction page
            </a>
          </div>
        </div>
        <div className="col-lg-4 p-4 info-container-no-anim">
          <h2>Gala Brochure</h2>
          <p>{content.attributes.live_auction_description}</p>
          <a
            className="buttonka"
            href="https://intelligent-margulis.77-68-115-165.plesk.page/glenower-gala-2022-brochure.pdf"
          >
            Download now!
          </a>
        </div>
      </div>
      <div className="row justify-content-between mt-3">
        <div
          className="col-lg-4 p-4 info-container-no-anim"
          style={{ position: "relative" }}
        >
          <Image
            src="https://res.cloudinary.com/dap7rb3ky/image/upload/v1647692253/large_TL_Main_Entrance_Exterior_DL_4_07ddcce9c6.jpg"
            alt="Glendower"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-lg-7 ">
          <div className="row ">
            <div className="col-lg-6 p-4 info-container-no-anim">
              <h2>Our main sponsor</h2>
              <p>
                As the premier red carpet venue in Leicester Square this
                year&apos;s theme will be red carpet glamour. The event, which
                will take place on 6th May, will start with a champagne with
                canapes followed by a sumptuous three course dinner then
                dancing. During the evening there will be a chance to win and
                bid on many exciting prizes a number of which are unique.
              </p>
            </div>
            <div
              className="col-12 col-lg-6 p-0 info-container-no-anim"
              style={{
                position: "relative",
                minHeight: 350,
                overflow: "hidden",
              }}
            >
              <Image
                src={
                  content.attributes.image_placeholder.data.attributes.formats
                    .large.url
                }
                alt="Glendower"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
