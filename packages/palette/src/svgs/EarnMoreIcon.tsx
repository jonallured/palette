import React from "react"
import { color } from "../helpers"
import { Icon, IconProps, Title } from "./Icon"

/** EarnMoreIcon */
export const EarnMoreIcon: React.FC<IconProps> = ({
  title = "Earn More",
  ...props
}) => {
  return (
    <Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 75">
      <Title>{title}</Title>
      <mask
        id="path-1-outside-1"
        width="53"
        height="74"
        x="2"
        y="0"
        fill={color(props.fill!)}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M2 0H55V74H2z" />
        <path
          fillRule="evenodd"
          d="M28.885 1l2.104 2.767L41.931 18.15l.137.18h10.186c.964 0 1.746.782 1.746 1.746v51.47c0 .963-.782 1.745-1.746 1.745H4.746A1.746 1.746 0 013 71.545V20.076c0-.964.782-1.746 1.746-1.746h10.956l.137-.18L26.78 3.767 28.886 1zm-8.837 17.15l8.837-11.617 8.837 11.617H20.048zM6.25 70.041v-48.46h44.5v48.46H6.25z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill={color(props.fill!)}
        fillRule="evenodd"
        d="M28.885 1l2.104 2.767L41.931 18.15l.137.18h10.186c.964 0 1.746.782 1.746 1.746v51.47c0 .963-.782 1.745-1.746 1.745H4.746A1.746 1.746 0 013 71.545V20.076c0-.964.782-1.746 1.746-1.746h10.956l.137-.18L26.78 3.767 28.886 1zm-8.837 17.15l8.837-11.617 8.837 11.617H20.048zM6.25 70.041v-48.46h44.5v48.46H6.25z"
        clipRule="evenodd"
      />
      <path
        fill={color(props.fill!)}
        d="M30.99 3.767l-.2.151.2-.151zM28.884 1l.199-.151-.199-.262-.199.262.199.151zm13.046 17.15l.199-.151-.2.151zm.137.18l-.2.151.076.1h.124v-.25zm-26.366 0v.25h.124l.075-.099-.199-.15zm.137-.18l-.199-.151.2.151zM26.78 3.767l.2.151-.2-.151zm2.105 2.766l.199-.151-.199-.262-.199.262.199.151zM20.048 18.15l-.198-.151-.306.401h.505v-.25zm17.674 0v.25h.504l-.306-.401-.198.151zM6.25 21.58v-.25H6v.25h.25zm0 48.461H6v.25h.25v-.25zm44.5-48.46H51v-.25h-.25v.25zm0 48.46v.25H51v-.25h-.25zM31.189 3.615L29.084.85l-.398.302 2.105 2.767.398-.303zM42.129 18L31.19 3.615l-.398.303 10.94 14.383.399-.302zm.138.18l-.137-.18-.398.302.137.18.398-.302zm9.987-.099H42.068v.5h10.186v-.5zm1.996 1.996a1.996 1.996 0 00-1.996-1.996v.5c.826 0 1.496.67 1.496 1.496h.5zm0 51.47v-51.47h-.5v51.47h.5zm-1.996 1.995a1.996 1.996 0 001.996-1.996h-.5c0 .826-.67 1.496-1.496 1.496v.5zm-47.508 0h47.508v-.5H4.746v.5zM2.75 71.545c0 1.103.894 1.996 1.996 1.996v-.5c-.826 0-1.496-.67-1.496-1.496h-.5zm0-51.469v51.47h.5v-51.47h-.5zm1.996-1.996a1.996 1.996 0 00-1.996 1.996h.5c0-.826.67-1.496 1.496-1.496v-.5zm10.956 0H4.746v.5h10.956v-.5zM15.64 18l-.137.18.398.302.137-.18L15.64 18zM26.581 3.615L15.641 18l.397.302L26.98 3.918l-.399-.303zM28.686.85l-2.105 2.766.399.303 2.104-2.767-.398-.302zm0 5.533l-8.837 11.617.398.302 8.837-11.616-.398-.303zm9.234 11.617L29.084 6.382l-.398.303L37.523 18.3 37.92 18zm-17.872.401h17.674v-.5H20.048v.5zM6 21.58v48.461h.5v-48.46H6zm44.75-.25H6.25v.5h44.5v-.5zM51 70.041v-48.46h-.5v48.46h.5zm-44.75.25h44.5v-.5H6.25v.5z"
        mask="url(#path-1-outside-1)"
      />
      <path
        fill={color(props.fill!)}
        fillRule="evenodd"
        d="M30.353 30A1.676 1.676 0 1027 30v2.13c-2.295.237-4.07.92-5.322 2.046-1.315 1.194-1.972 2.723-1.972 4.59 0 1.432.338 2.604 1.013 3.516.676.911 1.556 1.616 2.642 2.115.992.446 2.205.856 3.639 1.23v7.555c-.62-.196-1.133-.455-1.54-.777-.483-.39-.844-.819-1.086-1.285-.241-.478-.524-1.161-.85-2.051a1.785 1.785 0 00-.778-.96c-.374-.228-.833-.342-1.375-.342-.676 0-1.243.211-1.701.634-.447.413-.67.88-.67 1.4 0 .706.169 1.427.507 2.165.337.727.856 1.432 1.556 2.116.712.673 1.592 1.237 2.642 1.693.956.41 2.055.693 3.295.848v3.2a1.677 1.677 0 003.353 0v-3.248c1.456-.175 2.732-.56 3.829-1.158 1.255-.684 2.201-1.563 2.84-2.637A6.654 6.654 0 0038 49.297c0-.988-.205-1.894-.615-2.718a6.054 6.054 0 00-1.72-2.149 7.562 7.562 0 00-2.388-1.318c-.75-.26-1.726-.542-2.924-.849V35.56c1.152.494 1.898 1.319 2.236 2.473.35 1.15 1.116 1.726 2.299 1.726.627 0 1.158-.196 1.592-.586.446-.402.67-.874.67-1.416 0-.489-.151-1.026-.453-1.612-.29-.586-.706-1.155-1.248-1.709a6.533 6.533 0 00-2.425-1.627c-.761-.298-1.652-.513-2.671-.645V30zm0 23.322v-6.789c.941.318 1.675.692 2.2 1.12.652.51.978 1.237.978 2.18 0 .88-.332 1.65-.996 2.312-.542.54-1.27.933-2.182 1.177zM27 35.386v5.97c-.88-.319-1.55-.667-2.01-1.044-.531-.445-.797-1.096-.797-1.953 0-.9.284-1.574.85-2.018.488-.383 1.14-.7 1.957-.955z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
