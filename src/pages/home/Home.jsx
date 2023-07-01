import Contact from './Contact/Contact';
import Welcomehome from './Welcomehome'
import Projects from './projects/Projects';
import Skills from './skills/Skills';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Welcomehome></Welcomehome>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;