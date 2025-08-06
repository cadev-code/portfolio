import { Code, SquareChevronDown, SquareMenu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

interface Sections {
  title: string;
  url: string;
}

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const sections: Sections[] = [
    { title: 'Acerca De', url: '#about' },
    { title: 'Proyectos', url: '#projects' },
    { title: 'Skills', url: '#skills' },
    { title: 'Contacto', url: '#contact' },
  ];

  return (
    <header className="fixed w-full border-b border-border top-0">
      <nav className="container w-full flex px-6 py-4 mx-auto items-center justify-between">
        <div className="flex gap-2 text-xl font-bold items-center text-primary">
          <Code size={28} />
          <p className="select-none">CarloS.dev</p>
        </div>
        <div className="md:hidden grid place-items-center">
          <DropdownMenu onOpenChange={(value) => setOpenMenu(value)}>
            <DropdownMenuTrigger>
              {openMenu ? (
                <SquareChevronDown size={28} />
              ) : (
                <SquareMenu size={28} />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background">
              {sections.map(({ title, url }, i) => (
                <DropdownMenuItem key={i}>
                  <a href={url}>{title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-8">
            {sections.map(({ title, url }, i) => (
              <a
                className="hover:text-primary transition-colors"
                key={i}
                href={url}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
