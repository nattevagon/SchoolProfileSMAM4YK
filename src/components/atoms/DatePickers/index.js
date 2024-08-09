import React from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import './datePickers.scss';
import "react-datepicker/dist/react-datepicker.css";
import id from "date-fns/locale/id";
registerLocale('id', id);

const DatePickers = ({ className, label, placeholder, selectedDate, icon, onChange, inline, highlightDates }) => {
    return (
        <div className="date-pickers">
            <div className="label">{label}</div>
            <div className="wrap-input">
                <DatePicker
                    className={"form-input" + (className ? " " + className : '')}
                    selected={selectedDate}
                    placeholderText={placeholder}
                    locale="id"
                    dateFormat="dd-MM-YYYY"
                    formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
                    dayClassName={date => date.getDay() === 0 ? 'sunday' : undefined}
                    weekDayClassName={date => date.getDay() === 0 ? 'sunday' : undefined}
                    onChange={date => onChange(date)}
                    popperPlacement="bottom-start" // Set the popper placement to bottom-start
                    inline={inline}
                    highlightDates={highlightDates}
                />
                {icon && (
                    <img
                        className="icon"
                        src={icon}
                        alt="Search"
                    />
                )}
            </div>
        </div>
    );
}

export default DatePickers