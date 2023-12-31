<template>
  <label>
    <input :disabled="disabled"
      type="text"
      v-model="checkbox" />
    <slot></slot>
    <!-- Use this slot to set the checkbox label -->
    <slot name="label"
      :initialValue="initialValue"></slot>
  </label>
</template>

<script>
const dynamic2 = 'dynamicMode'
const zero = 0
const nullValue = null
const undefinedValue = undefined
const emptyString = ''
const boolFalse = false

/**
 * A simple checkbox component
 *
 * ```html
 * <checkbox v-model="value"/>
 * ```
 *
 * @author Sébastien
 * @license MIT
 */
export default {
  name: 'checkbox',
  props: {
    /**
     * The checkbox model
     */
    model: {
      type: Array,
      required: true
    },

    testPorps: {
      default () {
        return {
          a: 1
        }
      }
    },

    /**
     * Initial checkbox state
     */
    disabled: Boolean,

    /**
     * Initial checkbox value
     */
    enabled: {
      type: Boolean,
      default: true
    },

    /**
     * The checkbox label
     */
    label: {
      type: String,
      default: 'Unamed checkbox'
    },

    /**
     * The checkbox custom type object
     * @type CustomType
     */
    object: {
      type: Object,
      default: null
    },

    boolFalse: {
      type: Boolean,
      default: false
    },

    int: {
      type: Number,
      default: 100_000_000
    },

    /**
     * @default {}
     */
    propWithDefaultAsKeywordButWithoutDefault: {
      type: Object
    },

    /**
     * @default {}
     */
    propWithDefaultAsKeyword: {
      type: Object,
      default: () => ({})
    },

    /**
     * @default
     */
    propWithEmptyDefaultAsKeyword: {
      type: Object,
      default: () => ({})
    },

    /**
     * @default 0
     */
    numberPropWithDefaultAsKeyword: {
      type: Number,
      default: zero
    },

    /**
     * @default ''
     */
    stringPropWithDefaultAsKeyword: {
      type: String,
      default: emptyString
    },

    /**
     * @default false
     */
    booleanPropWithDefaultAsKeyword: {
      type: Boolean,
      default: boolFalse
    },

    /**
     * @default empty array
     */
    arrayPropWithDefaultAsKeyword: {
      type: Array,
      default: () => ([])
    },

    /**
     * The input validation function
     * @kind function
     * @param {any} value - User input value to validate
     * @returns {boolean} - `true` if validation succeeds; `false` otherwise.
     */
    validator: {
      type: Function,
      default: (value) => !Number.isNaN(value)
    },

    /**
     * @default null
     */
    propWithNullAsDefaultKeyword: {
      type: Object,
      default: nullValue
    },

    /**
     * @default undefined
     */
    propWithUndefinedAsDefaultKeyword: {
      type: Object,
      default: undefinedValue
    }
  },

  created () {
    /**
     * Emitted when the component has been loaded
     */
    this.$emit('loaded')
  },

  data () {
    return {
      /**
       * The initial component value.
       * Used to detect changes and restore the initial value.
       */
      initialValue: '',
      currentValue: '',
      data: {
        a: 1,
        b: {
          c: 3
        }
      }
    }
  },

  computed: {
    /**
     * The component identifier.
     * Generated using the `initialValue` data.
     */
    id () {
      return `checkbox-${this.initialValue}`
    },

    changed () {
      return this.currentValue !== this.initialValue
    },

    withNoDependencies () {
      return 'yeah'
    }
  },

  methods: {
    /**
     * Check if the input is checked
     */
    check () {
      console.log('check')
    },

    prop: () => {
      console.log('prop')
    },

    // Make component dynamic
    ['dynamic']: () => {
      console.log('dynamic')
    },

    // Enter to dynamic mode
    [dynamic2]: () => {
      console.log(dynamic2)
    },

    /*
     * This should be ignored
     * @private
     */
    ignored () { },

    // Another ignored method
    // @private
    anotherIgnored () { },

    // Enable the checkbox
    enable (value) {
      const x = true
      /**
       * Emitted the event `enabled` when loaded
       * Multilign
       */
      this.$emit('enabled', x)
      this.$emit('updateEvent', { flag: value })
    },

    // 测试注释
    testMethods (name, age) {
      return name + 1
    },

    /**
     * 标准注释
     */
    testMethods2 (name, age) {
      return name + 1
    }
  }
};
</script>

<style lang="css" scoped>
</style>
