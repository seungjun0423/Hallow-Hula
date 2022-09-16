import Carousel from 'nuka-carousel'

export default function Slider() {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={3} >
        <img src="/Pink.png"  className="banner"/>
        <img src="/Sunset.png" className="banner"/>
        <img src="/Beach.png" className="banner"/>
      </Carousel>
      <style jsx>{`
        .banner {
          width:100%;
          height:100%;
        }
        `}
      </style>
    </div>
  );
}
