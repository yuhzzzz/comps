import { useNavigation } from "../hooks/useNavigation";
export default function Route({ children, path }) {
  const { currentPath } = useNavigation();
  // console.log(currentPath)
  return <>{currentPath === path && children}</>;
}
