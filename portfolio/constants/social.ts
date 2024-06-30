import type { LucideIcon } from "lucide-react"
import { Github, Instagram  , Linkedin  ,Mail} from "lucide-react"

export interface SocialType {
  id: number
  redirectUrl: string
  Icon: LucideIcon
}

export const socialData: SocialType[] = [
  {
    id: 685685967,
    redirectUrl: "https://github.com/Nayanchandrakar",
    Icon: Github,
  },
  {
    id: 34567934678,
    redirectUrl: "mailto:nayangit000@gmail.com",
    Icon: Mail,
  },
  {
    id: 96968568,
    redirectUrl:
      "https://www.instagram.com/nayanxchandrakar",
    Icon: Instagram,
  },
  {
    id: 698508560,
    redirectUrl: "https://www.linkedin.com/in/nayan-chandrakar",
    Icon: Linkedin,
  },
]
