import { useState } from "react";
import styles from "./calendar.module.css";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const generatePreviousMonthLastDays = (
  firstDayOfMonth: number,
  lastDateOfLastMonth: number
) => {
  const days = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    days.push({
      id: Math.random().toString(),
      day: lastDateOfLastMonth - i + 1,
      active: false,
      current: false,
    });
  }

  return days;
};

const generateCurrentMonthDays = (
  numberOfDays: number,
  currentDate: Date,
  currentMonth: number,
  currentYear: number
) => {
  const days = [];

  for (let i = 1; i <= numberOfDays; i++) {
    const isToday =
      i === currentDate.getDate() &&
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear();

    days.push({
      id: Math.random().toString(),
      day: i,
      active: true,
      current: isToday,
    });
  }

  return days;
};

const generateNextMonthFirstDays = (lastDayOfMonth: number) => {
  const days = [];

  for (let i = lastDayOfMonth; i < 6; i++) {
    days.push({
      id: Math.random().toString(),
      day: i - lastDayOfMonth + 1,
      active: false,
      current: false,
    });
  }

  return days;
};

export const Calendar = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const prevMonthHandler = () => {
    let prevMonth = month - 1;

    if (prevMonth < 0) {
      prevMonth = 11;
      setYear((prevState) => prevState - 1);
    }

    setMonth(prevMonth);
  };

  const nextMonthHandler = () => {
    let nextMonth = month + 1;

    if (nextMonth > 11) {
      nextMonth = 0;
      setYear((prevState) => prevState + 1);
    }

    setMonth(nextMonth);
  };

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();

  const previousMonthDays = generatePreviousMonthLastDays(
    firstDayOfMonth,
    lastDateOfLastMonth
  );
  const currentMonthDays = generateCurrentMonthDays(
    lastDateOfMonth,
    date,
    month,
    year
  );
  const nextMonthDays = generateNextMonthFirstDays(lastDayOfMonth);

  const calendarDays = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  return (
    <div className={styles.wrapper}>
      <header>
        <p className={styles.currentDate}>
          {months[month]} de {year}
        </p>
        <div className={styles.icons}>
          <span className="icon" onClick={prevMonthHandler}>
            <i className="fas fa-chevron-left"></i>
          </span>
          <span className="icon" onClick={nextMonthHandler}>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </header>

      <div className={styles.calendar}>
        <ul className={styles.weeks}>
          {daysOfWeek.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className={styles.days}>
          {calendarDays.map((item) => {
            const classes = [];

            if (!item.active) classes.push(styles.inactive);
            if (item.current) classes.push(styles.current);

            return (
              <li key={item.id} className={classes.join(" ")}>
                {item.day}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
