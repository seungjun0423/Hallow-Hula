import Slider from '../src/components/Slider';

export default function Community () {
  return (
    <div>
      <Slider></Slider>
      <div className="main">
        Community
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