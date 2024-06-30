import home from "../public/header/home.svg"
import info from "../public/header/info.svg"
import service from "../public/header/service.svg"

type navigationType = {
  id: number
  label: string
  svg: any
  href: string
}

export const navigation: navigationType[] = [
  { id: 756237589, label: "Home", svg: home, href: "/" },
  { id: 895893787, label: "Service", svg: service, href: "/#service" },
  { id: 71547005, label: "About Me", svg: info, href: "/#about" },
]
