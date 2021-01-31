import { css } from "styled-components";

const mixins = {
  positionFixed: css`
    position: fixed;
    top: 0;
    left: 0;
  `,
  positionAbsolute: css`
    position: absolute;
    top: 0;
    left: 0;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexEvenly: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,

  flexFullColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default mixins;
