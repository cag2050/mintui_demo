<template lang="pug">
#DatetimePickerDemo
    mt-button(type='default' @click.native='openDatePicker') openDatePicker
    mt-button(type='default' @click.native='openTimePicker') openTimePicker
    mt-datetime-picker(type='date'
        ref='datePicker'
        v-model="datePickerValue"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleDateConfirm")
    mt-datetime-picker(type='time'
        ref='timePicker'
        v-model="timePickerValue"
        @confirm="handleTimeConfirm")
</template>

<script>
export default {
    name: '',
    data () {
        return {
            datePickerValue: '',
            timePickerValue: ''
        }
    },
    methods: {
        openDatePicker () {
            this.$refs.datePicker.open()
        },
        openTimePicker () {
            this.$refs.timePicker.open()
        },
        handleDateConfirm (value) {
            console.log(value)
        },
        handleTimeConfirm (value) {
            console.log(value)
        }
    }
}
</script>

<style lang="stylus" type="text/stylus">
#DatetimePickerDemo
    display block
</style>
