import type {LucideIcon} from 'lucide-react'
import { Bolt, Home, User } from "lucide-react"

type navigationType = {
  id: number
  label: string
  Icon:LucideIcon
  href: string
}

export const navigation: navigationType[] = [
  { id: 756237589, label: "Home",  href: "/"  , Icon:Home},
  { id: 895893787, label: "Service",  href: "/#service" , Icon:Bolt },
  { id: 71547005, label: "About Me",  href: "/#about" , Icon:User},
]
