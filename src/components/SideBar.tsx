import { Button } from "./Button";

import '../styles/sidebar.scss';

interface Genres {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genres[];
  onSelectOption: (id: number) => void;
  selectedGenre: number;
}

export function SideBar({ genres, onSelectOption, selectedGenre }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectOption(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}