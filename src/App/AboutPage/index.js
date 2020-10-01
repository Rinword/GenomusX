import React from "react";
import cx from "classnames";
import { Box } from "grommet";

import "./styles.scss";

export class AboutPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={cx("about")}>
        <Box direction='row' className={cx("about__title")}>
          <h1>GenomusX</h1>
        </Box>
        <Box className={cx("about__desc")} ai='flex-start'>
          <p>
            Моделирование генетических алгоритмов на примере игровой арены из 4
            персонажей с постоянно усиливающимися волнами противников.
          </p>
          <p>
            Если выживает несколько копий одного поколения, одна из них мутирует
            по выбранному набору параметров в пределах заданного диапазона
            значений.
          </p>
          <p>
            В случае удачной мутации поколение выживает дольше предыдущего,
            формируя все более жизнеспособные комбинации навыков, специализаций
            и стратегий поведения.
          </p>
          <p>
            Это позволяет итерационно сформировать адекватый искусственный
            интеллект с минимальным участием человека.
          </p>
          <p>
            Кроме того инструмент годится для оттачивания большинсва аспектов
            игровой механики.
          </p>
        </Box>
      </div>
    );
  }
}
