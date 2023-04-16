<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["change"]);

const date = new Date();

const hour = ref(date.getHours() % 12 || 12);
const minute = ref(date.getMinutes());
const ampm = ref("AM");

const handleInput = (e, id) => {
  /** @type {string} */
  const value = e.target.value;
  e.target.classList.remove("default");
  if (/^[0-9]+$/.test(value) || value === "") {
    if (id === "hour") {
      hour.value = value > 12 ? value % 12 : value;
      e.target.value = value > 12 ? value % 12 : value;
      value > 12 && (ampm.value = "PM");
    } else if (id === "minute") {
      minute.value = value > 60 ? value % 60 : value;
      e.target.value = value > 60 ? value % 60 : value;
      value > 60 && (hour.value += 1);
    }
  } else {
    e.target.value = value.slice(0, -1);
  }
  emit("change", { time: `${ampm.value === "PM" ? hour.value + 12 : hour.value}:${minute.value}` });
};
</script>

<template>
  <div class="time">
    <span class="label">Time</span>
    <input
      class="hour"
      id="hour"
      type="text"
      inputmode="numeric"
      maxlength="2"
      @input="(e) => handleInput(e, 'hour')"
      @click="(e) => e.target.select()"
      :value="hour"
    />
    <span>:</span>
    <input
      class="minute"
      type="text"
      id="minute"
      maxlength="2"
      inputmode="numeric"
      @input="(e) => handleInput(e, 'minute')"
      @click="(e) => e.target.select()"
      :value="minute"
    />
    <select
      v-model="ampm"
      @input="
        (e) => {
          e.target.classList.remove('default');
          emit('change', { time: `${ampm === 'AM' ? hour + 12 : hour}:${minute}` });
        }
      "
    >
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  </div>
</template>

<style scoped>
.time {
  display: flex;
  font-size: 1.5rem;
  position: relative;
}

input,
input:focus-visible,
select {
  width: 1.8rem;
  border: none;
  outline: transparent;
}

.hour {
  text-align: right;
}

select {
  width: auto;
  padding: 0 0.5rem;
}

.label {
  position: absolute;
  top: 7px;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
}
</style>
