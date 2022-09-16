import Slider from '../src/components/Slider';

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <div className="main">
        Home
      </div>
      <style jsx>{`
        .main {
          height:30em;
        }
      `}
      </style>
    </div>
  );
}
