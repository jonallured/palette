import React from "react"
import styled from "styled-components"
import { color } from "../../helpers/color"
import { space } from "../../helpers/space"
import { ChevronIcon } from "../../svgs/ChevronIcon"
import { Flex } from "../Flex"

import { Props } from "./LargePagination"

export const SmallPagination = (props: Props) => {
  const {
    pageCursors: { previous },
    onClick,
    onNext,
    hasNextPage,
  } = props

  return (
    <Flex flexDirection="row" width="100%">
      <PrevButton onClick={onClick} previous={previous} />
      <NextButton onNext={onNext} hasNextPage={hasNextPage} />
    </Flex>
  )
}

const PrevButton = ({ previous, onClick }) => {
  const opacity = previous ? 1 : 0.1

  return (
    <Flex opacity={opacity} pr={0.5} width="50%">
      <ButtonWithBorder
        alignItems="center"
        justifyContent="flex-start"
        pl={1}
        onClick={() => {
          if (previous) {
            onClick(previous.cursor, previous.page)
          }
        }}
      >
        <ChevronIcon direction="left" />
      </ButtonWithBorder>
    </Flex>
  )
}

const NextButton = ({ onNext, hasNextPage }) => {
  const opacity = hasNextPage ? 1 : 0.1

  return (
    <Flex opacity={opacity} pl={0.5} width="50%">
      <ButtonWithBorder
        onClick={() => onNext()}
        alignItems="center"
        justifyContent="flex-end"
        pr={1}
      >
        <ChevronIcon direction="right" />
      </ButtonWithBorder>
    </Flex>
  )
}

const ButtonWithBorder = styled(Flex)`
  border: ${props => props.theme.borders[1]};
  border-color: ${color("black10")};
  border-radius: 3px;
  width: 100%;
  height: ${space(4)}px;
  cursor: pointer;
`

// Tests
ButtonWithBorder.displayName = "ButtonWithBorder"
