import YoutubeEmbed from './YoutubeEmbed';
import OptionButton from './OptionButton';

const Ground = () => {
  return (
    <div>
      <h1>Ground technique</h1>
      {/* Placeholder ocean waves video */}
      <YoutubeEmbed embedId="LIrDzA5iLtM" />

      <ul className="option-container">
        <OptionButton optionName="Music" />
        <OptionButton optionName="Vibrate" />
        <OptionButton optionName="Video" />
        <OptionButton optionName="Voice" />
      </ul>
    </div>
  )
}

export default Ground;
