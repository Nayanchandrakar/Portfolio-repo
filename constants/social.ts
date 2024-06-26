import { IconType } from "react-icons"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin  ,BiMailSend} from "react-icons/bi"

export interface SocialType {
  id: number
  redirectUrl: string
  Icon: IconType
}

export const socialData: SocialType[] = [
  {
    id: 685685967,
    redirectUrl: "https://github.com/Nayanchandrakar",
    Icon: AiFillGithub,
  },
  {
    id: 34567934678,
    redirectUrl: "mailto:nayangit000@gmail.com",
    Icon: BiMailSend,
  },
  {
    id: 96968568,
    redirectUrl:
      "https://www.instagram.com/nayanxchandrakar",
    Icon: AiOutlineInstagram,
  },
  {
    id: 698508560,
    redirectUrl: "https://www.linkedin.com/in/nayan-chandrakar",
    Icon: BiLogoLinkedin,
  },
]
