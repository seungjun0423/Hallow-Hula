import Slider from '../src/components/Slider';

export default function About () {
  return (
    <div>
      <Slider></Slider>
      <div className="main">
        About
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