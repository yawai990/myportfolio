import { FaHome } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { GrContact } from 'react-icons/gr';
import { RiUserSettingsFill } from 'react-icons/ri';

export const Data = [
    { id: 1, link: 'home', icon: <FaHome /> },
    { id: 2, link: 'skills', icon: <GiSkills /> },
    { id: 3, link: 'experience', icon: <RiUserSettingsFill /> },
    { id: 4, link: 'project', icon: <AiOutlineFundProjectionScreen /> },
    { id: 5, link: 'about', icon: <SiAboutdotme /> },
    { id: 6, link: 'contact', icon: <GrContact /> }
]