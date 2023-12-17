<template>
    <section>
        <FormHeader
            :title="'Pick add-ons'"
            :description="'Add-ons help enhance your gaming experience.'"
        />

        <form class="form">
            <aside
                v-for="(addon, index) in addons"
                @click="addRemove(addon)"
                :key="`${index}-${addon.title}`"
                :class="formData.addons.filter(data => data.title === addon.title).length > 0 ? 'form__addons-card--active' : ''"
                class="form__addons-card"
            >
                <div
                    class="form__addons-card__left"
                >
                    <input
                        :checked="selectedIndex(addon) !== -1"
                        class="form__addons-card__left__checkbox"
                        type="checkbox"
                    />

                    <div>
                        <p class="form__addons-card__left__title">{{addon.title}}</p>
                        <p class="form__addons-card__left__description">{{addon.description}}</p>
                    </div>
                </div>

                <p class="form__addons-card__right">
                    {{formData.frequency === "monthly" ? `+$${addon.monthly}/mo` : `+$${addon.yearly}/yr`}}
                </p>
            </aside>
        </form>
    </section>
</template>

<script>
    import FormHeader from "../form/header.vue";

    export default {
        name: "FormAddOns",
        components: {
            FormHeader
        },
        props: {
            formData: {
                default: () => ({}),
                type: Object
            }
        },
        mounted() {
            this.addonsSelected = [...this.formData.addons];  // Initialise previously selected addons
        },
        data() {
            return {
                addons: [
                    {
                        title: "Online service",
                        description: "Access to multiplayer games",
                        monthly: 1,
                        yearly: 10
                    },
                    {
                        title: "Larger storage",
                        description: "Extra 1TB of cloud save",
                        monthly: 2,
                        yearly: 20
                    },
                    {
                        title: "Customizable profile",
                        description: "Custom theme on your profile",
                        monthly: 2,
                        yearly: 20
                    },
                ],
                addonsSelected: []
            }
        },
        computed: {
        },
        methods: {
            addRemove(addon) {
                const index = this.selectedIndex(addon);
                index === -1 ? this.addonsSelected.push(addon) : this.addonsSelected.splice(index, 1);

                this.$emit("change-form", "addons", this.addonsSelected);
            },
            selectedIndex(addon) {
                let output = -1;

                if (this.addonsSelected.length && addon) {
                    this.addonsSelected.forEach((element, index) => {
                        if (addon.title === element.title) output = index;
                    });
                }

                return output;
            }

        }
    }
</script>


<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";

    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__addons-card {
            align-items: center;
            border-radius: 0.5rem;
            border: 1px solid $light-gray;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 1rem;

            &__left {
                display: flex;
                gap: 1rem;

                &__checkbox {
                    cursor: pointer !important;
                    accent-color: $purplish-blue;
                    width: 15px;
                }

                &__description {
                    color: $cool-gray;
                }

                &__title {
                    font-weight: 700;
                    color: $marine-blue;
                    padding-bottom: 0.2rem;
                }
            }

            &__right {
                color: $purplish-blue;
                font-weight: 500;
            }

            &--active {
                border: 1px solid $purplish-blue;
                background-color: $magnolia;
            }
        }
    }
</style>