import {Hello} from './Hello';
import './App.css';
import {Cards} from './components/Cards';

function App() {
  return (
    <>
    <Cards title='My pics' imgs={['img1.png', 'img2.png']} headings={['Card Heading 1', 'Card Heading 2']}/>
    </>
  );
}

export default App;
