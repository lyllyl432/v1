import BootstrapIcon from "/public/icons/bootstrap-original.svg";
import CodeIgniterIcon from "/public/icons/codeigniter-plain.svg";
import GitIcon from "/public/icons/git-original.svg";
import LaravelIcon from "/public/icons/laravel-original.svg";
import MySqlIcon from "/public/icons/mysql-original.svg";
import NextJsIcon from "/public/icons/nextjs-original.svg";
import PhpIcon from "/public/icons/php-original.svg";
import PostgreIcon from "/public/icons/postgresql-original.svg";
import ReactIcon from "/public/icons/react-original.svg";
import TailwindIcon from "/public/icons/tailwindcss-original.svg";
import TypescriptIcon from "/public/icons/typescript-original.svg";
import FigmaIcon from "/public/icons/figma-original.svg";
import JavaIcon from "/public/icons/java-original.svg";
import Html5Icon from "/public/icons/html5-original.svg";
import Css3Icon from "/public/icons/css3-original.svg";
import JavaScriptIcon from "/public/icons/javascript-original.svg";
import JqueryIcon from "/public/icons/jquery-original.svg";
//techstacks interface
export default interface TechStackProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
}
//techstacks icon
export const techStacks: TechStackProps[] = [
  { Icon: ReactIcon, name: "React" },
  { Icon: NextJsIcon, name: "Next.js" },
  { Icon: TypescriptIcon, name: "TypeScript" },
  { Icon: TailwindIcon, name: "Tailwind CSS" },
  { Icon: BootstrapIcon, name: "Bootstrap" },
  { Icon: PhpIcon, name: "Php" },
  { Icon: CodeIgniterIcon, name: "CodeIgniter" },
  { Icon: LaravelIcon, name: "Laravel" },
  { Icon: JqueryIcon, name: "Jquery" },
  { Icon: MySqlIcon, name: "MySQL" },
  { Icon: PostgreIcon, name: "PostgreSQL" },
  { Icon: JavaIcon, name: "Java" },
  { Icon: GitIcon, name: "Git" },
  { Icon: Html5Icon, name: "Html 5" },
  { Icon: Css3Icon, name: "Css 3" },
  { Icon: JavaScriptIcon, name: "Javascript" },
  { Icon: FigmaIcon, name: "Figma" },
];
