<template>
    <div class="message">
        <div class="message-header">
            Push to the Stream...
        </div>

        <div class="message-body">
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="I have something to say..." v-model="form.body"></textarea>
                        <span class="help is-danger" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
                    </p>
                </div>

                <div class="field is-grouped">
                    <p class="control">
                        <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                body: ''
            })
        }
    },

    methods: {
        onSubmit() {
            this.form.post('/statuses')
                .then(status => this.$emit('completed', status))
                .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>
