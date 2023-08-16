import Heading from "../components/Heading";
import styles from "@/styles/HeaderBar.module.css";

function HeaderBar() {
  return (
    <header className={`${styles.container} p-5 bg-indigo-950 text-indigo-50`}>
      <Heading />
    </header>
  )
}

export default HeaderBar;