import logo from '../../assets/meet.png'
import './Header.css'

const Header = ({ user }) => {
  const { name, color } = user || {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Vonta',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }

  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}
export default Header
