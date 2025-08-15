import { VscHome, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dither from './react-bits-components/Dither'
import Dock from './react-bits-components/Dock';
import TextType from './react-bits-components/TextType';
import './HelloPage.css';

const items = [
  // { icon: <VscHome size={20} color="white"/>, label: 'Home', onClick: () => alert('TBD') },
  { icon: <VscAccount size={20} color="white"/>, label: 'Profile', onClick: () => alert('TBD') },
  // { icon: <VscSettingsGear size={20} color="white"/>, label: 'Settings', onClick: () => alert('TBD') },
];

const greetings = [
  "Hello",        // English
  "Hola",         // Spanish
  "Bonjour",      // French
  "Ciao",         // Italian
  "Hallo",        // German & Dutch
  "Olá",          // Portuguese
  "Привет",       // Russian (shortened from "Здравствуйте")
  "今日は",       // Japanese (shortened from "こんにちは")
  "你好",          // Chinese
  "안녕",          // Korean (shortened from "안녕하세요")
  "سلام",         // Arabic (shortened from "السلام عليكم")
  "Hej",          // Swedish
  "Sveiki",       // Latvian
  "Merhaba",      // Turkish
  "שלום",         // Hebrew (shortened from "שלום עליכם")
  "नमस्ते",       // Hindi
  "สวัสดี",       // Thai
  "Chào",         // Vietnamese (shortened from "Xin chào")
  "Kamusta"       // Filipino
];

function HelloPage() {
  return (
    <div className="app-container">
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <div className="text-container">
        <div className="text-border">
          <div className="text">
            <TextType
              text={greetings}
              cursorCharacter="*"
              variableSpeed={{ min: 50, max: 150 }}
            />
          </div>
        </div>
      </div>
      
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default HelloPage;
