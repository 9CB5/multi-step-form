<template>
    <div>
        <FormHeader
            :title="'Personal info'"
            :description="'Please provide your name, email address, and phone number.'"
        />

        <form class="form">
            <div
                v-for="info in infos"
                :key="info.name"
                class="form__row"
            >

                <div class="form__row__top">
                    <label :for="info.name" class="form__row__top__label">
                        {{ info.title }}
                    </label>

                    <span
                        v-if="formErrors.indexOf(info.name) > -1"
                        class="error-message"
                    >
                        This field is required
                    </span>
                </div>

                <input
                    @keyup="changeForm($event, info.name)"
                    :id="info.name"
                    :name="info.name"
                    :placeholder="info.placeholder"
                    :type="info.type"
                    :value="formData[info.name]"
                    :class="formErrors.indexOf(info.name) > -1 ? 'error-input' : ''"
                    class="form__row__input"
                />
            </div>
        </form>
    </div>
</template>

<script>
    import FormHeader from "../form/header.vue";

    export default {
        name: "FormInfo",
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
                infos: [
                    {
                        name: "name",
                        placeholder: "e.g. Stephen King",
                        title: "Name",
                        type: "text"
                    },
                    {
                        name: "email",
                        placeholder: "e.g. stephenking@lorem.com",
                        title: "Email address",
                        type: "email"
                    },
                    {
                        name: "phone",
                        placeholder: "e.g. +1 234 567 890",
                        title: "Phone number",
                        type: "text"
                    }
                ]
            }
        },
        methods: {
            changeForm(formObject, formKey) {
                this.$emit("change-form", formKey, formObject.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .form {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;

        &__row {
            display: flex;
            flex-direction: column;

            &__input {
                border-radius: 0.5rem;
                border: 1px solid $light-gray;
                color: $marine-blue;
                cursor: pointer;
                font-weight: 700;
                padding: 0.9rem;

                &::placeholder {
                    color: $cool-gray;
                    font-weight: 700;
                }

                &:focus {
                    outline: none;
                    border: 1px solid $purplish-blue;
                }
            }

            &__top {
                display: flex;
                justify-content: space-between;

                &__label {
                    color: $marine-blue;
                    font-size: 0.95rem;
                    font-weight: 500;
                    letter-spacing: -0.05rem;
                    padding-bottom: 0.6rem;
                    text-transform: capitalize;

                    @include respond(phone) {
                        font-size: 0.9rem
                    }
                }

            }
        }
    }

    .error-message {
        color: $strawberry-red;
        font-weight: 500;
        letter-spacing: -0.05rem;
    }

    .error-input {
        border: 1px solid $strawberry-red;
    }
</style>
