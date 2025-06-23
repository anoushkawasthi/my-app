import chefclaude from './assets/chef_claude.png'
import './index.css'

export default function Header() {
  return (
    <header>
      <img className ="chef_img"src={chefclaude} alt="Chef Claude" />
      <h1>Chef Claude</h1>
    </header>
  );
}