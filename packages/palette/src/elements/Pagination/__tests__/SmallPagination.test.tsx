import { mount } from "enzyme"
import React from "react"
import { Theme } from "../../../Theme"
import { SmallPagination } from "../SmallPagination"

describe("SmallPagination", () => {
  const paginationProps = {
    cursor: {
      first: { page: 1, cursor: "Y3Vyc29yMg==", isCurrent: false },
      last: { page: 20, cursor: "Y3Vyc29yMw==", isCurrent: false },
      around: [
        { page: 6, cursor: "Y3Vyc29yMw==", isCurrent: true },
        { page: 7, cursor: "Y3Vyc29yMg==", isCurrent: false },
        { page: 8, cursor: "Y3Vyc29yMw==", isCurrent: false },
        { page: 9, cursor: "Y3Vyc29yMw==", isCurrent: false },
      ],
      previous: { page: 5, cursor: "Y3Vyc29yMw==", isCurrent: false },
      " $refType": null,
    },
    callbacks: {
      onClick: () => {
        /* */
      },
      onNext: () => {
        /* */
      },
    },
  }

  const { cursor, callbacks } = paginationProps
  let matchMedia

  beforeAll(() => {
    matchMedia = window.matchMedia
    window.matchMedia = undefined // Immediately set matching media query inMockBoot
  })

  afterAll(() => {
    window.matchMedia = matchMedia
  })

  describe("when there is only a previous page", () => {
    it("renders the previous button and calls the onClick function when clicked", () => {
      const previous = { page: 5, cursor: "Y3Vyc29yMw==", isCurrent: false }
      const pageCursors = { previous }

      const onClickMock = jest.fn()
      const onNextMock = jest.fn()

      const wrapper = mount(
        <Theme>
          <SmallPagination
            hasNextPage={false}
            onClick={onClickMock}
            onNext={onNextMock}
            pageCursors={pageCursors}
          />
        </Theme>
      )

      wrapper
        .find("ButtonWithBorder")
        .first()
        .simulate("click")

      expect(onClickMock).toHaveBeenCalled()
    })

    it("renders the next button as disabled and calls the onNext function when clicked", () => {
      const previous = { page: 5, cursor: "Y3Vyc29yMw==", isCurrent: false }
      const pageCursors = { previous }

      const onClickMock = jest.fn()
      const onNextMock = jest.fn()

      const wrapper = mount(
        <Theme>
          <SmallPagination
            hasNextPage={false}
            onClick={onClickMock}
            onNext={onNextMock}
            pageCursors={pageCursors}
          />
        </Theme>
      )

      wrapper
        .find("ButtonWithBorder")
        .last()
        .simulate("click")

      expect(onNextMock).toHaveBeenCalled()
    })
  })

  describe("when there is only a next page", () => {
    it("renders the previous button as disabled and does not call the onClick function when clicked", () => {
      const pageCursors = { previous: null }

      const onClickMock = jest.fn()
      const onNextMock = jest.fn()

      const wrapper = mount(
        <Theme>
          <SmallPagination
            hasNextPage
            onClick={onClickMock}
            onNext={onNextMock}
            pageCursors={pageCursors}
          />
        </Theme>
      )

      wrapper
        .find("ButtonWithBorder")
        .first()
        .simulate("click")

      expect(onClickMock).not.toHaveBeenCalled()
    })

    it("renders the next button and calls the onNext function when clicked", () => {
      const pageCursors = { previous: null }

      const onClickMock = jest.fn()
      const onNextMock = jest.fn()

      const wrapper = mount(
        <Theme>
          <SmallPagination
            hasNextPage
            onClick={onClickMock}
            onNext={onNextMock}
            pageCursors={pageCursors}
          />
        </Theme>
      )

      wrapper
        .find("ButtonWithBorder")
        .last()
        .simulate("click")

      expect(onNextMock).toHaveBeenCalled()
    })
  })

  // describe("when there are previous and next pages", () => {
  //   it(
  //     "renders the previous button and calls the onClick function when clicked"
  //   )
  //   it("renders the next button and calls the onNext function when clicked")
  // })

  it("triggers next callback on previous button click", () => {
    const spy = jest.fn()
    const wrapper = mount(
      <Theme>
        <SmallPagination
          hasNextPage
          pageCursors={cursor}
          {...callbacks}
          onClick={spy}
        />
      </Theme>
    )

    wrapper
      .find("ButtonWithBorder")
      .first()
      .simulate("click")

    expect(spy).toHaveBeenCalled()
  })

  it("triggers onClick callback on next button click", () => {
    const spy = jest.fn()
    const wrapper = mount(
      <Theme>
        <SmallPagination
          hasNextPage
          pageCursors={cursor}
          {...callbacks}
          onNext={spy}
        />
      </Theme>
    )
    wrapper
      .find("ButtonWithBorder")
      .last()
      .simulate("click")

    expect(spy).toHaveBeenCalled()
  })
})
