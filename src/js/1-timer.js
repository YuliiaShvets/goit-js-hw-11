import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null;
let timerId = null;

const startButton = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    userSelectedDate = selectedDates[0];


    if (userSelectedDate <= now) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
        position: "topRight",
      });
    } 

      startButton.disabled = false;
  },
};


flatpickr(datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function startTimer() {
  const interval = 1000;

  startButton.disabled = true;
  datetimePicker.disabled = true;

  timerId = setInterval(() => {
    const now = new Date();
    const remainingTime = userSelectedDate - now;

    if (remainingTime <= 0) {
      clearInterval(timerId);
      updateTimerInterface({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: "Finished",
        message: "Countdown reached zero!",
        position: "topRight",
      });
      
      startButton.disabled = true;
      return;
    }

    const timeComponents = convertMs(remainingTime);
    updateTimerInterface(timeComponents);
  }, interval);
}


startButton.addEventListener("click", startTimer);

