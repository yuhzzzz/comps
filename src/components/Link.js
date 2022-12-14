import { useNavigation } from "../hooks/useNavigation"
import classnames from "classnames"
export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation()
  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  )
  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return
    }
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}
