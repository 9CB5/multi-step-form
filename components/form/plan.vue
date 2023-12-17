<template>
    <section>
        <FormHeader
            :title="'Select your plan'"
            :description="'You have the option of monthly or yearly billing.'"
        />

        <form class="form">
            <!-- Plan options -->
            <div class="form__plan-section">
                <aside
                    v-for="(plan, index) in plans"
                    @click="changeForm(plan, 'plan')"
                    :key="`${index}-${plan}`"
                    :class="formData.plan.type === plan.type ? 'form__plan-card--active' : ''"
                    class="form__plan-card"
                >
                    <img
                        :src="plan.src"
                        :alt="`${plan.type}`"
                        class="form__plan-card__image"
                    >

                    <div class="form__plan-card__description">
                        <p class="form__plan-card__description__type">{{ plan.type }}</p>

                        <p class="form__plan-card__description__cost">{{ formData.frequency === "monthly" ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr` }}</p>

                        <p
                            v-if="formData.frequency === 'yearly'"
                            class="form__plan-card__description__free"
                        >
                            2 months free
                        </p>
                    </div>
                </aside>
            </div>

            <!-- Frequency switch -->
            <div
                @click="changeForm($event, 'frequency')"
                class="form__toggle-section"
            >
                <p
                    :class="formData.frequency === 'monthly' ? 'form__toggle-section__frequency--active' : ''"
                    class="form__toggle-section__frequency"
                >
                    Monthly
                </p>

                <input
                    :checked="formData.frequency === 'monthly' ? false : true"
                    aria-label="frequency toggle"
                    class="toggle"
                    type="checkbox"
                />

                <p
                    :class="formData.frequency === 'yearly' ? 'form__toggle-section__frequency--active' : ''"
                    class="form__toggle-section__frequency"
                >
                    Yearly
                </p>
            </div>
        </form>
    </section>
</template>

<script>
    import FormHeader from "../form/header.vue";

    import arcade from "./../../assets/images/icon-arcade.svg";
    import advanced from "./../../assets/images/icon-advanced.svg";
    import pro from "./../../assets/images/icon-pro.svg";

    export default {
        name: "FormPlan",
        components: {
            FormHeader
        },
        props: {
            formData: {
                default: () => ({}),
                type: Object
            },
            formErrors: {
                default: () => ([]),
                type: Array
            }
        },
        data() {
            return {
                plans: [
                    {
                        type: "arcade",
                        monthly: 9,
                        yearly: 90,
                        src: arcade
                    },
                    {
                        type: "advanced",
                        monthly: 12,
                        yearly: 120,
                        src: advanced
                    },
                    {
                        type: "pro",
                        monthly: 15,
                        yearly: 150,
                        src: pro
                    },
                ]
            }
        },
        methods: {
            changeForm(formObject, formKey) {
                if (formKey === "frequency") {
                    let frequency = "monthly";

                    if (formObject.target.checked) frequency = "yearly";

                    this.$emit("change-form", formKey, frequency);
                } else {
                    this.$emit("change-form", formKey, formObject);
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .form {
        &__plan-section {
            display: flex;
            gap: 1rem;
            padding-bottom: 2rem;

            @include respond(phone) {
                flex-direction: column;
            }
        }

        &__toggle-section {
            background: $alabaster;
            border-radius: 0.5rem;
            display: flex;
            gap: 1.8rem;
            justify-content: center;
            padding: 0.75rem;

            &__frequency {
                color: $cool-gray;
                font-weight: 500;

                &--active {
                    color: $marine-blue;
                }
            }
        }

        &__plan-card {
            border-radius: 0.5rem;
            border: 1px solid $light-gray;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            padding: 1.2rem 0.95rem;
            width: 9rem;

            @include respond(phone) {
                flex-direction: row;
                gap: 1rem;
                width: 100%;
            }

            &__description {
                display: flex;
                flex-direction: column;
                gap: 0.44rem;

                &__type {
                    text-transform: capitalize;
                    color: $marine-blue;
                    font-weight: 700;
                }

                &__cost {
                    color: $cool-gray;
                    font-size: 0.8rem;
                }

                &__free {
                    color: $marine-blue;
                    font-size: 0.8rem;
                }
            }


            &__image {
                width: 2.6rem;
            }

            &--active {
                background-color: $alabaster;
                border: 1px solid $purplish-blue;
            }
        }
    }

    .toggle {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: $marine-blue;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
        display: inline-block;
        height: 1.2rem;
        outline: none;
        overflow: hidden;
        position: relative;
        transition: background-color ease 0.3s;
        width: 2.5rem;

        &:before {
            content: "";
            display: block;
            position: absolute;
            z-index: 2;
            width: 0.8rem;
            height: 0.8rem;
            background: #fff;
            left: 2px;
            top: 3px;
            border-radius: 50%;
            color: #fff;
            box-shadow: 0 1px 2px rgba(0,0,0,0.2);
            transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
        }

        &:checked {
            &:before {
                left: 25px;
            }
        }
    }
</style>