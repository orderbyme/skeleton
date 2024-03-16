import { ArrowRightIcon, ArrowRightRoundIcon } from "./ArrowRight"
import { NotificationsIcon } from "./Notifications"
import { ShareIcon } from "./Share";
import { MessageIcon } from "./Message";
import { MenuIcon } from "./Menu"
import { FeedIcon } from "./Feed"
import { DealsIcon } from "./Deals"
import { PlanetIcon } from "./Planet"
import { CopyIcon } from "./Copy"
import { IconProps } from "./types";
import { HomeIcon } from "./Home";
import { SearchIcon } from "./Search"; 
import { AddIcon } from "./Add";
import { ChatIcon, ChatLineIcon } from "./Chat";
import { ProfilIcon } from "./Profil";
import { SettingsIcon } from "./Settings";
import { CloseIcon } from "./Close";
import { ArrowLeft } from "./ArrowLeft";
import { SendIcon } from "./Send";
import { MenuDotsIcon } from "./MenuDots";
import { LikeIcon } from "./like";
import { ForwardIcon } from "./forward";

const IconComponent: any = {
    share: ShareIcon,
    message: MessageIcon,
    menu: MenuIcon,
    feed: FeedIcon,
    deals: DealsIcon,
    planet: PlanetIcon,
    arrowRight: ArrowRightIcon,
    copy: CopyIcon,
    search: SearchIcon,
    home: HomeIcon,
    add: AddIcon,
    chat: ChatIcon,
    profil: ProfilIcon,
    chatLine: ChatLineIcon,
    settings: SettingsIcon,
    arrowLeft: ArrowLeft,
    close: CloseIcon,
    send: SendIcon,
    menuDots: MenuDotsIcon,
    like: LikeIcon,
    forward: ForwardIcon,
    arrowRightRound: ArrowRightRoundIcon,
    notifications: NotificationsIcon
}

export const Icon = ({name, size, color, strokeWidth, style}: IconProps) => { 
   const IconSelected = IconComponent[name];
   return(<IconSelected size={size} style={style} strokeWidth={strokeWidth} color={color}/>)
}

Icon.defaultProps = {
    name: "ShareIcon",
    size: 20,
    strokeWidth: 1.5,
    color:"white"
}
