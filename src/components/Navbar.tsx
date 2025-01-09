import { Link, useSearchParams } from 'react-router-dom'


const Navbar = () => {
    const [searchParams] = useSearchParams();
  const todosFilter = searchParams.get("todos");
  return (
   <nav>
    <Link to="/" className= {todosFilter === null ? "active": ""}>All</Link>
    <Link to="/?todos=active" className={todosFilter ==="active" ? "active": ""}>Active</Link>
    <Link to="/?todos=completed" className={todosFilter ==="completed" ? "active": ""}>Completed</Link>
   </nav>
  )
}

export default Navbar;
