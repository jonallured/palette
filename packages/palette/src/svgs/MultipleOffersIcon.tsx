import React from "react"
import { color } from "../helpers"
import { Icon, IconProps, Path, Title } from "./Icon"

/** MultipleOffers */
export const MultipleOffersIcon: React.FC<IconProps> = ({
  title = "Receive multiple offers",
  ...props
}) => {
  return (
    <Icon {...props} viewBox="0 0 157 161">
      <Title>{title}</Title>
      <Path
        fill={color(props.fill!)}
        fillRule="evenodd"
        d="M68.821 47.824c-.499-1.762-1.616-2.994-3.41-3.705v9.613c2.114.547 3.819 1.05 5.108 1.511 1.417.5 2.685 1.224 3.8 2.172a10.02 10.02 0 012.755 3.567c.66 1.375.987 2.881.987 4.51 0 2.044-.521 3.965-1.559 5.755-1.026 1.785-2.54 3.234-4.523 4.353-1.876 1.059-4.069 1.705-6.568 1.952v5.949c0 1.023-.108 1.852-.377 2.42-.316.715-1.02.987-1.835.987-.752 0-1.407-.216-1.812-.77l-.005-.007-.005-.007c-.342-.501-.474-1.207-.474-2.031v-6.5c-2.012-.244-3.802-.71-5.365-1.405l-.002-.001c-1.647-.74-3.042-1.664-4.177-2.774l-.006-.006c-1.101-1.115-1.93-2.278-2.475-3.492l-.001-.002c-.54-1.221-.817-2.43-.817-3.624 0-.98.413-1.843 1.177-2.574.799-.764 1.791-1.142 2.942-1.142.901 0 1.698.196 2.365.617a3.305 3.305 0 011.394 1.777c.494 1.397.918 2.456 1.274 3.184.332.666.837 1.29 1.527 1.87.56.456 1.277.836 2.164 1.13V60.243c-2.322-.614-4.29-1.294-5.897-2.043l-.004-.002c-1.73-.824-3.142-1.992-4.224-3.505-1.107-1.546-1.64-3.508-1.64-5.848 0-3.077 1.053-5.631 3.168-7.62l.001-.001c2.05-1.909 4.934-3.02 8.596-3.384v-2.27c0-.775.154-1.448.546-1.935.408-.507 1.005-.727 1.694-.727.692 0 1.294.21 1.71.706.4.48.558 1.143.558 1.904v2.328c1.813.205 3.396.575 4.74 1.119a10.457 10.457 0 013.881 2.696c.856.904 1.522 1.845 1.99 2.823.482.971.74 1.896.74 2.766 0 1.009-.407 1.884-1.18 2.604-.762.71-1.696 1.06-2.772 1.06-.988 0-1.847-.25-2.537-.787-.688-.534-1.162-1.317-1.45-2.299l-.002-.004zm.104 15.45c-.796-.67-1.958-1.271-3.514-1.785v9.972c1.494-.358 2.632-.971 3.45-1.815.927-.958 1.378-2.053 1.378-3.306 0-1.37-.45-2.364-1.307-3.059l-.007-.006zm-8.022-19.289c-1.196.388-2.124.863-2.802 1.415-.718.583-1.114 1.484-1.114 2.802 0 1.25.37 2.123 1.041 2.708.637.539 1.587 1.058 2.875 1.546v-8.47z"
        clipRule="evenodd"
      />
      <Path
        fill={color(props.fill!)}
        fillRule="evenodd"
        d="M25.075 16h75.972c9.536 0 17.267 8.308 17.267 18.556v51.957c0 10.248-7.731 18.555-17.267 18.555H64.581l-26.59 31.917c-.636.807-1.572 1.269-2.556 1.261a3.654 3.654 0 01-1.243 0c-1.328-.572-2.201-1.951-2.21-3.488v-29.69h-6.907c-9.536 0-17.266-8.307-17.266-18.555V34.556C7.809 24.308 15.539 16 25.075 16zm75.973 81.646c5.721 0 10.36-4.984 10.36-11.133V34.556c0-6.149-4.639-11.133-10.36-11.133H25.076c-5.722 0-10.36 4.984-10.36 11.133v51.957c0 6.149 4.638 11.133 10.36 11.133h13.813v27.315l21.617-26.053 1.036-1.262h39.506z"
        clipRule="evenodd"
      />
      <Path
        fill={color(props.fill!)}
        d="M62.58 124.025h29.064l26.59 29.572a3.32 3.32 0 002.556 1.169c.412.066.831.066 1.243 0a3.506 3.506 0 002.21-3.232v-27.509h6.907c9.536 0 17.266-7.698 17.266-17.194V58.689c0-9.495-7.73-17.193-17.266-17.193h-7.346c.039.476.06.957.06 1.443v5.435h7.285c5.722 0 10.36 4.618 10.36 10.316v48.141c0 5.698-4.638 10.316-10.36 10.316h-13.813v25.309l-21.618-24.139-1.036-1.17H62.58v6.878z"
      />
    </Icon>
  )
}
